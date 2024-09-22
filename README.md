# Todo List App

Este é um aplicativo de lista de tarefas desenvolvido em Angular, com uso do Angular Material para fornecer uma interface visualmente agradável e responsiva. O aplicativo permite adicionar, visualizar e marcar tarefas como concluídas, com as tarefas sendo organizadas em colunas de "Pendentes" e "Concluídas".

## Funcionalidades

- **Adicionar Tarefas**: Adicione novas tarefas por meio de um formulário simples.
- **Marcar como Concluída**: Tarefas podem ser marcadas como concluídas, movendo-as automaticamente para a coluna de "Tarefas Concluídas".
- **Estilização com Angular Material**: Interface moderna e responsiva usando componentes do Angular Material como cards, checkboxes e botões.
- **Layout Responsivo**: Funciona em diferentes tamanhos de tela, de dispositivos móveis a desktop.

## Tecnologias Utilizadas

- **Angular**: Framework de desenvolvimento para criar Single Page Applications (SPAs).
- **Angular Material**: Biblioteca de componentes visuais que segue as diretrizes do Material Design.
- **JSON Server**: Simulador de API para persistência de dados (somente para simulação local).

## Requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
- **Angular CLI**: Instale o Angular CLI globalmente:
  
  ```bash
  npm install -g @angular/cli
  ```

## Como Rodar o Projeto

### 1. Clonar o Repositório

Clone o projeto do GitHub (ou outro repositório):

```bash
git clone https://github.com/Sigmarok/Projeto-2
```

### 2. Instalar Dependências

Navegue até o diretório do projeto e instale as dependências:

```bash
cd todo-list-app
npm install
```

### 3. Rodar o JSON Server (Simulador de API)

Use o `json-server` para simular uma API REST. Crie um arquivo `db.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "todos": []
}
```

Agora, execute o `json-server` para rodar a API:

```bash
npx json-server --watch db.json
```

### 4. Iniciar o Servidor Angular

Em outra aba do terminal, execute o servidor de desenvolvimento Angular:

```bash
ng serve
```

O aplicativo estará disponível em [http://localhost:4200](http://localhost:4200).

### 5. Rodar em Produção

Para construir o projeto para produção, use o comando:

```bash
ng build --prod
```

O projeto será construído no diretório `dist/`.

## Estrutura do Projeto

```bash
todo-list-app/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── add-todo/
│   │   │   ├── todo-list/
│   │   └── services/
│   ├── assets/
│   ├── environments/
│   └── index.html
│
├── db.json
├── angular.json
├── package.json
└── README.md
```

## Melhorias Futuras

- Implementar edição de tarefas.
- Adicionar filtro de tarefas (todas, concluídas, pendentes).
- Integração com uma API real para persistência de dados.
- Validação mais complexa no formulário de adição de tarefas.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
