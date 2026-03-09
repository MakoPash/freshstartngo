// ===========================
// Mobile Menu Toggle
// ===========================
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const isClickInsideNav = navLinks?.contains(event.target);
    const isClickOnToggle = menuToggle?.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && navLinks?.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// ===========================
// Search Functionality
// ===========================

// Content database for search - Contains searchable content from all pages
const searchDatabase = [
    // Home Page
    {
        page: 'Home',
        url: 'index.html',
        title: 'Mental Health Matters in Zimbabwe',
        content: 'FreshStart is dedicated to breaking the stigma and providing accessible mental health support to communities across Zimbabwe. Mental health wellness counseling support groups education crisis hotline.'
    },
    {
        page: 'Home',
        url: 'index.html',
        title: 'Our Mission',
        content: 'We envision a Zimbabwe where mental health is recognized, understood, and treated with the same importance as physical health. Through education, advocacy, and compassionate care.'
    },
    {
        page: 'Home',
        url: 'index.html',
        title: 'Counseling Services',
        content: 'Professional one-on-one and group counseling sessions in a safe, confidential environment. Individual therapy mental health support.'
    },
    {
        page: 'Home',
        url: 'index.html',
        title: 'Support Groups',
        content: 'Connect with others who understand your journey through peer-led support groups. Community family therapy group sessions.'
    },
    {
        page: 'Home',
        url: 'index.html',
        title: 'Education',
        content: 'Workshops and resources to increase mental health awareness and understanding. Training programs community education.'
    },
    {
        page: 'Home',
        url: 'index.html',
        title: 'Crisis Hotline',
        content: '24/7 emergency support for those experiencing a mental health crisis. Call 080 123 4567 for immediate help.'
    },
    
    // About Page
    {
        page: 'About',
        url: 'about.html',
        title: 'About FreshStart',
        content: 'Community-based initiative dedicated to transforming mental health care in Zimbabwe through compassion, education, and accessible support.'
    },
    {
        page: 'About',
        url: 'about.html',
        title: 'Our Story',
        content: 'Founded in 2020, FreshStart Mental Health Support Organisation emerged from a collective vision to address the critical mental health needs in Zimbabwe. Volunteers community workshops peer support.'
    },
    {
        page: 'About',
        url: 'about.html',
        title: 'Our Mission',
        content: 'To provide accessible, culturally-sensitive mental health support and education to individuals and communities across Zimbabwe, reducing stigma and promoting holistic wellness for all.'
    },
    {
        page: 'About',
        url: 'about.html',
        title: 'Our Vision',
        content: 'A Zimbabwe where mental health is recognized as fundamental to overall wellbeing, where stigma is eliminated, and where everyone has access to quality mental health care and support.'
    },
    {
        page: 'About',
        url: 'about.html',
        title: 'Core Values - Compassion',
        content: 'We approach every individual with empathy, kindness, and understanding. Caring supportive patient-centered.'
    },
    {
        page: 'About',
        url: 'about.html',
        title: 'Core Values - Excellence',
        content: 'We strive for the highest standards in all our services and programs. Quality professional trained.'
    },
    {
        page: 'About',
        url: 'about.html',
        title: 'Core Values - Integrity',
        content: 'We maintain the highest ethical standards and transparency in all we do. Honest trustworthy accountable.'
    },
    {
        page: 'About',
        url: 'about.html',
        title: 'Core Values - Inclusivity',
        content: 'We welcome and support everyone, regardless of background or circumstance. Diverse accepting non-judgmental.'
    },
    
    // Services Page
    {
        page: 'Services',
        url: 'services.html',
        title: 'Individual Counseling',
        content: 'One-on-one sessions with licensed mental health professionals in a confidential setting. Depression anxiety treatment trauma PTSD support stress management personal development therapy.'
    },
    {
        page: 'Services',
        url: 'services.html',
        title: 'Group Therapy',
        content: 'Connect with others facing similar challenges in a supportive group environment. Peer support groups family therapy sessions couples counseling teen support adolescent youth.'
    },
    {
        page: 'Services',
        url: 'services.html',
        title: '24/7 Crisis Hotline',
        content: 'Immediate support for those experiencing a mental health emergency. Trained crisis counselors immediate intervention suicide prevention emergency referrals hotline 080 123 4567.'
    },
    {
        page: 'Services',
        url: 'services.html',
        title: 'Educational Workshops',
        content: 'Community-based programs to increase mental health awareness and literacy. Mental health awareness stress management techniques parenting workshops workplace wellness training.'
    },
    {
        page: 'Services',
        url: 'services.html',
        title: 'Professional Training',
        content: 'Capacity building for healthcare workers and community leaders. Mental health first aid counseling skills training trauma-informed care cultural competency professional development.'
    },
    {
        page: 'Services',
        url: 'services.html',
        title: 'Community Outreach',
        content: 'Taking mental health services directly to underserved communities. Mobile clinics school programs workplace initiatives rural outreach community engagement.'
    },
    {
        page: 'Services',
        url: 'services.html',
        title: 'Service Areas',
        content: 'FreshStart provides services across Zimbabwe. Main office in Harare. Regional centers in Bulawayo, Mutare, Gweru. Mobile outreach to rural communities.'
    },
    
    // Resources Page
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Mental Health Resources',
        content: 'Access a wealth of information, tools, and support materials to help you on your mental health journey. Educational materials guides downloads.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Mental Health Guides',
        content: 'Understanding Depression Managing Anxiety Coping with Trauma Building Resilience. Free downloadable guides and educational materials.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Self-Help Tools',
        content: 'Mood Tracking Journal Mindfulness Exercises Breathing Techniques Sleep Hygiene Guide. Practical tools for mental wellness.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Video Resources',
        content: 'Mental Health 101 Stress Management Workshop Family Support Strategies Youth Mental Wellness. Educational videos and recorded workshops.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'FreshStart Crisis Hotline',
        content: 'Immediate mental health crisis support available 24/7. Call 080 123 4567 for emergency help anytime day or night.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Suicide Prevention Line',
        content: 'Confidential support for those in crisis available 24/7. Call 080 234 5678 for suicide prevention support.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Youth Support Line',
        content: 'Support specifically for young people. Monday to Friday, 8am-8pm. Call 080 345 6789 for teen and youth mental health support.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Family Helpline',
        content: 'Guidance for families and caregivers. Monday to Sunday, 9am-9pm. Call 080 456 7890 for family support.'
    },
    {
        page: 'Resources',
        url: 'resources.html',
        title: 'Self-Care Tips',
        content: 'Stay connected with family and friends. Be active with regular physical activity. Practice mindfulness and meditation. Seek help when needed from professionals.'
    },
    
    // Contact Page
    {
        page: 'Contact',
        url: 'contact.html',
        title: 'Contact Us',
        content: 'Get in touch with FreshStart. We are here to help. Reach out for support, information, or to get involved with our mission.'
    },
    {
        page: 'Contact',
        url: 'contact.html',
        title: 'Visit Our Office',
        content: '123 Hope Street, Harare, Zimbabwe. Postal Code: 00263. Physical location office address.'
    },
    {
        page: 'Contact',
        url: 'contact.html',
        title: 'Phone Contact',
        content: 'Main Office: +263 4 123 4567. Crisis Hotline available 24/7: 080 123 4567. Call us for support and information.'
    },
    {
        page: 'Contact',
        url: 'contact.html',
        title: 'Email Contact',
        content: 'Email us at info@freshstartngo.org.zw for inquiries and support. We respond within 24 hours.'
    },
    {
        page: 'Contact',
        url: 'contact.html',
        title: 'Office Hours',
        content: 'Monday to Friday: 8am - 6pm. Saturday: 9am - 2pm. Sunday: Closed. Crisis line available 24/7.'
    },
    {
        page: 'Contact',
        url: 'contact.html',
        title: 'Request Appointment',
        content: 'Schedule an appointment for counseling services. Contact us via phone, email, or contact form. Initial assessment and personalized support plan.'
    },
    {
        page: 'Contact',
        url: 'contact.html',
        title: 'Volunteer Opportunities',
        content: 'Get involved with FreshStart. Volunteer opportunities available. Contact us to learn how you can make a difference in mental health support.'
    },
    
    // Donate Page
    {
        page: 'Donate',
        url: 'donate.html',
        title: 'Support Our Mission',
        content: 'Your generous contribution helps us provide accessible mental health support to communities across Zimbabwe. Donate to FreshStart and make a difference.'
    },
    {
        page: 'Donate',
        url: 'donate.html',
        title: 'Donation Impact',
        content: '$25 provides one counseling session. $50 supports weekly support groups for a month. $100 funds a community mental health awareness workshop. $250 enables training for a new peer support volunteer.'
    },
    {
        page: 'Donate',
        url: 'donate.html',
        title: 'Ways to Give',
        content: 'Bank transfer, mobile money, online donation, mail a check. Multiple ways to support FreshStart. Tax-deductible donations.'
    },
    
    // Newsletter Page
    {
        page: 'Newsletter',
        url: 'newsletter.html',
        title: 'Newsletter & Updates',
        content: 'Stay connected with FreshStart. Receive latest news, resources, and mental health insights. Subscribe to our newsletter.'
    },
    {
        page: 'Newsletter',
        url: 'newsletter.html',
        title: 'Mental Health Resources',
        content: 'Curated articles, tips, and tools to support your mental wellness journey. Educational content and expert insights.'
    },
    {
        page: 'Newsletter',
        url: 'newsletter.html',
        title: 'Recent Updates',
        content: 'New clinic opens in Bulawayo. Mental health awareness month. Depression resource guide. Volunteer training program. School partnership expansion. Annual impact report.'
    }
];

