import Footer from "@/components/Footer/Footer";
import "/styles/globals.scss";
import Nav from "@/components/Nav/Nav";

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
