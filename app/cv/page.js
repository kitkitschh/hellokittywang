import { cv } from "@/data/content";

export const metadata = { title: "Kitty Wang - CV" };

export default function CVPage() {
  return (
    <div className="max-w-4xl font-plain text-[17px] leading-relaxed">
      <h1 className="text-2xl uppercase tracking-widest font-serif mb-2">CV</h1>
      <p className="text-ink/60 mb-10">{cv.location}</p>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:flex-[2] flex flex-col gap-10">
          <section>
            <h2 className="uppercase text-[23px] tracking-widest font-serif mb-3">Education</h2>
            <div className="flex flex-col gap-2">
              {cv.education.map((e) => (
                <div key={e.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span>{e.school}</span>
                  <span className="text-sm text-ink/60 whitespace-nowrap">
                    {e.year} · {e.place}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="uppercase text-[23px] tracking-widest font-serif mb-3">Awards</h2>
            <div className="flex flex-col gap-2">
              {cv.awards.map((a) => (
                <div key={a.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span>{a.title}</span>
                  <span className="text-sm text-ink/60 whitespace-nowrap">{a.year}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="uppercase text-[23px] tracking-widest font-serif mb-3">Exhibitions</h2>
            <div className="flex flex-col gap-2">
              {cv.exhibitions.map((ex) => (
                <div key={ex.title} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <span>
                    {ex.title} <span className="text-ink/60">— {ex.venue}</span>
                  </span>
                  <span className="text-sm text-ink/60 whitespace-nowrap">{ex.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="uppercase text-[23px] tracking-widest font-serif mb-3">Work Experience</h2>
            <div className="flex flex-col gap-10">
              {cv.experience.map((job) => (
                <div key={job.org}>
                  <p className="font-medium">{job.org}</p>
                  <p className="text-sm text-ink/60 mb-3">
                    {job.role} · {job.date}
                  </p>
                  <ul className="list-disc list-outside pl-5 flex flex-col gap-2 text-ink/80">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:flex-1">
          <h2 className="uppercase text-[23px] tracking-widest font-serif mb-3">Skills</h2>
          <div className="flex flex-col gap-4">
            {cv.skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs uppercase tracking-wide text-ink/60 mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink/20 px-2 py-0.5 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
