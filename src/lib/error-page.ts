export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Juhal Academy</title>
<style>
body{font-family:system-ui,sans-serif;background:#f8f6ef;color:#182241;display:grid;place-items:center;min-height:100vh;margin:0;padding:24px}
.card{max-width:480px;text-align:center}
h1{font-family:Georgia,serif}
a{display:inline-block;background:#d8b64c;color:#182241;text-decoration:none;font-weight:800;padding:12px 18px;border-radius:999px}
</style>
</head>
<body><div class="card"><h1>Não foi possível carregar a página.</h1><p>Tente novamente ou volte para o início.</p><a href="/">Voltar ao início</a></div></body>
</html>`;
}
