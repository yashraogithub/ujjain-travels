

/* ===== DATA ===== */
const placesData = [
    {
        name: "Mahakaleshwar Temple",
        category: "temple",
        location: "Jaisinghpura, Ujjain",
        description: "One of the twelve Jyotirlingas, the most sacred Shiva temple in Ujjain. Famous for the Bhasma Aarti performed with sacred ash at 4 AM.",
        fullDesc: "Mahakaleshwar Temple is one of the most sacred Hindu temples dedicated to Lord Shiva. It houses one of the twelve Jyotirlingas, which are considered the most sacred abodes of Shiva. The temple is situated on the banks of the holy river Shipra. The presiding deity, Lord Mahakaleshwar, is believed to be swayambhu (self-manifested). The lingam is unique as it is dakshinamurti, facing south, which is a distinctive feature among the twelve Jyotirlingas. The famous Bhasma Aarti, performed with sacred ash from cremation grounds, is a unique ritual found nowhere else in the world.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/ee03b6ef-30d3-43eb-8fdd-226015e4827d.png",
        rating: "4.9",
        price: "Free Entry",
        highlights: ["Bhasma Aarti at 4:00 AM", "One of 12 Jyotirlingas", "South-facing Lingam", "Ancient Nagchandreshwar Temple on top floor", "Open during Nag Panchami only (top floor)", "Beautiful evening light ceremony"],
        timing: "4:00 AM – 11:00 PM"
    },
    {
        name: "Ram Ghat",
        category: "ghat",
        location: "Shipra River, Ujjain",
        description: "The most prominent ghat on the Shipra river, famous for the evening aarti ceremony and Simhasth Kumbh Mela bathing rituals.",
        fullDesc: "Ram Ghat is the principal and most sacred ghat on the banks of the Shipra river in Ujjain. It is the main bathing ghat during the Simhasth Kumbh Mela, one of the largest religious gatherings in the world. Every evening, a beautiful aarti ceremony is performed here with oil lamps, flowers, and chanting. The ghat is lined with ancient temples and provides a serene atmosphere for meditation and prayer. During Kumbh Mela, millions of devotees take a holy dip here believing it washes away sins.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/d24806a4-2f5c-4a4e-bfdd-5b85d0fd2d35.png",
        rating: "4.7",
        price: "Free",
        highlights: ["Evening Aarti Ceremony", "Kumbh Mela Bathing Ghat", "Ancient Temples Along River", "Sunrise & Sunset Views", "Boat Rides Available", "Meditation Spots"],
        timing: "Open 24 Hours"
    },
    {
        name: "Kal Bhairav Temple",
        category: "temple",
        location: "Bhairavgarh, Ujjain",
        description: "Ancient temple dedicated to Kal Bhairav, the fierce form of Shiva. Famous for the unique ritual of offering liquor to the deity.",
        fullDesc: "Kal Bhairav Temple is one of the most important and ancient temples in Ujjain, dedicated to Kal Bhairav, the fierce manifestation of Lord Shiva. According to Hindu mythology, Kal Bhairav is the guardian deity (Kotwal) of Ujjain. The temple is famous for its unique practice of offering liquor (madira) to the deity, a tradition that has continued for centuries. Devotees offer liquor in a bowl near the deity's mouth, and it mysteriously disappears, which is considered a divine miracle.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/ea95b97b-af0f-4246-9a50-55998a403e04.png",
        rating: "4.6",
        price: "Free Entry",
        highlights: ["Liquor Offering Ritual", "Guardian Deity of Ujjain", "Ancient Stone Architecture", "Miraculous Disappearing Offering", "Powerful Spiritual Energy", "Located on Shipra Bank"],
        timing: "5:00 AM – 10:00 PM"
    },
    {
        name: "Sandipani Ashram",
        category: "heritage",
        location: "Ankapata, Ujjain",
        description: "The legendary ashram where Lord Krishna, Balarama, and Sudama studied under Guru Sandipani. Houses ancient stone inscriptions.",
        fullDesc: "Sandipani Ashram is a historically and spiritually significant site in Ujjain where, according to Hindu mythology, Lord Krishna, his brother Balarama, and their friend Sudama received their education from Guru Sandipani. The ashram is believed to be over 5,000 years old. It houses the Gomti Kund, a water tank said to have been created by Lord Krishna, and ancient stone inscriptions with numerals 1 to 100 believed to have been written by Guru Sandipani himself. The peaceful atmosphere makes it ideal for meditation.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/a40c9f4e-0766-44e2-93ab-647244362c86.png",
        rating: "4.5",
        price: "Free Entry",
        highlights: ["Lord Krishna's School", "Gomti Kund Water Tank", "Ancient Stone Numerals", "5000+ Years Old", "Peaceful Meditation Area", "Beautiful Gardens"],
        timing: "6:00 AM – 8:00 PM"
    },
    {
        name: "Vedha Shala Observatory",
        category: "heritage",
        location: "Triveni Ghat Road, Ujjain",
        description: "Ancient astronomical observatory built by Maharaja Jai Singh II in 1725. One of five such observatories in India.",
        fullDesc: "Vedha Shala (Jantar Mantar) is an astronomical observatory built by Maharaja Jai Singh II of Jaipur in 1725 AD. It is one of five such observatories built across India (others in Jaipur, Delhi, Varanasi, and Mathura). Ujjain was chosen because it was considered the prime meridian (zero longitude) of ancient India. The observatory contains 13 architectural astronomical instruments used to measure time, predict eclipses, track stars, and determine celestial altitudes. It remains a testament to India's advanced astronomical knowledge.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/3c3b8bd2-cd4a-4766-a01a-4bfb7b15d1a5.png",
        rating: "4.4",
        price: "₹15 / person",
        highlights: ["Built in 1725 AD", "13 Astronomical Instruments", "Ancient Prime Meridian of India", "One of 5 Observatories", "Measures Time & Eclipses", "UNESCO Heritage Interest"],
        timing: "9:00 AM – 5:00 PM"
    },
    {
        name: "Ujjain Heritage Walk Tour",
        category: "tour",
        location: "Starts from Ram Ghat",
        description: "A guided walking tour through Ujjain's ancient streets, visiting hidden temples, local markets, and tasting authentic street food.",
        fullDesc: "The Ujjain Heritage Walk is a curated 3-hour guided walking tour that takes you through the ancient lanes and bylanes of Ujjain. Starting from Ram Ghat, the walk covers hidden temples, ancient havelis, the bustling local markets of Gopal Mandir area, and includes stops for authentic Ujjaini street food like poha-jalebi and bada-pav. The guide shares fascinating stories about the city's mythology, history, and local traditions. Perfect for travelers who want to experience the real, lived-in culture of Ujjain beyond the major tourist sites.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/26a902c7-a968-4d81-a4f9-744a429578a0.png",
        rating: "4.8",
        price: "₹499 / person",
        highlights: ["3-Hour Guided Walk", "Hidden Temples & Havelis", "Street Food Tasting", "Local Market Experience", "Mythology & History Stories", "Small Group (Max 12)"],
        timing: "7:00 AM & 4:00 PM Daily"
    },
    {
        name: "Hotel Rudraksh Ujjain",
        category: "hotel",
        location: "Mahakal Corridor, Ujjain",
        description: "Premium hotel located steps away from the Mahakal Corridor with rooftop temple views, modern amenities, and traditional hospitality.",
        fullDesc: "Hotel Rudraksh is a premium accommodation located right next to the newly built Mahakal Corridor in Ujjain. The hotel offers stunning rooftop views of the Mahakaleshwar Temple spire and the beautifully illuminated corridor. Rooms are spacious with modern amenities including AC, WiFi, flat-screen TV, and attached bathrooms. The in-house restaurant serves pure vegetarian Malwa cuisine and North Indian dishes. The hotel also arranges Bhasma Aarti bookings, temple guides, and local transport for guests.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/ee03b6ef-30d3-43eb-8fdd-226015e4827d.png",
        rating: "4.6",
        price: "₹3,200 / night",
        highlights: ["Mahakal Corridor Location", "Rooftop Temple Views", "Pure Veg Restaurant", "Bhasma Aarti Booking Help", "Free WiFi & Parking", "24/7 Front Desk"],
        timing: "Check-in: 12 PM | Check-out: 11 AM"
    },
    {
        name: "Harsiddhi Temple",
        category: "temple",
        location: "Near Rudra Sagar, Ujjain",
        description: "One of the 51 Shakti Peethas dedicated to Goddess Annapurna. Famous for its twin deepmala pillars lit during Navratri.",
        fullDesc: "Harsiddhi Temple is one of the 51 Shakti Peethas and is dedicated to Goddess Annapurna (a form of Parvati). According to legend, this is the spot where Goddess Sati's elbow fell. The temple is famous for its two magnificent deepmala (lamp tower) pillars that stand at the entrance. During Navratri, these pillars are lit with thousands of oil lamps, creating a breathtaking spectacle. The temple also houses idols of Goddess Mahalakshmi and Goddess Mahasaraswati alongside the main deity.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/d24806a4-2f5c-4a4e-bfdd-5b85d0fd2d35.png",
        rating: "4.5",
        price: "Free Entry",
        highlights: ["51 Shakti Peethas", "Twin Deepmala Pillars", "Navratri Lamp Festival", "Goddess Annapurna Shrine", "Ancient Architecture", "Near Rudra Sagar Lake"],
        timing: "5:00 AM – 9:30 PM"
    },
    {
        name: "Mangalnath Temple",
        category: "temple",
        location: "Mangalnath Road, Ujjain",
        description: "Ancient temple considered the birthplace of planet Mars (Mangal). Important for Mangal Dosh puja and remedies.",
        fullDesc: "Mangalnath Temple is an ancient Hindu temple situated on a hilltop in Ujjain, considered to be the birthplace of Mangal (Mars) according to Hindu mythology. The temple holds great astrological significance as Ujjain is believed to be the place from where Mars was born. Devotees suffering from Mangal Dosh (an astrological condition) visit this temple to perform special pujas and rituals for remedies. The hilltop location offers panoramic views of the Shipra river valley and the city of Ujjain.",
        image: "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/ea95b97b-af0f-4246-9a50-55998a403e04.png",
        rating: "4.3",
        price: "Free Entry",
        highlights: ["Birthplace of Mars (Mangal)", "Mangal Dosh Puja", "Hilltop Panoramic Views", "Astrological Significance", "Ancient Shiva Temple", "Shipra Valley Views"],
        timing: "5:00 AM – 9:00 PM"
    }
];

