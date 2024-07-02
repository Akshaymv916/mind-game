const emoji=["<i class='bx bxl-html5'></i>","<i class='bx bxl-html5'></i>","<i class='bx bxl-javascript' ></i>","<i class='bx bxl-javascript' ></i>","<i class='bx bxl-python' ></i>","<i class='bx bxl-python' ></i>","<i class='bx bxl-php' ></i>","<i class='bx bxl-php' ></i>","<i class='bx bxl-react' ></i>","<i class='bx bxl-react' ></i>","<i class='bx bxl-angular' ></i>","<i class='bx bxl-angular' ></i>","<i class='bx bxl-c-plus-plus' ></i>","<i class='bx bxl-c-plus-plus' ></i>"];

var shuf_emoji=emoji.sort(() => (Math.random() > .5) ? 2 : -1);
for(var i=0;i<emoji.length,i++){
    let box=document.createElement('div')
    box.className='item';
    box.innerHTML=shuf_emoji[i]
    document.querySelector('.game').appendChild(box);
}