import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import process from 'node:process';

const write = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const filePath = path.join(__dirname, 'files', '/', 'fileToWrite.txt');
        const writeableStream = createWriteStream(filePath);

        process.stdin.on("data", data => {
            writeableStream.write(`${data}`);
        })

    } catch (err) {
        err = new Error('Couldn`t write to file');
        console.error(err.message);
    }
};

await write();