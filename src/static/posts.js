const createButton = document.getElementById("createPostButton");
createButton.addEventListener("click", ()=>{
    fetch("http://localhost:8000/post/create", {
        method:"POST",
        body: JSON.stringify(
            {
                name:"New post", 
                img:"https://static.ukrinform.com/photos/2013_06/1371661320_2.jpg",
                description:"post so posting"
            }
        ),
        headers:{
            "Content-Type": "application/json"
        }
    })
})

