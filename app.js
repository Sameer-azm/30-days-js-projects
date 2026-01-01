const quote=document.getElementById("quote")
const author=document.getElementById("author")

// const apiurl="https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"
const apiurl = "https://dummyjson.com/quotes/random"
async function getinput(url) {
    const response=await fetch(url);
    var data =await response.json();
     quote.innerHTML=data.quote
     author.innerHTML=data.author
    
}
getinput(apiurl);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML + " by "+author.innerHTML,"Tweet Window",width=600,height=400)
}