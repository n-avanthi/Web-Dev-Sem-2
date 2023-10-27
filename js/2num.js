function change(){
    let x=parseInt(prompt("Enter the first number"));
    let y=parseInt(prompt("Enter the second number"));
    
    let dis=document.getElementById("dis");
    let d=document.getElementById("d");
    
    console.log(list.value);
    if(list.value=='Add'){
        let z=x+y;
        console.log(z);
        
        d.innerHTML=z;
    }
    if(list.value=='Sub'){
        let z=x-y;
        console.log(z);
        
        d.innerHTML=z;
    }
    if(list.value=='Mul'){
        let z=x*y;
        console.log(z);
        
        d.innerHTML=z;
    }
    if(list.value=='Div'){
        let z=x/y;
        console.log(z);
        
        d.innerHTML=z;
    }
    if(list.value=='Car^'){
        let z=1;
        for(let i=0;i<y;i++){
            z=z*x;
            
        }
        d.innerHTML=z;
        console.log(z);
    }
}