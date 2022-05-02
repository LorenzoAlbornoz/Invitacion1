class Persona {
  constructor(nombre, asistencia, mensaje) {
    this.nombre = nombre;
    this.asistencia = asistencia;
    this.mensaje = mensaje;
  }
}

let personas = []

let idForm = document.getElementById("idForm")

idForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let nombre = document.getElementById("nombre").value;
  let asistencia = document.getElementById("asistencia").value;
  let mensaje = document.getElementById("mensaje").value;

  const persona = new Persona(nombre, asistencia, mensaje);

  personas.push(persona);

  idForm.reset();
  console.log(personas);
  let pasoJsonS = JSON.stringify(persona);
  console.log(pasoJsonS);
  let guardoEnLocal = localStorage.setItem("asistencia", pasoJsonS);
  console.log(localStorage);
});


fetch("https://reqres.in/api/users", {
    method: "POST",
    body: '{"nombres": "Belén y Lorenzo", "apellidos": "Díaz y Albornoz"}',
    headers: {
      "Content-type": "application/json"
    }
  }).then(res => res.json())
  .then(res => console.log(res))


 async function getCasamiento (){
    let post = await fetch("https://jsonplaceholder.typicode.com/posts/6")
 const datos = await post.json();
    console.log(datos);
  }

//SweetAlert
const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  Swal.fire({
    title: 'Gracias!',
    text: 'tu asistencia fue enviada',
    icon: 'success',
    confirmButtonText: 'Perfecto',
    backdrop: "black",
    showCancelButton: true,
    allowOutsideClick: false
  })
});

//Toastify
const ubicacion = document.getElementById("btn-notificacion");
ubicacion.addEventListener("click", () => {
  Toastify({
    text: "Ubicación de ceremonia",
    duration: 3000,
    destination: "https://goo.gl/maps/QgA8xLLiEFr14XRV9",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, grey)",
    },
    onClick: function () {} // Callback after click
  }).showToast();
});


const ubicacion1 = document.getElementById("btn-notificacion1");
ubicacion1.addEventListener("click", () => {
  Toastify({
    text: "Ubicación del salón",
    duration: 3000,
    destination: "https://goo.gl/maps/gu6PrGB9DpEtGty58",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, grey)",
    },
    onClick: function () {} // Callback after click
  }).showToast();
});