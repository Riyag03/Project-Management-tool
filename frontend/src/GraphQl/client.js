
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  //uri: 'https://graphql-simple-project-management-app.onrender.com/graphql',
  cache: new InMemoryCache(),
})

export default client