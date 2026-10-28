// Corevolvix Robot Mascot Icon - Original Design
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
      </defs>
      
      {/* Antenna */}
      <line x1="50" y1="10" x2="50" y2="20" stroke="#0280C6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="8" r="3" fill="#0280C6" />
      
      {/* Robot Face - Rounded Square */}
      <rect 
        x="15" 
        y="25" 
        width="70" 
        height="70" 
        rx="16" 
        fill="url(#robot-gradient)" 
      />
      
      {/* Left Eye Container (White) */}
      <circle cx="35" cy="55" r="12" fill="white" className="robot-eye-left" />
      
      {/* Left Eye Pupil (Navy - roams and rotates) */}
      <g className="robot-pupil-left">
        <circle cx="35" cy="55" r="5" fill="#0F1E4A" />
        <circle cx="37" cy="53" r="2" fill="white" opacity="0.6" />
      </g>
      
      {/* Right Eye Container (White) */}
      <circle cx="65" cy="55" r="12" fill="white" className="robot-eye-right" />
      
      {/* Right Eye Pupil (Navy - roams and rotates) */}
      <g className="robot-pupil-right">
        <circle cx="65" cy="55" r="5" fill="#0F1E4A" />
        <circle cx="67" cy="53" r="2" fill="white" opacity="0.6" />
      </g>
      
      {/* Eyelids for blinking */}
      <rect x="23" y="43" width="24" height="0" rx="12" fill="url(#robot-gradient)" className="robot-eyelid-left" />
      <rect x="53" y="43" width="24" height="0" rx="12" fill="url(#robot-gradient)" className="robot-eyelid-right" />
      
      {/* Friendly Smile */}
      <path 
        d="M 35 75 Q 50 82 65 75" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none" 
      />
    </svg>
  );
}

// CSS for animations is in chatbot.css
