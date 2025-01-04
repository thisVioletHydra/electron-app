// bump.config.ts
import { defineConfig } from 'bumpp';

export default defineConfig({
  push: true,
  all: true,
  preid: 'next',
  release: 'patch',
  confirm: false,
});
