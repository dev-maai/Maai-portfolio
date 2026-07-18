/* Honest content slot for the homepage-structure handover. Open items (owned by
   Kriti) are built as slots and marked pending — never filled with invented copy,
   per the structure doc. `item` maps to the doc's Open-items table number. */
export default function Pending({ item, label = "Copy pending", block = false, lines = 2 }) {
  const tag = `${label}${item ? ` · open #${item}` : ""} · Kriti`;
  if (!block) {
    return <span className="pending-tag" role="note">{tag}</span>;
  }
  return (
    <div className="pending-slot" role="note" aria-label={tag}>
      <span className="pending-tag">{tag}</span>
      <span className="pending-lines" aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <i key={i} style={{ width: `${92 - i * 13}%` }} />
        ))}
      </span>
    </div>
  );
}
