import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { access, constants, unlink } from 'node:fs';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files', '/', 'fileToRemove.txt');

    await access(filePath, constants.F_OK, async isNotExist => {
        isNotExist ?
        console.error('FS operation failed') :
        await unlink(filePath, err => {
            if (err) throw err;
        })
    })
};

await remove();