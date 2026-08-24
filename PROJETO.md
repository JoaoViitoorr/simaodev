
## Seções do site (ordem de aparecimento)

1. **Header** sticky — logo `$simao·dev`, nav (`# trabalhos`, `# formatos`,
   `# sobre`, `# dúvidas`), botão `./whatsapp` âmbar
2. **Hero** — layout 2 colunas: texto+ticker à esquerda, órbita SVG à direita
3. **Trabalhos** — grid de 4 cards com os protótipos (só despachante linka por
   enquanto, outros mostram "em construção")
4. **Formatos** — 3 cards de oferta (Landing R$800 · Institucional R$1.500 ·
   Sob demanda), com preço visível
5. **Processo** — 4 etapas com prazo real (Conversa → Estrutura → Dev → Publicação)
6. **Sobre** — foto + texto pessoal com a história cartório/dev
7. **Dúvidas** — FAQ accordion com 6 perguntas desconfortáveis
8. **CTA final** — "Manda o briefing. Eu digo o prazo."
9. **Footer** — logo + contato + cidades atendidas + copyright

## Roadmap de execução (blocos)

- [x] **Bloco 1** — estrutura base, paleta, reset
- [x] **Bloco 2** — header + hero (ticker rotativo funcionando)
- [ ] **Bloco 3** — órbita SVG animada no hero + interatividade com mouse (opção C)
- [ ] **Bloco 4** — seções trabalhos, formatos, processo
- [ ] **Bloco 5** — seções sobre, FAQ, CTA final, footer
- [ ] **Bloco 6** — cursor customizado + constellation + easter egg
- [ ] **Deploy no Vercel** conectando o GitHub
- [ ] **Registro do domínio** `simaodev.com.br` no registro.br
- [ ] **Apontamento** do domínio no Vercel
- [ ] **Criar protótipos** advocacia, imobiliaria, psicologia (usar despachante como base)
- [ ] **Foto de perfil** real substituindo placeholder

## Padrão de commits

Convenção usada:
- `feat:` nova feature
- `style:` mudança visual
- `fix:` correção de bug
- `refactor:` reorganização sem mudar comportamento
- `docs:` documentação
- `chore:` config, estrutura, deps

1 commit por bloco funcional pronto. Não 1 por linha, não 1 por semana.

## Decisões já travadas (não voltar atrás)

- **Nome:** Simão · Dev (`simaodev.com.br`)
- **Paleta:** terminal âmbar CRT (variáveis em `styles.css`)
- **Stack:** HTML + CSS + JS puros
- **Hero:** órbita SVG animada com interatividade forte (opção C)
- **Ilustração de cliente no hero:** órbita SVG (NÃO terminal digitando código,
  descartado por não conectar com público leigo)
- **Sem oferecer bots/automação** no site do lançamento (fica pro roadmap
  quando tiver base Python sólida — 12-18 meses)
- **Público inicial:** advocacia, imobiliária, psicologia, despachante
- **NÃO fazer** Three.js/WebGL (custo/benefício ruim pro momento)

## Números de contato do site

- WhatsApp: `5534992874475` (usado em todos os links `wa.me/`)
- E-mail: `contato@simaodev.com.br` (a configurar quando domínio estiver ativo)

## O que fazer se ficar travado sozinho

1. Abre DevTools (F12) → aba Console (ver erros JS) e Elements (inspecionar HTML/CSS)
2. Google "MDN + o que tu quer fazer" (MDN Web Docs é a fonte oficial)
3. StackOverflow com erro exato entre aspas
4. Se travar em CSS, joga no ChatGPT/Claude/Gemini o CSS + descrição do bug + print

## O que passar pra outra IA se precisar retomar contexto

Cola o conteúdo deste `PROJETO.md` + o `index.html`, `styles.css` e `script.js`
atuais. Menciona em qual Bloco tu parou. IA vai ter contexto suficiente pra
continuar sem perder a linha.

