<h1 align="center">
    <img alt="Be The Hero" title="#be_the_hero" src="docs/images/BE_THE_HERO.svg" width="250px" />
</h1>

<h4 align="center">
  🚀 Semana OmniStack 11.0 🚀
</h4>

<p align="center">

  <a href="https://github.com/lpmatos/omnistack">
    <img alt="Open Source" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>

  <a href="https://github.com/lpmatos/omnistack/graphs/contributors">
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/lpmatos/omnistack">
  </a>
  
  <a href="https://github.com/lpmatos/omnistack">
    <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/lpmatos/omnistack">
  </a>

  <a href="https://github.com/lpmatos/omnistack">
    <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/lpmatos/omnistack">
  </a>

  <a href="https://github.com/lpmatos/omnistack/stargazers">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/lpmatos/omnistack?style=social">
  </a>

  <a href="https://github.com/lpmatos/omnistack/commits/master">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/lpmatos/omnistack">
  </a>

  <a href="https://github.com/lpmatos/omnistack">
    <img alt="Repository Size" src="https://img.shields.io/github/repo-size/lpmatos/omnistack">
  </a>

  <a href="https://github.com/lpmatos/omnistack/issues">
    <img alt="Repository Issues" src="https://img.shields.io/github/issues/lpmatos/semana-omnistack-10">
  </a>

  <a href="https://github.com/lpmatos/omnistack/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/lpmatos/omnistack">
  </a>
</p>

<p align="center">
  <img src="/docs/images/INFO.jpg" width="500px" float="center"/>
</p>

<h1 align="center">Be The Hero</h1>

<p align="center">
  <strong>Backend, Frontend and Mobile - Omnistack 11.0 Week - including personal customizations.</strong>
</p>

<p align="center">
  <a href="#built-with">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## ▶️ Getting Started

To use this repository you need to make a **git clone**:

```bash
git clone --depth 1 https://github.com/lpmatos/omnistack.git -b master
```

Pull requests are welcome. If you'd like to support the work and buy me a ☕, I greatly appreciate it!

<a href="https://www.buymeacoffee.com/EatdMck" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 100px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## 🚀 Built with

This project was developed with:

- [NodeJS](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Helm](https://helm.sh/)

## 💻 Project

**Be The Hero** is a project that aims to connect people interested in helping ONG's.

## 🔖 Layout

Você pode baixar o layout do projeto no formato `.sketch` através [desse link](.github/DevRadar.sketch).

Para abrir o arquivo no formato `.sketch` em qualquer sistema operacional utilize a ferramenta [Figma](https://figma.com).

## 📰 Pre-Requisites

**Tools**
:---:
**NodeJS**
**npm**
**React**
**React Native**
**Expo**
**Docker**
**docker-compose**

Extras:

- Main Libs
  - [Express](https://expressjs.com/pt-br/)
  - [KnexJS](http://knexjs.org/)
- Estilos
  - [EditorConfig](https://editorconfig.org/)
  - [ESLint](https://eslint.org/)

## ✏️ What will you learn?

![Alt text](docs/images/WALLPAPER.jpg?raw=true "Project")

Durante essa semana você vai descobrir na prática porque essas tecnologias fazem tanto sentido juntas, construindo uma aplicação completa com Node.js no back-end, ReactJS no front-end e React Native no mobile.

Você vai aprender como cada uma dessas tecnologias funcionam, como elas se integram, e os critérios para a escolha dessa stack. E finalmente vai entender como ela pode levar suas aplicações e a sua carreira para o próximo nível.

Essa é uma oportunidade de descobrir novas ferramentas e conceitos essenciais, principalmente se você trabalha ou pretende trabalhar com desenvolvimento web e mobile.

Mais do que isso, esse é um evento para toda a comunidade evoluir junta.

## 📏 Architecture

![Alt text](docs/images/TWO.PNG?raw=true "Project")

## 🐋 Development without Docker

### Usage

In the directory, install the dependencies.

```bash
npm install
```

Start React development server.

```bash
npm start
```

Await for browser window open in http://localhost:3000.

### Deployment

In the directory, install the dependencies.

```bash
npm install
```

Execute build command to create minify version to production.

```bash
npm run build
```

Will be create folder /build with the files. Inserts into HTTP server. [More information](https://create-react-app.dev/docs/deployment/)

## 🐋 Development with Docker

Steps to build the Docker image.

### Build

```bash
docker image build -t <IMAGE_NAME> -f <PATH_DOCKERFILE> <PATH_CONTEXT_DOCKERFILE>
docker image build -t <IMAGE_NAME> . (This context)
```

### Run

Steps to run the container.

* **Linux** running:

```bash
docker container run -d -p <LOCAL_PORT:CONTAINER_PORT> <IMAGE_NAME> <COMMAND>
docker container run -it --rm --name <CONTAINER_NAME> -p <LOCAL_PORT:CONTAINER_PORT> <IMAGE_NAME> <COMMAND>
```

* **Windows** running:

```
winpty docker.exe container run -it --rm <IMAGE_NAME> <COMMAND>
```

### Exec

Steps to enter inside the container.

```bash
docker exec -it <CONTAINER_NAME> <COMMAND>
```

### Cleaning

Steps to clean your Docker environment. 

```bash
docker system prune -af
```

*  Stop all containers.

```bash
docker stop $(docker ps -aq)
```

*  Remove all containers.

```bash
docker rm $(docker ps -aq)
```

*  Remove all images.

```bash
docker rmi $(docker images -a)
```

*  Remove all volumes.

```bash
docker volume prune -f
```

*  Remove all network.

```bash
docker network prune -f
```

For more information, access the [Docker](https://docs.docker.com/)

## 🐋 Development with Docker Compose

Steps to run this integration with docker-compose.

```bash
docker-compose up --build
```

Steps to down all services deployed by docker-compose.

```bash
docker-compose down
```

## 🎒 How to contribute

1. Make a **Fork**.

2. Follow the project organization.

3. Add the file to the appropriate level folder - If the folder does not exist, create according to the standard.

4. Make the **Commit**.

5. Open a **Pull Request**.

6. Wait for your pull request to be accepted.. 🚀

Remember: There is no bad code, there are different views/versions of solving the same problem. 😊

## 🔔 Add to git and push

You must send the project to your GitHub after the modifications

```bash
git add -f .
git commit -m "Added - Fixing somethings"
git push origin master
```

## 📋 Versioning

- [CHANGELOG](CHANGELOG.md)

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## ☎️ Contacts

Hey!! If you like this project or if you find some bugs feel free to contact me in my channels:

* **Email**: luccapsm@gmail.com
* **Linkedin**: www.linkedin.com/in/lucca-pessoa-4abb71138/

[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/lucca.pessoa.9)
[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/lpmatos)

## ✨ Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/lpmatos"><img src="https://avatars2.githubusercontent.com/u/58797390?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Lucca Pessoa</b></sub></a><br /><a href="https://github.com/lpmatos/omnistack/commits?author=lpmatos" title="Code">💻</a></a></td>
  <tr>
</table>

## 🐯 Autor

<table>
  <tr>
    <td align="center"><a href="https://github.com/lpmatos"><img src="https://avatars2.githubusercontent.com/u/58797390?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Lucca Pessoa</b></sub></a><br /><a href="https://github.com/lpmatos/omnistack/commits?author=lpmatos" title="Code">💻</a> <a href="#lpmatos" title="Design">🎨</a></td>
  <tr>
</table>

## 📆 Pomodoro Tasks

- [x] Adding MySQL in docker-compose.
- Create Helm Chart to this application - Backend + Frontend + MySQL.
- Customiza the Helm Chart with tests in MySQL.
- Get environment variables from NodeJS.
- Implement simple pipeline in GitLab CI/DC.

## ⚡️ Acknowledgment

* 🚀 RocketSeat - Diego Fernandes.

## 💻 Vscode Themes

* Dracula.
* Material Icon Theme.

## Project Status

* 🔛 In production

---

Feito com ❤️ by **Lucca Pessoa** 
