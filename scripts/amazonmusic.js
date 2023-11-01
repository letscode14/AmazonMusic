/*usese module*/
import {library ,saveToStorage} from "./lilbrary.js";
import { musicList,musicList2 } from "./musiclist.js";

/* looping through each objects in array */
let musicHTML ='';
musicList.forEach((list) =>{
    musicHTML +=`
    <div class="col-4 col-sm-4 col-md-4 col-lg-3 col-xl-2">
        <img class="img-fluid mb-2" src="${list.image}">
        <span class="h6 text-white ">${list.musicInfo}</span>
     </div>
    `;
});
document.querySelector('.js-musicList').innerHTML =musicHTML;
let musicHTML2='';
musicList2.forEach((List) =>{
    musicHTML2 +=`<div class="col music-list-grid  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 
    d-flex align-items-center p-2  justify-content-between">
      <div class="text-start d-flex">
        <img class="h-100" src="${List.image}">
        <p class="ms-3 m-0  music-info text-white">${List.musicInfo}<br>
          <span class="singer-info ">${List.musicSingerInfo}</span></p>
      </div> 
      <div class="buttons d-flex align-items-center"> 
           
           <button class="btn btn-outline-secondary me-2"> &#9654;</button>
        <div class="position-relative add">
          <button class="add-button js-add btn btn-outline-secondary "
          data-music-id="${List.id}">&#43;</button>
          <span class="add-library  ">Add to Library</span>
          
        </div> 
      </div>
    </div>`
});
const add = document.querySelector('.js-add-sign');
function added(){
  add.classList.add("added-js");
};
function remove(){
   setTimeout(() =>{
    add.classList.remove("added-js");
  },1000) ;
};
document.querySelector('.js-musicList2').
innerHTML =musicHTML2;
document.querySelectorAll('.js-add').forEach((button)=>{
  button.addEventListener('click',()=>{
    const musicId = button.dataset.musicId; 
    let addedSong;
    library.forEach ((song) => {
      if (musicId === song.Id){
          addedSong = song;
        }
      });
      if (addedSong){
          added();
          remove();
          add.innerHTML = `Already EXIT &#10060; `;
      }else{
        added();
        remove();
          library.push({
          Id: musicId,
          noOfSongs : '2'
          });
      };
       saveToStorage();
  });
});


