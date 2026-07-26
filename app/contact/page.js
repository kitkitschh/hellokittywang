import { socials } from "@/data/content";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Kitty Wang - Contact" };

const CONTACT_EMAIL = "wang.kitty28@gmail.com";

const socialIcon = (label) => {
  switch (label) {
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v11.52H3V8.98zm7 0h3.83v1.58h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v6.9h-4v-6.12c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.24v6.22h-4V8.98z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Vimeo":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M22 7.35c-.1 2.1-1.56 4.98-4.4 8.62-2.93 3.8-5.4 5.7-7.44 5.7-1.26 0-2.33-1.17-3.2-3.5L5.3 12.2C4.6 9.87 3.85 8.7 3.05 8.7c-.17 0-.77.36-1.8 1.08L.4 8.5c1.13-1 2.25-1.98 3.36-2.98C5.2 4.1 6.44 3.32 7.24 3.25c1.9-.18 3.07 1.12 3.5 3.9.47 3 .8 4.87 1 5.6.55 2.5 1.15 3.75 1.82 3.75.52 0 1.3-.82 2.34-2.47 1.02-1.65 1.57-2.9 1.64-3.76.14-1.42-.42-2.13-1.64-2.13-.58 0-1.18.13-1.8.4C15.3 4.68 17.35 2.5 20.6 2.6 22.97 2.67 24.1 4.25 22 7.35z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ContactPage() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <h1 className="text-2xl uppercase tracking-widest font-serif mb-4">Contact</h1>
          <p className="text-base text-ink/70 leading-relaxed mb-8 max-w-md">
            Have a project in mind, or just want to say hi? Reach out below — I'd
            love to hear from you.
          </p>

          <div className="flex flex-col gap-3 text-base">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 w-fit hover:underline"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {CONTACT_EMAIL}
            </a>

            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 w-fit hover:underline"
              >
                {socialIcon(s.label)}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-ink/5 rounded-lg p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
