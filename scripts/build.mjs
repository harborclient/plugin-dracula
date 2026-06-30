import { buildRenderer } from '@harborclient/sdk/build';

await buildRenderer({
  jsxRuntime: 'none',
  watch: process.argv.includes('--watch')
});
