
let titulo1 = document.querySelectorAll(".emergency-tasks h3");

for(let i = 0; i < titulo1.length; i += 1){
    titulo1[i].style.color = 'red';
};

let titulo2 = document.querySelectorAll(".no-emergency-tasks h3");

for(let index = 0; index < titulo2.length; index += 1){
    titulo2[index].style.color = 'darkblue';
};
  

let footer = document.getElementById("footer-container");

footer.style.backgroundColor = "green";
footer.style.textAlign = "left"
