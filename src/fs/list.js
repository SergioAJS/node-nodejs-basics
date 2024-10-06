import { access, constants, readdir } from 'node:fs';

const list = async () => {
    access('src/fs/files', constants.F_OK, isNotExist => {
        isNotExist ?
        console.error('FS operation failed') :
        readdir('src/fs/files', (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(files);
        })
    })
};

await list();