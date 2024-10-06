import { access, constants, readFile } from 'node:fs';

const read = async () => {
    readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('FS operation failed');
            return;
        }
        console.log(data);
    })
};

await read();