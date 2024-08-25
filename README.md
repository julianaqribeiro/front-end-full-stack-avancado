# Meu Front-end em React

Este é um projeto que faz parte do MVP especificado na **Disciplina Back End Avançado** do curso de **Pós-Graduação em Desenvolvimento Full Stack da PUC-Rio**. 

O objetivo deste MVP foi planejar e prototipar a interface com o Figma e aplicar os conceitos basicos do desenvolvimento de front-end com React explorando a componentização. 
Utilizando os principios da componentização, foi possivel dividir a aplicação em componentes reutilizaveis. 
Além disso foram utilizados recursos do React como: gerenciamento de estado, props e hocks (useState e useEffect). 


## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t front-end .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 8080:3000 front-end
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:8080/] no navegador.

## Como executar

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.