# Densyy - Response

1. Instalação
```
pnpm add densyy-response
```

2. Utilização
```
/* ---- Requires ---- */

const helperResponse = require('densyy-response')

/* ---- Methods ---- */

exports.receberTodos = async (_req, res) => {
  try {
    const usuarios = await REPOSITORY_USUARIOS.receberTodos()
    helperResponse.success(res, usuarios)
  } catch (error) {
    helperResponse.serverError(res)
    throw new Error(error)
  }
}
```
