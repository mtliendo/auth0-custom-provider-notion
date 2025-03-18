import { defineFunction } from '@aws-amplify/backend'

export const generateNotionAccessToken = defineFunction({
	name: 'generate-notion-access-token',
	entry: './main.ts',
	runtime: 22,
})
