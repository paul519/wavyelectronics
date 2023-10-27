// Get references to the previous and next buttons and the product list
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const productList = document.getElementById('products').children;

// Define variables to keep track of the current page and the number of items per page
let currentPage = 1;
const itemsPerPage = 4;

// Function to show products for the current page
function showPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = 0; i < productList.length; i++) {
        if (i >= startIndex && i < endIndex) {
            productList[i].style.display = 'block';
        } else {
            productList[i].style.display = 'none';
        }
    }
}

// Initial display
showPage(currentPage);

// Event listener for the next button
nextBtn.addEventListener('click', function() {
    if (currentPage < Math.ceil(productList.length / itemsPerPage)) {
        currentPage++;
        showPage(currentPage);
    }
});

// Event listener for the previous button
prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});
