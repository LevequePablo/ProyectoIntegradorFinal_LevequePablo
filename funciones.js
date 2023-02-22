const open = document.getElementById('open');
const ventana_emergente = document.getElementById('ventana_emergente');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    ventana_emergente.classList.add('show');  
  });

  close.addEventListener('click', () => {
    ventana_emergente.classList.remove('show');  
  });


  document.getElementById("feedback").addEventListener("click", function (aras) {
    alert("gracias por tu feedback")
});