import classes from "./Opinions.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const Opinions = () => {
  const starIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
      style={{ fill: "#f5a623", verticalAlign: "middle" }}
      aria-hidden="true"
    >
      <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
    </svg>
  );

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const opinionList = [
    {
      name: "Marcin Staś",
      date: "tydzień temu",
      text: "Mieliśmy bardzo nieoczywisty problem z instalacją w domu. Prąd znikał i się pojawiał, bez konkretnej przyczyny. Problem zdiagnozował, choć chwile mu to zajęło, no ale musiał się chwilę odnaleźć w tych kabelkach... Miły, schludny i rzetelny. Cenowo jak najbardziej fair. Bardzo dobre podejście do klienta.",
    },
    {
      name: "Joanna Danisz",
      date: "8 miesięcy temu",
      text: "Zdecydowanie polecam tego elektryka! Miałem problem z instalacją elektryczną w domu, a on szybko i skutecznie rozwiązał kwestię. Przede wszystkim bardzo profesjonalny – przyjechał punktualnie, przeprowadził dokładną diagnozę usterki, a potem naprawił ją w ekspresowym tempie. Dodatkowo, elektryk zachował porządek w trakcie pracy, a po wszystkim sprawdził, czy wszystko działa bez zarzutu. Zdecydowanie widać, że zna się na swojej pracy, a do tego jest bardzo komunikatywny i uprzedzający. To była naprawdę udana współpraca, na pewno skorzystam z jego usług ponownie, jeśli zajdzie taka potrzeba.",
    },
    {
      name: "Katarzyna Kopczewska",
      date: "2 tygodnie temu",
      text: "Rewelacja, pan elektryk był na miejscu w 15 minut od telefonu i w kolejne 15 minut usterka była usunięta! Dziękuję i polecam!",
    },
  ];

  return (
    <section className={classes.opinionsSection}>
      <h2 className={classes.subtitle}>Opinie naszych klientów z Opola</h2>
      <Slider {...settings} className={classes.carousel}>
        {opinionList.map((item, index) => (
          <div key={index} className={classes.slide}>
            <div className={classes.opinion}>
              <h3 className={classes.opinion__name}>{item.name}</h3>
              <div className={classes.stars}>
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
              </div>
              <p className={classes.opinion__text}>{item.text}</p>
              <p className={classes.opinion__date}>{item.date}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className={classes.more}>
        <Link
          href="https://www.google.com/maps/place/Speed+Light+Energy/@50.9431192,15.106137,8z/data=!3m1!4b1!4m6!3m5!1s0x209167f644624839:0x87d39c0598e68b29!8m2!3d50.9505468!4d16.4250194!16s%2Fg%2F11yb7yk452?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
          aria-label="Zobacz wszystkie opinie na Google Maps"
        >
          Zobacz wszystkie opinie{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={classes.button__icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 20L20 3m0 0v11.25M20 3H8.75"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Opinions;
