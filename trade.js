let numb = document.getElementById ("num");
let counter = 0 ;
setInterval(()=>{
    if(counter==65){
        clearInterval();
    }else{
        counter += 1;
    numb.innerHTML = counter + "%";

    }
    
},27);