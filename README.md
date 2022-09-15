# # Pizza House Reactive System

This is a simple ecommerce(pizza-house) application to illustrate the concept of reactive systems.

## Prerequisites
- Node.js 
- Yarn or NPM
- MongoDB
- Kafkar

## Configure app environment variables

- Create local environment file and update the env variables for the different services, configure the following parameters
    - PORT
    - DB_URL
    - KAFKA_CONNECTION_URL 
    - KAFKA_API_USERNAME 
    - KAFKA_API_KEY

### For admin service:
```shell
cd admin
cp .env.example .env
nano .env
```

### For user service:
```shell
cd user
cp .env.example .env
nano .env
```

## Installation
- Install dependencies in the different services(admin and user) with yarn

### For admin service:
```bash
cd admin
yarn install 
```

### For user service:
```bash
cd user
yarn install 
```

- Install dependencies in the different services(admin and user) with npm
### For admin service:
```bash
cd admin
npm install 
```

### For user service:
```bash
cd user
npm install 
```
## Running the app

- Start each service in development mode 

### For admin service:
```bash
cd admin
npm run dev
```
The admin service will be live on http://localhost:6060
### For user service:
```bash
cd user
npm run dev
```
The user service will be live on http://localhost:5050

- Start Application in production mode


### For admin service:
```bash
cd admin
npm run start
```

This will build and run the admin service on http://localhost:6060


### For user service:
```bash
cd user
npm run start
```

This will build and run the user service on http://localhost:5050
## Stay in touch

- Author - [Ogbonna Vitalis](agavitalisogbonna@gmail.com)

## License

Nest is [MIT licensed](LICENSE).
