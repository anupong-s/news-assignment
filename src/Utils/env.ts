
/* Get constants from environment variables. 
 * Values are configured in .env (for development) and .env.production (for staging and production)
 */ 
const {
    REACT_APP_TITLE,
    REACT_APP_API_ENDPOINT
} = process.env;

export default {
    REACT_APP_TITLE,
    REACT_APP_API_ENDPOINT
};