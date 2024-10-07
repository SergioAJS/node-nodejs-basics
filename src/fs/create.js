import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { open, close, writeFile } from 'node:fs';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, 'files', '/', 'fresh.txt');

  await open(filePath, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('FS operation failed');
        return;
      }
  
      throw err;
    }
  
    try {
      writeFile(filePath, 'I am fresh and young', err => {
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