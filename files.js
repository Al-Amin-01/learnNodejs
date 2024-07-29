const fs=require('fs');



//reading files
fs.readFile('./assets/abc.txt',(err,data)=>{
    
    console.log(data.toString());
});

//wrrite a file
fs.writeFile('./assets/abc.txt','hello node',(err)=>{
    if(err) console.log(err);
    console.log('data inserted');
})

//create directory
if(!fs.existsSync('./motu'))
fs.mkdir('./motu',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
})
else{
    fs.rmdir('./motu',(err)=>{
        console.log('folder deleted');
    });
}

//delete file
if(fs.existsSync('./assets/abc.txt')){
    fs.unlink('./assets/abc.txt',(err)=>{
        console.log('deleted file');
    })
}