
const dataFetch = () => {
   fetch ("https://jsonplaceholder.typicode.com/users")
   .then(resp => resp.json())
   .then(data => 

      console.log(data),
      
      )
}
dataFetch()




let selectLocation = document.querySelector("select")

selectLocation.onchange = (event) => {
   selectValue = event.currentTarget.value 

   console.log(selectValue)
}

let selectValue = ""
