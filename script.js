var quote = document.querySelector("#quote")
var btn = document.querySelector("#btn")
var author = document.querySelector("#author")

const API = "gP1eaUwBzWeuNAa9jiKOhQ==tH8j88za5zbhTDzK"
const URL = "https://api.api-ninjas.com/v1/quotes?category=success"


const options = {
    method : 'GET',
    headers :{
        "X-Api-Key" : API
    }
}

btn.addEventListener("click",function(){
    fetch(URL ,options).then((apidata) =>{
         return apidata.json()
        
    }).then((apiquote) =>{
        quote.innerHTML = apiquote[0].quote
        if( author !== "Unkonwn"){
            author.innerHTML = "-- "+ apiquote[0].author
        }
        
    }).catch((err) =>{
        console.log(err)
    })
})