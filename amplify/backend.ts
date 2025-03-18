import { FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda'
import { generateNotionAccessToken } from './functions/generateNotionAccessToken/resource'
import { defineBackend } from '@aws-amplify/backend'

const backend = defineBackend({
	generateNotionAccessToken,
})

const fUrl = backend.generateNotionAccessToken.resources.lambda.addFunctionUrl({
	authType: FunctionUrlAuthType.NONE,
})

backend.addOutput({
	custom: {
		generateNotionAccessTokenUrl: fUrl.url,
	},
})
