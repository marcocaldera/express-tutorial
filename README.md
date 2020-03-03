## Info iniziali

1. Per creare il file `package.json`: `npm init -y`
   
   Nota: `-y` serve per risponde automaticamente `yes` a tutte le domande del terminale

2. Installare express: `npm i express`

3. Per far partire il server: `node index` (inizialmente, dopo useremo uno script)

## Web Server

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

### Moment

Installiamo moment per stampare delle date:
`npm i moment`

## View Engine
Possiamo utilizzare express anche per renderizzare template/pagine-web dinamiche.

Per farlo installiamo:
`npm i express-handlebars`

Nota:

Tendenzialmente express si utilizza o come view-engine o come web-server. In questo caso ho messo tutto insieme per fare dei test.