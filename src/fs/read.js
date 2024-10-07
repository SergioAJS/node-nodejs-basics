import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const filePath = path.join(__dirname, 'files', '/', 'fileToRead.txt');

        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
        return;
    } catch (err) {
        err = new Error('FS operation failed');
        console.error(err.message);
    }
};

await read();