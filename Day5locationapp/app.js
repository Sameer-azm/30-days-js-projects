console.log("hi sm");
let btn = document.querySelector("button");
let img = document.querySelector(".card-img-top");
let title = document.querySelector(".card-title");
let cardtext = document.querySelector(".card-text");
console.log(cardtext);

const showdata=(result)=>{
    img.style.display="block"
    img.src=result[0].flags.png
    title.innerHTML=result[0].name.official
   cardtext.innerHTML =result[0].flags.alt
   btn.style.display="none"
}

const getcountrydetails=async(country)=>{
console.log(country);
let data=await fetch(`https://restcountries.com/v3.1/name/${country}`);
let result=await data.json()
console.log(result);
showdata(result);
console.log(result[0].flags.png);
}

// async function getdetailS(latitude,longitude){
//     let data=await fetch( `https://geocode.xyz/${latitude},${longitude}?geoit=JSON&auth=973675536995838612508x32601`)
//       const result = await data.json();
//     console.log(result.country);
// }


const getdetails=(longitude,latitude)=>{
fetch( `https://geocode.xyz/${latitude},${longitude}?geoit=JSON&auth=973675536995838612508x32601`)
.then((res)=>{
    return res.json()
    }).then((result)=>{
            const {country}=result;
    console.log(country);
    getcountrydetails(country);
    });    
}


const getlocation = () => {
navigator.geolocation.getCurrentPosition(
        function (sucess) {
        const {longitude,latitude}=sucess.coords
        getdetails(longitude,latitude)
        console.log(longitude,latitude);
        // getdetailS(latitude,longitude)
    }, function (error) {
        console.log(error);
})}
btn.addEventListener("click", getlocation);

