/*this containes the updated library*/
export  let library = JSON.parse(localStorage.getItem('library')) 
if(!library){
    library =[{
        Id: '10',
        noOfSongs:'1'
    },{
        Id:'10',
        noOfSongs:'1'
      }
    ];
};
export function updateNumber(){
  const length = library.length;
    document.querySelector('.js-noOfSongs').innerHTML = length;
};
/*these show the sign when a song removed from library*/
const add = document.querySelector('.js-remove');
function added(){
  add.classList.add("js-removed");
};
function remove(){
   setTimeout(() =>{
    add.classList.remove("js-removed");
  },1000) ;
};
/*------*/
export function saveToStorage(){
localStorage.setItem('library' , JSON.stringify(library));
};
export function removeFromLibrary(musicId){
    const newLibrary =[];
    library.forEach((song) => {
      if(song.Id !== musicId){
        newLibrary.push(song);
      }
      added();
      remove();
    });
  library = newLibrary;
  updateNumber();
  saveToStorage();
};
