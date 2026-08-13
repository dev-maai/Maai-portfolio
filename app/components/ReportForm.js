"use client";

/* Gated download form. There is no backend yet, so submitting validates the
   fields, hands the PDF over immediately, and swaps the card to a success state.
   When the API route lands, POST the payload here before triggering the download. */
import { useState } from "react";

const FIELDS = [
  { label: "First name", name: "firstName", type: "text", placeholder: "Jane" },
  { label: "Last name", name: "lastName", type: "text", placeholder: "Smith" },
  { label: "Work email", name: "email", type: "email", placeholder: "jane@company.com" },
  { label: "Company", name: "company", type: "text", placeholder: "Company name" },
  {
    label: "Team",
    name: "team",
    type: "select",
    options: ["Marketing", "PR / Comms", "Demand Gen", "Leadership", "Other"],
  },
];

export const REPORT_FILE = "/reports/maai-b2b-media-report-2026-draft.pdf";

function download() {
  const a = document.createElement("a");
  a.href = REPORT_FILE;
  a.download = "MAAI-B2B-media-report-2026.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function ReportForm() {
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: POST new FormData(e.currentTarget) to /api/report before this line.
    download();
    setDone(true);
  };

  if (done) {
    return (
      <div className="irp-form-card irp-form-done">
        <span className="live">Download started</span>
        <h3>Your report is on its way.</h3>
        <p>
          If nothing happened, your browser may have blocked the download. Grab it directly below.
        </p>
        <a className="btn amber irp-submit" href={REPORT_FILE} download="MAAI-B2B-media-report-2026.pdf">
          Download the PDF
        </a>
        <p className="irp-note">Draft placeholder file. The final report replaces it on publish.</p>
      </div>
    );
  }

  return (
    <div className="irp-form-card">
      <div className="irp-form-head">
        <span className="live">Download now</span>
        <p>Fill in a few details and the report downloads straight away.</p>
      </div>

      <form className="irp-form" onSubmit={onSubmit}>
        <div className="irp-form-grid">
          {FIELDS.map((field) => (
            <label className="irp-field" key={field.name}>
              <span>{field.label}</span>
              {field.type === "select" ? (
                <select name={field.name} defaultValue="" required>
                  <option value="" disabled>
                    Select…
                  </option>
                  {field.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input type={field.type} name={field.name} placeholder={field.placeholder} required />
              )}
            </label>
          ))}
        </div>

        <label className="irp-check">
          <input type="checkbox" name="updates" />
          <span>Send me occasional insights and related reports.</span>
        </label>

        <button className="btn amber irp-submit" type="submit">Get the report</button>
        <p className="irp-note">No heavy follow-up. One report, one clear next step.</p>
      </form>
    </div>
  );
}
