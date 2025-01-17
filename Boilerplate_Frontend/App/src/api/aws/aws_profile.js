import { CognitoUserPool } from 'amazon-cognito-identity-js';
import 'amazon-cognito-js'


const REGION = "ap-southeast-1"
const USER_POOL_ID = 'ap-southeast-1_gqEFqOVd0'
const CLIENT_ID = '33vljgmjrcekmf4bnlgkpbcq2e'

AWS.config.update({
	region: REGION
})
const userData = {
    UserPoolId : USER_POOL_ID,
    ClientId : CLIENT_ID
}

export const BUCKET_NAME = 'hebcognito'
export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.'+REGION+'.amazonaws.com/'+USER_POOL_ID
export const IDENTITY_POOL_ID = 'ap-southeast-1:8b47cabb-93b8-48bd-9b5e-2fad203253c3'
