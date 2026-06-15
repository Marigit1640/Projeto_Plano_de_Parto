
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Projeto_Plano_de_Parto/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Projeto_Plano_de_Parto"
  },
  {
    "renderMode": 2,
    "route": "/Projeto_Plano_de_Parto/login"
  },
  {
    "renderMode": 2,
    "route": "/Projeto_Plano_de_Parto/wizard"
  },
  {
    "renderMode": 2,
    "route": "/Projeto_Plano_de_Parto/final"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Projeto_Plano_de_Parto",
    "route": "/Projeto_Plano_de_Parto/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8838, hash: 'f529f094408793ebadd63f584082d8c26818c61727e448ef05bc489147e14b15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 999, hash: '06cc8feb6dda108e33f1540a830d468a25efbd81f3bdb7b4fb2f340a14ff6116', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 21763, hash: '53ac61435e39344e7cb35fa753c0d30b356866ddff09d6b6b18854467a7a9fae', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19937, hash: 'cafa4893f131a07a7c28c74ef5dd4a5c9d35cbb6e3e3848885d4a2ca8c0360ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'wizard/index.html': {size: 22028, hash: '449c349b1105be4f2e28e3765325382ff8abbc6464d1fed91348aadd923f3485', text: () => import('./assets-chunks/wizard_index_html.mjs').then(m => m.default)},
    'final/index.html': {size: 24180, hash: '3b8408fd76423ffde118ee74c7f304e5e569140e273b0fb260e1554fcf46671c', text: () => import('./assets-chunks/final_index_html.mjs').then(m => m.default)},
    'styles-EVOHGBYH.css': {size: 27040, hash: 'Ncbq0I00dyU', text: () => import('./assets-chunks/styles-EVOHGBYH_css.mjs').then(m => m.default)}
  },
};
