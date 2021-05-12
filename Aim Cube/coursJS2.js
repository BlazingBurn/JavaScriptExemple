window.addEventListener("click",function(){
    let div = document.querySelector("div");
    div.style.backgroundColor = "#" +Math.floor(Math.random()*16777215).toString(16);
    div.style.marginTop = Math.floor(Math.random() * 600) + 'px';
    div.style.marginBottom = Math.floor(Math.random() * 600) + 'px';
    div.style.marginRight = Math.floor(Math.random() * 1000) + 'px';
    div.style.marginLeft = Math.floor(Math.random() * 1000) + 'px';
},false);