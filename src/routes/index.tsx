import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/sections/Hero";
import { Projects } from "~/components/sections/Projects";
import { Skills } from "~/components/sections/Skills";
import { Research } from "~/components/sections/Research";
import { About } from "~/components/sections/About";
import { Contact } from "~/components/sections/Contact";
import { site } from "~/content/site";

export default component$(() => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Research />
      <About />
      <Contact />
    </>
  );
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.fullName,
  jobTitle: "Mathematician · Developer",
  url: site.url,
  email: site.email,
  knowsAbout: [
    "Mathematics",
    "Machine Learning",
    "Topological Data Analysis",
    "Persistent Homology",
    "Hodge Theory",
    "Web Development",
  ],
};

export const head: DocumentHead = {
  title: "Daniel Reinoso — Mathematician & Developer",
  meta: [
    {
      key: "description",
      name: "description",
      content:
        "Portfolio of Daniel Reinoso, mathematician. AI, topological data analysis, and production-grade software — with rigor.",
    },
    { key: "theme-color", name: "theme-color", content: "#09090b" },
    { key: "og:title", property: "og:title", content: "Daniel Reinoso — Mathematician & Developer" },
    {
      key: "og:description",
      property: "og:description",
      content:
        "From pure mathematics to shipped software: AI, topological data analysis, and production-grade web apps.",
    },
    { key: "og:type", property: "og:type", content: "website" },
    { key: "og:locale", property: "og:locale", content: "en_US" },
    { key: "og:site_name", property: "og:site_name", content: "Daniel Reinoso — Portfolio" },
    { key: "twitter:card", name: "twitter:card", content: "summary_large_image" },
  ],
  scripts: [
    {
      key: "ldjson",
      props: { type: "application/ld+json" },
      script: JSON.stringify(personJsonLd),
    },
  ],
};
