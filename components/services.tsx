import Image from "next/image";
import { services } from "@/lib/data/services";
import { getServiceIcon } from "@/lib/icon-maps";

export function Services() {
  return (
    <section id="services" className="section-surface">
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="section-label mb-5 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent/60" />
            Что мы берём на себя
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Полный спектр ритуальных услуг
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden bg-background p-8 transition-colors duration-500 ease-in-out hover:bg-card/40"
              >
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-full"
                  aria-hidden="true"
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    loading="lazy"
                    className="object-cover opacity-25 transition-all duration-600 ease-in-out group-hover:opacity-35 group-hover:scale-[105%]"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-background via-background/60 to-transparent transition-colors duration-300 group-hover:from-card/40 group-hover:via-card/40" />
                  <div className="absolute inset-0 bg-linear-to-t from-background/75 via-transparent to-transparent transition-colors duration-300 group-hover:from-card/40" />
                </div>

                <div className="relative z-10">
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-6 font-serif text-xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
