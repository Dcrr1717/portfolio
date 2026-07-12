import { component$, Slot } from "@builder.io/qwik";
import { Nav } from "~/components/layout/Nav";
import { Footer } from "~/components/layout/Footer";

export default component$(() => {
  return (
    <>
      <a
        href="#home"
        class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main class="flex-1">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
