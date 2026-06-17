
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
    'index.csr.html': {size: 8838, hash: '2de529253bfbc745f5e60d3c77a2e2bf3964bf924237eca221dced3067cd307e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 999, hash: '785fe0a9f059011cf992a2b044a2192b52408eed3e6ae6b47cab2dd2ef9b669d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 21787, hash: '899c03b08c4f5f897266b5f430ea34f024a8d0c53bf4af5be5a68013fb2fae95', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19961, hash: '99983eae55763c3c4c4075ab81946125dd71846ca543a730c342e6e3488fd3a2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'final/index.html': {size: 24252, hash: '3b0b293816d4826f03af42367ae62f218b723985009d70fe75afb14deb50caf6', text: () => import('./assets-chunks/final_index_html.mjs').then(m => m.default)},
    'wizard/index.html': {size: 22052, hash: '61ac941baca2c11bb10406a12ab78daf5a235058edcbdcbfbc476bfd62a08744', text: () => import('./assets-chunks/wizard_index_html.mjs').then(m => m.default)},
    'styles-EVOHGBYH.css': {size: 27040, hash: 'Ncbq0I00dyU', text: () => import('./assets-chunks/styles-EVOHGBYH_css.mjs').then(m => m.default)}
  },
};
