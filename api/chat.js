// Vercel Serverless Function for Corevolvix AI Chatbot
// This runs on Vercel even with static export enabled

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

// Rate limiting: simple in-memory store (resets on cold starts)
const requestCounts = new Map();
const RATE_LIMIT = 20; // requests per minute per IP
const RATE_WINDOW = 60000; // 1 minute

const SYSTEM_PROMPT = `You are a helpful assistant for Corevolvix, a business and technology consulting firm. Answer questions about Corevolvix concisely and in a friendly manner.

ABOUT COREVOLVIX:
Corevolvix helps organizations simplify complex operations, modernize enterprise technology, apply AI responsibly, and build the foundations required for lasting growth. The tagline is "Smart Evolution for a Digital World."

SERVICES:
1. Business Process Consulting - Redesign how work moves across organizations, removing friction and creating processes that scale. Includes process discovery, optimization, operating model design, governance, and continuous improvement.

2. Technology Consulting - Make technology decisions with clear connection to business value. Includes digital strategy, SAP/ERP advisory, cloud modernization, technology selection, data/integration strategy, and program governance.

3. Artificial Intelligence & Intelligent Automation - Apply AI where it solves real business problems with proper data, controls, and operating models. Includes AI strategy, generative AI, intelligent automation, predictive analytics, conversational AI, and AI governance.

4. Enterprise & Technology Architecture - Create coherent foundations that are easier to change, integrate, and scale. Includes enterprise/solution/cloud architecture, application modernization, data architecture, security architecture, and technical debt management.

5. GCC Setup & Advisory - Build or evolve Global Capability Centers with clear business cases and transition plans. Includes feasibility studies, operating model design, talent planning, setup coordination, and maturity assessments.

INDUSTRIES SERVED:
Manufacturing, Retail, Healthcare, Banking & Financial Services, Public Sector, Energy & Utilities, Logistics & Supply Chain, Technology, and Professional Services.

APPROACH:
1. Discover - Understand current state, priorities, and opportunities
2. Design - Define target operating model and delivery roadmap
3. Transform - Deliver changes with clear governance
4. Optimize - Measure progress and strengthen adaptability

VALUES:
- Business-led: Focus on operational, customer, and commercial outcomes
- Connected by design: Consider process, technology, AI, architecture, and people together
- Practical in delivery: Turn insight into prioritized actions and implementation support

CONTACT:
Email: info@corevolvix.com

INSTRUCTIONS:
- Answer questions based ONLY on the information above
- Do NOT invent clients, case studies, pricing, team size, locations, or other facts
- Be concise but friendly
- When someone wants to contact, hire, get a quote, discuss a project, or talk to a person, direct them to info@corevolvix.com
- For questions about specific services or industries, explain what Corevolvix offers in that area
- If asked about topics unrelated to Corevolvix's business, politely decline and offer to answer questions about Corevolvix's services
- Keep responses under 150 words when possible`;

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = requestCounts.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = userRequests.filter(time => now - time < RATE_WINDOW);
  
  if (recentRequests.length >= RATE_LIMIT) {
    return false;
  }
  
  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);
  return true;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ 
      error: 'Too many requests. Please try again in a minute.',
      contact: 'For immediate assistance, email info@corevolvix.com'
    });
  }
  
  // Check if API key is configured
  if (!GEMINI_API_KEY) {
    return res.status(503).json({ 
      error: 'Chat service is temporarily unavailable.',
      contact: 'Please email us at info@corevolvix.com'
    });
  }
  
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request format' });
    }
    
    // Validate and limit message length
    const MAX_MESSAGE_LENGTH = 500;
    const MAX_HISTORY = 10;
    
    const validMessages = messages
      .slice(-MAX_HISTORY)
      .filter(msg => msg.role && msg.content)
      .map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content.substring(0, MAX_MESSAGE_LENGTH) }]
      }));
    
    if (validMessages.length === 0) {
      return res.status(400).json({ error: 'No valid messages provided' });
    }
    
    // Build the request payload for Gemini
    const payload = {
      contents: validMessages,
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
        topP: 0.9,
        topK: 40
      }
    };
    
    // Call Gemini API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API error:', response.status, errorData);
      
      return res.status(503).json({ 
        error: 'Unable to process your message right now.',
        contact: 'Please email us at info@corevolvix.com'
      });
    }
    
    const data = await response.json();
    
    // Extract the response text
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!reply) {
      return res.status(500).json({ 
        error: 'Received an invalid response.',
        contact: 'Please email us at info@corevolvix.com'
      });
    }
    
    return res.status(200).json({ 
      reply,
      contact: 'info@corevolvix.com'
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ 
      error: 'An error occurred processing your message.',
      contact: 'Please email us at info@corevolvix.com'
    });
  }
}
