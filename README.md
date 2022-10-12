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