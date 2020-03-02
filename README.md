### Info iniziali

1. Per creare il file `package.json`: `pm init -y`

1. Installare express: `npm i express`

1. Per far partire il server: `node index`

### Modifiche al server
Se si effettuano modifiche al server (e.g., aggiunta di una nuova chiamata) bisogna riavviarlo.
Se si vuole evitare questa cosa bisogna installare come dev-dependencies (in quanto non ci interessa in produzione):
`npm i -D nodemon`

#### Script
A questo punto nel `package.json` andiamo a creare due script:
```
"scripts": {
    "start": "node index",
    "dev": "nodemon index"
  }
```
ed ora per avviare il nostro server in dev ci basta fare:
`npm run dev`

Per vedere vedere il source-code di una pagina web:
`ALT + CMD + U`
