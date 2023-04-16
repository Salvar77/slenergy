
import { motion } from 'framer-motion';

const FadeSection = (props) => {
	return (
	
			<motion.section
            className={props.className}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				{props.children}
			</motion.section>

	);
};

export default FadeSection;
