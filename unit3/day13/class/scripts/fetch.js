
let getData=async(url)=>{
    
        let res=await fetch(url)
        let data=await res.json()
        // console.log(data)
        // append(data)
    return data
    
    }
   
    
    
    let append=(data,containe)=>{
        let container=document.getElementById("container")
    
       data.map((elem)=>{
           let p=document.createElement("p")
           p.innerText=elem.title
           container.append(p)
       })   
    }

    export { getData,append}