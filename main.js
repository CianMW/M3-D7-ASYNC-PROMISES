





window.onload = () => {

   fetchData()

}


const fetchData = async () =>  {
       await fetch ("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(body =>
            
            console.log(body)
    )}

let inputValue = document.querySelector("select")





inputValue.onchange = function(event){

   let currentValue =  event.currentTarget.value
   console.log(currentValue)
    
}
