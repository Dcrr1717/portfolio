import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";
import "@fontsource-variable/archivo";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

// Corre antes del paint: fija `dark` (sin flash de tema) y `reveal-js`
// (para que el estado oculto de los reveals solo aplique si hay JS).
const themeScript = `(function(){var r=document.documentElement;r.classList.add('reveal-js');try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;r.classList.toggle('dark',d);}catch(e){r.classList.add('dark');}})();`;

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <script dangerouslySetInnerHTML={themeScript} />
        {!isDev && (
          <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />
        )}
        <RouterHead />
      </head>
      <body class="flex min-h-[100dvh] flex-col">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
