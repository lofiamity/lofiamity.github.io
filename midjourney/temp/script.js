// Fungsi untuk membuat daftar URL gambar berdasarkan pola nama file dan membuat galeri
// function generateImageGallery(startIndex, endIndex, baseUrl) {
//     const galleryElement = document.getElementById('gallery');
    
//     const imageUrls = [];
//     for (let i = startIndex; i >= endIndex; i--) { // Mulai dari nomor file 3 hingga nomor file 1
//         const paddedIndex = String(i).padStart(3, '0');
//         const imageUrl = `${baseUrl}/${paddedIndex}.jpg`;
//         imageUrls.push(imageUrl);
//     }
//     console.log(imageUrls); // Log array imageUrls untuk memastikan URL gambar sudah dibuat dengan benar

//     for (const imageUrl of imageUrls) {
//         // Buat elemen untuk setiap gambar
//         const cardElement = document.createElement('a');
//         cardElement.classList.add('card');
//         cardElement.href = imageUrl; // Tautan gambar penuh

//         const cardImageElement = document.createElement('div');
//         cardImageElement.classList.add('card-image');

//         const imgElement = document.createElement('img');
//         imgElement.src = `${imageUrl}?tr=w-596,h-1152`; // Thumbnail

//         cardImageElement.appendChild(imgElement);

//         const cardContentElement = document.createElement('div');
//         cardContentElement.classList.add('card-content');

//         const cardInfoElement = document.createElement('div');
//         cardInfoElement.classList.add('card-info');

//         const titleElement = document.createElement('h2');
//         titleElement.classList.add('card-title');

//         // Mendapatkan nomor file dari URL gambar
//         const fileNumber = parseInt(imageUrl.match(/\/(\d+)\.jpg$/)[1]);
//         titleElement.textContent = `#${fileNumber}`;

//         cardInfoElement.appendChild(titleElement);

//         const actionButton = document.createElement('button');
//         actionButton.classList.add('card-action');
//         actionButton.innerHTML = `<i class="material-symbols-outlined">download</i>`;
//         actionButton.onclick = function() {
//             // Untuk men-download gambar asli
//             window.open(imageUrl);
//         };

//         cardContentElement.appendChild(cardInfoElement);
//         cardContentElement.appendChild(actionButton);

//         cardElement.appendChild(cardImageElement);
//         cardElement.appendChild(cardContentElement);

//         galleryElement.appendChild(cardElement);
//     }
// }

// // Panggil fungsi untuk membuat galeri saat halaman dimuat
// document.addEventListener('DOMContentLoaded', function() {
//     // Contoh: Membuat galeri dari nomor file 3 hingga 1
//     const baseUrl = 'https://ik.imagekit.io/calestialjourney/showcase'; // Ubah sesuai dengan URL dasar koleksi gambar Anda
//     const startIndex = 3; // Nomor file awal
//     const endIndex = 1; // Nomor file terakhir

//     generateImageGallery(startIndex, endIndex, baseUrl);
// });

