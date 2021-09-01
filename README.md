# CyberSecWebsiteFrontEnd-Pages
[![Netlify Status](https://api.netlify.com/api/v1/badges/2ffbd4fd-2ad7-4c27-b638-155a29b36d35/deploy-status)](https://app.netlify.com/sites/iitbhucybersec/deploys)

## Frontend for IIT(BHU)CyberSecWebsite
### How to run in Development mode 

1. Setup the api of frontend from - [API for Frontend](https://github.com/IIT-BHU-CyberSec/IIT-BHU-CyberSecWeb-FrontEnd-API#readme)
2. Run `npm i` in root directory
3. Setup `DEV_API_URL` in `next.config.js` to the URL where the API is running by default it is `http://localhost:5000`
4. Run `npm run dev`

### Production
1. The production website is running at https://iitbhucybersec.netlify.app/
2. Any commits to master branch of this remote repo will reflect on this site in a couple of minutes
3. The `PRODUCTION_API_URL` by default is set to https://iitbhucybersecweb-frontendapi.herokuapp.com where the frontend API is running.
