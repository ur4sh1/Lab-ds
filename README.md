
<h1 align="center">:file_cabinet: Sistema design system</h1>

<img align="center" title="Printscreen" src="https://github.com/ur4sh1/Lab-ds/blob/main/public/printscreen/home_figma.png" />
<img align="center" title="Printscreen" src="https://github.com/ur4sh1/Lab-ds/blob/main/public/printscreen/DesignSystemComponents.png" />
<img align="center" title="Printscreen" src="https://github.com/ur4sh1/Lab-ds/blob/main/public/printscreen/DesignSystemColors.png" />
<hr>

## :memo: Descrição
Projeto Ignite lab->  do figma ao desenvolvimento, com deployer 

Deployer do projeto
https://ur4sh1.github.io/Lab-ds/?path=/docs/components-textinput--default

## :books: Funcionalidades
* Gerenciamento financeiro

## :wrench: Tecnologias utilizadas
* TypeScript;
* Tailwindcss;
* Radix;
* Storybook;

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
git clone git@github.com:ur4sh1/Lab-ds.git
```
Instalar dependências
```
npm i ou yarn
```
Executar
```
npm run dev
```

## :soon: Histórico de comandos e bibliotecas usadas no projeto

criando o projeto com o vite
```
npm create vite@latest
```
instalando dependências
```
npm i
```
instalando bibliotecas que serão utilizadas no projeto
```
npm i -D tailwindcss postcss autoprefixer
```
postcss é um bungle de css, basicamente uma ferramenta que automatiza tarefas dentro do css
autoprefixer é uma biblioteca que adiciona prefixos para algumas funcionalidades do css que só funciona em alguns browzers especifico

inicializando o tailwind.config.json com o postcss (-p)
```
npx tailwindcss init -p
```
Storybook -  permite mostrar os componentes do projeto de uma forma isolada
```
npx sb init --builder @storybook/builder-vite --use-npm
```
comando para executar o storybook
```
npm run storybook
```
CLSX- biblioteca usada para criar variações de classe no tailwind, mas especificamente de maneira condicional
```
npm i --save clsx
```
RADIX-UI
```
npm i @radix-ui/react-slot
```
PHOSPHOR-React
```
npm i phosphor-react
```
RADIX-Checkbox
```
npm i @radix-ui/react-checkbox
```
Storybook Deployer
```
npm i @storybook/storybook-deployer --save-dev
```
CI/CD - workflow de integração contínua, disparar ações a cada vez que implementar algo novo
criando a pasta .github/workflows.deploy-docs.yml
Adicionando configuração no main.js da pasta .storybook
```
viteFinal: (config, {configType}) => {
    if(configType === 'PRODUCTION'){
      config.base = '/Lab-ds/'
    }
    return config
  }
```
Instalando um addons de Accessibilidade que é exibida no storybook
```
npm install @storybook/addon-a11y
```
