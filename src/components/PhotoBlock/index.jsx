import { Link } from 'react-router-dom';

import styles from './PhotoBlock.module.scss';
import image from '../../assets/img/album-photo.jpg';

export const PhotoBlock = () => {
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
					Фото со свадьбы
				</h5>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					После свадьбы мы опубликуем
					<br />
					фотографии, сделанные
					<br />в день торжества.
				</p>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Вы сможете посмотреть их,
					<br />
					нажав на кнопку ниже.
				</p>
				<Link
					to='https://t.me/+9qQF_5A6_Fw5ZDA6'
					target='_blanc'
					className={styles.blockWrapper__link}
					data-aos='flip-left'
					data-aos-duration='2000'
					data-aos-once='true'
				>
					СМОТРЕТЬ ФОТО
				</Link>
			</div>
		</div>
	);
};
