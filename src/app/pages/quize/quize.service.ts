import { gql } from "apollo-angular";

 

 export const getFruit = gql`
 query{
  allUsers{
    id,
    name, 
  }
}
 `