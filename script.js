// Tailor Data - Simulated database
const tailorsData = [
    {
        id: 1,
        name: "Rajesh Tailors",
        location: "Andheri West, Mumbai",
        rating: 4.8,
        reviews: 156,
        avatar: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Suits", "Shirts", "Alterations"],
        priceRange: "Starting at ₹800",
        experience: "15+ years",
        specialties: ["Men's Formal Wear", "Wedding Suits", "Corporate Dressing"],
        servicesMenu: [
            { name: "Men's Suit", price: "₹2000" },
            { name: "Blazer", price: "₹1500" },
            { name: "Shirt", price: "₹500" },
            { name: "Pants", price: "₹400" },
            { name: "Alteration", price: "₹200" }
        ],
        reviews: [
            { name: "Amit Kumar", rating: 5, comment: "Excellent work! My wedding suit was perfect." },
            { name: "Priya Sharma", rating: 4, comment: "Very professional and timely delivery." },
            { name: "Rahul Singh", rating: 5, comment: "Best tailor in the area. Highly recommended!" }
        ]
    },
    {
        id: 2,
        name: "Fashion Stitch",
        location: "Bandra East, Mumbai",
        rating: 4.6,
        reviews: 89,
        avatar: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Dresses", "Sarees", "Ethnic Wear"],
        priceRange: "Starting at ₹1200",
        experience: "12+ years",
        specialties: ["Women's Ethnic Wear", "Bridal Dresses", "Party Wear"],
        servicesMenu: [
            { name: "Bridal Dress", price: "₹5000" },
            { name: "Saree Blouse", price: "₹800" },
            { name: "Party Dress", price: "₹1500" },
            { name: "Kurta", price: "₹600" },
            { name: "Alteration", price: "₹150" }
        ],
        reviews: [
            { name: "Neha Patel", rating: 5, comment: "Beautiful bridal dress! Perfect fit." },
            { name: "Sonia Gupta", rating: 4, comment: "Great work on my saree blouse." },
            { name: "Meera Shah", rating: 5, comment: "Very creative designs and good quality." }
        ]
    },
    {
        id: 3,
        name: "Elite Tailors",
        location: "Juhu, Mumbai",
        rating: 4.9,
        reviews: 203,
        avatar: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Luxury Suits", "Designer Wear", "Alterations"],
        priceRange: "Starting at ₹3000",
        experience: "20+ years",
        specialties: ["Luxury Suits", "Designer Wear", "Celebrity Dressing"],
        servicesMenu: [
            { name: "Luxury Suit", price: "₹8000" },
            { name: "Designer Blazer", price: "₹5000" },
            { name: "Wedding Suit", price: "₹12000" },
            { name: "Formal Shirt", price: "₹1200" },
            { name: "Alteration", price: "₹500" }
        ],
        reviews: [
            { name: "Arjun Kapoor", rating: 5, comment: "Exceptional quality and service!" },
            { name: "Kavya Singh", rating: 5, comment: "Best luxury tailoring experience." },
            { name: "Vikram Malhotra", rating: 5, comment: "Worth every penny. Perfect fit." }
        ]
    },
    {
        id: 4,
        name: "Quick Stitch",
        location: "Powai, Mumbai",
        rating: 4.4,
        reviews: 67,
        avatar: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Casual Wear", "Quick Alterations", "Emergency Stitching"],
        priceRange: "Starting at ₹300",
        experience: "8+ years",
        specialties: ["Quick Alterations", "Emergency Stitching", "Casual Wear"],
        servicesMenu: [
            { name: "Casual Shirt", price: "₹400" },
            { name: "Jeans Alteration", price: "₹200" },
            { name: "Quick Fix", price: "₹100" },
            { name: "Hemming", price: "₹150" },
            { name: "Button Fix", price: "₹50" }
        ],
        reviews: [
            { name: "Ravi Kumar", rating: 4, comment: "Quick and reliable service." },
            { name: "Anita Desai", rating: 4, comment: "Good for emergency alterations." },
            { name: "Suresh Patel", rating: 5, comment: "Very fast and affordable." }
        ]
    },
    {
        id: 5,
        name: "Heritage Tailors",
        location: "Colaba, Mumbai",
        rating: 4.7,
        reviews: 134,
        avatar: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Traditional Wear", "Sherwanis", "Kurtas"],
        priceRange: "Starting at ₹1500",
        experience: "25+ years",
        specialties: ["Traditional Indian Wear", "Sherwanis", "Kurtas"],
        servicesMenu: [
            { name: "Sherwani", price: "₹8000" },
            { name: "Kurta", price: "₹1200" },
            { name: "Traditional Suit", price: "₹3000" },
            { name: "Jodhpuri", price: "₹6000" },
            { name: "Alteration", price: "₹300" }
        ],
        reviews: [
            { name: "Raj Malhotra", rating: 5, comment: "Perfect sherwani for my wedding!" },
            { name: "Aisha Khan", rating: 4, comment: "Beautiful traditional wear." },
            { name: "Zara Ahmed", rating: 5, comment: "Authentic traditional tailoring." }
        ]
    },
    {
        id: 6,
        name: "Modern Stitch",
        location: "Worli, Mumbai",
        rating: 4.5,
        reviews: 98,
        avatar: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Contemporary Fashion", "Fusion Wear", "Alterations"],
        priceRange: "Starting at ₹1000",
        experience: "10+ years",
        specialties: ["Contemporary Fashion", "Fusion Wear", "Modern Designs"],
        servicesMenu: [
            { name: "Fusion Kurta", price: "₹2000" },
            { name: "Contemporary Suit", price: "₹4000" },
            { name: "Designer Shirt", price: "₹800" },
            { name: "Modern Dress", price: "₹2500" },
            { name: "Alteration", price: "₹250" }
        ],
        reviews: [
            { name: "Priya Sharma", rating: 4, comment: "Modern and trendy designs." },
            { name: "Rahul Mehta", rating: 5, comment: "Great fusion wear options." },
            { name: "Sneha Patel", rating: 4, comment: "Contemporary and stylish." }
        ]
    },
    {
        id: 7,
        name: "Express Tailors",
        location: "BKC, Mumbai",
        rating: 4.3,
        reviews: 76,
        avatar: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Express Service", "Corporate Wear", "Alterations"],
        priceRange: "Starting at ₹600",
        experience: "6+ years",
        specialties: ["Express Service", "Corporate Wear", "Same Day Alterations"],
        servicesMenu: [
            { name: "Corporate Suit", price: "₹2500" },
            { name: "Formal Shirt", price: "₹600" },
            { name: "Express Alteration", price: "₹300" },
            { name: "Same Day Fix", price: "₹500" },
            { name: "Emergency Stitch", price: "₹200" }
        ],
        reviews: [
            { name: "Amit Shah", rating: 4, comment: "Fast service for corporate needs." },
            { name: "Neha Gupta", rating: 4, comment: "Good for urgent alterations." },
            { name: "Ravi Kumar", rating: 5, comment: "Express service is excellent." }
        ]
    },
    {
        id: 8,
        name: "Bridal Boutique",
        location: "Juhu, Mumbai",
        rating: 4.8,
        reviews: 167,
        avatar: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Bridal Wear", "Wedding Dresses", "Designer Wear"],
        priceRange: "Starting at ₹5000",
        experience: "18+ years",
        specialties: ["Bridal Wear", "Wedding Dresses", "Designer Collections"],
        servicesMenu: [
            { name: "Bridal Lehenga", price: "₹15000" },
            { name: "Wedding Dress", price: "₹20000" },
            { name: "Designer Saree", price: "₹8000" },
            { name: "Bridal Blouse", price: "₹3000" },
            { name: "Alteration", price: "₹800" }
        ],
        reviews: [
            { name: "Anjali Singh", rating: 5, comment: "My dream wedding dress!" },
            { name: "Pooja Patel", rating: 5, comment: "Exquisite bridal collection." },
            { name: "Meera Kapoor", rating: 4, comment: "Beautiful wedding dresses." }
        ]
    },
    {
        id: 9,
        name: "Kids Fashion",
        location: "Andheri East, Mumbai",
        rating: 4.6,
        reviews: 89,
        avatar: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Kids Wear", "School Uniforms", "Party Dresses"],
        priceRange: "Starting at ₹400",
        experience: "12+ years",
        specialties: ["Kids Fashion", "School Uniforms", "Party Wear"],
        servicesMenu: [
            { name: "School Uniform", price: "₹800" },
            { name: "Party Dress", price: "₹1200" },
            { name: "Kids Suit", price: "₹1000" },
            { name: "Fancy Dress", price: "₹600" },
            { name: "Alteration", price: "₹150" }
        ],
        reviews: [
            { name: "Priya Sharma", rating: 5, comment: "Perfect school uniforms for my kids." },
            { name: "Rahul Patel", rating: 4, comment: "Cute party dresses for children." },
            { name: "Sneha Gupta", rating: 5, comment: "Great kids fashion collection." }
        ]
    },
    {
        id: 10,
        name: "Plus Size Specialists",
        location: "Bandra West, Mumbai",
        rating: 4.4,
        reviews: 112,
        avatar: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        services: ["Plus Size Wear", "Comfortable Fits", "Alterations"],
        priceRange: "Starting at ₹800",
        experience: "14+ years",
        specialties: ["Plus Size Fashion", "Comfortable Fits", "Body Positivity"],
        servicesMenu: [
            { name: "Plus Size Suit", price: "₹3000" },
            { name: "Comfortable Dress", price: "₹1500" },
            { name: "Plus Size Shirt", price: "₹800" },
            { name: "Alteration", price: "₹300" },
            { name: "Custom Fit", price: "₹500" }
        ],
        reviews: [
            { name: "Fatima Khan", rating: 5, comment: "Perfect fits for plus size!" },
            { name: "Rekha Patel", rating: 4, comment: "Comfortable and stylish options." },
            { name: "Sunita Sharma", rating: 5, comment: "Great for body positivity." }
        ]
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const bookingModal = document.getElementById('bookingModal');
const trackingModal = document.getElementById('trackingModal');
const tailorDetailsModal = document.getElementById('tailorDetailsModal');
const tailorsGrid = document.getElementById('tailorsGrid');
const bookingForm = document.getElementById('bookingForm');
const trackOrderBtn = document.getElementById('trackOrderBtn');
const trackingResult = document.getElementById('trackingResult');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Populate Tailors Grid
function populateTailorsGrid() {
    tailorsGrid.innerHTML = '';
    
    tailorsData.forEach(tailor => {
        const tailorCard = document.createElement('div');
        tailorCard.className = 'tailor-card';
        tailorCard.innerHTML = `
            <div class="tailor-header">
                <img src="${tailor.avatar}" alt="${tailor.name}" class="tailor-avatar">
                <div class="tailor-info">
                    <h3>${tailor.name}</h3>
                    <div class="tailor-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${tailor.location}
                    </div>
                </div>
            </div>
            
            <div class="tailor-rating">
                <div class="stars">
                    ${'★'.repeat(Math.floor(tailor.rating))}${'☆'.repeat(5 - Math.floor(tailor.rating))}
                </div>
                <span class="rating-text">${tailor.rating}/5 (${tailor.reviews.length} reviews)</span>
            </div>
            
            <div class="tailor-services">
                ${tailor.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
            </div>
            
            <div class="tailor-price">${tailor.priceRange}</div>
            
            <div class="tailor-actions">
                <button class="btn btn-view" onclick="viewTailorDetails(${tailor.id})">
                    <i class="fas fa-eye"></i>
                    View Details
                </button>
                <button class="btn btn-primary" onclick="openBookingModal(${tailor.id})">
                    <i class="fas fa-calendar"></i>
                    Book Now
                </button>
            </div>
        `;
        
        tailorsGrid.appendChild(tailorCard);
    });
}

// View Tailor Details
function viewTailorDetails(tailorId) {
    const tailor = tailorsData.find(t => t.id === tailorId);
    if (!tailor) return;
    
    document.getElementById('tailorDetailName').textContent = tailor.name;
    
    const content = document.getElementById('tailorDetailsContent');
    content.innerHTML = `
        <div class="tailor-detail-image">
            <img src="${tailor.avatar}" alt="${tailor.name}">
            <h4>${tailor.name}</h4>
            <p><i class="fas fa-map-marker-alt"></i> ${tailor.location}</p>
            <p><i class="fas fa-star"></i> ${tailor.rating}/5 (${tailor.reviews} reviews)</p>
            <p><i class="fas fa-clock"></i> ${tailor.experience} experience</p>
        </div>
        
        <div class="tailor-detail-info">
            <h4>Specialties</h4>
            <p>${tailor.specialties.join(', ')}</p>
            
            <div class="service-menu">
                <h5>Services & Pricing</h5>
                ${tailor.servicesMenu.map(service => `
                    <div class="service-item">
                        <span class="service-name">${service.name}</span>
                        <span class="service-price">${service.price}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="reviews-section">
                <h5>Customer Reviews</h5>
                ${tailor.reviews.map(review => `
                    <div class="review-item">
                        <div class="review-header">
                            <span class="reviewer-name">${review.name}</span>
                            <span class="review-rating">${'★'.repeat(review.rating)}</span>
                        </div>
                        <div class="review-text">${review.comment}</div>
                    </div>
                `).join('')}
            </div>
            
            <button class="btn btn-primary" onclick="openBookingModal(${tailor.id})">
                <i class="fas fa-calendar"></i>
                Book Home Visit
            </button>
        </div>
    `;
    
    tailorDetailsModal.classList.add('active');
}

// Open Booking Modal
function openBookingModal(tailorId = null) {
    bookingModal.classList.add('active');
    if (tailorId) {
        // Store selected tailor for booking
        bookingModal.dataset.selectedTailor = tailorId;
    }
}

// Close Modal Functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modals when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// Close modal buttons
document.getElementById('closeModal').addEventListener('click', () => closeModal('bookingModal'));
document.getElementById('closeTrackingModal').addEventListener('click', () => closeModal('trackingModal'));
document.getElementById('closeTailorModal').addEventListener('click', () => closeModal('tailorDetailsModal'));
document.getElementById('cancelBooking').addEventListener('click', () => closeModal('bookingModal'));

// Booking Form Submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(bookingForm);
    const bookingData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        address: document.getElementById('customerAddress').value,
        date: document.getElementById('visitDate').value,
        time: document.getElementById('visitTime').value,
        clothingType: document.getElementById('clothingType').value,
        fabricPickup: document.querySelector('input[name="fabricPickup"]:checked')?.value,
        tailorId: bookingModal.dataset.selectedTailor
    };
    
    // Generate order ID
    const orderId = 'TE' + Date.now();
    
    // Show success message
    alert(`Booking confirmed! Your order ID is ${orderId}. A tailor will visit you on ${bookingData.date} at ${bookingData.time}.`);
    
    // Reset form and close modal
    bookingForm.reset();
    closeModal('bookingModal');
    
    // Store booking data (in real app, this would go to backend)
    localStorage.setItem('lastBooking', JSON.stringify({ ...bookingData, orderId }));
});

// Track Order
trackOrderBtn.addEventListener('click', () => {
    const orderId = document.getElementById('orderId').value;
    const phone = document.getElementById('orderPhone').value;
    
    if (!orderId || !phone) {
        alert('Please enter both Order ID and Phone Number');
        return;
    }
    
    // Show tracking result
    trackingResult.style.display = 'block';
    
    // Scroll to result
    trackingResult.scrollIntoView({ behavior: 'smooth' });
});

// Search Functionality
document.getElementById('findTailorsBtn').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        // Scroll to tailors section
        document.getElementById('tailors').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Please enter your location first');
    }
});

// Book Now Button
document.getElementById('bookNowBtn').addEventListener('click', () => {
    openBookingModal();
});

// Track Order Navigation
document.querySelector('a[href="#tracking"]').addEventListener('click', (e) => {
    e.preventDefault();
    trackingModal.classList.add('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('loading');
        setTimeout(() => {
            this.classList.remove('loading');
        }, 1000);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.tailor-card, .service-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Populate tailors grid
    populateTailorsGrid();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Initialize date input with minimum date as today
document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('visitDate').min = today;
});

// Add hover effects for better UX
document.querySelectorAll('.tailor-card, .service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#28a745';
        }
    });
    
    return isValid;
}

// Add form validation to booking form
bookingForm.addEventListener('input', (e) => {
    if (e.target.hasAttribute('required')) {
        if (e.target.value.trim()) {
            e.target.style.borderColor = '#28a745';
        } else {
            e.target.style.borderColor = '#dee2e6';
        }
    }
}); 