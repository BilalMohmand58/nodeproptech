// _document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        />
        {/* Styles */}
        <link type="text/css" rel="stylesheet" href="/css/plugins.css" />
        <link type="text/css" rel="stylesheet" href="/css/style.css?ver=1.1" />

        {/* Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function loadScript(a) {
                var b = document.getElementsByTagName("head")[0],
                  c = document.createElement("script");
                c.type = "text/javascript";
                c.src = "https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange = a;
                c.onload = a;
                b.appendChild(c);
              })(function() {
                if (window.beTracker) {
                  window.beTracker.t({ hash: "365f98d8a6b4f734c6cc864e70b3dc87" });
                }
              });
            `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
