// Product Array

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Populate Product Dropdown
const productDropdown = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productDropdown.appendChild(option);
});

// Track Review Counter in Local Storage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('reviewCounter') === null) {
        localStorage.setItem('reviewCounter', '0');
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  const lastModifiedDate = new Date(document.lastModified);
  
  const yearElement = document.getElementById('copyright');
  yearElement.textContent = `© ${currentYear} - Last Modified: ${lastModifiedDate.toLocaleDateString()}`;
});
// Increment and Display Review Counter
const counter = localStorage.getItem('reviewCounter');
const updatedCounter = parseInt(counter) + 1;
localStorage.setItem('reviewCounter', updatedCounter);
document.getElementById('reviewCount').textContent = updatedCounter;

