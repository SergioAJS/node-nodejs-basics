import process from 'node:process';

const transform = async () => {
    await process.stdin.on('data', async data => {
        data = await data.toString().split('').reverse().join('').trimStart();
        await process.stdout.write(data + '\n\n');
    })
};

await transform();