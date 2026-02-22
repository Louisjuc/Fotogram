let dialogs = document.getElementsByClassName("imgDialog");

let imgData = 
[
"eisberg.jpg",
"ente.jpg",
"mensch_nacht.jpg",
"nachthimmel.png",
"panorama.jpg",
"schnee.jpg",
 "see.jpg",
 "stadt_nacht.jpg",
 "vogel_white.jpg",
"vogel.jpg",
"weltall.jpg",
"wildkatze.jpg"
]

let  ImgDescription= [
    "Berge Panorama",
    "Ente schwimmt im Wasser",
    "Person betrachtet den Nachthimmel",
    "Bewölkter Himmel",
    "Aussicht Berg",
    "Baum im Winter",
    "See Panorama",
    "Stadt bei Nacht",
    "Schneeammer",
    "Blaumeise",
    "Hurricane",
    "Leopard"
]

let  ImgNumber= [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
   8,
   9,
    10,
   11,
  12
]




function render(){
    let contentRef = document.getElementById('img_content');
    contentRef.innerHTML = ""
    for (let index = 0; index < imgData.length; index++) {
        contentRef.innerHTML += imgTemplate(index, imgData);
    }
}

function imgTemplate(index){
    return`

    <img src="./img/${imgData[index]}" class="gallery_img" onclick="openDialog(${index})" alt="${ImgDescription[index]}"></img>
    <dialog class="imgDialog">
    <section class="dialog_section">
    <div class="menu_flex">
    <p>${ImgDescription[index]}</p>
    <img src="./img/close.svg" onclick="closeDialog(${index})" class="close_button" alt="Button zum Schließen" tabeindex="0">
    </div>
    <img src="./img/${imgData[index]}" class="img_full-width" alt="${ImgDescription[index]}">
    </section>
    <nav>
  <button onclick="prevPicture(${index})">  <img src="./img/prev.svg" alt="Pfeil zurück" > </button>
    <p>${ImgNumber[index]}/12</p>
   <button onclick="nextPicture(${index})"> <img src="./img/next.svg" alt="Vorwärts"></button>

    </nav>
  </dialog>
    `
}

function openDialog(index){
  dialogs[index].showModal();
}

function closeDialog(index){
    dialogs[index].close();
}
function nextPicture(index){

  dialogs[index].close();

  let newIndex = index + 1;
  if(newIndex >= dialogs.length){
      newIndex = 11;
  }
  
  dialogs[newIndex].showModal();
}

function prevPicture(index){
dialogs[index].close();

let newIndex = index - 1;
dialogs[newIndex].showModal();

}

