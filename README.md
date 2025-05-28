# 🚜 Teste Técnico Front-End — Agrotis Agroinformática

Este repositório contém a solução para o teste técnico de front-end da **Agrotis Agroinformática**, focado na construção de uma interface de cadastro e listagem com React, conforme o protótipo fornecido.

---

## ⚙️ Tecnologias Utilizadas

- **Next.js** (App Router, v15) – Utilizado apenas como estrutura de projeto. O que me atrapalhou um pouco pois recurso de SSR (Server Side Rendering) é necessário sendo neste caso.
- **React** (v19)
- **TypeScript**
- **Material UI (MUI)** – Para componentes visuais como inputs, datepickers, botões e ícones.
- **styled-components** – Para estilização encapsulada por componente.
- **tailwindcss** – Utilizado para utilidades visuais complementares.
- **react-hook-form** – Para controle e validação dos formulários.
- **React Context API** – Para estado global compartilhado entre páginas.
- **Custom Hooks** – Para isolar lógicas reutilizáveis.
- **pnpm** – Gerenciador de pacotes escolhido por sua eficiência no uso de espaço em disco e velocidade de instalação.

---

## 🗂️ Estrutura de Pastas

```

.
├── app/                  # Estrutura do App Router (layout, página inicial)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/           # Componentes reutilizáveis
│   ├── cadastro-form.tsx
│   ├── cadastro-list.tsx
│   ├── logo-agrotis.tsx
│   ├── observacoes-modal.tsx
│   ├── propriedades-modal.tsx
│   ├── styled-components.tsx
│   └── theme-provider.tsx
│
├── contexts/             # Context API
│   └── app-context.tsx
│
├── hooks/                # Custom Hooks
│   ├── use-api.ts
│   ├── use-form-validation.ts
│   └── use-mobile.tsx
│
├── lib/                  # Utilitários gerais
│   └── utils.ts
│
├── public/               # Arquivos estáticos
│   └── logo-icon.png
│
├── styles/               # Estilização global
│   └── globals.css
│
└── types/                # Tipagens compartilhadas
└── index.ts

````

---

## 🌐 Endpoints Utilizados

- Laboratórios:  
  [laboratorios.json](https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/laboratorios.json)

- Propriedades:  
  [propriedades.json](https://bitbucket.org/agrotis/teste-rh/raw/3bc797776e54586552d1c9666fd7c13366fc9548/teste-front-end-1/propriedades.json)

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/teste-agrotis.git
cd teste-agrotis

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
````

---

## 🔍 Observações Técnicas

* A estrutura do projeto segue a convenção do **App Router** do Next.js (`/app`).
* O **SSR está habilitado**. Mas todo o comportamento é client-side.
* Os dados são mantidos em memória com React Context, sem backend persistente.
* O formulário é validado com `react-hook-form` e custom hooks.
* O projeto usa `styled-components` para o tema visual, e `tailwindcss` para utilitários.

---
