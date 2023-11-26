## Node, Express, TypeScript & MongoDB + Authentication application Boilerplate 🚀

## Environment Setup

#### Install typescript 
```
npm init
npm i -D typescript
npm i -D ts-node
```
#### For running project use nodemon
```
npm i -D nodemon
```
#### Configure typescript
create a new file ```tsconfig.json``` in root directory
``` javascript
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution": "Node",
        "baseUrl": "src",
        "outDir": "dist",
        "sourceMap": true,
        "noImplicitAny": true,
    },
    "include": ["src/**/*"],
}
```
#### Setup nodemon
create a new file ```nodemon.json``` in root directory
```javascript
{
    "watch": ["src"],
    "ext": ".ts, .js",
    "exec": "ts-node ./src/index.ts"
}
```

### Setup Express server
```
npm i express body-parser cookie-parser compression cors
```
```
npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors
```







"dependencies": {
    "body-parser": "^1.20.2",
    "compression": "^1.7.4",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "mongoose": "^8.0.1"
  },
  "devDependencies": {
    "@types/body-parser": "^1.19.5",
    "@types/compression": "^1.7.5",
    "@types/cookie-parser": "^1.4.6",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "nodemon": "^3.0.1",
    "prettier": "^3.1.0",
    "ts-node": "^10.9.1",
    "typescript": "^5.3.2"
  }