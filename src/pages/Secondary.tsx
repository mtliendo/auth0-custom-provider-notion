import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

function Secondary() {
	const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0()

	console.log(user)
	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			loginWithRedirect()
		}
	}, [isAuthenticated, loginWithRedirect, isLoading])

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-base-200">
			<h1 className="text-4xl font-bold mb-4">Secondary Page</h1>
			<p>You can see the user's profile information below.</p>
			<p>You can also see the user's profile information in the console.</p>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	)
}

export default Secondary
