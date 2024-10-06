import { access, constants, unlink } from 'node:fs';

const remove = async () => {
    access('src/fs/files/fileToRemove.txt', constants.F_OK, isNotExist => {
        isNotExist ?
        console.error('FS operation failed') :
        unlink('src/fs/files/fileToRemove.txt', err => {
            if (err) throw err;
        })
    })
};

await remove();