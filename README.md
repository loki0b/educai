# Educaí

O **Educaí** é uma aplicação web desenvolvida para auxiliar professores na criação, gerenciamento e organização de Planos de Aula. A plataforma conta com um assistente inteligente integrado (utilizando a API do Google Gemini) que gera recomendações de conteúdos, recursos de apoio e tags com base no título, disciplina e ementa fornecidos pelo usuário.

## 🚀 Tecnologias Utilizadas

### Backend
- **Python**
- **Flask**
- **Flask-SQLAlchemy**
- **PostgreSQL**
- **Google GenAI**

### Frontend
- **React**
- **TypeScript**
- **Vite**
- **Tailwind**

### Infraestrutura
- **Docker**
- **GitHub Actions** 
- **ESLint & Prettier**
- **Black & Flake8**

## Funcionalidades

- **Gestão de Planos de Aula:** Interface para criar, editar, visualizar e excluir.
- **Assistente de IA:** Geração automática de conteúdos complementares, materiais de apoio e tags descritivas.

## Como Executar o Projeto Localmente

### Pré-requisitos
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Passos

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd educai
   ```

2. Crie um arquivo `.env` na raiz do projeto:
   ```env
   API_PORT=5000
   FLASK_APP=app.py
   GOOGLE_API_KEY=sua_chave_de_api

   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=sua_senha
   POSTGRES_DB=educai_db
   DB_PORT=5432

   FRONT_PORT=3000
   ```

3. Suba os containers:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

## Estrutura do Banco de Dados

Tabela `lesson_plans`:
- `id` (Integer, Primary Key)
- `title` (String)
- `objective` (Text)
- `syllabus` (Text)
- `scheduled_date` (Date)
- `subject` (String)
- `contents` (Text)
- `learning_resources` (JSON / ARRAY)
- `tags` (JSON / ARRAY)

## API Endpoints

### Planos de Aula (`/api`)
- `GET /getAll`: Retorna todos os planos.
- `POST /create`: Cria um plano.
- `POST /edit`: Atualiza um plano.
- `POST /delete`: Remove um plano.

### IA (`/api`)
- `POST /genContent`: Retorna sugestões da IA para conteúdo, recursos e tags.

## 🛠️ Pipeline CI

Workflow configurado no GitHub Actions (`.github/workflows/pipeline.yml`):
- **ci-backend:** Validação com `Black` e `Flake8`.
- **ci-frontend:** Validação com `ESLint` e `Prettier`.