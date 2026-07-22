import { cv } from "@/data/content";

export const metadata = { title: "Kitty Wang - CV" };

export default function CVPage() {
  return (
    <div className="max-w-2xl text-[15px] leading-relaxed">
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">CV</h1>
      <p className="text-ink/60 mb-8">{cv.location}</p>

      <section className="mb-10">
        <h2 className="uppercase text-sm tracking-widest font-medium mb-3">Education</h2>
        {cv.education.map((e) => (
          <p key={e.school}>
            {e.school} {e.year} {e.place}
          </p>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="uppercase text-sm tracking-widest font-medium mb-3">Awards</h2>
        {cv.awards.map((a) => (
          <p key={a.title}>
            {a.title} {a.year}
          </p>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="uppercase text-sm tracking-widest font-medium mb-3">Exhibitions</h2>
        {cv.exhibitions.map((ex) => (
          <p key={ex.title}>
            {ex.title} {ex.date} - {ex.venue}
          </p>
        ))}
      </section>

      <section>
        <h2 className="uppercase text-sm tracking-widest font-medium mb-3">Work Experience</h2>
        <div className="flex flex-col gap-8">
          {cv.experience.map((job) => (
            <div key={job.org}>
              <p className="font-medium">{job.org}</p>
              <p className="text-ink/70">
                {job.role} · {job.date}
              </p>
              <ul className="list-disc list-inside mt-2 text-ink/80">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
