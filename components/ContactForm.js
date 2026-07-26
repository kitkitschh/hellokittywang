"use client";

import { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full bg-paper border border-ink/15 rounded px-3 py-2 text-base focus:outline-none focus:border-ink/40";

function Field({ label, required, error, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm uppercase tracking-wide text-ink/70">
        {label}
        {required && <span className="text-ink/40"> *</span>}
      </span>
      {children}
      {error && <span className="text-sm text-red-700/80">{error}</span>}
    </label>
  );
}

export default function ContactForm({ contactEmail }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const update = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  function validate() {
    const next = {};
    if (!values.firstName.trim()) next.firstName = "Required";
    if (!values.lastName.trim()) next.lastName = "Required";
    if (!values.email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email";
    if (!values.message.trim()) next.message = "Required";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    const subject = values.subject.trim() || `Message from ${values.firstName} ${values.lastName}`;
    const body = `${values.message}\n\n— ${values.firstName} ${values.lastName} (${values.email})`;
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setStatus("sent");
      setValues(initialState);
    }, 500);
  }

  if (status === "sent") {
    return (
      <div className="py-8 text-center">
        <p className="text-lg">Your email app should be open with the message ready to send.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm uppercase tracking-wide underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="First name" required error={errors.firstName}>
          <input className={inputClass} value={values.firstName} onChange={update("firstName")} />
        </Field>
        <Field label="Last name" required error={errors.lastName}>
          <input className={inputClass} value={values.lastName} onChange={update("lastName")} />
        </Field>
      </div>

      <Field label="Email" required error={errors.email}>
        <input type="email" className={inputClass} value={values.email} onChange={update("email")} />
      </Field>

      <Field label="Subject" error={errors.subject}>
        <input className={inputClass} value={values.subject} onChange={update("subject")} />
      </Field>

      <Field label="Message" required error={errors.message}>
        <textarea rows={5} className={inputClass} value={values.message} onChange={update("message")} />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-fit px-6 py-2 bg-ink text-paper uppercase tracking-widest text-sm rounded hover:opacity-85 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      <p className="text-sm text-ink/50">
        This opens your email app with the message pre-filled — the site doesn't send it directly.
      </p>
    </form>
  );
}
