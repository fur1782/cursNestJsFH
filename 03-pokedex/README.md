<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Executar en desenvolupamnet

1. Clonar el repositori
2. Executar
```bash
yarn install
```

3. Tenir Nest CLI instal·lat globalment
```bash
npm i -g @nestjs/cli
```

4. Aixecar la abase de dades
```bash
docker compose up -d
```

5. Clonar el fitxer __.env.template__

6. Omplir les variable d'entorn definides al __.env__

7. Executar l'aplicació amb dev:

```bash
yarn start:dev
```

8. Reconstruir la BBDD amb la llavor (seed)
```bash
http://localhost:3000/api/v2/seed
```


## Stack used
* MongoDB
* NestJS