const galleryImages = [
    "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/ee03b6ef-30d3-43eb-8fdd-226015e4827d.png",
    "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/d24806a4-2f5c-4a4e-bfdd-5b85d0fd2d35.png",
    "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/ea95b97b-af0f-4246-9a50-55998a403e04.png",
    "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/a40c9f4e-0766-44e2-93ab-647244362c86.png",
    "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/3c3b8bd2-cd4a-4766-a01a-4bfb7b15d1a5.png",
    "https://mgx-backend-cdn.metadl.com/generate/images/977678/2026-02-18/26a902c7-a968-4d81-a4f9-744a429578a0.png"
];

/* ===== NAVBAR ===== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 500);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = navLinks.querySelector(`a[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
});

/* ===== HERO SLIDER ===== */
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.slide)));
});

setInterval(() => goToSlide((currentSlide + 1) % slides.length), 5000);

/* ===== PLACES GRID ===== */
let currentFilter = 'all';

function renderPlaces(filter, search) {
    const grid = document.getElementById('placesGrid');
    const filtered = placesData.filter(place => {
        const matchFilter = filter === 'all' || place.category === filter;
        const matchSearch = !search || place.name.toLowerCase().includes(search.toLowerCase()) || place.description.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
    });

    grid.innerHTML = filtered.map((place, i) => `
        <div class="place-card" onclick="openDetail(${placesData.indexOf(place)})" style="animation: fadeInUp 0.5s ease ${i * 0.1}s both;">
            <div class="place-card-img">
                <img src="${place.image}" alt="${place.name}" loading="lazy">
                <span class="category-badge badge-${place.category}">${place.category.charAt(0).toUpperCase() + place.category.slice(1)}</span>
                <span class="rating"><i class="fas fa-star"></i> ${place.rating}</span>
            </div>
            <div class="place-card-body">
                <h3>${place.name}</h3>
                <div class="location"><i class="fas fa-map-marker-alt"></i> ${place.location}</div>
                <p>${place.description}</p>
                <div class="place-card-footer">
                    <span class="price">${place.price}</span>
                    <span class="view-btn">View Details <i class="fas fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    `).join('');

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-light);"><i class="fas fa-search" style="font-size:2rem;margin-bottom:10px;display:block;color:#ddd;"></i>No places found matching your search.</div>';
    }
}

