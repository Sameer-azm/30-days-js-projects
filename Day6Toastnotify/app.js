console.log("js running");
let toastbox=document.getElementById("toastbox")
let sucessMsg='<i class="fa-solid fa-check"></i> Sucessfully submitted';
let ErrorMsg='<i class="fa-solid fa-bomb"></i> PLease fix the error'
let InvalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Check again,Invalid input'
function showtoast(msg){
    let toast=document.createElement("div");
    toast.classList.add("toast")
    toast.innerHTML=msg
      toastbox.appendChild(toast)
    if (msg.includes("error")){
        toast.classList.add("error")
    }
     if (msg.includes("Invalid")){
        toast.classList.add("Invalid")
    }
   
    setTimeout(()=>{
        toast.remove()
    },6000)
  
}