
import { ref } from "vue"

 let GetPosts=()=>{
    let posts=ref([]);
    let error=ref('');
   
        let load=async()=>{
          try{   
            await new Promise((resolve,reject)=>{
               setTimeout(resolve,2000)
            })
          
         let response= await fetch('http://localhost:3000/posts')
         if(response.status===404){
            throw new Error(" your route is wrong")
           
         }
         let data= await response.json();
         // console.log(data)
         posts.value=data;
        }
         catch(err){
        error.value=err.message;
    }
    }
   

    return {posts,load,error}
 }
 export default GetPosts;