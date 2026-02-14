import { motion } from "framer-motion";

const OrnamentDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 py-6 ${className}`}>
    <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold" />
    <svg width="40" height="40" viewBox="0 0 40 40" className="text-gold">
      <path
        d="M20 2 L25 15 L38 20 L25 25 L20 38 L15 25 L2 20 L15 15 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
    <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold" />
  </div>
);

export default OrnamentDivider;