// Search function
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length === 0) {
        return;
    }
    
    // Search through the database
    const results = searchDatabase.filter(item => {
        return item.title.toLowerCase().includes(query) ||
               item.content.toLowerCase().includes(query);
    });
    
    // Display results
    displaySearchResults(results, query);
}

// Display search results in modal
function displaySearchResults(results, query) {
    const modal = document.getElementById('searchModal');
    const resultsContainer = document.getElementById('searchResults');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <p>No results found for "${query}"</p>
                <p style="font-size: 14px; margin-top: 8px;">Try using different keywords or browse our pages:</p>
                <ul style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px;">
                    <li><a href="index.html" style="color: var(--accent-cta);">Home</a></li>
                    <li><a href="about.html" style="color: var(--accent-cta);">About Us</a></li>
                    <li><a href="services.html" style="color: var(--accent-cta);">Services</a></li>
                    <li><a href="resources.html" style="color: var(--accent-cta);">Resources</a></li>
                    <li><a href="contact.html" style="color: var(--accent-cta);">Contact</a></li>
                </ul>
            </div>
        `;
    } else {
        let resultsHTML = '';
        
        results.forEach(result => {
            // Highlight search term in content
            const regex = new RegExp(query, 'gi');
            let excerpt = result.content;
            
            // Truncate excerpt if too long
            if (excerpt.length > 150) {
                const index = excerpt.toLowerCase().indexOf(query);
                if (index !== -1) {
                    const start = Math.max(0, index - 50);
                    const end = Math.min(excerpt.length, index + 100);
                    excerpt = (start > 0 ? '...' : '') + excerpt.substring(start, end) + (end < excerpt.length ? '...' : '');
                } else {
                    excerpt = excerpt.substring(0, 150) + '...';
                }
            }
            
            excerpt = excerpt.replace(regex, match => `<mark style="background-color: var(--highlight-hover); padding: 2px 4px; border-radius: 2px;">${match}</mark>`);
            
            resultsHTML += `
                <div class="search-result-item" onclick="window.location.href='${result.url}'">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-page">Page: ${result.page}</div>
                    <div class="search-result-excerpt">${excerpt}</div>
                </div>
            `;
        });
        
        resultsContainer.innerHTML = resultsHTML;
    }
    
    modal.style.display = 'block';
}

// Close search modal
function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    modal.style.display = 'none';
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('searchModal');
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeSearchModal();
            }
        });
    }
});

// ===========================
// Contact Form Handling
// ===========================
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const urgent = formData.get('urgent');
    
    // In a real application, this would send data to a server
    // For now, we'll just show a success message
    
    if (urgent) {
        alert(`Thank you for reaching out, ${name}.\n\nWe understand this is urgent. For immediate crisis support, please call our 24/7 hotline: 080 123 4567.\n\nWe will also respond to your message as quickly as possible.`);
    } else {
        alert(`Thank you for your message, ${name}.\n\nWe've received your inquiry about "${subject}" and will get back to you at ${email} within 24 hours during business days.`);
    }
    
    // Reset form
    form.reset();
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===========================
// Add Active Class to Current Page Nav Link
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Scroll to Top on Page Load
// ===========================
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// ===========================
// Donation Form Handling
// ===========================
let selectedDonationType = 'one-time';
let selectedAmount = null;

