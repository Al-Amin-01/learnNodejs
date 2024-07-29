const fs=require('fs');

const readStream= fs.createReadStream('./motu/data.txt',{encoding:'utf-8'});
const writeStream=fs.createWriteStream('./motu/blog.text');
readStream.on('data',(chunk)=>{
    console.log('__________NEW CHUNK_____________');
    //console.log(chunk);
    writeStream.write('\nchunk\n');
    writeStream.write(chunk);
})