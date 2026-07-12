import { component$, Slot, useContextProvider, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Nav } from "~/components/layout/Nav";
import { Footer } from "~/components/layout/Footer";
import { LocaleContext, LOCALES, ui, tr, type Locale } from "~/content/i18n";

export default component$(() => {
  const locale = useSignal<Locale>("en");
  useContextProvider(LocaleContext, locale);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    try {
      const stored = localStorage.getItem("locale") as Locale | null;
      if (stored && LOCALES.includes(stored)) locale.value = stored;
      document.documentElement.lang = locale.value;
    } catch {
      /* ignore */
    }
  });

  return (
    <>
      <a
        href="#home"
        class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        {tr(ui.nav.skip, locale.value)}
      </a>
      <Nav />
      <main class="flex-1">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
