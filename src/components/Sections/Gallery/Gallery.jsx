import Slider from "react-slick";
import classes from "./Gallery.module.scss";
import Image from "next/image";
import foto from "@/assets/images/gallery/foto.jpg";
import foto1 from "@/assets/images/gallery/foto-1.jpg";
import foto2 from "@/assets/images/gallery/foto-2.jpg";
import foto4 from "@/assets/images/gallery/foto-4.jpg";
import foto5 from "@/assets/images/gallery/foto-5.jpg";
import foto6 from "@/assets/images/gallery/foto-6.jpg";
import foto8 from "@/assets/images/gallery/foto-8.jpg";
import foto9 from "@/assets/images/gallery/foto-9.jpg";
import foto10 from "@/assets/images/gallery/foto-10.jpg";
import foto11 from "@/assets/images/gallery/foto-11.jpg";
import foto12 from "@/assets/images/gallery/foto-12.jpg";
import foto13 from "@/assets/images/gallery/foto-13.jpg";
import leftArrow from "./arrow-left-circle.svg";
import rightArrow from "./arrow-right-circle.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button type="button" className={classes.nextP} onClick={onClick}>
      <Image src={leftArrow} alt="left arrow" width={40} height={40} />
    </button>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button type="button" className={classes.nextA} onClick={onClick}>
      <Image src={rightArrow} alt="right arrow" width={40} height={40} />
    </button>
  );
};

const Gallery = () => {
  const images = [
    {
      src: foto,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto1,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto2,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto4,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto5,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto6,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto8,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto9,
      alt: "Przykładowa realizacja montażu paneli fotowoltaicznych",
    },
    {
      src: foto10,
      alt: "Przykładowy montaż falownika",
    },
    {
      src: foto11,
      alt: "Przykładowy montaż falownika",
    },
    {
      src: foto12,
      alt: "Przykładowy montaż falownika",
    },
    {
      src: foto13,
      alt: "Przykładowy montaż pompy ciepła",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.galleryFullWidth}>
      <div className={classes.galleryWrapper}>
        <h1 className={classes.title}>Nasze przykładowe realizacje</h1>
        <div className={classes.gallery}>
          <Slider {...settings} className={classes.carousel}>
            {images.map((image) => (
              <div key={image.src} className={classes.imgBox}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className={classes.image}
                  priority
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
