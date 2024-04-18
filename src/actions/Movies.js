
import axios from "axios"


const Movies = ()=>(dispatch) => {
    
                axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                 dispatch({ type: "YAZI", payload: response.data });
             
                 })
                 .catch(() => {
                  
                 })
              
     
      
     
}

export default Movies