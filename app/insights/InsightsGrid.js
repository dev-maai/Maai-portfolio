"use client";

import Link from "next/link";
import { useState } from "react";

/* Client-side filter for the insights landing page: two dropdowns (topic, industry)
   narrow the grid; a post matches when it carries both picked categories. */
export default function InsightsGrid({ posts, topics, industries }) {
  const [topic, setTopic] = useState("");
  const [industry, setIndustry] = useState("");

  const shown = posts.filter(
    (p) => (!topic || p.topics.includes(topic)) && (!industry || p.industries.includes(industry))
  );

  return (
    <>
      <div className="ins-filters" role="search" aria-label="Filter insights">
        <div className="ins-field">
          <label htmlFor="ins-topic">Topic</label>
          <select id="ins-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">All topics</option>
            {topics.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="ins-field">
          <label htmlFor="ins-industry">Industry</label>
          <select id="ins-industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="">All industries</option>
            {industries.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {shown.length > 0 ? (
        <div className="ins-grid">
          {shown.map((p) => (
            <Link className="ins-card" href={`/insights/${p.slug}`} key={p.slug}>
              <div className="ins-card-media">
                <img src={p.image} alt="" loading="lazy" />
              </div>
              <span className="ins-cats">{[...p.topics, ...p.industries].join(" · ")}</span>
              <h2>{p.title}</h2>
            </Link>
          ))}
        </div>
      ) : (
        <div className="ins-empty">
          <p className="ins-empty-h">No posts in this combination yet</p>
          <p>Try another topic or industry.</p>
        </div>
      )}
    </>
  );
}
