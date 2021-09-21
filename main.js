
let dataArray 


const dataFetch = () => {
   fetch ("https://jsonplaceholder.typicode.com/users")
   .then(resp => resp.json())
   .then(data => {
      console.log(data)

      dataArray = data
      console.log(...dataArray)
      addInformation()
   })
   

}

dataFetch()








let selectLocation = document.querySelector("select")

selectLocation.onchange = (event) => {
   selectValue = event.currentTarget.value 

   console.log(selectValue)
}

let selectValue = ""

let inputValue
let inputLocation = document.querySelector("input")

inputLocation.onchange = (event) => {
   inputValue = event.currentTarget.value
}


let addInformation = () => {

dataArray.forEach(obj => {

   

let name = obj.name

let surname = obj.name

let email = obj.name




let newRowNode = document.createElement("tr")
newRowNode.innerHTML = `        
         <th scope="row">1</th>
         <td>${name}</td>
         <td>${surname}</td>
         <td>${email}</td>
         `

document.querySelector("#data-table").appendChild(newRowNode)


         })}