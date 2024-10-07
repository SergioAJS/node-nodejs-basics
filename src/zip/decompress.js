import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files', '/', 'fileToCompress2.txt');
    const archivePath = path.join(__dirname, 'files', '/', 'archive.gz');
    const unzip = createGunzip();
    const source = createReadStream(archivePath);
    const destination = createWriteStream(filePath);

    await pipeline(source, unzip, destination, (err) => {
        if (err) {
          console.error('Decompress operation failed', err);
          process.exitCode = 1;
        }
      });
  
};

await decompress();