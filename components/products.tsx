import dynamic from "next/dynamic";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/data/products";
import { siteConfig, telHref } from "@/lib/site";

const ProductsSlider = dynamic(
  () => import("@/components/products-slider").then((m) => m.ProductsSlider),
  {
    loading: () => (
      <div className="min-h-80 animate-pulse rounded-lg bg-muted/20" />
    ),
  },
);

export function Products() {
  return (
    <section id="products" className="section-surface-alt">
      <div className="section-py mx-auto max-w-site px-5 md:px-8">
        <SectionHeading
          label="Ритуальные принадлежности"
          title="Широкий ассортимент на любой бюджет"
          lead="В нашем салоне представлены товары от бюджетных до премиальных. Возможно изготовление изделий на заказ по вашим индивидуальным пожеланиям."
        />

        <div className="relative mt-10 px-1 sm:px-2">
          <ProductsSlider products={products} />
        </div>

        <div className="mt-10 max-sm:items-center max-sm:text-center flex flex-col items-start gap-4 rounded-lg border border-border bg-card/40 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl text-pretty text-base leading-relaxed">
            <p className="text-foreground font-light">
              Не нашли нужное?{" "}
              <span className="font-bold">Изготовим&nbsp;на&nbsp;заказ!</span>
            </p>
            <p className="mt-2 text-muted-foreground">
              Ваш эскиз и пожелания — от&nbsp;гравировки до&nbsp;эксклюзивного
              оформления.
            </p>
          </div>
          <a
            href={telHref(siteConfig.phone)}
            className="btn-accent shrink-0 px-6 py-3 text-base"
          >
            Закажите индивидуально
          </a>
        </div>
      </div>
    </section>
  );
}
