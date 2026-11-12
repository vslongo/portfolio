# Como publicar o portfólio com domínio próprio

O site é estático (HTML + CSS + JS), então dá para hospedar **de graça**. O único custo é o domínio.

## Recomendação

| O quê | Onde | Custo |
|---|---|---|
| Hospedagem | **Cloudflare Pages** | Grátis (HTTPS, CDN global, sem limite de visitas) |
| Domínio `.com.br` | **Registro.br** | ~R$ 40/ano |
| *ou* domínio `.dev` / `.com` | **Cloudflare Registrar** | ~US$ 10–12/ano (preço de custo, sem taxa extra) |

Por que Cloudflare Pages: você já usa Cloudflare no Prumo, aceita upload arrastando a pasta (não precisa de Git instalado) e o HTTPS do domínio é configurado sozinho.

Sugestões de domínio (veja se estão livres no Registro.br ou na Cloudflare):
- `viniciusslongo.com.br` — bom para recrutadores brasileiros
- `viniciusslongo.dev` ou `vslongo.dev` — bom para vagas internacionais (o `.dev` exige HTTPS, que a Cloudflare já entrega)

> Alternativa também gratuita: **GitHub Pages** (repositório `vslongo.github.io`). Funciona, mas precisa de Git, e o domínio próprio passa a valer também para os seus outros projetos publicados em `vslongo.github.io/...` (como o Meu Lar). Por isso a Cloudflare é mais simples aqui.

---

## Passo a passo

### 1. Publicar na Cloudflare Pages
1. Crie uma conta (ou entre) em https://dash.cloudflare.com
2. Vá em **Workers & Pages → Create → Pages → Upload assets** (pode aparecer como *"Drag and drop your files"*).
3. Nome do projeto: `vinicius-slongo` → o site fica em `https://vinicius-slongo.pages.dev`
4. Arraste **somente** estes itens desta pasta:
   - `index.html`
   - `styles.css`
   - `script.js`
   - pasta `assets/`

   (não envie `.claude/` nem este `HOSPEDAGEM.md`)
5. Clique em **Deploy**. Pronto, o site já está no ar.

Para atualizar depois: abra o projeto → **Create new deployment** → arraste os arquivos de novo.

### 2. Comprar o domínio

**Opção A: `.com.br` no Registro.br**
1. Compre em https://registro.br (é preciso ter CPF).
2. Na Cloudflare: **Add a domain** → digite o domínio → plano **Free**.
3. A Cloudflare mostra 2 *nameservers* (ex.: `xxx.ns.cloudflare.com`).
4. No Registro.br: seu domínio → **DNS → Alterar servidores DNS** → cole os 2 da Cloudflare.
5. Espere a propagação (de minutos até algumas horas). A Cloudflare manda um e-mail quando o domínio estiver ativo.

**Opção B: `.dev`/`.com` direto na Cloudflare**
1. No painel: **Domain Registration → Register Domains** → busque e compre.
2. O domínio já fica configurado na sua conta, sem passo extra de DNS.

### 3. Ligar o domínio ao site
1. **Workers & Pages → vinicius-slongo → Custom domains → Set up a custom domain**
2. Adicione `seudominio.com.br` e depois `www.seudominio.com.br`.
3. A Cloudflare cria o DNS e o certificado HTTPS sozinha (leva alguns minutos).

### 4. Ajustes finais no site
No `index.html`, adicione dentro do `<head>` (trocando pelo seu domínio):
```html
<link rel="canonical" href="https://seudominio.com.br/" />
<meta property="og:url" content="https://seudominio.com.br/" />
```

### 5. Colocar no LinkedIn
- **Perfil → Informações de contato → Site** → cole o link (tipo: *Portfólio*).
- **Destaques (Featured) → Adicionar → Link** → cole o link do portfólio.
- Se a prévia do link aparecer errada, force a atualização em https://www.linkedin.com/post-inspector/
- Dica: o link `https://seudominio.com.br/?lang=en` abre o site direto em inglês, bom para vagas de fora.
