import { gql } from "apollo-angular";

 

  const getFruits = gql`
 query{
  allFruits{
    id,
    name, 
    price
  }
}
 `
  const addFruit = gql`
  mutation($name:String! , $price:Float!){
    createFruit(name: $name ,  price: $price ){
          id,
      name,
      price
    }
  }
 `

 export {getFruits , addFruit};