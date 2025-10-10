const params = new URLSearchParams(window.location.search);

const productElementID = document.getElementById('producto');

const id = params.get('id');
console.log(id);

productElementID.textContent = `Producto con ID: ${id}`;