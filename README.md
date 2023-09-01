This project is used to bootstrap a [Next.js](https://nextjs.org/) app with [AWS Amplify](https://docs.amplify.aws/) features ready to go.

### Current Integrations

* Cognito
* API Gateway (GraphQL)
* Matarial-UI
* Serverless

### Getting Started

```bash
yarn create next-app -e https://github.com/moseley/cognito-material-ui my-app
cd ./my-app
yarn
yarn dev
```


<details>
  <summary>Using npm?</summary>
  
  ```bash
  npx create-next-app -e https://github.com/moseley/cognito-material-ui my-app
  cd ./my-app
  npm i
  npm run dev
  ```
</details>

### Client Routes

Both statically generated and server-side rendered () routes are implemented client-side. 

- `/` : Next.js default page styled with Material-UI (Code in [pages/index.js](/pages/index.js))
- `/theme` : Statically generated page without data
- `/posts` : Static generated page with client side public API call
- `/profile` : An authenticated route
- `/post/create` : Client side private API call
- `/post/[id]` : A dynamic route that uses `getServerSideProps` and the id from the provided context to load a single post from AppSync and render it on the server. (Code in [pages/post/:[id].js](/pages/post/[id].js))

### API Routes

- `/api/hello` : Basic Next.js example
- `/api/posts` : Public API call
- `/api/check-user` : Public API call (default authorization)
- `/api/comments/:postId` : Private API call (custom authorization)

#### Install & Configure Amplify

1. [Sign up](https://portal.aws.amazon.com/billing/signup#/start) for an AWS account
2. Install the AWS Amplify cli:

```bash
yarn global add @aws-amplify/cli
#or
npm install -g @aws-amplify/cli
```

3. Configure the Amplify cli

```bash
amplify configure
```

#### Initialize Amplify

```
$ amplify init
? Enter a name for the project (my-app)
? Enter a name for the environment: dev
? Choose your default editor: <YOUR_EDITOR_OF_CHOICE>
? Choose the type of app that you're building (Use arrow keys)
❯ javascript
? What javascript framework are you using: react
? Source Directory Path:  (src)
? Distribution Directory Path: out
? Build Command:  (npm run-script build)
? Start Command: (npm run-script start)
? Do you want to use an AWS profile? Y
```

#### Add Cognito Auth w/ Social Provider

```
$ amplify add auth
? Do you want to use the default authentication and security configuration? (Use
arrow keys)
❯ Default configuration with Social Provider (Federation)
How do you want users to be able to sign in? (Use arrow keys)
❯ Username
Do you want to configure advanced settings? (Use arrow keys)
❯ No, I am done.
What domain name prefix you want us to create for you? my-app
Enter your redirect signin URI: http://localhost:3000/
? Do you want to add another redirect signin URI: Yes
Enter your redirect signin URI: https://your-domain-name.com
? Do you want to add another redirect signin URI: No
Enter your redirect signout URI: http://localhost:3000/
? Do you want to add another redirect signout URI: Yes
Enter your redirect signout URI: https://your-domain-name.com
? Do you want to add another redirect signout URI: No
Select the social providers you want to configure for your user pool: (Press <space> to select, <a> to toggle all, <i> to invert selection)
◉ Facebook
◉ Google
◉ Login With Amazon
You've opted to allow users to authenticate via Facebook.
If you haven't already, you'll need to go to https://developers.facebook.com and create an App ID.
? Enter your Facebook App ID for your OAuth flow: <FACEBOOK_APP_ID>
? Enter your Facebook App Secret for your OAuth flow: <FACEBOOK_APP_SECRET>
You've opted to allow users to authenticate via Google.
If you haven't already, you'll need to go to https://developers.google.com/identity and create an App ID.
Enter your Google Web Client ID for your OAuth flow:
Enter your Google Web Client ID for your OAuth flow: <GOOGLE_CLIENT_ID>
Enter your Google Web Client Secret for your OAuth flow: <GOOGLE_CLIENT_SECRET>
You've opted to allow users to authenticate via Amazon.
If you haven't already, you'll need to create an Amazon App ID.
? Enter your Amazon App ID for your OAuth flow: <AMAZON_CLIENT_ID>
? Enter your Amazon App Secret for your OAuth flow: <AMAZON_CLIENT_SECRET>
```

#### Add Cognito Auth w/out Social Provider

```
$ amplify add auth
? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings? No, I am done.
```

#### Add the API

Open `schema.graphql` and change what you need to.

```
$ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: myapi
? Choose the default authorization type for the API: API key
? Enter a description for the API key: public
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API? Yes, I want to make some
additional changes.
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API: Amazon Cogni
to User Pool
? Configure conflict detection? No
? Do you have an annotated GraphQL schema? Yes
? Provide your schema file path: ./schema.graphql
```

#### Deploy infrastructure

```
$ amplify push --y
? Are you sure you want to continue? Y
? Do you want to generate code for your newly created GraphQL API? Y
? Choose the code generation language target (Use arrow keys)
❯ javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions (src/graphql/**/*.js)
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions (Y/n) Y
? Enter maximum statement depth [increase from default if your schema is deeply nested] (2)
```

### Deploy Serverless Next Component

Deploying with the Serverless Next Component will enable dynamic server-side rendered routes, see the [AWS Amplify Next.js Guide](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js) for more details.

```
$ yarn deploy
$ npx serverless
```

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/moseley/cognito-material-ui)
