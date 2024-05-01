import { ref } from "vue"

let GetMemberDetail=(id)=>{
    let member=ref("")
    let error=ref("")

    let load=async()=>{
       try {
        await new Promise((resolve,reject)=>{
            setTimeout(resolve,2000)
        })
        let response=await fetch("http://localhost:3000/members/"+id)

        if(response.status === 404){
            throw new Error("wrong")
        }

        let data=await response.json()
        member.value=data
       } catch (error) {
        error.value=error.message
       }
    }

    return {member,error,load}
}

export default GetMemberDetail