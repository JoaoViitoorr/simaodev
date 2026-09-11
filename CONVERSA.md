# simaodev — contexto do projeto

Arquivo de handoff pra IAs que entrarem no projeto no meio. Lê tudo antes de sugerir qualquer coisa.

## O que é

Estúdio solo de landing pages + mini sistemas, sob a marca **Simão Dev** (`simaodev.com.br`, a registrar). Público-alvo: profissional liberal do Triângulo Mineiro (advocacia, imobiliária, psicologia, despachante).

**Enquadramento estratégico:** portfolio-first, renda-second. O objetivo primário é evidência pública de trabalho dev (GitHub commits, site no ar). Cliente pagante é bônus, não a meta.

Repo: `github.com/JoaoViitoorr/simaodev` (público, MIT).

## Quem opera

**João Vitor Simão** — Araguari, MG. Analista de TI em cartório de registro de imóveis. Formando em ADS em dezembro/2026. Cursando pós de IA Aplicada na UNIPDS (Erick Wendel e equipe). Backend real existe (sistema de prazos, agente registral em RAG, auditoria em projetos do Daniel Neto, poker analytics com Vinícius) a prova de full-stack no simaodev é discurso + esteira, não backend forçado em cada protótipo.

## Estado atual

**Site principal (`src/index.html`):** Blocos 1-6 concluídos em versão anterior — base, header/hero com ticker, seções Trabalhos/Formatos/Processo, Sobre, FAQ, CTA, Footer, cursor dot+ring, constellation, easter egg no console.

**Protótipos:**
- `src/prototipos/psicologia/` — **pronto**, primeiro case. Colaboradora real: Thayná Victória Rosa e Vieira, psicanalista, adultos, online+presencial em Araguari. Autorizou uso do nome. Paleta sálvia + off-white + terracota. Tipografia Cormorant Garamond + Lora. Zero herança visual do simaodev principal. Contato, CRP, Instagram, foto ainda mocados (`0000000000`, `00/000000`).
- `src/prototipos/imobiliaria/` — **próximo, a construir**. Foco: atrair comprador (não vendedor nem investidor). Não compete com Imobrasil (plataforma white-label que domina o mercado local); mira o corretor autônomo mal servido por template.
- Advocacia e despachante — pendentes.

**Refactor em andamento:** projeto migrando de HTML/CSS/JS puro pra **Vite + Three.js + NPM**. Estrutura A adotada (`src/` pra fonte, `public/` pra assets crus). Refactor de pastas comitado. Próximo passo: `npm init`, instalar Vite + Three.js, configurar `vite.config.js` multi-page.

## Decisões travadas (não voltar atrás sem discussão explícita)

1. **Three.js entra**, quebrando a regra antiga de "HTML/CSS/JS puro". Razão: efeito visual pro hero. Não é justificativa de full-stack (Three.js é frontend).
2. **Elemento visual do hero:** wireframe terrain (estilo grid Tron/synthwave em âmbar sobre preto). Substitui a órbita SVG antiga e a moldura de janela terminal do hero. Fullbleed. Referência mental: `filipeferreira.dev.br` (inspirar, não copiar — esfera de partículas dele é cópia direta e está fora).
3. **Discurso do site vende full-stack** ("faço landing + mini sistema também"). Espírito FDE (Forward Deployed Engineer) no discurso, mas **sem usar o rótulo** — buzzword mal contextualizado em landing de freela em MG queima com sênior.
4. **Densidade do site aumenta** — inspiração no Filipe Ferreira: seções de formatos com prazo, esteira de tecnologia, página por protótipo explicando decisões-por-seção. Mas estética **mantém** terminal âmbar (Fraunces + Inter + JetBrains Mono). Não vira segundo Filipe.
5. **Esteira de tecnologia honesta:** HTML/CSS/JS, Python/Flask, SQLite, Git, Vercel, Power BI. Node/TS entra como "aprendendo" ou fica fora até amadurecer. Nunca listar tudo que já encostou.
6. **Cada protótipo tem paleta/tipografia próprias**, sem compartilhar CSS entre eles. Duplicação mínima justificada pela independência estética.
7. **Deploy:** Vercel via GitHub, subdomínios por protótipo (`thayna.simaodev.com.br`, futuramente `[nome].simaodev.com.br` pros outros).
8. **Trabalhando na main** (sem branch por feature). Commits pequenos e Conventional (`feat:`, `refactor:`, `chore:`). Preservar histórico (não deletar código autoral em commit gigante — commitar remoção antes de substituição).
9. **simaodev** agora tem build step deploy via Vercel precisa rodar npm run build, não é mais site estático simples.

## Como o João trabalha

- **Fase de aprendizado ativa:** ele escreve o próprio código. IA explica conceitos, revisa, discute trade-offs, mas **não gera código pra ele copiar**.
- **Respostas curtas e diretas.** Ele já disse mais de uma vez que não lê resposta longa.
- **Discute antes de codar.** "Vamos conversar aos poucos antes de qualquer código" é padrão. Não pula pra implementação sem alinhamento.
- **Painel anti-sycophancy (Destruidor/Defensor/Estrategista) só sob demanda** — perguntar antes de deployar, default é resposta direta.
- Nunca referenciar **Osasco/SP** — é Araguari, MG.
- Nunca vender **ICP-Brasil** como diferencial — ele já disse várias vezes que é irrelevante pro objetivo profissional dele.

## Referências externas em uso

- `filipeferreira.dev.br` — benchmark de densidade, formatos, esteira, explicação de decisões. **Inspirar, não clonar.**
- Repositório do Filipe (`github.com/Filipefr15`) — ele publica templates dos projetos (Serena Psicologia é o mais próximo do movimento do João com a Thayná, ja está quase feito).

## Próximo passo imediato

Rodar `npm init -y` + instalar Vite + Three.js + configurar `vite.config.js` pra multi-page (site principal + protótipos como entradas separadas). Depois: começar wireframe terrain no hero, protótipo da imobiliária em paralelo. (atualmente concluido, mas vale sempre relembrar alguns topicos, pois senti dificuldades em entender algumas coisas)