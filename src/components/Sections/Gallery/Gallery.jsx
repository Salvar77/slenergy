
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import classes from './Gallery.module.scss';
import Image from 'next/image';
import woltaika2 from '@/assets/images/woltaika2.jpg';

const Gallery = () => {
    const images = [
		{
			src:  woltaika2 ,
			alt: 'Obrazek 1',
		},
		{
			src:  woltaika2 ,
			alt: 'Obrazek 2',
		},
		{
			src:  woltaika2 ,
			alt: 'Obrazek 3',
		},
		{
			src:  woltaika2 ,
			alt: 'Obrazek 3',
		},
		{
			src:  woltaika2 ,
			alt: 'Obrazek 3',
		},
	];
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
      };
	return (
		<div className={classes.galleryWrapper}>
			<h1 className={classes.title}>Nasze przykładowe realizacje</h1>
			<div className={classes.gallery}>
				<Slider {...settings}
					className={classes.carousel}
                  
                    >
					{images.map((image) => (
						<div key={image.src} className={classes.imgBox} >
							<Image src={image.src} alt={image.alt} className={classes.image} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Gallery;
