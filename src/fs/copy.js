import { cp, access, constants } from 'node:fs';

const file = 'src/fs/files_copy';

const copy = async () => {
    access(file, constants.F_OK, isNotExist => {
        isNotExist ?
        access('src/fs/files', constants.F_OK, isNotExist => {
            if (isNotExist) {
                console.error('FS operation failed');
                return;
            } 
            cp('src/fs/files', file, {recursive: true}, err => {
                if (err) {
                    console.error(err);
                }
            })
        }) :
        console.error('FS operation failed');
    })
};

await copy();
