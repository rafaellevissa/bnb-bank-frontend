# REACTJS CHALLENGE

## TECHNOLOGIES

- React
- TypeScript
- Material UI (MUI)

## REQUIREMENTS

- NPM

build a simplified banking system

the system has 2 types of users

1. a customer

2. an admin


customer user stories: 

- a user can create a new account with username and password

- a user starts with 0 balance

- a user can deposit more money to his account by uploading a picture of a check and entering the amount of the check. if the check is approved by an admin, the money is added to the bank account.
- /**
- * The picture can be of anything, you don't need to parse it or validate it in any way
- */


- to buy something, the user enters the amount and description; a user can only buy something if she has enough money to cover the cost.

- a user can see a list of balance changes including time and description.


admin user stories:

- an admin account is already created with a hard coded username and password.

- an admin can see a list of pending check deposit pictures with amount and picture and click to approve or deny the deposit.


***
Simplifying Assumptions 

* an admin can’t be also a customer


## INSTALL

API link: https://github.com/rafaellevissa/bnb-bank-api

Once you have the project on your computer, you just need to install the dependencies with npm:

```
npm install
```

After everything is installed, change the credencials at `.env` and run it with the folowing command:

```
npm start
```

### Install with Docker Compose

Alternatively, you can run the project with Docker. Make sure the `.env` file is correctly set up, and then build a Docker image using the following command:

```
docker compose build
```

Once the image is built, start the container:

```
docker compose up -d
```

That's all you need 🎉!
