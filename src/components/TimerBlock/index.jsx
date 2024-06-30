import React, { useState, useEffect } from 'react';

import styles from './TimerBlock.module.scss';
import image from '../../assets/img/timer-photo.jpg';

export const TimerBlock = ({ timer }) => {
	const targetDate = new Date(`${timer}`);

	const calculateTimeLeft = () => {
		const difference = +targetDate - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const formatNumber = number => {
		return number < 10 ? `0${number}` : number;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

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
					До свадьбы осталось
				</h5>
				<div className={styles.blockWrapper__timer}>
					<div
						className={styles.blockWrapper__timerItem}
						data-aos='zoom-in'
						data-aos-duration='1500'
						data-aos-once='true'
					>
						<p className={styles.blockWrapper__timerItem__value}>
							{formatNumber(timeLeft.days || 0)}
						</p>
						<p className={styles.blockWrapper__timerItem__name}>дней</p>
					</div>
					<div
						className={styles.blockWrapper__timerItem}
						data-aos='zoom-in'
						data-aos-duration='1500'
						data-aos-once='true'
					>
						<p className={styles.blockWrapper__timerItem__value}>
							{formatNumber(timeLeft.hours || 0)}
						</p>
						<p className={styles.blockWrapper__timerItem__name}>часов</p>
					</div>
					<div
						className={styles.blockWrapper__timerItem}
						data-aos='zoom-in'
						data-aos-duration='1500'
						data-aos-once='true'
					>
						<p className={styles.blockWrapper__timerItem__value}>
							{formatNumber(timeLeft.minutes || 0)}
						</p>
						<p className={styles.blockWrapper__timerItem__name}>минут</p>
					</div>
					<div
						className={styles.blockWrapper__timerItem}
						data-aos='zoom-in'
						data-aos-duration='1500'
						data-aos-once='true'
					>
						<p className={styles.blockWrapper__timerItem__value}>
							{formatNumber(timeLeft.seconds || 0)}
						</p>
						<p className={styles.blockWrapper__timerItem__name}>секунд</p>
					</div>
				</div>
			</div>
		</div>
	);
};
