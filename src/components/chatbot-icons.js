// Corevolvix Logo Mark Icon Component
export function CorevolvixIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="corevolvix-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1F41AB" />
          <stop offset="100%" stopColor="#0280C6" />
        </linearGradient>
      </defs>
      {/* Simplified 'ce' mark inspired by logo */}
      {/* 'c' - deep blue side */}
      <path
        d="M25 50C25 36.2 36.2 25 50 25C56.9 25 63.1 27.8 67.7 32.3L55.4 44.6C52.8 42 49.2 40.3 45.2 40.3C38.7 40.3 33.4 45.6 33.4 52.1C33.4 58.6 38.7 63.9 45.2 63.9C49.2 63.9 52.8 62.2 55.4 59.6L67.7 71.9C63.1 76.4 56.9 79.2 50 79.2C36.2 79.2 25 68 25 54.2V50Z"
        fill="#1F41AB"
      />
      {/* 'e' - bright blue side */}
      <path
        d="M75 50C75 36.2 63.8 25 50 25C56.9 25 63.1 27.8 67.7 32.3C72.3 36.9 75 43.1 75 50C75 56.9 72.3 63.1 67.7 67.7L80 80C88.3 71.7 93.3 59.9 93.3 46.7H67.7V53.3H80C80 59.9 77.2 66.1 72.7 70.7L67.7 65.7C70.3 63.1 72 59.5 72 55.5H50V48.9H72C72 45 70.3 41.4 67.7 38.8C65.1 36.2 61.5 34.5 57.5 34.5C51 34.5 45.7 39.8 45.7 46.3H72V52.9H45.7C45.7 59.4 51 64.7 57.5 64.7C61.5 64.7 65.1 63 67.7 60.4L75 67.7V50Z"
        fill="#0280C6"
      />
    </svg>
  );
}

// Clean, Minimal Chat Bubble Icon
export function ChatBubbleIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.03 2 11C2 13.39 3.01 15.55 4.64 17.15L3 21L7.27 19.49C8.76 20.13 10.34 20.5 12 20.5C17.52 20.5 22 16.47 22 11.5C22 6.03 17.52 2 12 2Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </svg>
  );
}
