document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');

    const img = document.createElement('img');
    img.src = 'images/Depositphotos_404687154_DS.jpg'; // Correct relative path
    img.alt = 'Loaded via JavaScript';

    gallery.appendChild(img);
});
