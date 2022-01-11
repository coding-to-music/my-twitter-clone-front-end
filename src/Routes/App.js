import { 
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'

import PageWrapper from '../Pages/Wrapper/PageWrapper'
import Home from '../Pages/Home/Home'

import './App.scss'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<PageWrapper component={
							<Home />
						}/>
					}/>
					<Route path="*" element={
						<Navigate to="/"/>
					}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
