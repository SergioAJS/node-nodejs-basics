import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, 'files', '/', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', '/', 'archive.gz');
    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(archivePath);
    
    await pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('Compress operation failed', err);
        process.exitCode = 1;
      }
    });
};

await compress();