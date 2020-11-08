# Robot API (Finlex GmbH - Challenge 2 solution)

# Description

A REST API build using [node.js](https://nodejs.org/en/) to control a robot remotely. The endpoints that the API can understand which are listed below : <br>

## Allowed endpoints

**http://localhost:3000/robot/location** - To send a GET request to collect the current location of robot .<br>

**http://localhost:3000/robot/move** - To send a POST request with request body containing the command and stepsize to move the robot to a new location. The accepted commands are 'left', 'right', 'backward', and 'forward' , stepsize has to be a numeric value. The position consists of x and y and it is following the robot step size for the snap. As an example the position 2,4 means robot stand 2 step to right and 4 step forward from the base point of 0,0. The requests returns the updated location of robot on success, or error in case of any technical error.<br>

**http://localhost:3000/robot/turn/:commad** - To send a POST request to API to change the angle of robot. The accepted commands are 'left', 'right' and 'backward'. The command has to be passed along with endpoint params. Ther url returns the current postion data of the robot,if the request was successful. 'left' and 'right' will command the robot to turn 90 degree to left or right and 'back' will order to robot to turn 180 degree <br>

**http://localhost:3000/robot/logs** - To send a GET request to fetch logs of all commands made to API. The result will contain the log data, and location data of robot before and after the command was send to API. Returns an empty array of logs, if no log is found.<br>

## Requirements

Download the repository:
```
$ git clone https://github.com/ashok-kavungal/Angular-recipe-app.git
```

For development, you will need either [node.js](https://nodejs.org/en/)  or [Docker](https://docs.docker.com/get-docker/) installed in your environement. An Important step is to create an [.env](https://www.npmjs.com/package/dotenv) file  and save the environment variables used in the project. The .env file should be placed in the root folder of project. There should not be double quotes or space between the key-value pairs as shown below: <br><br>
.env
```
MONGO_CLUSTER=<name-of-mongodb-cluster-here>
MONGO_USER=<name-of-mongodb-user-here>
MONGO_PASSWORD=<mongodb-user-password-here>
MONGO_DEFAULT_DATABASE=<name-of-mongodb-database>
MONGO_TEST_DATABASE=<name-of-mongodb-database-for-testing->
PORT=<port-for-express-api-to-listen>
```

### Development using Node

Find the Node.js installation guide for your environment here : [official Node.js website](https://nodejs.org/) 

## Usage

Init project:

```
$ cd robot-api
$ npm install
```

## Launch

```
$ npm run dev
```

The API will be available on the localhost at the port number decalred in the .env file.

### Development Using Docker

Find the Docker installation guide for your environment here : [Docker Installation](https://docs.docker.com/get-docker/).

Init project:

```
$ cd robot-api
$ docker-compose build
```

## Launch

```
$ docker-compose up
```

The API will be available on http://<docker-machine-ip>:<port-number-in-env-file>/ .By default the ip address is 192.168.99.100 .But he below commmand can be used to find the IP address.

```
$ docker-machine ip

```

## Useful links

- [Node](https://nodejs.org/docs/latest-v13.x/api/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [nodemon](https://github.com/remy/nodemon)
- [Express](https://github.com/expressjs/express)
- [mongoose](https://github.com/Automattic/mongoose)
- [MongoDB](https://github.com/mongodb/mongo)
- [Jest](https://github.com/facebook/jest)
- [ESlint](https://github.com/eslint/eslint)
- [Travis CI](https://docs.travis-ci.com/)
- [Docker](https://docs.docker.com/get-started/overview/)
- [Postman](https://learning.postman.com/)
