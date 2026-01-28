// Project data - samma som i din ursprungliga kod
const projects = {
    "web-design": [
        {
            id: 1,
            title: "E-Commerce Platform Design",
            description: "Modern e-commerce interface with intuitive product browsing and checkout flow.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["UI Design", "UX Research", "Prototyping", "Figma"],
            fullDescription: "A comprehensive redesign of an e-commerce platform focusing on user experience and conversion optimization. The project involved extensive user research, wireframing, and iterative prototyping. The new design increased conversion rates by 45% and improved user satisfaction scores significantly.",
            client: "TechShop Inc.",
            year: "2023",
            role: "Lead UI/UX Designer"
        },
        {
            id: 2,
            title: "SaaS Dashboard Redesign",
            description: "Analytics dashboard with real-time data visualization and user-friendly controls.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["Dashboard Design", "Data Visualization", "Dark Theme", "Responsive"],
            fullDescription: "Complete redesign of a SaaS analytics platform with focus on accessibility and data clarity. Implemented a dark theme with improved contrast ratios and created interactive data visualizations. Users reported 60% improvement in task completion time.",
            client: "Analytics Pro",
            year: "2023",
            role: "UX/UI Designer"
        },
        {
            id: 3,
            title: "Mobile Banking App",
            description: "Secure and user-friendly mobile banking interface for financial transactions.",
            image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["Mobile Design", "Security", "Financial", "iOS/Android"],
            fullDescription: "Designed a banking app from scratch with emphasis on security and ease of use. Created comprehensive design system with 100+ components, implemented biometric authentication flows, and conducted extensive user testing with financial professionals.",
            client: "Digital Bank Corp",
            year: "2023",
            role: "Product Designer"
        }
    ],
    "web-development": [
        {
            id: 4,
            title: "React Dashboard Application",
            description: "Full-featured dashboard built with React, Redux, and Chart.js for data visualization.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["React", "Redux", "JavaScript", "Chart.js"],
            fullDescription: "Built a comprehensive dashboard application with real-time data updates. Features include user authentication, role-based access control, and advanced filtering. Implemented with React Hooks, Redux for state management, and optimized performance for 10,000+ concurrent users.",
            client: "DataView Systems",
            year: "2023",
            role: "Frontend Developer"
        },
        {
            id: 5,
            title: "E-Commerce Backend API",
            description: "RESTful API for e-commerce platform with Node.js, Express, and MongoDB.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["Node.js", "Express", "MongoDB", "REST API"],
            fullDescription: "Developed a scalable backend infrastructure for a high-traffic e-commerce platform. Implemented JWT authentication, payment processing integration, inventory management, and order tracking. System handles 50,000+ transactions daily with 99.9% uptime.",
            client: "ShopHub LLC",
            year: "2022-2023",
            role: "Backend Developer"
        },
        {
            id: 6,
            title: "Real-time Chat Application",
            description: "Full-stack chat app with WebSocket support, message history, and user presence.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["Vue.js", "WebSocket", "Firebase", "Real-time"],
            fullDescription: "Created a real-time communication platform using Vue.js frontend and Node.js backend with WebSocket. Features include group messaging, file sharing, user presence indicators, and message encryption. Deployed on AWS with auto-scaling capabilities.",
            client: "ConnectHub Inc.",
            year: "2023",
            role: "Fullstack Developer"
        }
    ],
    "mobile-apps": [
        {
            id: 7,
            title: "Fitness Tracking App",
            description: "React Native fitness app with workout tracking, progress analytics, and social features.",
            image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["React Native", "Firebase", "Health API", "Cross-platform"],
            fullDescription: "Developed a cross-platform fitness app using React Native supporting iOS and Android. Features include GPS tracking, workout logging, social sharing, and integration with health APIs. App achieved 4.8-star rating with 100K+ downloads.",
            client: "FitLife Apps",
            year: "2023",
            role: "Mobile App Developer"
        },
        {
            id: 8,
            title: "Weather Forecast App",
            description: "Beautiful weather app with real-time forecasts and location-based weather alerts.",
            image: "https://images.unsplash.com/photo-1594633860455-15a2ed011def?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["Flutter", "Weather API", "Location Services", "iOS/Android"],
            fullDescription: "Built a sleek weather application using Flutter with real-time data from multiple weather APIs. Implemented location services, push notifications for alerts, and beautiful animated UI. Features include 14-day forecasts and severe weather warnings.",
            client: "WeatherNow Labs",
            year: "2023",
            role: "Flutter Developer"
        },
        {
            id: 9,
            title: "Task Management App",
            description: "Productivity app for managing tasks with collaboration and syncing across devices.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            tags: ["Swift", "Firebase", "CloudKit", "Notifications"],
            fullDescription: "Created a native iOS task management app with iCloud sync and collaboration features. Implemented offline-first architecture, real-time updates, and comprehensive notification system. Integrated with calendar and reminders for seamless workflow.",
            client: "ProTask Software",
            year: "2022-2023",
            role: "iOS Developer"
        }
    ]
};

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
    
    // Aktivera rätt nav-länk baserat på nuvarande sida
    activateCurrentNavLink();
    
    // Ladda projekt-detaljer om vi är på project-detail.html
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const projectId = urlParams.get('id');
    
    if (category && document.getElementById('detailContainer')) {
        if (projectId) {
            // Ladda specifikt projekt
            loadProjectDetail(parseInt(projectId), category);
        } else {
            // Ladda alla projekt i kategorin
            loadProjectsByCategory(category);
        }
    }
    
    // Event listeners för projekt-kort (om de finns på sidan)
    setupProjectCardListeners();
});