function selectDonationType(type) {
    selectedDonationType = type;
    const buttons = document.querySelectorAll('.donation-type-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-type') === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function selectAmount(amount) {
    selectedAmount = amount;
    const buttons = document.querySelectorAll('.amount-btn');
    const customAmountGroup = document.getElementById('customAmountGroup');
    
    buttons.forEach(btn => {
        const btnAmount = btn.getAttribute('data-amount');
        if (btnAmount == amount) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (amount === 'other') {
        customAmountGroup.style.display = 'block';
        document.getElementById('customAmount').focus();
    } else {
        customAmountGroup.style.display = 'none';
    }
}

function handleDonationSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('donorName');
    const email = formData.get('donorEmail');
    
    let amount = selectedAmount;
    if (amount === 'other') {
        amount = formData.get('customAmount');
    }
    
    if (!amount) {
        alert('Please select a donation amount.');
        return;
    }
    
    const donationType = selectedDonationType === 'monthly' ? 'monthly' : 'one-time';
    
    alert(`Thank you for your generous ${donationType} donation of $${amount}, ${name}!\n\nYour contribution will directly support mental health services in Zimbabwe.\n\nA confirmation email will be sent to ${email}.\n\nNote: This is a demonstration. No actual payment has been processed.`);
    
    // Reset form
    form.reset();
    selectedAmount = null;
    selectedDonationType = 'one-time';
    selectDonationType('one-time');
    
    const buttons = document.querySelectorAll('.amount-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('customAmountGroup').style.display = 'none';
}

// ===========================
// Newsletter Form Handling
// ===========================
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const firstName = formData.get('subscriberFirstName');
    const lastName = formData.get('subscriberLastName');
    const email = formData.get('subscriberEmail');
    
    // Get selected interests
    const interests = formData.getAll('interests');
    const interestsText = interests.length > 0 ? interests.join(', ') : 'general updates';
    
    alert(`Welcome to the FreshStart community, ${firstName} ${lastName}!\n\nYou've successfully subscribed to our newsletter at ${email}.\n\nYou'll receive updates about: ${interestsText}\n\nThank you for staying connected with our mission to support mental health in Zimbabwe.`);
    
    // Reset form
    form.reset();
}
