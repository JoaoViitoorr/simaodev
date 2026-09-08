
═══════════════════════════════════════════════════════════════════════

## 5. SEÇÕES DO SITE (roadmap)

1. **Header sticky** — logo `$simao·dev`, nav (# trabalhos,
   # formatos, # sobre, # dúvidas), botão `./whatsapp` âmbar
2. **Hero** — 2 colunas: texto+ticker à esquerda, órbita SVG à direita
3. **Trabalhos** — grid 2x2 com 4 protótipos (só despachante linka
   por enquanto)
4. **Formatos** — 3 cards de oferta com preço visível
5. **Processo** — 4 etapas com prazo real
6. **Sobre** — foto + texto pessoal (história cartório/dev)
7. **Dúvidas** — FAQ accordion com 6 perguntas
8. **CTA final** — "Manda o briefing. Eu digo o prazo."
9. **Footer** — logo + contato + cidades atendidas

═══════════════════════════════════════════════════════════════════════

## 6. ROADMAP DE BLOCOS

- [x] **Bloco 1** — estrutura base + paleta + reset
- [x] **Bloco 2** — header + hero (ticker rotativo funcionando)
- [x] **Bloco 3** — órbita SVG animada com interatividade (opção C)
- [x] **Bloco 4** — Trabalhos + Formatos + Processo
- [x] **Bloco 5** — Sobre + FAQ + CTA final + Footer
- [X] **Bloco 6** — Cursor dot+ring + constellation + easter egg
- [ ] **Deploy no Vercel** conectando GitHub
- [ ] **Registro do domínio** simaodev.com.br no registro.br
- [ ] **Apontamento** do domínio no Vercel
- [ ] **Criar 3 protótipos** faltantes (advocacia, imobiliaria, psicologia)
- [ ] **Foto real** substituindo placeholder

═══════════════════════════════════════════════════════════════════════

## 7. ASSINATURAS VISUAIS DO SITE

O que diferencia o simaodev de outros portfolios:

1. **Ticker rotativo no H1** — palavra troca com fade suave
   (advogados / imobiliárias / psicólogos / despachantes)
2. **Numeração de seções tipo comando** — `[01/05]` + `$ ls ./trabalhos`
3. **Prompt `$` no logo** e `//` antes de comentários visuais
4. **Botões como comando** — `./whatsapp`, `./falar_no_whatsapp`
5. **Órbita SVG animada no hero** com mini-site montando dentro
6. **Cursor dot+ring** planejado pro Bloco 6
7. **Constellation sutil no fundo** planejado pro Bloco 6
8. **Console.log easter egg** pra dev que abrir DevTools

═══════════════════════════════════════════════════════════════════════

## 8. BUGS RESOLVIDOS DURANTE O PROJETO

### 8.1 Ticker rotativo sobrepondo palavras
- **Sintoma inicial:** palavras aparecendo cortadas + próxima
  aparecendo em cima da anterior
- **Causa:** altura da caixa menor que o line-height da fonte italic
- **Tentativas erradas:** ajustar `height` progressivamente
  (1.1em → 1.5em → 1.8em) — nunca resolvia direito
- **Solução final:** REESCREVER com abordagem diferente — 4 palavras
  em `position: absolute` no mesmo ponto, cada uma com sua própria
  `@keyframes` controlando opacity e translateY sutil. Substituiu
  a abordagem de "overflow hidden + tira móvel"
- **Lição:** quando tá remendando o mesmo bug muitas vezes, para
  de remendar e reescreve com nova abordagem

### 8.2 Mini-site do SVG aparecendo tudo junto em vez de sequência
- **Sintoma:** todos os retângulos apareciam/sumiam ao mesmo tempo
  em vez de em cascata
- **Causa:** `animation-delay` só afeta a PRIMEIRA volta; em loop
  infinito o navegador sincroniza tudo no mesmo ciclo
- **Solução:** cada elemento com sua PRÓPRIA @keyframes, com timing
  interno diferente (0-8% invisível, 12-80% visível, 85-100% some).
  Sem `animation-delay`, sem bug de sincronização
- **Lição:** `animation-delay` só serve pra animação que roda UMA
  vez; pra loops repetidos, precisa timing interno próprio

### 8.3 Mini-site vazando do círculo central
- **Sintoma:** retângulos maiores que o círculo, mal centralizados
- **Solução:** matemática de centralização SVG:
  `translateX = centroX - larguraElemento/2`
  `translateY = centroY - alturaElemento/2`
  Reduziu 20% do tamanho e recalculou o `translate()`

### 8.4 Scanline (linha varrendo o SVG)
- Tirada por decisão do João, era distração desnecessária

═══════════════════════════════════════════════════════════════════════

## 9. REFERÊNCIAS ESTUDADAS

### Brasileiros
- **Filipe Ferreira** (filipeferreira.dev.br) — referência absoluta,
  BR, dev Pleno solo com estúdio de sites

### Gringos - editorial minimalista (que virou inspiração)
- **Rauno Freiberg** (rauno.me) — ex-Vercel, micro-interações
- **Paco Coursey** (paco.me) — Linear, editorial puro
- **Cassie Evans** (cassie.codes) — rainha do SVG animation
- **Josh Comeau** (joshwcomeau.com) — dev educador com SVG interativo

### Gringos - 3D/WebGL (rejeitados por custo)
- **Bruno Simon** (bruno-simon.com) — o famoso portfolio-jogo 3D
- **Dennis Snellenberg** (dennissnellenberg.com) — WebGL premium
- **Matthew Proteau** (matthewproteau.com) — 3D interactive
- **Adham Dannaway** (adhamdannaway.com) — split designer/dev

═══════════════════════════════════════════════════════════════════════

## 10. CONVENÇÕES ADOTADAS

### Padrão de commits (Conventional Commits)
- `feat:` nova feature
- `style:` mudança visual sem lógica nova
- `fix:` correção de bug
- `refactor:` reorganização sem mudar comportamento
- `docs:` documentação
- `chore:` config, estrutura, deps

### Padrão de código
- Mobile-first (media queries com `min-width`)
- Variáveis CSS pra toda cor e tipografia (`:root` em styles.css)
- `class="wrap"` como container padrão de largura máxima
- `class="block"` como seção padrão
- `id="xxx"` só quando o JS precisar pegar o elemento
- Comentários em português no CSS explicando decisões

═══════════════════════════════════════════════════════════════════════

## 11. FORMATOS E PREÇOS DEFINIDOS

| Formato | Preço | Prazo | Descrição |
|---------|-------|-------|-----------|
| Landing Page | A partir de R$ 800 | 7-10 dias | Uma página focada em UMA ação |
| Site Institucional | A partir de R$ 1.500 | 10-14 dias | 3-5 páginas |
| Site + Funcionalidade | Sob orçamento | Variável | Site com agenda, formulário, integração |

**Cobrança:** só na entrega da matrícula/domínio no ar. Zero antes.

═══════════════════════════════════════════════════════════════════════

## 12. FAQ PLANEJADA (a implementar no Bloco 5)

1. Quanto tempo leva de verdade?
2. E se eu quiser mexer no texto depois de pronto?
3. Você faz logo também?
4. Quanto custa a hospedagem?
5. E se eu não gostar do primeiro rascunho?
6. Atende fora do Triângulo Mineiro?

Respostas já rascunhadas no chat, transcritas no protótipo v1/v2.

═══════════════════════════════════════════════════════════════════════

## 13. PRÓXIMOS PASSOS APÓS SITE PRONTO

1. Deploy no Vercel (integração com GitHub, cada push publica)
2. Registrar simaodev.com.br em registro.br (~R$ 40/ano)
3. Apontar DNS do domínio pro Vercel
4. Criar os 3 protótipos faltantes usando `despachante.html` como base
5. Substituir "[foto sua aqui]" por foto real do João
6. Escrever 2-3 posts curtos no LinkedIn linkando o site
7. Compartilhar em grupos locais (cartório, ADS, WhatsApp de contatos)

═══════════════════════════════════════════════════════════════════════

## 14. LEMBRETES PRO JOÃO NÃO ESQUECER

- **Não desviar da apostila Python** por causa desse projeto. Ritmo
  sustentável: 1-2h/noite, 3 noites/semana no simaodev, resto no Python.
- **Não anunciar bot no lançamento** — mesmo se cliente pedir, dizer
  que não faz por enquanto.
- **Não copiar Filipe demais** — inspirar sim, clonar não. O gancho
  local (Triângulo Mineiro) é o diferencial defensável.
- **Repo público sempre**. Todo commit conta como aprendizado visível.
- **DevTools aberto SEMPRE** durante desenvolvimento, com cache
  desabilitado (aba Network).

═══════════════════════════════════════════════════════════════════════

## 15. COMO CONTINUAR COM OUTRA IA

Se precisar migrar essa conversa pra outro chat/IA, cola:

1. Este arquivo (`CONVERSA.md`) inteiro
2. `PROJETO.md`
3. `ESTUDO.md`
4. Os 3 arquivos de código atuais: `index.html`, `styles.css`, `script.js`
5. O protótipo pronto: `prototipos/despachante.html` (se relevante)

Menciona:
- Em qual Bloco parou (ex: "terminei o Bloco 4, próximo é o Bloco 5")
- Qual foi o último bug que você resolveu
- Se tem alguma dúvida específica travando

Qualquer IA moderna (Claude, ChatGPT, Gemini) consegue continuar de
onde parou com esse contexto.

═══════════════════════════════════════════════════════════════════════
### Sobre cursor customizado
- Só ativa em (hover: hover) and (pointer: fine)
- Guardas duplas: CSS esconde + JS não instala em touch
- Lerp factor 0.18 (equilíbrio entre nervoso e preguiçoso)
- Ring cresce em: a, button, summary, .work, .format, .step
- Decisão consciente: em produto, não faria isso — portfolio é vitrine