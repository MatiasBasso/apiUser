document.addEventListener("DOMContentLoaded", () => {
  const btnUser = document.getElementById("user");
  const contenedor = document.getElementById("contenedor");

  btnUser.addEventListener("click", () => {
    // Realizar la solicitud a la API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Se declaran dos funciones para obtener usuarios aleatorios
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomUser = data[randomIndex];

        // Crear un elemento para mostrar la información del usuario
        const userElement = document.createElement("div");
        userElement.innerHTML = `
          <h2>${randomUser.name}</h2>
          <p><strong>Nombre de usuario:</strong> ${randomUser.username}</p>
          <p><strong>Email:</strong> ${randomUser.email}</p>
          <p><strong>Teléfono:</strong> ${randomUser.phone}</p>
          <p><strong>Website:</strong> ${randomUser.website}</p>
        `;

        // Limpiar el contenedor antes de agregar el nuevo usuario
        contenedor.innerHTML = "";

        // Agregar la información del usuario al contenedor
        contenedor.appendChild(userElement);
      })
      .catch((error) => {
        console.error("Error al cargar el usuario", error);
      });
  });
});
