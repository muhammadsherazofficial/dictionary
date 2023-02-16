

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c52066fe77msh0c86355259bd4e7p16df92jsn50b8708b4d35',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' +word, options)
        .then(response => response.json())
        .then((response) => {

         //  console.log(response)

           if(response.valid == true){
               wordHeading.innerHTML = response.word
               defination.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
           }
           else{
            wordHeading.innerHTML = response.word
            defination.innerHTML = "Not a Word!";
           }
            })
        .catch(err => console.error(err));
}

searchBtn.addEventListener("click", (e)=>{
e.preventDefault()
if(searchInput.value != "")
dictionary(searchInput.value)

})