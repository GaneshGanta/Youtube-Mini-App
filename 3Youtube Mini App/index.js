
let q;
let search =async ()=>{
    
    let query=document.querySelector(".search-bar").value;
    q=query;
    console.log(query)
    let arr= await get(query);
    show(arr.items); 
}

let get=async (movie)=>{
     
    let url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${movie}&key=AIzaSyCdNXXqNKfE9gfMLTJoEjlNoLma2MbzbWo`;
   // let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&regionCode=IN&key=AIzaSyCdNXXqNKfE9gfMLTJoEjlNoLma2MbzbWo`;   
    let res=await fetch(url);
    let data=await res.json();
    return data;

}
let show=(arr)=>{
    console.log(arr)
    let main=document.getElementById("container")
    main.innerHTML="";
    let fil=document.querySelector("#filter")
    fil.innerHTML=null;
    let btn=document.createElement("button")
    btn.setAttribute("class","btn")
    btn.addEventListener("click", ()=>{
        filter();
    })
    btn.innerText="click to Filter by channel Id T-series"
    fil.append(btn)
    arr.forEach(({id:{videoId},snippet:{title}},i) => {
        let div=document.createElement("div")
        div.onclick=()=>{
              video(arr[i])
        }
        let image=document.createElement("iframe");
        //let link=el.id.videoId;
       let link = videoId;
        image.src=`https://www.youtube.com/embed/${link}`;
        let p=document.createElement("p")
       // p.innerText=el.snippet.title;
        p.innerText=title;
        div.append(image,p)
        main.append(div)
    })
}
let filter = async() => {

    let dat= await get(q);
    let item=dat.items;
    item=item.filter((el) =>{
        return el.snippet.channelId==="UCq-Fj5jknLsUf-MWSy4_brA";
    })
    show(item); 




}
  

