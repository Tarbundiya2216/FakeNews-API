let headlines=document.getElementById('headlines');

let fetchedlines=async function(){
    let res=await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=d4fa4e25d8fa439ab1b94d942a73ac43')

    let data=await res.json()
    console.log(data)
    displatheadlines(data);

}
 fetchedlines();

 let displatheadlines=function(fetcheddata){
    fetcheddata.articles.forEach((element) => {
        let headlinesubdiv=document.createElement('div')
        headlinesubdiv.setAttribute('class','headlinesubdiv')
        headlinesubdiv.style.backgroundImage=`url(${element.urlToImage})`
        headlinesubdiv.innerHTML=`<h3>${element.title}x</h3>`
        headlines.appendChild(headlinesubdiv)
    });

 }
let fetchsports=async function(){
    let res= await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d4fa4e25d8fa439ab1b94d942a73ac43')
    let data=await res.json();
    console.log(data)
    displaysports(data)
}
fetchsports()
let displaysports=function(fetcheddata){
    fetcheddata.articles.forEach(element=>{
for(let key in element){
    if(element[key]==null){
        element[key]`${key} will be updated soon`
    }
}

        let sportssubdiv=document.createElement('div')
        sportssubdiv.setAttribute('class','sportsubdiv');
        sportssubdiv.innerHTML=`<h2>${element.author}</h2>
        <h3>${element.title}</h3>
        <img src=${element.urlToImage}>
        <p>${element.content}</p>   
        <p>${element.description}</p>
        <button>Explore official Website</button>
        <p>Published on : ${element.publishedAt}</p>`
        sportssubdiv.appendChild(sportssubdiv);
    })
}