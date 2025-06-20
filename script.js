// API URLs
const API_BASE_URL = 'https://westream.su';
const MATCHES_ENDPOINT = '/matches/live';
const STREAM_ENDPOINT = '/stream';

// Sports categories mapping
const sportsCategories = [
    { id: "basketball", name: "Basketball" },
    { id: "football", name: "Football" },
    { id: "american-football", name: "American Football" },
    { id: "hockey", name: "Hockey" },
    { id: "baseball", name: "Baseball" },
    { id: "motor-sports", name: "Motor Sports" },
    { id: "fight", name: "Fight (UFC, Boxing)" },
    { id: "tennis", name: "Tennis" },
    { id: "rugby", name: "Rugby" },
    { id: "golf", name: "Golf" },
    { id: "billiards", name: "Billiards" },
    { id: "afl", name: "AFL" },
    { id: "darts", name: "Darts" },
    { id: "cricket", name: "Cricket" },
    { id: "other", name: "Other" }
];

// Sports data with provided images and text
const sportsData = [
    { 
        id: 1, 
        title: 'American Football', 
        category: 'Live Matches', 
        categoryId: 'american-football',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/9b8cfe7ad707a0ab814b0f75e4db17289f8ad21d?placeholderIfAbsent=true' 
    },
    { 
        id: 2, 
        title: 'Basketball', 
        category: 'Live Games', 
        categoryId: 'basketball',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/da5ca9b2fed8667d70a4bb3f51d425a200819f3f?placeholderIfAbsent=true' 
    },
    { 
        id: 3, 
        title: 'Football', 
        category: 'Live Matches', 
        categoryId: 'football',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/cb4b85c2dc508d74bab690d5a734c2ea4ae46dac?placeholderIfAbsent=true' 
    },
    { 
        id: 4, 
        title: 'Baseball', 
        category: 'Live Games', 
        categoryId: 'baseball',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/6bface20ba777c476bad501c991ba3865a87962f?placeholderIfAbsent=true' 
    },
    { 
        id: 5, 
        title: 'Hockey', 
        category: 'Live Games', 
        categoryId: 'hockey',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/18a383080280b3b0adb445e9b02c1931f57f8a8b?placeholderIfAbsent=true' 
    },
    { 
        id: 6, 
        title: 'Fight', 
        category: 'Live Events', 
        categoryId: 'fight',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/14ef8f5727698c246b4741c97cea250778422d8a?placeholderIfAbsent=true' 
    },
    { 
        id: 7, 
        title: 'Racing', 
        category: 'Live Events', 
        categoryId: 'motor-sports',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/c8e72e63dca9fcf380b060f66012153de79898bb?placeholderIfAbsent=true' 
    },
    { 
        id: 8, 
        title: 'Tennis', 
        category: 'Live Matches', 
        categoryId: 'tennis',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/c1a170173978abc3fe42e2bea4186b67fb96a817?placeholderIfAbsent=true' 
    },
    { 
        id: 9, 
        title: 'Golf', 
        category: 'Live Tournaments', 
        categoryId: 'golf',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/34e5b48e96ec3b1191d7d8d7097d31a78d32d88e?placeholderIfAbsent=true' 
    },
    { 
        id: 10, 
        title: 'Cricket', 
        category: 'Live Matches', 
        categoryId: 'cricket',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/7b8df17a1f30f1d2363ef1005d1bbd9d23a3ec0f?placeholderIfAbsent=true' 
    },
    { 
        id: 11, 
        title: 'Rugby', 
        category: 'Live Matches', 
        categoryId: 'rugby',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/c04422927bbbe03078306e964b0d315cbbfa9ddf?placeholderIfAbsent=true' 
    },
    { 
        id: 12, 
        title: 'AFL', 
        category: 'Live Games', 
        categoryId: 'afl',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/36f9865ab77be72babc157eae5266e2d4918e676?placeholderIfAbsent=true' 
    },
    { 
        id: 13, 
        title: 'Billiards', 
        category: 'Live Matches', 
        categoryId: 'billiards',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/b3f73a5d08f56e983d700640a7192535453ea070?placeholderIfAbsent=true' 
    },
    { 
        id: 14, 
        title: 'Darts', 
        category: 'Live Events', 
        categoryId: 'darts',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/2b0ffe6c5317ef8a9577a27a299dfac576815658?placeholderIfAbsent=true' 
    },
    { 
        id: 15, 
        title: 'Other', 
        category: 'Live Events', 
        categoryId: 'other',
        image: 'https://cdn.builder.io/api/v1/image/assets/56c5f10b3f75431a8aefea2392d7e413/9e8d778b4817699015a08483a03118b5727aea08?placeholderIfAbsent=true' 
    }
];

// State management
let currentView = 'categories'; // categories, matches, streams, player
let currentCategory = null;
let currentMatch = null;
let currentStream = null;
let matchesData = [];
let streamsData = [];

