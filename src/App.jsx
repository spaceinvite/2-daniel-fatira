import { Route, Routes } from 'react-router-dom';

import { Main } from './pages/Main';
import './assets/scss/main.scss';

function App() {
	return (
		<Routes>
			<Route path='/first-day' element={<Main weddingDay='first' />} />
			<Route path='/second-day' element={<Main weddingDay='second' />} />
		</Routes>
	);
}

export default App;
