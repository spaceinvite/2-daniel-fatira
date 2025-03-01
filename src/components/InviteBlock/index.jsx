import styles from './InviteBlock.module.scss';

export const InviteBlock = ({ date, weddingDay }) => {
	return (
		<div className={styles.block}>
			<div className={styles.blockItem}>
				<h5
					className={styles.blockItem__title}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Дорогие гости!
				</h5>
				<p
					className={styles.blockItem__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					В нашей жизни скоро состоится
					<br />
					важное событие - наша свадьба!
					<br />
					Мы с удовольствием хотим
					<br />
					разделить этот день с вами!
				</p>
			</div>
			<div className={styles.blockItem}>
				<h5
					className={styles.blockItem__title}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Дата
				</h5>
				<p
					className={styles.blockItem__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					{date}
				</p>
				<div
					className={styles.blockItem__calendar}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					{[
						1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
						20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
					].map((item, index) => (
						<div className={styles.blockItem__calendarItem} key={index}>
							{item}
						</div>
					))}
					<div
						className={styles.blockItem__calendarHeart}
						style={
							weddingDay === 'first'
								? { top: '79px', right: '-5px' }
								: { top: '121px', left: '-6px' }
						}
						data-aos='zoom-in'
						data-aos-duration='3000'
						data-aos-once='true'
					>
						<svg
							width='43'
							height='39'
							viewBox='0 0 43 39'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_7_235)'>
								<path
									d='M31.2727 0C27.1682 0 23.5992 1.91962 21.5 5.13656C19.4008 1.91962 15.8318 0 11.7273 0C8.61812 0.00375535 5.63734 1.28635 3.43884 3.56641C1.24033 5.84648 0.00362101 8.93783 0 12.1623C0 18.0813 3.55727 24.2415 10.5741 30.4687C13.7894 33.3101 17.2626 35.8219 20.9449 37.9688C21.1156 38.0639 21.3063 38.1136 21.5 38.1136C21.6937 38.1136 21.8844 38.0639 22.0551 37.9688C25.7374 35.8219 29.2106 33.3101 32.4259 30.4687C39.4427 24.2415 43 18.0813 43 12.1623C42.9964 8.93783 41.7597 5.84648 39.5612 3.56641C37.3627 1.28635 34.3819 0.00375535 31.2727 0ZM21.5 35.4958C18.2926 33.5761 2.34545 23.4571 2.34545 12.1623C2.34804 9.58263 3.33731 7.10936 5.09618 5.28524C6.85505 3.46112 9.23985 2.43515 11.7273 2.43247C15.6911 2.43247 19.0197 4.62777 20.4152 8.16295C20.5036 8.38602 20.6539 8.57681 20.847 8.71109C21.0402 8.84536 21.2675 8.91705 21.5 8.91705C21.7325 8.91705 21.9598 8.84536 22.153 8.71109C22.3461 8.57681 22.4964 8.38602 22.5848 8.16295C23.9803 4.62777 27.3089 2.43247 31.2727 2.43247C33.7601 2.43515 36.1449 3.46112 37.9038 5.28524C39.6627 7.10936 40.652 9.58263 40.6545 12.1623C40.6545 23.4571 24.7074 33.5761 21.5 35.4958Z'
									fill='#42473E'
								/>
							</g>
							<defs>
								<clipPath id='clip0_7_235'>
									<rect width='43' height='38.1136' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