// Routing functions
function navigateTo(route) {
    // Use History API instead of hash
    history.pushState(null, null, route);
    parseRoute();
}

function parseRoute() {
    // Get the pathname without the leading slash
    const path = window.location.pathname.substring(1) || '';
    const parts = path.split('/');
    
    // Remove empty parts
    const cleanParts = parts.filter(part => part !== '');
    
    if (cleanParts.length === 0 || path === '') {
        // Home route
        currentView = 'categories';
        currentCategory = null;
        currentMatch = null;
        currentStream = null;
        initGrid();
        updatePageTitle('Watch Live Sports');
        return;
    }
    
    if (cleanParts[0] === 'category' && cleanParts[1]) {
        // Category route
        const categoryId = cleanParts[1];
        loadMatchesByCategory(categoryId);
        return;
    }
    
    if (cleanParts[0] === 'match' && cleanParts[1]) {
        // Match route
        const matchId = cleanParts[1];
        // First we need to load the category if we don't have match data
        if (!matchesData.length) {
            // If we have a category in the URL
            if (cleanParts[2]) {
                loadMatchesByCategory(cleanParts[2], matchId);
            } else {
                // Fallback to home if we can't determine the category
                navigateTo('/');
            }
        } else {
            // We already have matches loaded, find the match
            const match = matchesData.find(m => m.id.toString() === matchId);
            if (match) {
                loadStreamsForMatch(match);
            } else {
                // Match not found in current data
                navigateTo('/');
            }
        }
        return;
    }
    
    // Default: if route not recognized, go to home
    navigateTo('/');
}

// Wait for the config to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listener for browser back/forward navigation
    window.addEventListener('popstate', function(event) {
        // Don't call parseRoute() here as it will be triggered by the popstate event
        // Just handle the state change
        parseRoute();
    });
    
    // Intercept all link clicks to use History API
    document.addEventListener('click', function(e) {
        // Find closest anchor tag
        const link = e.target.closest('a[href]');
        if (link && link.getAttribute('href').startsWith('/')) {
            e.preventDefault();
            navigateTo(link.getAttribute('href'));
        }
    });
    
    // Add event listener for navigation links
    setupNavigationEvents();

    // SPA navigation for site title (header and footer)
    const siteTitle = document.getElementById('siteTitle');
    const footerTitle = document.querySelector('.footer-title');
    
    // Add click handler to header title
    if (siteTitle) {
        siteTitle.style.cursor = 'pointer';
        siteTitle.addEventListener('click', function() {
            navigateTo('/');
        });
    }
    
    // Add click handler to footer title
    if (footerTitle) {
        footerTitle.addEventListener('click', function() {
            navigateTo('/');
        });
    }
    
    // Initialize the app based on current URL
    parseRoute();
});

// Navigation link to category ID mapping
const navToCategoryMap = {
    'American Football': 'american-football',
    'Basketball': 'basketball',
    'Football': 'football',
    'Baseball': 'baseball',
    'Hockey': 'hockey',
    'Fight': 'fight',
    'Racing': 'motor-sports',
    'Tennis': 'tennis'
};

// Setup navigation events
function setupNavigationEvents() {
    document.addEventListener('click', function(e) {
        // Handle clicks on both header and footer navigation links
        const navLink = e.target.closest('.nav-links a, .footer-links a');
        if (navLink) {
            e.preventDefault();
            const linkText = navLink.textContent.trim();
            
            // Get the corresponding category ID from the mapping
            const categoryId = navToCategoryMap[linkText];
            if (!categoryId) return;
            
            // Remove active class from all links (both header and footer)
            document.querySelectorAll('.nav-links a, .footer-links a').forEach(l => {
                if (l.textContent.trim() === linkText) {
                    l.classList.add('active');
                } else {
                    l.classList.remove('active');
                }
            });
            
            // Navigate to category route
            navigateTo(`/category/${categoryId}`);
        }
    });
}

// Load matches by category from API
async function loadMatchesByCategory(category, targetMatchId = null) {
    try {
        currentCategory = category;
        currentView = 'matches';
        
        // Show loading state
        const grid = document.getElementById('sportsGrid');
        grid.innerHTML = '<div class="loading">Loading matches...</div>';
        
        // Fetch matches from API
        const response = await fetch(`${API_BASE_URL}${MATCHES_ENDPOINT}`);
        const data = await response.json();
        
        // Filter matches by category
        matchesData = data.filter(match => 
            match.category.toLowerCase() === category.toLowerCase());
        
        // If we have a target match ID, navigate to it
        if (targetMatchId) {
            const match = matchesData.find(m => m.id.toString() === targetMatchId);
            if (match) {
                loadStreamsForMatch(match);
                return;
            }
        }
        
        // Display matches
        displayMatches(matchesData);
        
        // Update page title
        updatePageTitle(`${category.charAt(0).toUpperCase() + category.slice(1)} Matches`);
    } catch (error) {
        console.error('Error loading matches:', error);
        const grid = document.getElementById('sportsGrid');
        grid.innerHTML = '<div class="error">Error loading matches. Please try again.</div>';
    }
}

