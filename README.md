# Access Control CP

Projeto desenvolvido como parte das atividades da faculdade. O **Access Control CP** é um sistema de controle de acesso de usuários, com funcionalidades de cadastro, login e visualização de dados.

---

## Funcionalidades

- Cadastro de usuários com **nome, username e email**.  
- Login de usuários com validação no **localStorage**.  
- Botão de visualização de dados disponível **apenas quando o usuário está logado**.  
- Drop-up menu exibindo informações do usuário.  
- Persistência de login usando `localStorage`.  
- Layout responsivo com fundo personalizado e design moderno.

---

## Tecnologias

- **React.js** – Biblioteca principal para a construção do front-end.  
- **TypeScript** – Tipagem estática para maior segurança no código.  
- **React Hook Form** – Gerenciamento de formulários e validação.  
- **Tailwind CSS** – Estilização rápida e responsiva.  
- **React Router DOM** – Navegação entre páginas.  
- **Lucide React** – Biblioteca de ícones.  
- **Fetch API** – Comunicação com backend (API REST simulada via `.env`).

---

## Estrutura do Projeto

```

access-control-cp/
│
├─ src/
│  ├─ component/      # Componentes reutilizáveis (Header, Footer, Button, Input)
│  ├─ routes/         # Páginas (Cadastro, Login, Home)
│  ├─ interfaces/     # Tipagens TypeScript (IDataForm, ILogin)
│  ├─ App.tsx         # Componente principal (Layout)
│  └─ main.tsx        # Entry point do React
│
├─ public/            # Arquivos públicos (imagens, favicon)
├─ package.json
├─ tsconfig.json
└─ README.md

````

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/access-control-cp.git
cd access-control-cp
````

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com a URL da API:

```env

VITE_API_URL=http://localhost:3000/users

```

4. Rode o projeto:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (ou porta definida pelo Vite).

---

## Uso

* **Cadastro:** Preencha nome, username e email.
* **Login:** Entre com username e email cadastrados.
* **Visualizar dados:** Clique no botão “Ver dados” após o login para abrir o DropUpMenu com informações do usuário.

---

## Observações

* O login é persistente via `localStorage`.
* O botão de visualização só aparece se `localStorage.loggedIn === "true"`.
* O projeto é voltado para fins acadêmicos.

