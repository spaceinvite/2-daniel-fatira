import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from './Main.module.scss';

import { DesktopView } from '../../components/DesktopView';
import { StartBlock } from '../../components/StartBlock';
import { InviteBlock } from '../../components/InviteBlock';
import { LocationBlock } from '../../components/LocationBlock';
import { PhotoBlock } from '../../components/PhotoBlock';
import { TimerBlock } from '../../components/TimerBlock';
import { EndBlock } from '../../components/EndBlock';

export const Main = ({ weddingDay }) => {
	useEffect(() => {
		Aos.init();
	}, []);

	const [firstDayData, setFirstDayData] = useState({
		date: '21 ИЮЛЯ 2024',
		timer: '2024-07-21T19:00:00',
		location: 'Аминка',
	});

	const [secondDayData, setSecondDayData] = useState({
		date: '22 ИЮЛЯ 2024',
		timer: '2024-07-22T19:00:00',
		location: 'Нур',
	});

	return (
		<div className={styles.main}>
			<DesktopView />
			<div className={styles.mainMobile}>
				<StartBlock />
				<InviteBlock
					date={weddingDay === 'first' ? firstDayData.date : secondDayData.date}
					weddingDay={weddingDay}
				/>
				<LocationBlock
					location={
						weddingDay === 'first'
							? firstDayData.location
							: secondDayData.location
					}
				/>
				<PhotoBlock />
				<TimerBlock
					timer={
						weddingDay === 'first' ? firstDayData.timer : secondDayData.timer
					}
				/>
				<EndBlock />
			</div>
		</div>
	);
};
