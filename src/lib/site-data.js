import {
  Bot,
  Boxes,
  Building2,
  DraftingCompass,
  Factory,
  Gauge,
  HeartPulse,
  Landmark,
  Network,
  PackageCheck,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  ShoppingBag,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "process",
    title: "Business Process Consulting",
    short:
      "Redesign how work moves across your organisation—removing friction, clarifying accountability and creating processes that scale.",
    full:
      "We help organisations understand how work is performed today, remove unnecessary complexity and design processes that are easier to manage, improve and scale. The focus is practical: clearer hand-offs, stronger controls, better use of data and more consistent execution.",
    icon: Workflow,
    capabilities: [
      "Process discovery, mapping and analysis",
      "Process design and optimisation",
      "Target operating-model design",
      "Business process management and governance",
      "Risk, controls and compliance alignment",
      "Continuous improvement and change adoption",
    ],
  },
  {
    slug: "technology",
    title: "Technology Consulting",
    short:
      "Make technology decisions with a clearer connection to business value, operations, cost and long-term adaptability.",
    full:
      "Technology investment should support a defined business outcome. We help leadership teams shape technology strategy, make informed platform decisions and modernise enterprise systems without losing sight of operations, cost, risk or adoption.",
    icon: Boxes,
    capabilities: [
      "Digital and technology strategy",
      "SAP, ERP and enterprise-platform advisory",
      "Cloud, application and legacy modernisation",
      "Technology selection and vendor evaluation",
      "Data, integration and API strategy",
      "Transformation programme and delivery governance",
    ],
  },
  {
    slug: "ai",
    title: "Artificial Intelligence & Intelligent Automation",
    short:
      "Apply AI where it solves a real business problem—with the right data, controls and operating model around it.",
    full:
      "AI creates value when it is applied to the right problem with the right data, controls and operating model. We help clients move from exploration to responsible, useful applications of AI and automation.",
    icon: Bot,
    capabilities: [
      "AI strategy, readiness and use-case prioritisation",
      "Generative AI and enterprise knowledge solutions",
      "Intelligent process automation and document processing",
      "Predictive analytics and machine-learning enablement",
      "Conversational AI and service assistants",
      "AI governance, adoption and value tracking",
    ],
  },
  {
    slug: "architecture",
    title: "Enterprise & Technology Architecture",
    short:
      "Create a coherent foundation that is easier to change, integrate, secure and scale as your organisation evolves.",
    full:
      "Architecture turns business direction into a coherent technology foundation. We help organisations reduce fragmentation, improve integration, manage technical debt and make architectural decisions that support resilience, security and change.",
    icon: Network,
    capabilities: [
      "Enterprise, solution and cloud architecture",
      "Application rationalisation and modernisation roadmaps",
      "Data, integration and event-driven architecture",
      "Security, identity and resilience architecture",
      "Architecture governance and standards",
      "Technical-debt assessment and remediation planning",
    ],
  },
  {
    slug: "gcc",
    title: "GCC Setup & Advisory",
    short:
      "Build or evolve a Global Capability Centre with a clear business case, operating model and transition plan.",
    full:
      "Corevolvix provides specialised support for organisations establishing, transitioning, improving or scaling a Global Capability Centre. We connect GCC strategy to the processes, technology, talent and governance required to make the centre valuable to the wider enterprise.",
    icon: Building2,
    capabilities: [
      "GCC feasibility, business case and location advisory",
      "Operating-model and governance design",
      "Talent, process-transition and knowledge-transfer planning",
      "Setup coordination and technology-foundation planning",
      "GCC health checks and maturity assessments",
      "Engineering, data, cloud and AI Centre of Excellence roadmaps",
    ],
  },
];

export const industries = [
  {
    title: "Manufacturing",
    description:
      "Improve planning, production, quality and supply-chain performance through connected processes, enterprise technology, data and intelligent automation.",
    icon: Factory,
  },
  {
    title: "Retail",
    description:
      "Build more responsive operations and customer experiences by connecting demand, inventory, fulfilment, commerce and service processes.",
    icon: ShoppingBag,
  },
  {
    title: "Healthcare",
    description:
      "Support more efficient, patient-focused operations by improving administrative workflows, technology foundations and information flows.",
    icon: HeartPulse,
  },
  {
    title: "Banking & Financial Services",
    description:
      "Modernise processes and technology while strengthening governance, risk management, service delivery and decision support.",
    icon: Landmark,
  },
  {
    title: "Public Sector",
    description:
      "Improve programme delivery and citizen-facing services through clearer processes, modern technology and responsible use of data and AI.",
    icon: Scale,
  },
  {
    title: "Energy & Utilities",
    description:
      "Strengthen asset, field-service and operational performance while preparing technology and data foundations for a changing landscape.",
    icon: Zap,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Create more visible, resilient and efficient operations across planning, fulfilment, transport, inventory and customer service.",
    icon: PackageCheck,
  },
  {
    title: "Technology",
    description:
      "Scale operations and product delivery with clearer processes, stronger platforms, modern architecture and intelligent automation.",
    icon: Sparkles,
  },
  {
    title: "Professional Services",
    description:
      "Improve utilisation, project delivery, resource planning and client experience through connected operating processes and technology.",
    icon: RefreshCw,
  },
];

export const approach = [
  {
    title: "Discover",
    text: "Understand the current state, business priorities, constraints and opportunities.",
    icon: Search,
  },
  {
    title: "Design",
    text: "Define the target operating model, technology direction, architecture and delivery roadmap.",
    icon: DraftingCompass,
  },
  {
    title: "Transform",
    text: "Deliver the agreed changes with clear governance, ownership and practical support.",
    icon: Rocket,
  },
  {
    title: "Optimise",
    text: "Measure progress, improve performance and strengthen the capability to adapt over time.",
    icon: Gauge,
  },
];
