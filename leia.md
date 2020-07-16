## Iniciar novo projeto
```bash
yarn init -yarn
```

## Adicionar express
```bash
yarn add sucrase
```

## Adicionar sucrase 
para poder utilizar novas features do js, que nao estao ainda disponiveis no node, como import. Apenas em dev!
```bash
yarn add sucrase -D
```

## Para o sucrase surtir efeito no codigo, precisamos rodar ele ao rodar o app
```bash
yarn sucrase {file}.js
```

## Adicionar nodemon
Para monitorar codigo e reiniciar server sempre que houver mudancas. Apenas em dev!
```bash
yarn add nodemon -D
```

## Para rodar o sucrase com nodemon, adicionar primeiramente ao PACKAGE.JSON
```json
"scripts": {
  "dev": "nodemon src/server.js"
},
```

## Criar na raiz do projeto um arquivo nodemon.json e adicionar:
```json
{
  "execMap":{
    "js": "node -r sucrase/register"
  }
}
```

Pra todo arquivo que termine em .js, rodar o node e registrar '-r' o sucrase, 
ou seja executar um arquivo antes de executar a aplicacao

## Para rodar o debug com sucrase tambem precisamos alterar o PACKAGE.JSON
Adicionar em scripts:
```json
"dev:debug": "nodemon --inspect src/server.js"
```

## No debug do vscode adicionar uma nova configuracao
Pois ao inves de iniciar uma nova aplicacao para debug, vamos precisar atachar a um processo existente e sempre que o server for reiniciado pelo nodemon, tambem re-attach o debug
```json
{
  "type": "node",
  "request": "attach",
  "name": "Launch Program",
  "protocol": "inspector",
  "restart": true
}
```
