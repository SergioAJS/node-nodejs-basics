import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';

const read = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const filePath = path.join(__dirname, 'files', '/', 'fileToRead.txt');

        const reader = createReadStream(filePath);
        reader.on('data', (chunk) => process.stdout.write(chunk.toString()));
    } catch (err) {
        err = new Error('Couldn`t read file');
        console.error(err.message);
    }
};

await read();