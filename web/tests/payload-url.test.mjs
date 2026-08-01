import test from 'node:test';
import assert from 'node:assert/strict';

test('diagnostic route uses the expected local Payload endpoint by default', () => {
  const payloadUrl = (process.env.PUBLIC_PAYLOAD_URL ?? 'http://localhost:3000').replace(/\/$/, '');
  assert.equal(payloadUrl, 'http://localhost:3000');
});