// Display matches in the grid
function displayMatches(matches) {
    const grid = document.getElementById('sportsGrid');
    grid.innerHTML = '';
    grid.className = 'content-host'; // Change class for match listing view
    
    // Add back button
    const backButton = document.createElement('div');
    backButton.className = 'back-button';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Categories';
    backButton.addEventListener('click', () => {
        navigateTo('/');
    });
    
    const header = document.createElement('div');
    header.className = 'section-header';
    header.appendChild(backButton);
    
    const container = document.createElement('div');
    container.className = 'matches-container';
    container.appendChild(header);
    
    if (matches.length === 0) {
        const noMatches = document.createElement('div');
        noMatches.className = 'no-matches';
        noMatches.textContent = `No ${currentCategory} matches available right now.`;
        container.appendChild(noMatches);
    } else {
        // Create match cards
        matches.forEach(match => {
            const card = createMatchCard(match);
            container.appendChild(card);
        });
    }
    
    grid.appendChild(container);
}

// Create a match card
function createMatchCard(match) {
    const card = document.createElement('div');
    card.className = 'match-card';
    card.dataset.id = match.id;
    
    // Format date
    const matchDate = new Date(match.date);
    const formattedDate = matchDate.toLocaleString();
    
    card.innerHTML = `
        <div class="match-title">${match.title}</div>
        <div class="match-date">${formattedDate}</div>
    `;
    
    // Add click event to show streams
    card.addEventListener('click', () => {
        currentMatch = match;
        navigateTo(`/match/${match.id}/${currentCategory}`);
    });
    
    return card;
}

// Load streams for a match
async function loadStreamsForMatch(match) {
    try {
        currentView = 'streams';
        
        // Show loading state
        const grid = document.getElementById('sportsGrid');
        grid.innerHTML = '<div class="loading">Loading streams...</div>';
        
        // Prepare to fetch all streams for this match
        const streamPromises = match.sources.map(source => 
            fetch(`${API_BASE_URL}${STREAM_ENDPOINT}/${source.source}/${source.id}`)
                .then(res => res.json())
        );
        
        // Fetch all streams
        const streamResults = await Promise.all(streamPromises);
        
        // Flatten and combine all streams
        streamsData = streamResults.flat();
        
        // Display streams
        displayStreams(streamsData, match);
        
        // Update page title
        updatePageTitle(`Streams: ${match.title}`);
    } catch (error) {
        console.error('Error loading streams:', error);
        const grid = document.getElementById('sportsGrid');
        grid.innerHTML = '<div class="error">Error loading streams. Please try again.</div>';
    }
}

// Display streams for a match
function displayStreams(streams, match) {
    const grid = document.getElementById('sportsGrid');
    grid.innerHTML = '';
    grid.className = 'content-host'; // Ensure correct class for stream selection view
    
    // Add back button
    const backButton = document.createElement('div');
    backButton.className = 'back-button';
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Matches';
    backButton.addEventListener('click', () => {
        navigateTo(`/category/${currentCategory}`);
    });
    
    const header = document.createElement('div');
    header.className = 'section-header';
    header.appendChild(backButton);
    
    const matchTitle = document.createElement('div');
    matchTitle.className = 'match-title-header';
    matchTitle.textContent = match.title;
    header.appendChild(matchTitle);
    
    const container = document.createElement('div');
    container.className = 'streams-container';
    container.appendChild(header);
    
    // Create stream player area (initially hidden)
    const playerArea = document.createElement('div');
    playerArea.className = 'player-area';
    playerArea.style.display = 'none';
    container.appendChild(playerArea);
    
    if (streams.length === 0) {
        const noStreams = document.createElement('div');
        noStreams.className = 'no-streams';
        noStreams.textContent = 'No streams available for this match.';
        container.appendChild(noStreams);
    } else {
        // Group streams by source
        const streamsBySource = {};
        streams.forEach(stream => {
            if (!streamsBySource[stream.source]) {
                streamsBySource[stream.source] = [];
            }
            streamsBySource[stream.source].push(stream);
        });
        
        // Create stream source sections
        Object.entries(streamsBySource).forEach(([source, sourceStreams]) => {
            const sourceSection = document.createElement('div');
            sourceSection.className = 'stream-source-section';
            
            const sourceTitle = document.createElement('div');
            sourceTitle.className = 'source-title';
            sourceTitle.textContent = `Source: ${source}`;
            sourceSection.appendChild(sourceTitle);
            
            const streamsList = document.createElement('div');
            streamsList.className = 'streams-list';
            
            // Create stream items
            sourceStreams.forEach(stream => {
                const streamItem = createStreamItem(stream);
                streamsList.appendChild(streamItem);
            });
            
            sourceSection.appendChild(streamsList);
            container.appendChild(sourceSection);
        });
    }
    
    grid.appendChild(container);
}

