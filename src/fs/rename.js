import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { access, constants, rename as fsRename } from 'node:fs';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const wrongFilePath = path.join(__dirname, 'files', '/', 'wrongFilename.txt');
    const properFilePath = path.join(__dirname, 'files', '/', 'properFilename.md');

    await access(wrongFilePath, constants.F_OK, async isNotExist => {
        isNotExist ? 
        console.error('FS operation failed') :
        await access(properFilePath, constants.F_OK, async isNotExist => {
            isNotExist ? await fsRename(wrongFilePath, properFilePath, err => {
                if (err) throw err;
            }) :
            console.error('FS operation failed');
        })
    })
};

await rename();