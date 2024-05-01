// import { reject } from "core-js/fn/promise";
import { ref } from "vue"

let GetPost=(id)=>{
    
    let post=ref(null);
    let error=ref("")

    let load=async()=>{
        try {
            await new Promise ((resolve,reject)=>{
                setTimeout(resolve,2000)
            });
            let response=await fetch("http://localhost:3000/posts/"+id)
            if(response.status === 404){
                throw new Error(" your route is wrong")
               
             }
             let data= await response.json();
            //  console.log(data)
             post.value=data;
        } catch (error) {
            error.value=error.message;
        }
    }
    return {post,error,load}

}
export default GetPost;