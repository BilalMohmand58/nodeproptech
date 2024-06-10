import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
