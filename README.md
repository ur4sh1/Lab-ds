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
