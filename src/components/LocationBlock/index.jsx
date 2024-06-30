import styles from './LocationBlock.module.scss';
import image from '../../assets/img/location-photo.jpg';

export const LocationBlock = ({ location }) => {
	return (
		<div className={styles.block}>
			<img className={styles.blockImg} src={image} alt='image' />
			<div className={styles.blockWrapper}>
				<h5
					className={styles.blockWrapper__title}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Место проведения
				</h5>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Мы ждем вас по адресу:
				</p>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					с. Терекли-Мектеб
					<br />б<span className={styles.blockWrapper__textSlash}>/</span>з «
					{location}»
				</p>
				<p
					className={styles.blockWrapper__time}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					19:00
				</p>
			</div>
		</div>
	);
};
