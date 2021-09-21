

const fetchedArray = []



window.onload = () => {

   fetchData()

}


const fetchData = async () =>  {
   let response = await fetch ("https://jsonplaceholder.typicode.com/users")
let data = await response.json()

fetchedArray.push(data)
console.log(fetchedArray)

  

//return data
      
    }
    const mapped = fetchedArray.item.inputValue
console.log(mapped)

const newObject = Object.assign({}, ...fetchedArray.map(item => ({ [item.name]: item.value })))
console.log(newObject)


    

let inputValue = document.querySelector("select")


inputValue.onchange = function(event){

   let currentValue =  event.currentTarget.value
   console.log(currentValue)
    
}
