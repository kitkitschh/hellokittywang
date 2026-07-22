import { socials } from "@/data/content";

export const metadata = { title: "Kitty Wang - Contact" };

// TODO: replace with Kitty's real contact email.
const CONTACT_EMAIL = "hello@hellokittywang.com";

export default function ContactPage() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-8">Contact</h1>
      <p className="mb-6 text-[15px]">
        Get in touch at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <div className="flex gap-4 text-sm uppercase tracking-wide">
        {socials.map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="underline">
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
