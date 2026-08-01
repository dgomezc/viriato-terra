import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('Payload configuration declares Pages and Media collections', async () => {
  const config = await readFile(new URL('../payload.config.ts', import.meta.url), 'utf8')
  assert.match(config, /collections: \[Users, Pages, Media\]/)
})
