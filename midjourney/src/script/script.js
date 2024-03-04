// let burger = document.querySelector('.burger-menu')
// let nav = document.querySelector('.main-nav')
// burger.addEventListener('click', function() {
//     burger.classList.toggle('active')
//     nav.classList.toggle('active') 
// })


const header = document.getElementById('header');
const imagesDesktop = [
    './src/images/hero-desktop-1.jpg',
    './src/images/hero-desktop-5.jpg',
    './src/images/hero-desktop-6.jpg',
    './src/images/hero-desktop-2.jpg',
    './src/images/hero-desktop-3.jpg',
    './src/images/hero-desktop-4.jpg',
];
const imagesMobile = [
    './src/images/hero-mobile-2.jpg',
    './src/images/hero-mobile-1.jpg',
    './src/images/hero-mobile-3.jpg',
];

let currentIndexDesktop = 0;
let currentIndexMobile = 0;

// Function to preload images
function preloadImages(imageUrls) {
    return Promise.all(imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = url;
        });
    }));
}

function changeBackground() {
    const isMobile = window.innerWidth <= 768; 
    const images = isMobile ? imagesMobile : imagesDesktop; 
    const currentIndex = isMobile ? currentIndexMobile : currentIndexDesktop;
    const newIndex = (currentIndex + 1) % images.length;
    const imageUrl = images[newIndex];

    header.style.backgroundImage = `url('${imageUrl}')`;

    if (isMobile) {
        currentIndexMobile = newIndex;
    } else {
        currentIndexDesktop = newIndex;
    }
}

// Preload all images, then call changeBackground and show the page
Promise.all([
    preloadImages(imagesDesktop),
    preloadImages(imagesMobile)
]).then(() => {
    changeBackground();
    document.body.style.opacity = 1; // Show the page
}).catch((error) => {
    console.error('Error preloading images:', error);
});

window.addEventListener('resize', changeBackground);
setInterval(changeBackground, 2000);




// document.addEventListener('DOMContentLoaded', function() {
//     const jsonPath = '/disney.json'; 

//     fetch(jsonPath)
//         .then(response => response.json())
//         .then(data => {
//             generateImageGallery(data);
//         })
//         .catch(error => {
//             console.error('Error fetching JSON:', error);
//         });

//     function generateImageGallery(jsonData) {
//         const galleryElement = document.getElementById('gallery');
//         galleryElement.innerHTML = ''; 

//         jsonData.forEach(item => {
//             for (let i = 0; i < 4; i++) {
//                 const imageKey = `image_${i}`;
//                 const imageUrl = item[imageKey];

//                 const cardElement = document.createElement('div');
//                 cardElement.classList.add('card');

//                 const cardImageElement = document.createElement('div');
//                 cardImageElement.classList.add('card-image');

//                 const imgElement = document.createElement('img');
//                 imgElement.src = imageUrl;

//                 cardImageElement.appendChild(imgElement);

//                 const cardContentElement = document.createElement('div');
//                 cardContentElement.classList.add('card-content');

//                 const actionButton = document.createElement('button');
//                 actionButton.classList.add('card-action');
//                 actionButton.textContent = 'Prompt'; 
//                 actionButton.onclick = function() {
//                     const index = i;
//                     const promptUrl = `https://www.midjourney.com/jobs/${item.parent_id}?index=${index}`;
//                     window.open(promptUrl, '_blank');
//                 };

//                 cardContentElement.appendChild(actionButton);

//                 cardElement.appendChild(cardImageElement);
//                 cardElement.appendChild(cardContentElement);

//                 galleryElement.appendChild(cardElement);
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan parameter JSON dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const jsonName = urlParams.get('json');

    // Menentukan path menuju file JSON berdasarkan parameter JSON
    const jsonPath = jsonName ? `/${jsonName}.json` : '/json1.json';

    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            generateImageGallery(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

    function generateImageGallery(jsonData) {
        const galleryElement = document.getElementById('gallery');
        galleryElement.innerHTML = ''; // Kosongkan galeri sebelum menambahkan gambar baru

        jsonData.forEach(item => {
            for (let i = 0; i < 4; i++) {
                const imageKey = `image_${i}`;
                const imageUrl = item[imageKey];

                const cardElement = document.createElement('div');
                cardElement.classList.add('card');

                const cardImageElement = document.createElement('div');
                cardImageElement.classList.add('card-image');

                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;

                cardImageElement.appendChild(imgElement);

                const cardContentElement = document.createElement('div');
                cardContentElement.classList.add('card-content');

                const actionButton = document.createElement('button');
                actionButton.classList.add('card-action');
                actionButton.textContent = 'Prompt'; // Mengubah teks tombol menjadi "Prompt"
                actionButton.onclick = function() {
                    const index = i;
                    const promptUrl = `https://www.midjourney.com/jobs/${item.parent_id}?index=${index}`;
                    window.open(promptUrl, '_blank');
                };

                cardContentElement.appendChild(actionButton);

                cardElement.appendChild(cardImageElement);
                cardElement.appendChild(cardContentElement);

                galleryElement.appendChild(cardElement);
            }
        });
    }
});