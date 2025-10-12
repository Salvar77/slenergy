import Footer from "@/components/Footer/Footer";
import "/styles/globals.scss";
import Nav from "@/components/Nav/Nav";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

// <DefaultSeo
//   titleTemplate="%s | Speed Light Energy – fotowoltaika i pompy ciepła Opole"
//   defaultTitle="Speed Light Energy – fotowoltaika i pompy ciepła Opole"
//   description="Fotowoltaika, pompy ciepła, klimatyzacja i instalacje elektryczne Opole. Dofinansowanie do 30 000 zł, montaż w 7 dni, serwis 24/7."
//   canonical="https://www.slenergy.pl/"
//   openGraph={{
//     type: "website",
//     locale: "pl_PL",
//     url: "https://www.slenergy.pl/",
//     siteName: "Speed Light Energy",
//     images: [
//       {
//         url: "https://www.slenergy.pl/SpeedLightLogo.png",
//         width: 1200,
//         height: 630,
//         alt: "Speed Light Energy – fotowoltaika i pompy ciepła Opole",
//       },
//     ],
//   }}
//   additionalMetaTags={[
//     { name: "viewport", content: "width=device-width, initial-scale=1" },
//     { name: "robots", content: "index, follow" },
//   ]}
// />
