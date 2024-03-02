import {gql} from 'apollo-angular';


const quQL = gql`
query{
    quize {
        title,
        desc
    }
}
`;

export {quQL}