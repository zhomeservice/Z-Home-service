import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePageView } from "@/components/ServicePageView";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.slug);
    const title = s ? `${s.title} — Z Home Service` : "Service — Z Home Service";
    const description = s ? s.hero : "Premium cleaning service.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  loader: ({ params }) => {
    if (!SERVICES.find((s) => s.slug === params.slug)) throw notFound();
    return null;
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useParams();
  return <ServicePageView slug={slug} />;
}
