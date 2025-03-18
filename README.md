# Auth0 with Custom Notion Provider

A React application that demonstrates integration between Auth0 authentication and Notion as a custom identity provider.

## Project Overview

This project showcases how to:

- Implement Auth0 authentication in a React application
- Set up a custom Notion provider as an identity source
- Use AWS Amplify to handle token generation and backend functions
- Create a seamless authentication flow between your application, Auth0, and Notion

## Features

- Auth0 integration for secure authentication
- Custom Notion identity provider connection
- AWS Lambda function for Notion access token generation
- Responsive UI built with React and TailwindCSS/DaisyUI

## Tech Stack

- **Frontend**: React 19, TypeScript, TailwindCSS, DaisyUI
- **Authentication**: Auth0
- **Backend**: AWS Amplify, AWS Lambda
- **Build Tools**: Vite, TypeScript, ESLint

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- AWS account with appropriate permissions
- Auth0 account
- Notion integration set up

### Installation

1. Clone this repository

```bash
cd auth0-custom-provider-notion
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables
   Create a `.env` file in the root directory with the following variables:

```
# Auth0 Configuration
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_REDIRECT_URI=http://localhost:5173/secondary

# Notion Configuration
NOTION_CLIENT_ID=your-notion-client-id
NOTION_CLIENT_SECRET=your-notion-client-secret
NOTION_REDIRECT_URI=your-notion-redirect-uri
```

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `/src`: Frontend React application
  - `/components`: Reusable UI components
  - `/pages`: Application pages (Home, Secondary)
- `/amplify`: AWS Amplify backend configuration
  - `/functions`: Lambda functions including Notion token generator

## Authentication Flow

1. User navigates to the application
2. User clicks "Get Started" to begin authentication
3. Auth0 handles authentication with Notion as a custom identity provider
4. Upon successful authentication, user is redirected back to the application
5. User profile information is available in the application

## Lambda Function for Notion Token Generation

The project includes an AWS Lambda function to handle Notion access token generation:

```typescript
// Located in /amplify/functions/generateNotionAccessToken/
```

This function is exposed via an HTTP endpoint that your Auth0 action can call during the authentication process.

## Deployment

To deploy the application:

1. Deploy the AWS Amplify backend:

```bash
npx ampx sandbox
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Auth0 for authentication services
- Notion for API integration capabilities
- AWS Amplify for backend infrastructure
