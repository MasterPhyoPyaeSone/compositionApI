// import { reject } from "core-js/fn/promise";
import { ref } from "vue"

let GetMembers=()=>{
    let members=ref([]);
    let error=ref('')

    let membersList=async()=>{
        try {
            await new Promise((resolve,reject)=>{
                setTimeout(resolve,2000)
            })
            let response = await fetch("http://localhost:3000/members")
            if(response.status === 404){
                throw new Error("try again")
            }
           let data=await response.json()
           members.value=data

        } catch (error) {
             error.value=error.message
        }
    }

    return {members,error,membersList}
}

export default GetMembers



// import { ref } from "vue"
//     let GetMembers=()=>{
//         let members=ref([])
//         let error=ref("")

//         let membersList=async()=>{
//             try {
//                 let response=await fetch("http://localhost:3000/members")
//                 if(response.status === 404){
//                     throw new Error("Ur Link Is Wrong")
//                 }
//                 let data= await response.json()
//                 members.value=data
//             } catch (error) {
//                 error.value=error.message
//             }
//         }

//         return {membersList,members,error}
//     }

// export default GetMembers