function setFilter(filter, btn) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPlaces(filter, document.getElementById('searchInput').value);
}

function filterPlaces() {
    renderPlaces(currentFilter, document.getElementById('searchInput').value);
}

renderPlaces('all', '');

/* ===== DETAIL MODAL ===== */
function openDetail(index) {
    const place = placesData[index];
    const modal = document.getElementById('detailModal');
    document.getElementById('modalImg').src = place.image;
    document.getElementById('modalImg').alt = place.name;
    document.getElementById('modalTitle').textContent = place.name;
    document.getElementById('modalMeta').innerHTML = `
        <span><i class="fas fa-map-marker-alt"></i> ${place.location}</span>
        <span><i class="fas fa-clock"></i> ${place.timing}</span>
        <span><i class="fas fa-star" style="color:var(--gold);"></i> ${place.rating}</span>
        <span><i class="fas fa-tag"></i> ${place.price}</span>
    `;
    document.getElementById('modalDesc').textContent = place.fullDesc;
    document.getElementById('modalHighlights').innerHTML = place.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('detailModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('detailModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('detailModal')) closeModal();
});

/* ===== LIGHTBOX ===== */
let lightboxIndex = 0;

function openLightbox(index) {
    lightboxIndex = index;
    document.getElementById('lightboxImg').src = galleryImages[index];
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
    document.getElementById('lightboxImg').src = galleryImages[lightboxIndex];
}

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeLightbox(-1);
        if (e.key === 'ArrowRight') changeLightbox(1);
    }
    if (document.getElementById('detailModal').classList.contains('active')) {
        if (e.key === 'Escape') closeModal();
    }
});

/* ===== TESTIMONIALS SLIDER ===== */
let currentTestimonial = 0;
const track = document.getElementById('testimonialsTrack');
const tDots = document.querySelectorAll('.testimonial-dot');

function goToTestimonial(index) {
    currentTestimonial = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    tDots.forEach((d, i) => d.classList.toggle('active', i === index));
}

setInterval(() => goToTestimonial((currentTestimonial + 1) % 3), 6000);

/* ===== SCROLL ANIMATIONS ===== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
