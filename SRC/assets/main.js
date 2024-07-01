const API_URL = 'https://fakestoreapi.com/products?limit=8';

async function fetchProducts() {
  try {
    console.log('Intentando obtener datos de:', API_URL);
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Datos obtenidos de la API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

function renderProducts(products) {
  const productContainer = document.getElementById('productContainer');
  productContainer.innerHTML = '';

  products.forEach(product => {
    console.log('Producto:', product);
    const imageUrl = product.image || 'https://via.placeholder.com/300?text=No+Image';
    console.log('URL de la imagen:', imageUrl);

    const productElement = `
      <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${imageUrl}" alt="${product.title}" class="w-full h-full object-center object-cover lg:w-full lg:h-full"
               onerror="console.error('Error cargando imagen:', this.src); this.onerror=null; this.src='https://via.placeholder.com/300?text=Error+Loading+Image'; this.alt='Error cargando imagen';">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            ${product.title}
          </h3>
        </div>
      </div>
    `;
    productContainer.innerHTML += productElement;
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProducts();
  if (products && products.length > 0) {
    renderProducts(products);
  } else {
    console.error('No se pudieron cargar los productos');
    document.getElementById('productContainer').innerHTML = '<p class="text-red-500">Error: No se pudieron cargar los productos</p>';
  }
});
