const integrantes = [
  {
    nombre: "Gabriela Nathaly Artieda Baez",
    carrera: "Tecnologías de la Información",
    nivel: "5to Semestre",
    paralelo: "C2",
    correo: "gartiedab@unemi.edu.ec",
    imagen: "assets/img/gabriela.jpg"
  },
  {
    nombre: "Alex Giovanny Bonifaz Erazo",
    carrera: "Tecnologías de la Información",
    nivel: "5to Semestre",
    paralelo: "C2",
    correo: "abonifaze@unemi.edu.ec",
    imagen: "assets/img/alex.jpg"
  },
  {
    nombre: "Ricardo Cristobal Maldonado Valverde",
    carrera: "Tecnologías de la Información",
    nivel: "5to Semestre",
    paralelo: "C2",
    correo: "rmaldonadov@unemi.edu.ec",
    imagen: "assets/img/ricardo.jpg"
  },
  {
    nombre: "Jose Luis Murillo Minaya",
    carrera: "Tecnologías de la Información",
    nivel: "5to Semestre",
    paralelo: "C2",
    correo: "jmurillom7@unemi.edu.ec",
    imagen: "assets/img/jose.jpg"
  },
  {
    nombre: "Rosalba Marilia Rocohano Lavayen",
    carrera: "Tecnologías de la Información",
    nivel: "5to Semestre",
    paralelo: "C2",
    correo: "rrocohanol@unemi.edu.ec",
    imagen: "assets/img/rosalba.jpg"
  },
  {
    nombre: "Gabriel Alexander Vallejo Rodríguez",
    carrera: "Tecnologías de la Información",
    nivel: "5to Semestre",
    paralelo: "C2",
    correo: "gvallejor@unemi.edu.ec",
    imagen: "assets/img/gabriel.jpg"
  }
];
 
function cargarIntegrantes() {
  const container = document.getElementById('team-container');
  if (!container) return;
 
  container.innerHTML = '';
  integrantes.forEach(estudiante => {
    container.innerHTML += `
      <div class="card-integrante">
        <img src="${estudiante.imagen}" alt="${estudiante.nombre}" class="profile-img">
        <h3>${estudiante.nombre}</h3>
        <p><strong>Carrera:</strong> ${estudiante.carrera}</p>
        <p><strong>Nivel:</strong> ${estudiante.nivel}</p>
        <p><strong>Paralelo:</strong> ${estudiante.paralelo}</p>
        <p><strong>Correo:</strong> ${estudiante.correo}</p>
      </div>
    `;
  });
}
 
document.addEventListener('DOMContentLoaded', cargarIntegrantes);
