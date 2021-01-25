This is the project to create a React Social Login Buttons.
To do this, we need to use React. React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
In this project, we made the React Application with buttons, which can provide us authorization to Facebook and Google.

Lets start.


1. Installation.

Create React App is a great environment for learning React and the best way to get started building a new single page React app.
The tool sets up the environment to take advantage of the latest JavaScript capabilities, optimizes the application for production, and provides comfort during development. # You will need Node.js 8.10 or higher and npm 5.6 or higher on your computer. To create a project, run the command:

# $ npx create-react-app "name"
=====     =====     =====

The "name" subject is the name of your folder, the path for the React Application. In my case the name was "my-app".
So the command looks like:

# $ npx create-react-app "my-app"
=====     =====     =====

"npx" is a package launcher available in npm 5.2 and higher.
To check the React workability, we need to open our folder with the React application:

# $ cd my-app
=====     =====     =====

...and use the commands:

# $ npm start
=====     =====     =====

Create React App does not handle backend logic or databases, it only provides commands to build the frontend, so you can use it with any backend.





2. Installing the necessary library

When the ReactJS was installed, we need to download libarary for the buttons.

# $ npm install --save react-social-login
=====     =====     =====

Then we need to create a SocialLogin components.
To do this, we need open "my-app" folder and them "src" folder.
In "src" folder we create a "SocialButton.js" file with the follow code:




# ======================================== 
import React from 'react'
import SocialLogin from 'react-social-login'
 
class SocialButton extends React.Component {
 
    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}>
              { this.props.children }
            </button>
        );
    }
}
 
export default SocialLogin(SocialButton);
# ===================================

Then, we need to say "index.js" to use it like a normal component:




# ===================================
import React from 'react'
import ReactDOM from 'react-dom'
 
import SocialButton from './SocialButton'
 
const handleSocialLogin = (user) => {
  console.log(user)
}
 
const handleSocialLoginFailure = (err) => {
  console.error(err)
}
 
ReactDOM.render(
  <div>
    <SocialButton
      provider='facebook'
      appId='YOUR_APP_ID'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Facebook
    </SocialButton>
  </div>,
  document.getElementById('app')
)
# ===================================

For the Google button it is looks identity:





# ===================================
import React from 'react'
import ReactDOM from 'react-dom'
 
import SocialButton from './SocialButton'
 
const handleSocialLogin = (user) => {
  console.log(user)
}
 
const handleSocialLoginFailure = (err) => {
  console.error(err)
}
 
ReactDOM.render(
  <div>
    <SocialButton
      provider='google'
      appId='YOUR_APP_ID'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      Login with Google
    </SocialButton>
  </div>,
  document.getElementById('app2')
)
# ===================================

The full codes you can see in the project.





3. Create a Server

To create a server we need to create dependences via command:

# $ npm install express body-parser --save-dev
=====     =====     =====

# $ npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev
=====     =====     =====

It is neccessary to create a file called ".env" in the project directory (my app) to store our environment variables. We don't need to add anything to it just yet, but it will be useful later for including any credentials we need for the server, like API keys.

Next, in the project directory create a new directory called "server" and a "server/index.js" file. 
We'll create a small application that we can test with. Add the following code in server/index.js:




# ===================================
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
# ===================================


Open package.json and in the "scripts" object add a new script to run the server using node-env-run and nodemon:




# ===================================
"scripts": {
    // other scripts
    "server": "node-env-run server --exec nodemon | pino-colada"
  },
# ===================================

Test that the server is running correctly by running the script:

# $ npm run server
=====     =====     =====


References
=====
# https://ru.reactjs.org/docs/create-a-new-react-app.html
# https://smallbusiness.chron.com/give-permissions-ubuntu-33174.html
# https://www.npmjs.com/package/react-social-login
# https://www.twilio.com/blog/react-app-with-node-js-server-proxy
=====
