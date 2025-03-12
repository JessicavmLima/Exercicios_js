const form = document.querySelector("form");
const resp = document.querySelector("h3");

// função de evento quando é apertado o submit

form.addEventListener("submit" , function(event){
 const nome = form.inName.value;
 resp.innerHTML = `olá ${nome}`;
 event.preventDefault();
})