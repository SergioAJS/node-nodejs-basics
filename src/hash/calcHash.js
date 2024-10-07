import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto'
import process from 'node:process';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files', '/', 'fileToCalculateHashFor.txt');

    const content = await readFile(filePath, { encoding: 'utf8' });

    const hash = await createHash('sha256').update(content).digest('hex')

    await process.stdout.write(hash + '\n');
}

await calculateHash();