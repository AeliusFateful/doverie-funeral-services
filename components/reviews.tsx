import { HiStar, LuQuote } from "@/lib/icons";
import { Reveal } from "@/components/reveal";
import { reviewPlatforms, reviews } from "@/lib/data/reviews";

export function Reviews() {
  return (
    <section id="reviews" className="section-surface-alt">
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <p className="section-label mb-5 flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent/60" />
              Отзывы
            </p>
            <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-balance text-foreground md:text-4xl">
              Нам доверяют семьи по всему городу
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Оценки и отзывы на 2ГИС и Яндекс Картах.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {reviewPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-border bg-background p-5 transition-colors hover:border-accent/40"
                >
                  <div>
                    <p className="text-base font-medium text-foreground">
                      {platform.name}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {platform.count}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiStar
                      className="h-4 w-4 text-accent"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-2xl tabular-nums text-foreground">
                      {platform.rating}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <Reveal
                className="max-sm:last:hidden"
                key={review.name}
                delay={i * 80}
              >
                <figure className="flex h-full flex-col rounded-lg border border-border bg-background p-6">
                  <LuQuote
                    className="h-6 w-6 text-accent/50"
                    aria-hidden="true"
                  />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                    {review.text}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-base font-medium text-foreground">
                        {review.name}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {review.source}
                      </p>
                    </div>
                    <div
                      className="flex gap-0.5"
                      aria-label={`Оценка ${review.rating} из 5`}
                    >
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <HiStar
                          key={idx}
                          className="h-3.5 w-3.5 text-accent"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
