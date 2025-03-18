import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Home from './pages/Home.tsx'
import Secondary from './pages/Secondary.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain="dev-2zis9k18.us.auth0.com"
				clientId="TWmjqiEioJHoN6VDLGNZicZG1CZVI9uX"
				authorizationParams={{
					redirect_uri: window.location.origin + '/secondary',
				}}
			>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/secondary" element={<Secondary />} />
				</Routes>
				<Footer />
			</Auth0Provider>
		</BrowserRouter>
	</StrictMode>
)
