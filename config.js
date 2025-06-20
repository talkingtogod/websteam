// Site Configuration
const CONFIG = {
    // Site Information
    siteTitle: "WeStream",
    pageTitle: "Watch Live Sports",
    
    // Footer Configuration
    footer: {
        title: "WeStream",
        showNavLinks: true,
        copyright: " 2025 WeStream. All rights reserved."
    },
    
    // Color Scheme
    colors: {
        primary: "#FFFFFF",
        secondary: "#E0E0E0",
        hover: "#FFFFFF",
        textShadow: "rgba(0, 0, 0, 0.8)",
        overlayGradient: [
            { color: 'rgba(0, 0, 0, 0.15)', stop: '0%' },
            { color: 'rgba(0, 0, 0, 0.5)', stop: '50%' },
            { color: 'rgba(0, 0, 0, 0.85)', stop: '100%' }
        ]
    },
    
    // Additional CSS variable configurations
    liveIndicator: {
        bg: "rgba(255, 0, 0, 0.8)",
        text: "#FFFFFF"
    },
    
    // Navigation Links
    navLinks: [
        "American Football",
        "Basketball",
        "Football",
        "Baseball",
        "Hockey",
        "Fight",
        "Racing",
        "Tennis"
    ]
};

// Generate CSS Variables
function generateCSSVariables() {
    const root = document.documentElement;
    const toKebab = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    Object.entries(CONFIG.colors).forEach(([key, value]) => {
        const cssKey = key === 'overlayGradient' ? 'overlay' : toKebab(key);
        if (Array.isArray(value)) {
            const gradient = value.map(step => `${step.color} ${step.stop}`).join(', ');
            root.style.setProperty(`--color-${cssKey}`, `linear-gradient(to bottom, ${gradient})`);
        } else {
            root.style.setProperty(`--color-${cssKey}`, value);
        }
    });
    // Set additional variables
    if (CONFIG.variables) {
        Object.entries(CONFIG.variables).forEach(([key, value]) => {
            const prop = toKebab(key);
            root.style.setProperty(`--${prop}`, typeof value === 'number' ? value.toString() : value);
        });
    }
    // Set live indicator colors
    if (CONFIG.liveIndicator) {
        Object.entries(CONFIG.liveIndicator).forEach(([key, value]) => {
            const prop = `color-live-${key}`;
            root.style.setProperty(`--${prop}`, value);
        });
    }
}

// Initialize the config and navigation
document.addEventListener('DOMContentLoaded', () => {
    // Set page title
    document.title = CONFIG.pageTitle;
    
    // Set site title if element exists
    const siteTitleEl = document.querySelector('.site-title');
    if (siteTitleEl) {
        siteTitleEl.textContent = CONFIG.siteTitle;
    }
    
    // Set footer title if element exists
    const footerTitleEl = document.getElementById('footerTitle');
    if (footerTitleEl && CONFIG.footer && CONFIG.footer.title) {
        footerTitleEl.textContent = CONFIG.footer.title;
    }
    
    // Set footer copyright if element exists
    const footerCopyrightEl = document.getElementById('footerCopyright');
    if (footerCopyrightEl && CONFIG.footer && CONFIG.footer.copyright) {
        footerCopyrightEl.innerHTML = CONFIG.footer.copyright;
    }
    
    // Show/hide footer navigation based on config
    const footerNav = document.getElementById('footerNav');
    if (footerNav && CONFIG.footer) {
        footerNav.style.display = CONFIG.footer.showNavLinks ? 'block' : 'none';
    }
    
    // Initialize navigation
    initNavigation();
    
    // Generate CSS variables
    generateCSSVariables();
});

// Initialize navigation
function initNavigation() {
    const navContainer = document.getElementById('navLinks');
    
    if (!navContainer) return;
    
    // Clear existing content
    navContainer.innerHTML = '';
    
    // Add navigation links
    CONFIG.navLinks.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'ubuntu-medium';
        a.textContent = link;
        a.dataset.category = link.toLowerCase().replace(/\s+/g, '-');
        
        // Add click handler
        a.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            a.classList.add('active');
            
            // You can add filtering logic here based on link
            console.log(`Selected category: ${link}`);
        });
        
        li.appendChild(a);
        navContainer.appendChild(li);
    });
}

// Export the config for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
