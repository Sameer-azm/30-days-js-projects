       console.log("js running");
let imgbox=document.getElementById("imgbox")
let qrimg=document.getElementById("qrimg")
let qrtext=document.getElementById("qrtext")

function showqr(){
     if(qrtext.value === ""){
        // alert("Please enter text or URL");
        // return;
        qrtext.classList.add("error");
        setTimeout(()=>{
qrtext.classList.remove("error")
        },1000)
        return;
    }
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value
    imgbox.classList.add("show-img")
} 