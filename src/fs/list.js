import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { access, constants, readdir } from 'node:fs';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files');

    await access(filePath, constants.F_OK, async isNotExist => {
        isNotExist ?
        console.error('FS operation failed') :
        await readdir(filePath, (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(files);
        })
    })
};

await list();