import { access, constants, rename as fsRename } from 'node:fs';


const rename = async () => {
    access('src/fs/files/wrongFilename.txt', constants.F_OK, isNotExist => {
        isNotExist ? 
        console.error('FS operation failed') :
        access('src/fs/files/properFilename.md', constants.F_OK, isNotExist => {
            isNotExist ? fsRename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', err => {
                if (err) throw err;
            }) :
            console.error('FS operation failed');
        })
    })
};

await rename();