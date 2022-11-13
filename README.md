# Criando um SPA

"Pesquisar a fundo sobre Context Provider"

Para estilização pacote Style Components
```
npm i @types/styled-components -D
```
---
Usar a extensão ESLint e configurar = Ecmascript Lint
(Processo de validar que o código está seguindo padrões estipulados pelo criador do projeto)
```
npm i eslint -D
npm i @rocketseat/eslint-config -D
```
1. Criar arquvio: .eslintrc.json
    1.1 Segue o arquivo na arvore para ver as configurações
    1.2 Uma forma de verificar problemas de código: 
        npx eslint src --ext .ts,.tsx
        1.2.1 Para deixar mais configurado, no arquivo packaga.json:
            em "scripts": {
                "lint": "eslint src --ext .ts,.tsx"
            }
                1.2.2 npm run lint
    1.3 Mas se eu quiser arrumar todos os erros de escrita de código de uma vez
        npx eslint src --ext .ts,.tsx --fix
        1.3.1 Conforte o topoico assima, o script determinado fica facil depois de executar o --fix:
            npm run lint --fix
---
## React Router DOM

[Site dos desenvolvedores da lib](https://reactrouter.com/en/main)
Baixar a lib [React-router](https://github.com/remix-run/react-router)
> Ler guia.
1. Primeiro passo
```
npm i react-router-dom
```
2. criar pasta nova ./src/pages
    2.1 Que será a onde ficará cada página de nossa aplicação ex: FAQ, CONTATOS, HOME etc.

3. Configurar um arquivo Routes no ./src/Router.tsx

#### Layouts de rotas.

> Nesse contexto existe uma estima sobre reaproveitar componentes para não criar pra toda tela ou pra cada sessão de novo o mesmo conteúdo react é podereso nesse contexto.
---
## Importar icones 

```
npm i phosphor-react
```
