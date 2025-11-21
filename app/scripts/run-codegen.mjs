import os from 'os';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

// The sandbox reports zero CPUs, which trips up GraphQL Code Generator.
// Force at least a single virtual CPU so the CLI can set its concurrency level.
os.cpus = () => [{ model: 'virtual', speed: 1 }];

process.argv = [
  'node',
  'graphql-codegen',
  '--config',
  'codegen.ts',
  '--concurrency',
  '1',
];

const binPath = pathToFileURL(
  path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'node_modules', '@graphql-codegen', 'cli', 'cjs', 'bin.js')
);

await import(binPath.href);
