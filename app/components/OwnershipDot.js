/* The recurring mark that echoes "Owned." — it trails headlines and every
   metric. Sized in em so it scales with whatever type it sits beside. */
export default function OwnershipDot({ className = "" }) {
  return <span className={`odot ${className}`} aria-hidden="true" />;
}
