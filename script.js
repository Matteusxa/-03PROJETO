function generateNumber(){
   const min = Math.ceil(document.querySelector('.elemento1').value)
   const max = Math.floor(document.querySelector('.elemento2').value)

    if(min >= max){
        alert('O valor minimo tem quer ser MENOR que o valor MÁXIMO')
    } else{
        const result =  Math.floor(Math.random() * (max - min + 1)) + min;
    
        alert(result)
    }


  
}