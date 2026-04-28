# 🚀 eMojo — Emoji First Social Network

> Uma rede social de microblog focada em expressão visual, interações rápidas e comunidades vibrantes através de emojis.

![eMojo Banner](https://img.shields.io/badge/status-planning-yellow)
![Stack](https://img.shields.io/badge/stack-open-blue)
![Contribuições](https://img.shields.io/badge/contribuições-alunos-green)

---

# 🎯 Visão Geral

O **eMojo** é uma rede social fictícia inspirada em plataformas como:

* Twitter/X (microblog)
* Orkut (comunidades)
* Discord/Reddit (interações em grupos)
* Instagram/TikTok (expressividade visual)
* Bitmoji / Emojis modernos (identidade visual)

A proposta principal é criar uma plataforma social onde:

* emojis são o centro da comunicação;
* expressões rápidas substituem textos longos;
* o visual é vibrante e tecnológico;
* comunidades possuem forte protagonismo;
* a plataforma também funcione como um **laboratório educacional** para alunos de desenvolvimento de sistemas.

---

# 🧠 Objetivos do Projeto

## Objetivos técnicos

* Servir como projeto real para estudos
* Permitir implementação incremental de features
* Explorar arquitetura moderna frontend/backend
* Exercitar autenticação, banco de dados, realtime, APIs e UX

## Objetivos educacionais

Permitir que alunos implementem:

* CRUDs reais
* autenticação
* feed social
* likes/reactions
* sistemas de comentários
* fóruns
* upload de mídia
* notificações
* websockets/realtime
* algoritmos de ranking
* moderação
* gamificação
* permissões
* dashboards
* analytics
* etc.

---

# 🎨 Conceito da Rede

## Filosofia

O eMojo prioriza:

* comunicação emocional rápida;
* identidade visual forte;
* conteúdo curto;
* reações expressivas;
* comunidades temáticas;
* experiência divertida e leve.

---

# ✨ Funcionalidades Principais

# 👤 Usuários

Cada usuário possui:

* username único
* avatar
* bio
* mood atual
* emojis favoritos
* seguidores/seguindo
* nível/gamificação
* badges
* perfil público ou privado

---

# 📰 Feed Principal

O feed suporta:

* micro posts
* posts apenas com emoji
* texto curto
* imagens
* GIFs
* vídeos curtos
* reposts
* hashtags
* trends

---

# 😀 Sistema de Emojis

## Diferencial principal

O emoji deixa de ser apenas reação e vira:

* identidade;
* linguagem;
* decoração;
* ranking;
* reputação;
* status.

---

## Tipos de emoji

### Reações

* ❤️
* 😂
* 😮
* 😭
* 😡
* 👀
* 🔥

### Emojis customizados

Usuários/comunidades poderão:

* criar emojis próprios;
* desbloquear emojis;
* usar emojis premium;
* usar emojis animados.

---

# 🧩 Comunidades (inspiração Orkut)

## Estrutura

As comunidades funcionam como hubs temáticos.

Exemplos:

* 🎮 Jogos
* 🏍️ Motociclismo
* 💻 Programação
* 🎨 Arte
* 🎵 Música
* 🐱 Gatinhos

---

## Recursos da comunidade

Cada comunidade possui:

* capa
* descrição
* avatar
* moderadores
* regras
* tags
* feed próprio
* fóruns internos
* eventos
* ranking de membros

---

# 💬 Fóruns Internos

Cada comunidade possui fóruns organizados em tópicos.

## Estrutura

Comunidade
→ Categorias
→ Tópicos
→ Respostas

---

## Funcionalidades previstas

* markdown
* reações
* respostas aninhadas
* pinagem
* tópicos fechados
* denúncias
* moderação
* sistema de reputação

---

# 📱 Microblog

## Posts

Um post pode conter:

* texto curto
* emojis
* mídia
* hashtags
* enquete
* localização
* mood

---

## Interações

* curtir
* reagir
* comentar
* repostar
* salvar
* compartilhar
* responder

---

# 🔔 Sistema de Notificações

Tipos:

* novo seguidor
* reação
* comentário
* resposta
* convite para comunidade
* menção
* badge
* conquista

---

# 🏆 Gamificação

## Possíveis sistemas

* XP
* níveis
* streaks
* badges
* ranking semanal
* emojis raros
* títulos especiais

---

# 🔎 Busca

Busca por:

* usuários
* hashtags
* emojis
* comunidades
* tópicos
* posts

---

# 🧱 Principais Entidades do Sistema

# Usuário (`users`)

| Campo         | Tipo      |
| ------------- | --------- |
| id            | UUID      |
| username      | string    |
| email         | string    |
| password_hash | string    |
| avatar_url    | string    |
| bio           | text      |
| mood          | string    |
| created_at    | timestamp |

---

# Post (`posts`)

| Campo      | Tipo      |
| ---------- | --------- |
| id         | UUID      |
| user_id    | UUID      |
| content    | text      |
| media_url  | string    |
| visibility | enum      |
| created_at | timestamp |

---

# Reação (`reactions`)

| Campo   | Tipo   |
| ------- | ------ |
| id      | UUID   |
| user_id | UUID   |
| post_id | UUID   |
| emoji   | string |

---

# Comentário (`comments`)

| Campo   | Tipo |
| ------- | ---- |
| id      | UUID |
| post_id | UUID |
| user_id | UUID |
| content | text |

---

# Comunidade (`communities`)

| Campo       | Tipo   |
| ----------- | ------ |
| id          | UUID   |
| name        | string |
| slug        | string |
| description | text   |
| avatar_url  | string |
| cover_url   | string |

---

# Membro da Comunidade (`community_members`)

| Campo        | Tipo |
| ------------ | ---- |
| community_id | UUID |
| user_id      | UUID |
| role         | enum |

---

# Fórum (`forum_categories`)

| Campo        | Tipo   |
| ------------ | ------ |
| id           | UUID   |
| community_id | UUID   |
| title        | string |

---

# Tópico (`forum_topics`)

| Campo       | Tipo   |
| ----------- | ------ |
| id          | UUID   |
| category_id | UUID   |
| user_id     | UUID   |
| title       | string |
| content     | text   |

---

# Resposta (`forum_replies`)

| Campo    | Tipo |
| -------- | ---- |
| id       | UUID |
| topic_id | UUID |
| user_id  | UUID |
| content  | text |

---

# 🔐 Principais Regras de Negócio

# Usuários

* username deve ser único;
* email deve ser único;
* contas podem ser públicas ou privadas;
* usuários podem bloquear outros usuários.

---

# Posts

* posts podem ser públicos ou privados;
* posts podem conter apenas emojis;
* limite de caracteres configurável;
* conteúdo denunciado pode ser ocultado.

---

# Comunidades

* comunidades podem ser públicas ou privadas;
* moderadores possuem permissões especiais;
* usuários banidos não podem interagir.

---

# Fóruns

* tópicos podem ser fixados;
* tópicos podem ser trancados;
* respostas podem ser denunciadas.

---

# Reações

* um usuário pode reagir múltiplas vezes com emojis diferentes;
* emojis premium podem exigir desbloqueio.

---

# 🛡️ Moderação

## Ferramentas previstas

* denúncias
* shadowban
* mute
* banimento
* filtros automáticos
* moderação por comunidade
* logs administrativos

---

# 🧪 Roadmap Educacional

## Nível iniciante

* autenticação
* CRUD básico
* páginas
* responsividade

## Nível intermediário

* feed
* likes/reactions
* upload de mídia
* busca
* notificações

## Nível avançado

* realtime
* websocket
* cache
* ranking
* moderação
* recomendação
* algoritmos de feed

---

# 🏗️ Possível Stack

## Frontend

* React
* Vite
* Tailwind
* Zustand/Context
* React Query

## Backend

* Node.js
* Express/Fastify

## Banco

* PostgreSQL
* Supabase

## Realtime

* Supabase Realtime
* Socket.IO

## Uploads

* Supabase Storage

---

# 📦 Possíveis Features Futuras

* chat privado
* stories
* live rooms
* marketplace de emojis
* IA para sugestões emocionais
* pets virtuais
* ranking de humor
* “mood map” global
* sistema de quests
* integração com streaming
* perfis temáticos animados

---

# 🤝 Filosofia Open Learning

O projeto foi pensado para:

* incentivar contribuições;
* servir como playground técnico;
* permitir experimentação;
* estimular arquitetura modular;
* aproximar alunos de projetos reais.

---

# 📌 Status Atual

## Fase atual:

🟡 Planning / Product Discovery

## Próximas etapas:

* definição de MVP;
* modelagem do banco;
* arquitetura frontend/backend;
* backlog;
* design system;
* definição de permissões;
* prototipação navegável.

---

# ❤️ eMojo

> “Expressões falam mais rápido que palavras.”
