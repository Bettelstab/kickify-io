export default {
  node: `import { registerStore } from '@kickify/kickify';

await registerStore('YOUR-API-KEY', store.accessToken, store.url);`,
  rails: `require '@kickify/kickify'

Kickify.register_store('YOUR-API-KEY', store.access_token, store.url)`,
  php: `<?php
  require '@kickify/kickify';
  Kickify::registerStore('YOUR-API-KEY', $store->access_token, $store->url);
?>`,
};
