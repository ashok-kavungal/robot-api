# Robot API (Finlex GmbH - Challenge 2 solution)

# Description

A REST API build using [node.js](https://nodejs.org/en/) to control a robot remotely. The endpoints that the API can understand which are listed below : <br>

## Allowed endpoints

**/robot/location** - To send a GET request to collect the current location of robot .<br>

**/robot/move** - To send a POST request with request body containing the command and stepsize to move the robot to a new location. The accepted commands are 'left', 'right', 'backward', and 'forward' , stepsize has to be a numeric value. The position consists of x and y and it is following the robot step size for the snap. As an example the position 2,4 means robot stand 2 step to right and 4 step forward from the base point of 0,0. The requests returns the updated location of robot on success, or error in case of any technical error.<br>

**/robot/turn/:commad** - To send a POST request to API to change the angle of robot. The accepted commands are 'left', 'right' and 'backward'. The command has to be passed along with endpoint params. Ther url returns the current postion data of the robot,if the request was successful. 'left' and 'right' will command the robot to turn 90 degree to left or right and 'back' will order to robot to turn 180 degree <br>

**/robot/logs** - To send a GET request to fetch logs of all commands made to API. The result will contain the log data, and location data of robot before and after the command was send to API. Returns an empty array of logs, if no log is found.<br>

## Requirements

For development, you will need either Node.js installed in your environement or Docker.

### Development using Node

- #### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`, After running the following command.

    $ npm install npm -g

---

## Usage

Init project:

```
$ git clone https://github.com/ashok-kavungal/robot-api.git
$ cd robot-api
$ npm install
```

## Launch

Before launching the development server a .env file has to be created to store the environment variables used in the project. The .env file should be placed in the root folder of project.<br>

MONGO_CLUSTER=<name-of-mongodb-cluster-here>
MONGO_USER=<name-of-mongodb-user-here>
MONGO_PASSWORD=<mongodb-user-password-here>
MONGO_DEFAULT_DATABASE=<name-of-mongodb-database>
MONGO_TEST_DATABASE=<name-of-mongodb-database-for-testing->
PORT=<port-for-express-api-to-listen>

Then run the command :

```
$ npm run dev
```

The API will be available on http://localhost:<port-number-in-env-file>/ .

### Development Using Docker

Find the Docker installation guide for your environment here : [Docker Installation](https://docs.docker.com/get-docker/).

Init project:

```
$ git clone https://github.com/ashok-kavungal/robot-api.git
$ cd robot-api
$ docker-compose build
```

## Launch

Before launching the development container a .env file has to be created to store the environment variables used in the project. The .env file should be placed in the root folder of project.<br>

MONGO_CLUSTER=<name-of-mongodb-cluster-here>
MONGO_USER=<name-of-mongodb-user-here>
MONGO_PASSWORD=<mongodb-user-password-here>
MONGO_DEFAULT_DATABASE=<name-of-mongodb-database>
MONGO_TEST_DATABASE=<name-of-mongodb-database-for-testing->
PORT=<port-for-express-api-to-listen>

Then run the command :

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
