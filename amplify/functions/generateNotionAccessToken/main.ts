import { Handler } from 'aws-lambda'

export const handler: Handler = async (event) => {
	console.log('the event', event)
	const decodedBody = Buffer.from(event.body, 'base64').toString('utf-8')

	const params = new URLSearchParams(decodedBody)
	const clientId = params.get('client_id')
	const clientSecret = params.get('client_secret')
	const code = params.get('code')
	const redirectUri = params.get('redirect_uri')

	const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
	const response = await fetch('https://api.notion.com/v1/oauth/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${auth}`,
		},
		body: JSON.stringify({
			grant_type: 'authorization_code',
			code: code,
			redirect_uri: redirectUri,
		}),
	})

	const data = await response.json()
	console.log('the data', data)

	return {
		statusCode: 200,
		body: JSON.stringify(data),
	}
}
