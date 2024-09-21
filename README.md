# Rick and Morty Hub

## Descrição
Este projeto foi desenvolvido em React, com o objetivo de demonstrar a capacidade de criar uma aplicação web interativa, estilizada e funcional. O projeto utiliza componentes, estados, props, integração com APIs e manipulação do ciclo de vida dos componentes.

## Objetivo
Desenvolver uma aplicação React que permita a busca e adição de personagens da série Rick and Morty, utilizando conceitos de programação funcional e a arquitetura de componentes do React.

## Requisitos do Projeto
- **Componentes:** Mínimo de sete componentes estilizados e funcionais.
- **Props e Children:** Uso apropriado de props e children nos componentes.
- **Integração com API:** Implementação de pelo menos dois métodos HTTP (GET, POST, PUT/PATCH e DELETE).
- **Listas e Formulários:** Manipulação de listas e formulários utilizando componentes.
- **Estados:** Uso do hook useState para gerenciamento de estados.
- **Ciclo de Vida:** Aplicação do hook useEffect para controle do ciclo de vida dos componentes.
- **Funções Assíncronas:** Implementação de funções assíncronas (Promises/Async/Await).

## Componentes
- **Header:** Componente que exibe o cabeçalho da aplicação, incluindo o logo e o título.
- **AddCharacterForm:** Componente de formulário que permite ao usuário adicionar novos personagens.
- **Input:** Componente de entrada para digitar o nome do personagem.
- **Button:** Componente de botão para enviar o formulário.
- **CharacterList:** Componente que exibe a lista de personagens buscados.
- **CharacterCard:** Componente que representa um personagem individual, mostrando suas informações básicas.
- **Instructions:** Componente que fornece orientações sobre como usar a aplicação.
- **Footer:** Componente que exibe informações de rodapé, como créditos ou links adicionais.

## Tecnologias Utilizadas
- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Ant Design:** Framework de design para React que fornece componentes prontos para uso.
- **Axios:** Biblioteca para fazer requisições HTTP de forma simples.
- **JSON Server:** Ferramenta para criar uma API REST fake rapidamente, usada para simular um backend.
- **Jest:** Framework de testes para JavaScript, utilizado para escrever e executar testes automatizados.
- **React Testing Library:** Biblioteca para facilitar a realização de testes em componentes React.
- **Rick and Morty API:** API para obter informações sobre personagens.
- **Vite:** Ferramenta de construção que fornece um ambiente de desenvolvimento rápido e leve.

## Instalação
1. Clone o repositório:

    ```
    git clone <link-do-repositório>
    ```

2. Instale as dependências:

    ```
    npm install
    ```

3. Inicie o servidor da fake API:

    ```
    json-server src/services/db.json --port 5000
    ```

4. Inicie a aplicação:

    ```
    npm run dev
    ```

## Estrutura de Arquivos
```
src/
    components/
        add-character-form/
        button/
        character-card/
        character-list/
        footer/
        header/
        input/
        instructions/
    hooks/
    services/
    App.jsx
    App.css
```

## Como Usar

1. Adicionando personagens:

- Na interface, insira o nome de um personagem de Rick e Morty no campo de texto e clique no botão "Add Character".
- Se o personagem for encontrado, ele será adicionado à lista; caso contrário, uma mensagem de erro será exibida.

2. Visualizando personagens:

- Os personagens adicionados aparecerão na lista abaixo do formulário.