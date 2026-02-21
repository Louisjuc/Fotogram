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
    "Bild 1",
    "Bild 2",
    "Bild 3",
    "Bild 4",
    "Bild 5",
    "Bild 6",
    "Bild 7",
    "Bild 8",
    "Bild 9",
    "Bild 10",
    "Bild 11",
    "Bild 12"
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

    <img src="./img/${imgData[index]}" class="gallery_img" onclick="openDialog(${index})" alt="Thumbnail Bild"></img>
    <dialog class="imgDialog">
    <section class="dialog_section">
    <div class="menu_flex">
    <p>${ImgDescription[index]}</p>
    <img src="./img/close.svg" onclick="closeDialog(${index})" class="close_button" alt="Button zum Schließen">
    </div>
    <img src="./img/${imgData[index]}" class="img_full-width" alt="Bild in voller Breite">
    </section>
    <nav>
  <button>  <img src="./img/prev.svg" alt="Pfeil nach Vorne" ocnlick="nextPicture()"> </button>
    <p>${ImgNumber[index]}/12</p>
   <button> <img src="./img/next.svg" alt="Pfeil Zurück"></button>

    </nav>
  </dialog>
    `
}

function openDialog(index){
    const dialogref = document.getElementsByClassName("imgDialog") [index];
    dialogref.showModal();

}

function closeDialog(index){
    const dialogref = document.getElementsByClassName("imgDialog") [index];
    dialogref.close();
}