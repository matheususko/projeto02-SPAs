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
---

## Sobre Controlled e Uncontrolled

#### "Controlled"
Nada mais é do que a gente manter, em tempo real, o estado a informação que o usuário insere na nossa aplicação, dentro do estado, dentro de uma variável em nosso componente."

ex: Toda vez que o usuário mudar a informação, escrever um novo texto no input, eu atualizo uma informação no estado, contendo esse novo valor, para que então eu possa ter o valor atualizado do que o usuário digitou no input.

- Variável da função constante e um exemplo de função de reset de um formulário
```tsx
const [task, setTask] = useState('')

function resetFrom() {
    setTask('');
}
```

- Ligação por paramêtros
```xml
<TaskInput 
    id="task"
    onChange={(e) => setTask(e.target.value)}
    value={task}
/>
```
> Desvantagem: Toda vez que é chamado ou inserido uma informação no formulário, tudo será renderizado novamento causando má performace no code.

#### "Uncontrolled"

Nada mais é do que , a genter ir buscar a informação do valor do input somente quando precisarmos dela.

O que mudaria?
> No inpuit ao invés de simplesmente salvar a informação, ha cade vez que o usuário digita essa informação poderiamos apagar as duas linhas (onChange..., value...) que inserimos no exemplo do "Controlled", e passavamos um paramétro na abertura da tag form, uma função para buscar os valores ao executar submit.  

- Variável da função constante e um exemplo de função para ouvir o submit
```tsx
const [task, setTask] = useState('')

function handleSumit(event) {
   event.target.task.value
}
```

- Ligação pelo paramêtros: name
```xml
<form onSubmit={handleSumit}>
    <TaskInput 
        id="task"
        name="task"
    />
</form>

```
- A perca é a fluidez, como não teriamos acesso ao valor digitado letra a letra, (tu pode verificar fazendo console logo utilizando uma função de event, onClick, pelo keyBoard. Tu verá no console do browser que toda vez que digitamoss ele recalcula e imprime em tela step by step da digitação, caso estejamos trabalhando com a lógica "Controlled"), eu perco essa fluidez de '|/0'. Mas ganhamos em performance.

> Terá momentos na nossa aplicação, em que a gente vai precisar escolher: "- eu irei para um formulário controlled, e geralmente as situações em que utilizo um formulário controlled é? Formulário simples, com poucos campos, em uma interface simples, um formulário de login, um formulário de cadastro. Caso contrário vou para um formulário uncontrolled, não controlado, ou seja, em que eu não monitoro o valor digitado em tempo real.

Casos de uso de um formulário uncontrolled:
- imagina aqueles dashboards que as pessoas cadastra "milhares" informações, jornadas de estudos. relatórios de diversas trilhas de desenvolvimento com 200 inputs sem brincadeiras etc, parece meio vago esse exemplo, mas para reconhecer basta ver o requisito de um projeto, a onde á em uma página diversos inputs. 

---

## React Hook Form

[React Hook Form](https://react-hook-form.com/), conseguimos trabalhar com formulário tanto de uma maneira controlled quanto de uma maneira uncontrolled.
Ou seja: conseguimos ter o melhor dos dois MUNDOS, A gente consegue ter performance sem abrir mão da flexibilidade, da fluidez, da interatividade com os campos do nosso formulário.

> Uma adendo ele não traz pronto lógica de validação pronto, é um dos processos que teremos que sempre implementar.

- Baixar lib pelo terminal

```powerShell
    npm i react-hook-form
```

- Importar na página que tem o form
``` jsx
import { useForm } from 'react-hook-form'


export function Home() {
  const { register, handleSubmit } = useForm()

  function handleCreateNewCycle(event) {}

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"

            {...register('task')}
          />
```


A register ela retorna diversos métodos, a gente utiliza utiliza um operador de 'spreed operator',  {...register('task')}.

#### Validando formulário

Bibliotecas de validação
- [Yup: mais comuns](https://github.com/jquense/yup)
- [Joi lib js](https://github.com/hapijs/joi)
- [zod js lib](https://github.com/colinhacks/zod): usaremos essa por que ele tráz mais adptação para typescript.

- Baixando a lib
```powerShell
    npm i zod
```

- React hook form, integra com essas lib acima, vamos integrar então:
essa lib é a que permite fazer a integração com lib de validação.
```powerShell
 npm install @hookform/resolvers
```


---

## Variáveis auxiliares
Boas práticas é sempre bem vindo então deixo uma.
As variáveis auxiliares elas não alteram a funcionalidade principal do código, não prejudicam em performance, e melhorar a legibilidade.

- é bacana de criar para dar orientação para novas pessoas que estão lendo o código.

```js
  const task = watch('task')
  const isSubmitDisabled = !task

```