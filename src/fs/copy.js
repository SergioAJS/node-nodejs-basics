import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { cp, access, constants } from 'node:fs';

const file = 'src/fs/files_copy';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files');
    const fileCopyPath = path.join(__dirname, 'files_copy');

    await access(fileCopyPath, constants.F_OK, async isNotExist => {
        isNotExist ?
        await access(filePath, constants.F_OK, async isNotExist => {
            if (isNotExist) {
                console.error('FS operation failed');
                return;
            } 
            await cp(filePath, fileCopyPath, {recursive: true}, err => {
                if (err) {
                    console.error(err);
                }
            })
        }) :
        console.error('FS operation failed');
    })
};

await copy();
