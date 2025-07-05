// Responsive Navigation
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');
navToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
    navToggle.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        navToggle.classList.remove('open');
    });
});

// Smooth scroll to sections
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({behavior: "smooth"});
        }
    });
});

// Hotel rooms data (mock)
const ROOMS = [
    {
        id: 1,
        title: "Royal OnX Retreat",
        desc: "A luxurious king-size suite with rich décor, elegant furnishings, and panoramic views Perfect for guests seeking royal comfort with a touch of timeless class.",
        price: 240,
        rating: 4.8,
        images: [
            "https://images.unsplash.com/photo-1668512624222-2e375314be39?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1657438724423-5808f54847f9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1724072842610-35b3d43da8bd?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        persons: 3
    },
    {
        id: 2,
        title: "Sapphire Comfort room",
        desc: "Spacious and warm, this suite includes a king and twin beds, a sitting area, and all family essentials — designed for comfort, bonding, and a stress-free stay.",
        price: 170,
        rating: 4.4,
        images: [
             "https://images.unsplash.com/photo-1683285422759-bc3454ad273f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
             "https://images.unsplash.com/photo-1658595148900-c77873724e98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        ],
        persons: 2
    },
    {
        id: 3,
        title: "Harmony Family Suits",
        desc: "Spacious and warm, this suite includes a king and twin beds, a sitting area, and all family essentials — designed for comfort, bonding, and a stress-free stay.",

        price: 215,
        rating: 4.7,
        images: [
            "https://images.unsplash.com/photo-1702675301342-cac2dc3ef15a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1624688882479-74d7eda24de8?q=80&w=1295&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1564540583246-934409427776?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
        ],
        persons: 2
    },
    {
        id: 4,
        title: "Zen Garden Suits",
        desc: "view — ideal for guesInspired by nature, this peaceful suite features earthy tones, indoor plants, and a garden ts seeking calm, balance, and simplicity.",
        price: 280,
        rating: 4.6,
        images: [
           "https://images.unsplash.com/photo-1612320582827-a95ab2596dbc?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           "https://images.unsplash.com/photo-1571781418606-70265b9cce90?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        persons: 4
    },
    {
        id: 5,
        title: "Platinum suits",
        desc: "Platinum Rooms offer a luxurious stay with elegantly designed interiors and beautiful, modern bathrooms. Perfect for guests seeking premium comfort and style.",
        price: 110,
        rating: 4.8,
        images: [
          "https://images.unsplash.com/photo-1653974123072-cfb9d69725d9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1721825156439-b21d374968de?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        persons: 1
    }
];

// Render rooms
const roomsList = document.getElementById('rooms-list');
function renderRooms(filteredRooms = ROOMS) {
    roomsList.innerHTML = "";
    if(filteredRooms.length === 0) {
        roomsList.innerHTML = `<div style="padding:1.5rem; text-align:center; color:#d7263d;">No rooms available for your selection.</div>`;
        return;
    }
    filteredRooms.forEach(room => {
        roomsList.innerHTML += `
        <div class="room-card" data-id="${room.id}">
            <div class="room-img-container">
                <img src="${room.images[0]}" alt="${room.title}" class="room-img" data-imgs='${JSON.stringify(room.images)}'>
            </div>
            <div class="room-info">
                <div>
                    <div class="room-title">${room.title}</div>
                    <div class="room-desc">${room.desc}</div>
                </div>
                <div class="room-price">$${room.price}/night</div>
                <div class="room-rating">${'★'.repeat(Math.floor(room.rating))}<span style="color:#bbb">${'★'.repeat(5-Math.floor(room.rating))}</span> (${room.rating})</div>
                <button class="book-btn">Book Now</button>
            </div>
        </div>`;
    });
}

// Booking Form Validation
const bookingForm = document.getElementById('booking-form');
const formError = document.getElementById('form-error');
bookingForm.addEventListener('submit', function(e){
    e.preventDefault();
    formError.textContent = "";

    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = parseInt(document.getElementById('guests').value);

    // validation
    if(!checkin || !checkout) {
        formError.textContent = "Please select both check-in and check-out dates.";
        return;
    }
    if(new Date(checkin).toString() === "Invalid Date" || new Date(checkout).toString() === "Invalid Date") {
        formError.textContent = "Please provide valid dates.";
        return;
    }
    if(new Date(checkin) >= new Date(checkout)) {
        formError.textContent = "Check-out must be after check-in.";
        return;
    }
    if(!guests || guests < 1) {
        formError.textContent = "Please enter a valid number of guests.";
        return;
    }

    // Filter available rooms
    const availableRooms = ROOMS.filter(room => guests <= room.persons);
    renderRooms(availableRooms);

    // Optionally, store booking in localStorage
    try {
        let bookings = JSON.parse(localStorage.getItem('bookings') || "[]");
        bookings.push({checkin, checkout, guests, date: new Date().toISOString()});
        localStorage.setItem('bookings', JSON.stringify(bookings));
    } catch(e){ /* fallback if localStorage disabled */ }

    // Smooth scroll to room list
    document.getElementById('rooms').scrollIntoView({behavior: "smooth"});
});

// Initial render
renderRooms();

// Lightbox Gallery
let currentImgs = [];
let currentImgIdx = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightboxBtn = document.getElementById('close-lightbox');
const prevImgBtn = document.getElementById('prev-img');
const nextImgBtn = document.getElementById('next-img');

roomsList.addEventListener('click', function(e){
    const imgEl = e.target.closest('.room-img');
    if(imgEl){
        currentImgs = JSON.parse(imgEl.dataset.imgs);
        currentImgIdx = 0;
        showLightbox();
    }
});
function showLightbox(){
    if(currentImgs.length === 0) return;
    lightbox.style.display = "flex";
    updateLightboxImg();
    document.body.style.overflow = "hidden";
}
function hideLightbox(){
    lightbox.style.display = "none";
    document.body.style.overflow = "";
}
function updateLightboxImg(){
    lightboxImg.src = currentImgs[currentImgIdx];
}
closeLightboxBtn.addEventListener('click', hideLightbox);
prevImgBtn.addEventListener('click', ()=>{
    if(currentImgs.length === 0) return;
    currentImgIdx = (currentImgIdx - 1 + currentImgs.length) % currentImgs.length;
    updateLightboxImg();
});
nextImgBtn.addEventListener('click', ()=>{
    if(currentImgs.length === 0) return;
    currentImgIdx = (currentImgIdx + 1) % currentImgs.length;
    updateLightboxImg();
});
lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) hideLightbox();
});
window.addEventListener('keydown', function(e){
    if(lightbox.style.display === "flex"){
        if(e.key === "Escape") hideLightbox();
        else if(e.key === "ArrowLeft") prevImgBtn.click();
        else if(e.key === "ArrowRight") nextImgBtn.click();
    }
});

// Book Now button smooth scroll to booking form
roomsList.addEventListener('click', function(e){
    const btn = e.target.closest('.book-btn');
    if(btn){
        document.getElementById('hero').scrollIntoView({behavior: "smooth"});
    }
});

// Active nav link highlighting on scroll
const sections = ["hero", "rooms", "about", "contact"];
window.addEventListener('scroll', ()=>{
    let fromTop = window.scrollY + 80;
    document.querySelectorAll('a.nav-link').forEach(link=>{
        let section = document.querySelector(link.getAttribute('href'));
        if(section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});