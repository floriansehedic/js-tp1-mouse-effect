// Avec les id, pas besoin de récupérer la balise dans une constante
// console.log(cursor, mouse1, mouse2);


//Code fonctionnel mais peut être optimisé

// window.addEventListener('mousemove', (e) => {
//     // console.log(e);
//     cursor.style.left = e.pageX + "px";
//     cursor.style.top = e.pageY + "px";
    
//     mouse1.style.left = e.pageX + "px";
//     mouse1.style.top = e.pageY + "px";

//     mouse2.style.left = e.pageX + "px";
//     mouse2.style.top = e.pageY + "px";
// });


//Code optimisé
const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.left = e.pageX + "px";
        mouse.style.top = e.pageY + "px";
    })
});