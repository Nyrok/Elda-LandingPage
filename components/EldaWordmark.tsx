/**
 * ELDA wordmark — set in the logo face (Megrim), whose capital A is a
 * bar-less triangle (no crossbar). Plain text, real glyphs.
 */
export default function EldaWordmark({ className = "" }: { className?: string }) {
  return <span className={`font-logo ${className}`}>ELDA</span>;
}
