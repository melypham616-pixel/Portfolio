"use client";

import { useState } from "react";

// Contact form posted to Formspree. Set NEXT_PUBLIC_FORMSPREE_ID (the part after /f/ in the form URL).
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  if (!FORM_ID) return null;

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="cform-row">
        <label>
          <span className="label">Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span className="label">Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span className="label">Message</span>
        <textarea name="message" rows={4} required />
      </label>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
      <div className="cform-foot">
        <button className="copy cform-send" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <span role="status" aria-live="polite" className="cform-note">
          {status === "sent" && "Thank you! I'll get back to you soon."}
          {status === "error" && "Something went wrong. Please email me directly."}
        </span>
      </div>
    </form>
  );
}
