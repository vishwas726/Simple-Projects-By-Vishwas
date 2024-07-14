let p = document.querySelector("#output")
let btn = document.querySelector("button")

btn.addEventListener("click", async () => {



    p.textContent = await getFact();

    //  let joke=await joke();
    //   p.appendChild(joke)
    let link = await getCat();
    let img = document.querySelector(".cat");

    console.log(link);
    img.classList.add("img");
    img.setAttribute("src", link);



})

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        // console.log(res)
        return res.data.fact;

    } catch (e) {

        return "no Fact"
    }



}

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getCat() {

    try {
        let res = await axios.get(url2);

        return res.data.message;

    } catch (e) {
        return "/";

    }

}

//-----------------------------------------------------------------------------------------
//sending header to the api
let url3 = "https://icanhazdadjoke.com/";

async function joke() {

    try {
        const config = { headers: { Accept: "application/json" } }

        let res = await axios.get(url3, config);

        console.log(res);//this data is hgtml formate
        console.log(res.data.joke)
        return res.data.joke;


    } catch (e) {
        console.log("Error : ", e)
    }

}

let btnjoke = document.querySelector("#btnjoke")
let outputjoke = document.querySelector("#outputjoke")

btnjoke.addEventListener("click", async () => {

    let joke1 = await joke();

    outputjoke.textContent = joke1;


})

//----------------------------------------------------------------------------
//search College
let url4 = "http://universities.hipolabs.com/search?country="


let s = document.querySelector("#search")
s.addEventListener("click", async () => {
    let c = document.querySelector("#country");
    let country = c.value;
    console.log(country);

    let arr =await getCollege(country);
    let list = document.querySelector("#list")
    list.textContent = "";
    console.log(country);
    for (a of arr) {

        let li = document.createElement("li");
        li.innerText = a.name +" country : "+ a.country;
        console.log(a.name)
        list.append(li);

    }

    if(arr.length ==0){
             
        list.textContent = "No Record Found";
    }


})

async function getCollege(country) {

    let res = await axios.get(url4+country);
    console.log(res)
    return res.data;


}