// Create a stream item
function createStreamItem(stream) {
    const streamItem = document.createElement('div');
    streamItem.className = 'stream-item';
    streamItem.dataset.id = stream.id;
    
    // Create quality badge
    const qualityBadge = stream.hd ? 
        '<span class="quality-badge hd">HD</span>' : 
        '<span class="quality-badge sd">SD</span>';
    
    streamItem.innerHTML = `
        <div class="stream-info">
            <div class="stream-number">Stream #${stream.streamNo}</div>
            ${qualityBadge}
            <div class="stream-language">${stream.language}</div>
        </div>
    `;
    
    // Add click event to load stream
    streamItem.addEventListener('click', () => {
        loadStream(stream);
    });
    
    return streamItem;
}

// Load and display a stream
function loadStream(stream) {
    currentStream = stream;
    currentView = 'player';
    
    // Get player area
    const playerArea = document.querySelector('.player-area');
    playerArea.style.display = 'block';
    playerArea.innerHTML = '';
    
    // Create player header
    const playerHeader = document.createElement('div');
    playerHeader.className = 'player-header';
    
    const streamInfo = document.createElement('div');
    streamInfo.className = 'stream-info-header';
    streamInfo.innerHTML = `
        <div>Stream #${stream.streamNo} | Source: ${stream.source}</div>
        <div>${stream.hd ? 'HD' : 'SD'} | ${stream.language}</div>
    `;
    playerHeader.appendChild(streamInfo);
    
    // Add close button
    const closeButton = document.createElement('div');
    closeButton.className = 'close-player';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.addEventListener('click', () => {
        playerArea.style.display = 'none';
        currentView = 'streams';
    });
    playerHeader.appendChild(closeButton);
    
    playerArea.appendChild(playerHeader);
    
    // Create iframe for stream
    const iframe = document.createElement('iframe');
    iframe.src = stream.embedUrl;
    iframe.allowFullscreen = true;
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.allow = 'autoplay; encrypted-media';
    
    playerArea.appendChild(iframe);
    
    // Scroll to player
    playerArea.scrollIntoView({ behavior: 'smooth' });
}

// Update page title
function updatePageTitle(title) {
    document.title = `${CONFIG.siteTitle} - ${title}`;
}

// Function to create a card element
async function initGrid() {
    const grid = document.getElementById('sportsGrid');
    
    if (!grid) return;
    
    grid.className = 'grid-container'; // Ensure correct class for category view
    
    // Reset view state
    currentView = 'categories';
    currentCategory = null;
    currentMatch = null;
    currentStream = null;
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Fetch live matches for indicators
    let liveByCategory = {};
    try {
        const res = await fetch(API_BASE_URL + MATCHES_ENDPOINT);
        const matches = await res.json();
        matches.forEach(m => {
            // Map to categoryId or derive from match.category
            const cid = m.categoryId || m.category.toLowerCase().replace(/\s+/g, '-');
            if (!liveByCategory[cid]) liveByCategory[cid] = [];
            liveByCategory[cid].push(m);
        });
    } catch (e) {
        console.error('Error fetching live matches:', e);
    }
    
    // Create and append category cards with live indicator
    sportsData.forEach(sport => {
        const hasLive = (liveByCategory[sport.categoryId] || []).length > 0;
        const card = createCard(sport, hasLive);
        grid.appendChild(card);
    });
    
    // Update page title
    updatePageTitle('Watch Live Sports');
}

// Function to create a card element
function createCard(sport, hasLive = false) {
    const card = document.createElement('div');
    card.className = 'sport-card';
    card.dataset.category = sport.categoryId;

    card.innerHTML = `
        ${hasLive ? '<div class="live-indicator">LIVE</div>' : ''}
        <img src="${sport.image}" alt="${sport.title}" class="sport-image">
        <div class="sport-info">
            <h2 class="sport-title">${sport.title}</h2>
            <p class="sport-category">${sport.category}</p>
        </div>
    `;
    
    // Add click event to load matches for this category
    card.addEventListener('click', () => {
        // Use the routing system instead of directly calling loadMatchesByCategory
        navigateTo(`/category/${sport.categoryId}`);
        
        // Update active nav link if it exists
        document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
            if (link.textContent.trim() === sport.title) {
                document.querySelectorAll('.nav-links a, .footer-links a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    return card;
}

// Make the CONFIG available globally
if (typeof CONFIG !== 'undefined') {
    window.CONFIG = CONFIG;
}
