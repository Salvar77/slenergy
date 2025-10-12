import { FAQPageJsonLd } from "next-seo";

const FaqSeo = () => {
  const faq = [
    {
      questionName: "Ile trwa montaż instalacji fotowoltaicznej?",
      acceptedAnswerText:
        "Standardowy montaż domowej instalacji 6-10 kW trwa 1 dzień. Całość – od podpisania umowy do uruchomienia – średnio 5-7 dni roboczych.",
    },
    {
      questionName: "Czy mogę otrzymać dofinansowanie?",
      acceptedAnswerText:
        "Tak – aktualnie Mój Prąd 2025 do 30 000 zł, Czyste Powietrze do 45 % kosztów, ulga termomodernizacyjna w PIT.",
    },
    {
      questionName: "Czy oferujecie serwis po montażu?",
      acceptedAnswerText:
        "Tak, 24-miesięczna gwarancja na całość, monitoring on-line i serwis pogwarancyjny.",
    },
  ];

  return <FAQPageJsonLd mainEntity={faq} />;
};

export default FaqSeo;
