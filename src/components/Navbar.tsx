import { Link } from 'react-router'
import ThemeController from './ThemeController'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

	return (
		<div className="navbar bg-base-200 shadow-sm w-full">
			<div className="navbar-start">
				<Link to="/" className="btn btn-ghost text-xl">
					Auth0 with Notion
				</Link>
			</div>

			<div className="navbar-end">
				<div className="flex flex-row gap-2">
					{isAuthenticated ? (
						<button onClick={() => logout()} className="btn btn-primary">
							Logout
						</button>
					) : (
						<button
							onClick={() => loginWithRedirect()}
							className="btn btn-primary"
						>
							Login
						</button>
					)}
					<ThemeController />
				</div>
			</div>
		</div>
	)
}

export default Navbar
