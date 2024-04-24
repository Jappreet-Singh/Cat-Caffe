document.addEventListener('DOMContentLoaded', function () {
    // Load Header and Footer
    fetch('../site/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    fetch('../site/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Hamburger Menu Interaction
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav_links');

    hamburger.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
    });

    // Navigation Link Active State Toggle
    const links = document.querySelectorAll('#navbar ul li a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            links.forEach(node => node.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');
        });
    });
    
    // Modal Functionality
    window.onclick = function(event) {
        var modal = document.getElementById("myModal");
        if (event.target === modal) {
            closeModal();
        }
    }
});

// Function to open the modal
function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.getElementsByTagName("img")[0].src;
    captionText.innerHTML = element.getElementsByTagName("img")[0].alt;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.getElementById('human-food-btn').addEventListener('click', function() {
    document.getElementById('human-food').classList.add('active');
    document.getElementById('cat-food').classList.remove('active');
});

document.getElementById('cat-food-btn').addEventListener('click', function() {
    document.getElementById('cat-food').classList.add('active');
    document.getElementById('human-food').classList.remove('active');
});

// Get the modal
var modal = document.getElementById('order-modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a menu item, open the modal
var menuItems = document.querySelectorAll('.menu-content li');
menuItems.forEach(function(item) {
  item.onclick = function() {
    document.getElementById('item-name').value = this.textContent.trim().split(' - ')[0]; // Get the item name
    modal.style.display = "block";
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Assuming a fixed price per item for demonstration purposes
const pricePerItem = {
    'Coffee': 3,
    'Tea': 2,
    'Sandwich': 5,
    'Salad': 4,
    'Cake': 4,
    'Tuna Bites': 2,
    'Chicken Jerky': 3,
    'Catnip Snacks': 1.5,
    'Salmon Pâté': 4
  };
  
  document.getElementById('quantity').addEventListener('input', function() {
    // Get the item name and quantity
    const itemName = document.getElementById('item-name').value;
    const quantity = parseInt(this.value, 10) || 0;
  
    // Calculate the total
    const total = (pricePerItem[itemName] || 0) * quantity;
  
    // Display the total
    document.getElementById('total').value = `$${total.toFixed(2)}`;
  });
  