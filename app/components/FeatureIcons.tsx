export function EcoMaterialsIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="50" fill="#8fb573" opacity="0.2"/>
      <g transform="translate(30, 35)">
        {/* Soil mound */}
        <ellipse cx="20" cy="45" rx="18" ry="6" fill="#5a4a3a"/>
        {/* Stem */}
        <path d="M20 45 Q18 35, 20 25" stroke="#5a8c3a" strokeWidth="3" fill="none"/>
        {/* Left leaf */}
        <path d="M20 35 Q10 32, 8 28 Q8 25, 12 26 Q18 28, 20 35" fill="#7cb342"/>
        {/* Right leaf */}
        <path d="M20 30 Q30 28, 33 25 Q34 22, 30 22 Q22 24, 20 30" fill="#8fb573"/>
        {/* Seed/sprout top */}
        <circle cx="20" cy="25" r="3" fill="#7cb342"/>
      </g>
    </svg>
  )
}

export function SolarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="50" fill="#FFB74D" opacity="0.2"/>
      <g transform="translate(50, 50)">
        {/* Sun center */}
        <circle cx="0" cy="0" r="15" fill="#FFA726"/>
        <circle cx="0" cy="0" r="12" fill="#FFB74D"/>
        {/* Sun rays */}
        <path d="M0 -25 L0 -20" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
        <path d="M0 25 L0 20" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
        <path d="M25 0 L20 0" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
        <path d="M-25 0 L-20 0" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
        <path d="M17.5 -17.5 L14 -14" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
        <path d="M-17.5 17.5 L-14 14" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
        <path d="M17.5 17.5 L14 14" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
        <path d="M-17.5 -17.5 L-14 -14" stroke="#FFA726" strokeWidth="3" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

export function WaterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="50" fill="#4FC3F7" opacity="0.2"/>
      <g transform="translate(50, 30)">
        {/* Water droplet */}
        <path d="M0 0 Q-15 20, -12 35 Q-10 45, 0 48 Q10 45, 12 35 Q15 20, 0 0 Z" fill="#29B6F6"/>
        <path d="M-5 20 Q-3 30, 0 33 Q3 30, 5 20" fill="#4FC3F7" opacity="0.6"/>
        {/* Ripples at bottom */}
        <ellipse cx="0" cy="55" rx="20" ry="3" fill="#29B6F6" opacity="0.3"/>
        <ellipse cx="0" cy="58" rx="15" ry="2" fill="#29B6F6" opacity="0.2"/>
      </g>
    </svg>
  )
}

export function TreeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="50" fill="#66BB6A" opacity="0.2"/>
      <g transform="translate(50, 70)">
        {/* Trunk */}
        <rect x="-4" y="-25" width="8" height="25" fill="#5a4a3a" rx="2"/>
        {/* Foliage layers */}
        <path d="M0 -25 L-18 -10 L-12 -10 L-20 0 L-10 0 L-18 10 L18 10 L10 0 L20 0 L12 -10 L18 -10 Z" fill="#7cb342"/>
        <path d="M0 -30 L-15 -18 L-10 -18 L-16 -8 L-8 -8 L-12 2 L12 2 L8 -8 L16 -8 L10 -18 L15 -18 Z" fill="#8fb573"/>
      </g>
    </svg>
  )
}

export function SmartTechIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="50" fill="#7E57C2" opacity="0.2"/>
      <g transform="translate(50, 50)">
        {/* Phone/device outline */}
        <rect x="-12" y="-20" width="24" height="40" rx="3" fill="#5E35B1" stroke="#7E57C2" strokeWidth="2"/>
        <rect x="-10" y="-17" width="20" height="30" fill="#7E57C2" opacity="0.3"/>
        {/* Screen elements - sensor icons */}
        <circle cx="-5" cy="-10" r="2" fill="#fff" opacity="0.8"/>
        <circle cx="5" cy="-10" r="2" fill="#fff" opacity="0.8"/>
        <circle cx="-5" cy="0" r="2" fill="#fff" opacity="0.8"/>
        <circle cx="5" cy="0" r="2" fill="#fff" opacity="0.8"/>
        {/* Connection lines */}
        <path d="M-5 -8 L5 -8 L5 2 L-5 2 Z" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.6"/>
        {/* Home button */}
        <circle cx="0" cy="16" r="2" fill="#fff" opacity="0.5"/>
      </g>
    </svg>
  )
}

export function EVChargingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="50" fill="#66BB6A" opacity="0.2"/>
      <g transform="translate(50, 50)">
        {/* Battery outline */}
        <rect x="-15" y="-18" width="30" height="36" rx="3" fill="#fff" stroke="#5a8c3a" strokeWidth="2.5"/>
        {/* Battery terminal */}
        <rect x="-6" y="-21" width="12" height="3" rx="1" fill="#5a8c3a"/>
        {/* Lightning bolt */}
        <path d="M2 -12 L-8 2 L-2 2 L-4 12 L8 -4 L2 -4 Z" fill="#7cb342"/>
        {/* Charge level indicators */}
        <rect x="-10" y="8" width="20" height="4" rx="1" fill="#7cb342" opacity="0.8"/>
        <rect x="-10" y="2" width="20" height="4" rx="1" fill="#7cb342" opacity="0.6"/>
        <rect x="-10" y="-4" width="20" height="4" rx="1" fill="#8fb573" opacity="0.4"/>
      </g>
    </svg>
  )
}
