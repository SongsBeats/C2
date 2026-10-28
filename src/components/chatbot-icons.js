// Corevolvix Robot Mascot Icon - Refined Premium Design
export function RobotMascotIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`robot-mascot ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="robot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F41AB" />
          <stop offset="100%" stopColor="#0280C6" />
        </linearGradient>
        <linearGradient id="robot-shine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      
      {/* Antenna - Smaller */}
      <line x1="50" y1="12" x2="50" y2="20" stroke="#0280C6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="50" cy="10" r="2.5" fill="#0280C6" />
      
      {/* Robot Face - Larger Pill Shape */}
      <rect 
        x="12" 
        y="22" 
        width="76" 
        height="68" 
        rx="20" 
        fill="url(#robot-gradient)" 
      />
      
      {/* Subtle Highlight Sheen */}
      <ellipse 
        cx="50" 
        cy="35" 
        rx="30" 
        ry="12" 
        fill="url(#robot-shine)" 
        opacity="0.6"
      />
      
      {/* Left Eye Container (White) - Bigger */}
      <ellipse cx="35" cy="52" rx="13" ry="14" fill="white" className="robot-eye-left" />
      
      {/* Left Eye Pupil (Navy - roams and rotates) */}
      <g className="robot-pupil-left">
        <circle cx="35" cy="52" r="6" fill="#0F1E4A" />
        <circle cx="37.5" cy="50" r="2.5" fill="white" opacity="0.7" />
      </g>
      
      {/* Right Eye Container (White) - Bigger */}
      <ellipse cx="65" cy="52" rx="13" ry="14" fill="white" className="robot-eye-right" />
      
      {/* Right Eye Pupil (Navy - roams and rotates) */}
      <g className="robot-pupil-right">
        <circle cx="65" cy="52" r="6" fill="#0F1E4A" />
        <circle cx="67.5" cy="50" r="2.5" fill="white" opacity="0.7" />
      </g>
      
      {/* Eyelids for blinking */}
      <ellipse cx="35" cy="45" rx="13" ry="0" fill="url(#robot-gradient)" className="robot-eyelid-left" />
      <ellipse cx="65" cy="45" rx="13" ry="0" fill="url(#robot-gradient)" className="robot-eyelid-right" />
    </svg>
  );
}

// CSS for animations is in chatbot.css
