import {library , removeFromLibrary ,updateNumber} from './lilbrary.js';
import {musicList2} from './musiclist.js';

let libraryHtml = '';
library.forEach((songs) =>{
     const songId = songs.Id;
    let matchingSong;
    musicList2.forEach((song) =>{
        if(song.id===songId){
            matchingSong = song;
        }
    });
    updateNumber();
    libraryHtml += `
        <div class="container music-list-grid  col-12  
            d-flex align-items-center p-2  justify-content-between 
             js-song-container-${matchingSong.id}">
                <div class="text-start d-flex align-items-center ">
                 <img class="h-100 playlist-image" src="${matchingSong.image}">
            </div>
            <div >
                <p class="h6 m-0 music-info-playlist text-white">${matchingSong.musicInfo}
                <span class=" h6 singer-info-playlist ">${matchingSong.musicSingerInfo}</span></p>
            </div>
            <div class="buttons d-flex align-items-center"> 
                <button class="btn btn-outline-secondary me-2"> &#9654;</button>
                <div class="position-relative add">
                <button class="remove-button  btn btn-outline-secondary 
                js-remove-button
                " data-music-id="${matchingSong.id}">
                &#10005;</button>
                <span class="remove-library">Remove</span>
                </div> 
            </div>
        </div>
      `;
});
/*its get the event happenig on remove button*/
document.querySelector('.js-playlist').innerHTML =libraryHtml;
document.querySelectorAll('.js-remove-button')
.forEach((removeButton) =>{
    removeButton.addEventListener('click',() => {
       const musicId= removeButton.dataset.musicId;
       removeFromLibrary(musicId);
       const container = document.querySelector
       (`.js-song-container-${musicId}`);
       container.remove();
    });
});
