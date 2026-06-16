
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/wizard"
  },
  {
    "renderMode": 2,
    "route": "/final"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8815, hash: '7452e5abfdf15e373bd3205c1b7933135a1054dcd9016003f0b9de46f9764647', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 976, hash: '5962d94eb66a02a8884728fb35589bc5e81198dfc4761372160acf903a26c1cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 21740, hash: 'ae28accf06b52b0761af7e7a0c6e8884ce1773b4133f982d7e88220b36795e5e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'final/index.html': {size: 24157, hash: '5b08d22f03fc7ad068bd91945e142d44afad4d930cca408001851f9904428876', text: () => import('./assets-chunks/final_index_html.mjs').then(m => m.default)},
    'wizard/index.html': {size: 22005, hash: 'f34fb82c36fd5077fd3eea3b2a81dfe6a35691919652cb7216ae7c9a418cc189', text: () => import('./assets-chunks/wizard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19914, hash: '71f0d6abfcc5ad761210d0ec7e1fb382ad154d88f54823820722a7acb0b67355', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EVOHGBYH.css': {size: 27040, hash: 'Ncbq0I00dyU', text: () => import('./assets-chunks/styles-EVOHGBYH_css.mjs').then(m => m.default)}
  },
};
