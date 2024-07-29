setTimeout(()=>{
    console.log('hello node');
    clearInterval(int);
},5000);

const int=setInterval(() => {
    console.log('buddy');
}, 1000);