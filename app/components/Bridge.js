import { bridge } from "../content";
import OwnershipDot from "./OwnershipDot";

export default function Bridge() {
  return (
    <section className="bridge">
      <div className="wrap">
        <p>
          {bridge.line1}
          <br />
          {bridge.line2} <span className="hold">{bridge.hold}</span>
          <OwnershipDot />
        </p>
      </div>
    </section>
  );
}
