# NestJS – Projectes del Curs

Aquest repositori conté **tots els projectes que faig mentre segueixo el curs _Nest: Desarrollo backend escalable con Node_ de Udemy** (NestJS).  
En lloc de tenir un repositori Git dins de cada projecte, tots estan dins d’aquest únic repo per facilitar el control de versions i la publicació a GitHub. :contentReference[oaicite:1]{index=1}

---

## 📁 Estructura

```
curs-nestjs/
├── prj1-nom-del-projecte
├── prj2-nom-del-projecte
├── prj3-nom-del-projecte
├── ...
└── README.md
```

Cada carpeta (`prj1`, `prj2`, etc.) és un projecte individual fet amb **NestJS**, però cap d’elles té un repositori Git propi.


## 🚀 Com crear un projecte NestJS sense Git

Per evitar que NestCLI et generi un `.git/` dins de cada projecte, cal fer servir l’opció `--skip-git` o `--no-git`.

### Com fer-ho

1. Situa’t a la carpeta principal on vols guardar tots els projectes:

```bash
cd ~/code/curs-nestjs
````

2. Crea un nou projecte amb NestCLI **sense Git intern**:

```bash
nest new prj1 --skip-git
```

✨ També funciona:

```bash
nest new prj1 --no-git
```

3. Després de crear-lo, entra dins del projecte i comprova que **no apareix `.git/`**:

```bash
ls -la prj1
```

Si tot va bé, no veuràs la carpeta `.git`.

---

## 📌 Afegir-ho tot al repositori general

Un cop tinguis tots els projectes dins de la carpeta principal:

1. Inicialitza Git (si encara no ho has fet):

```bash
git init
```

2. Afegeix tots els projectes i fitxers:

```bash
git add .
```

3. Fes el teu primer commit:

```bash
git commit -m "Inicial: afegits projectes del curs NestJS"
```

4. Sube’l a GitHub:

```bash
git branch -M main
git remote add origin https://github.com/usuari/curs-nestjs.git
git push -u origin main
```

---

## 💡 Bones pràctiques

* **Nom de carpetes clars:** posa noms descriptius segons el tema del projecte (p. ex. `prj1-auth`, `prj2-db`, etc.).
* **README per projecte:** dins de cada `prjx/`, posa un README amb explicacions del que has fet en aquell projecte.
* **Commits freqüents:** fes commit sovint per cada lliçó o etapa del curs.

---

## 🧠 Sobre el curs

Aquest curs està centrat en el framework **NestJS**, que és un framework backend per Node.js basat en **TypeScript** i arquitectura modular. Aprendràs a crear APIs REST, manejar bases de dades SQL/NoSQL, WebSockets, autenticació, validació, i molt més. ([Udemy][1])

---

## 📌 Recursos útils

* 🚀 NestJS oficial: [https://nestjs.com](https://nestjs.com)
* 📘 Documentació NestJS: [https://docs.nestjs.com](https://docs.nestjs.com)
* 📚 Udemy: *Nest: Desarrollo backend escalable con Node* (contingut del curs) ([Udemy][1])
