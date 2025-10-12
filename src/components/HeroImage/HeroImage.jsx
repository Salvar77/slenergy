import classes from "@/styles/HeroImage.module.scss";
import Image from "next/image";

const HeroImage = (props) => {
  const { mobileImage, desktopImage, image, alt, children } = props;

  if (mobileImage && desktopImage) {
    return (
      <div className={classes.heroImageBox}>
        <Image
          className={`${classes.heroImg} ${classes.mobileImage}`}
          src={mobileImage}
          alt={alt}
          priority
        />

        <Image
          className={`${classes.heroImg} ${classes.desktopImage}`}
          src={desktopImage}
          alt={alt}
          priority
        />
        {children}
      </div>
    );
  }

  return (
    <div className={classes.heroImageBox}>
      <Image className={classes.heroImg} src={image} alt={alt} priority />
      {children}
    </div>
  );
};

export default HeroImage;