// Funktion för att aktivera rätt nav-länk
function activateCurrentNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Funktion för att ladda projekt efter kategori
function loadProjectsByCategory(category) {
    const categoryProjects = projects[category];
    const detailContainer = document.getElementById('detailContainer');
    
    if (!categoryProjects || !detailContainer) return;
    
    let categoryTitle = '';
    if (category === 'web-design') categoryTitle = 'Web Design';
    else if (category === 'web-development') categoryTitle = 'Web Development';
    else if (category === 'mobile-apps') categoryTitle = 'Mobile Apps';
    
    let projectsHTML = `<h2 class="section-title">${categoryTitle}</h2>`;
    projectsHTML += '<div class="projects-grid">';
    
    categoryProjects.forEach(project => {
        projectsHTML += `
            <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="project-img">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="project-detail.html?category=${category}&id=${project.id}" class="btn">Learn More</a>
                </div>
            </div>
        `;
    });
    
    projectsHTML += '</div>';
    detailContainer.innerHTML = projectsHTML;
    
    // Lägg till event listeners för de nya projekten
    setupProjectCardListeners();
}

// Funktion för att ladda specifikt projekt
function loadProjectDetail(projectId, category) {
    const categoryProjects = projects[category];
    const detailContainer = document.getElementById('detailContainer');
    
    if (!categoryProjects || !detailContainer) return;
    
    const project = categoryProjects.find(p => p.id === projectId);
    
    if (!project) {
        detailContainer.innerHTML = '<p>Project not found. <a href="projects.html">Go back to projects</a></p>';
        return;
    }
    
    const detailHTML = `
        <h2 style="font-size: 2.5rem; margin-bottom: 20px;">${project.title}</h2>
        <div class="detail-content">
            <img src="${project.image}" alt="${project.title}" class="detail-img">
            <div class="detail-text">
                <h3 style="font-size: 1.5rem; margin-bottom: 20px;">About This Project</h3>
                <p>${project.fullDescription}</p>
                <div style="margin-top: 30px;">
                    <p><strong>Client:</strong> ${project.client}</p>
                    <p><strong>Year:</strong> ${project.year}</p>
                    <p><strong>Role:</strong> ${project.role}</p>
                </div>
                <div class="project-tags" style="margin-top: 30px;">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    detailContainer.innerHTML = detailHTML;
}

// Funktion för att sätta upp event listeners för projekt-kort
function setupProjectCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Förhindra att klick på knappen triggar både knappen och kortet
            if (!e.target.classList.contains('btn') && !e.target.parentElement.classList.contains('btn')) {
                const link = this.querySelector('a.btn');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });
}

// Funktion för att markera kategori-knappar (för projekt.html)
function setupCategoryLinks() {
    const categoryLinks = document.querySelectorAll('.category-card a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            if (category) {
                window.location.href = `project-detail.html?category=${category}`;
            }
        });
    });
}

// Kör setup för kategori-länkar om vi är på projects.html
if (window.location.pathname.includes('projects.html')) {
    document.addEventListener('DOMContentLoaded', setupCategoryLinks);
}

// Stäng mobilmenyn när man klickar på en länk
document.addEventListener('click', function(e) {
    const mainNav = document.getElementById('mainNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mainNav && mainNav.classList.contains('active') && 
        !e.target.closest('#mainNav') && 
        !e.target.closest('#mobileMenuBtn')) {
        mainNav.classList.remove('active');
    }
});