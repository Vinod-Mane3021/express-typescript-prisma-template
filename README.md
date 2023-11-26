## Basic application structure for Node, Express, TypeScript & MongoDB + Authentication 🚀

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