====================================================================================

simaodev/
├── index.html — página principal
├── styles.css — design system e componentes
├── script.js — interações (cursor, órbita, animações)
├── README.md — descrição pública do repo
├── PROJETO.md — este documento (norte interno)
├── .gitignore — Node template do GitHub
├── LICENSE — MIT
├── prototipos/ — modelos por nicho (adaptáveis)
│ ├── advocacia.html — a fazer
│ ├── imobiliaria.html — a fazer
│ ├── psicologia.html — a fazer
│ └── despachante.html — PRONTO (base pros outros)
└── assets/ — imagens, favicon
└── foto-perfil.jpg — a adicionar (foto real, nada de banco de imagem)

====================================================================================

# PROJETO SIMÃO DEV — Documento de norte

Guia completo pra continuar o projeto se eu (João) precisar retomar sozinho
ou passar contexto pra outra IA. Última atualização: 2026-08-24.

---

## Contexto do dono

- **João Vitor Simão**, Araguari/MG, analista de TI em cartório de registro
  de imóveis, cursando ADS (formatura dez/2026).
- Aprendendo Python (Parte II de apostila) como skill principal.
- Alvo profissional em 18-24 meses: backend Python remoto em fintech/legaltech.
- Este projeto (`simaodev`) é lateral: portfolio público + eventual renda extra.
  NÃO é fonte de renda principal. Enquadramento correto:
  "projeto de aprendizado que talvez gere renda", não o contrário.

## Objetivo do site

Site pessoal em `simaodev.com.br` (domínio a registrar em registro.br),
posicionado como estúdio solo pra fazer landing pages e sites institucionais
pra profissionais liberais e pequenos negócios do **Triângulo Mineiro**.

Público-alvo por prioridade: advogados, imobiliárias, psicólogos,
despachantes imobiliários. Odontologia fica pra depois.

## Filosofia técnica

- HTML, CSS e JS puros. **Zero framework** (nem React, nem Vue, nem Next).
  Motivo: aprendizado sólido de fundação + site leve + defensável em entrevista.
- 3 arquivos principais (`index.html`, `styles.css`, `script.js`).
  Nada de bundler, nada de build step. Abre no navegador e roda.
- Hospedagem: Vercel (grátis) via integração GitHub. Cada push = deploy.

## Estética

- **Paleta:** terminal âmbar CRT (fundo escuro, texto creme, acento âmbar `#F5A524`).
  Todas as cores em variáveis CSS no `:root` de `styles.css`.
- **Tipografia:** Fraunces (display, serifa editorial variável) + Inter (body) +
  JetBrains Mono (código/utility). Todas via Google Fonts.
- **Referências gringas** que inspiram o projeto: Filipe Ferreira (BR, referência
  próxima), Rauno.me, Paco.me, Cassie.codes, Dennis Snellenberg, Adham Dannaway.
- **Nível de ambição:** editorial polido com pegada dev sutil. Nada de Three.js/WebGL
  (custo/benefício ruim pro momento). SVG animado é o teto do "wow visual".

## Assinatura visual do site

Coisas únicas que diferenciam o `simaodev` de outros portfolios:

1. **Ticker rotativo no H1** — palavra troca entre advogados/imobiliárias/psicólogos/despachantes
2. **Numeração de seções como código** — `[01/05]` e `$ ls ./trabalhos` no lugar de "01" e "TRABALHOS"
3. **Prompt `$` no logo** (`$simao·dev`)
4. **Botões escritos como comando** (`./whatsapp`, `./falar_no_whatsapp`)
5. **Órbita SVG animada no hero** (mini-site montando dentro dela) — v3 substitui terminal
6. **Cursor customizado** dot + ring (ponto instantâneo + círculo com delay elástico)
7. **Constellation sutil no fundo** — pontos âmbar ligando linhas
8. **Console.log easter egg** pra dev que abrir DevTools

## Estrutura de arquivos