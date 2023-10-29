function generateNumber(){
   const min = Math.ceil(document.querySelector('.elemento1').value)
   const max = Math.floor(document.querySelector('.elemento2').value)

    const result =  Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result)
}