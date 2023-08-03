import axios from 'axios';

const searchImages = async (term)=> {

    const response = await axios.get('https://api.unsplash.com/search/photos',{
     headers:{
       Authorization:'Client-ID L4daUMBiQNMbwzFJcF6L63ZjFiWq7qoOG2ohZxKOfM4'
     },
     params:{
      query:term
     }
   })
   debugger;
   return response.data.results;
 };

 export default searchImages;