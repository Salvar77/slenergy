import classes from '@/styles/HeroImage.module.scss'
import Image from 'next/image'


const HeroImage = (props) => {
  return (
    <div className={classes.heroImageBox}>
        <Image className={classes.heroImg} src={props.image} alt={props.alt}    />
        {props.children}
    </div>
  )
}

export default HeroImage