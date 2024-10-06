import { open, close, writeFile } from 'node:fs';

const create = async () => {
  open('src/fs/files/fresh.txt', 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('FS operation failed');
        return;
      }
  
      throw err;
    }
  
    try {
      writeFile('src/fs/files/fresh.txt', 'I am fresh and young', err => {
        if (err) {
          console.error(err);
        }
      });
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  }); 
};

await create();