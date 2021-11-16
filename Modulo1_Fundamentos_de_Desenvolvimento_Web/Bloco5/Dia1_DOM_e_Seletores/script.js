function corTitulo(tag){
    let titulos1 = document.querySelectorAll(tag);

for(let i in titulos1){
    titulos1[i].style.color = 'red';
};
return titulos1
}
corTitulo(".emergency-tasks h3")

// function corTitulo2(tag2){
//     let titulos2 = document.querySelectorAll(tag2);

// for(let i in titulos2){
//     titulos2[i].style.color = 'red';
// };
// return titulos2
// }
// corTitulo(".no-emergency-tasks h3")

  



// let footer = document.getElementById("footer-container");

// footer.style.backgroundColor = "green"