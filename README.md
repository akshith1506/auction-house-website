const auctions = [
  {
    id: 1,
    title: 'The Imperial Rose',
    category: 'Jewelry & Watches',
    type: 'Premium',
    price: 42000,
    startPrice: 22000,
    reservePrice: 30000,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 46).toISOString(),
    seller: 'Maison de Lune',
    status: 'Live',
    description:
      'A rare diamond-set rose pendant and matching earrings, cherished for its impeccable craftsmanship and luminous brilliance.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
    ],
    bidHistory: [
      { bidder: 'Lena M.', amount: 28500 },
      { bidder: 'Martin F.', amount: 32000 },
      { bidder: 'Nico P.', amount: 36000 },
      { bidder: 'Sofia D.', amount: 42000 }
    ],
    premium: true,
    featured: true
  },
  {
    id: 2,
    title: 'Midnight Nocturne',
    category: 'Art & Paintings',
    type: 'Featured',
    price: 68000,
    startPrice: 35000,
    reservePrice: 47000,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5 + 1000 * 60 * 90).toISOString(),
    seller: 'Velvet Canvas Studio',
    status: 'Live',
    description:
      'A mesmerizing abstract masterpiece by a rising modern artist, blending velvet tones and subtle gold detail.',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=800&q=80'
    ],
    bidHistory: [
      { bidder: 'Ariana S.', amount: 36000 },
      { bidder: 'Leo T.', amount: 41000 },
      { bidder: 'Ezra N.', amount: 52000 },
      { bidder: 'Grace W.', amount: 68000 }
    ],
    premium: true,
    featured: true
  },
  {
    id: 3,
    title: 'Chronograph Heritage',
    category: 'Jewelry & Watches',
    type: 'New',
    price: 24000,
    startPrice: 14000,
    reservePrice: 18000,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 23 + 1000 * 60 * 20).toISOString(),
    seller: 'The Horology House',
    status: 'Live',
    description:
      'A classic mechanical chronograph known for exceptional balance and collector appeal in pristine original condition.',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80'
    ],
    bidHistory: [
      { bidder: 'James K.', amount: 14500 },
      { bidder: 'Emma B.', amount: 17500 },
      { bidder: 'Owen H.', amount: 21500 },
      { bidder: 'Thisa R.', amount: 24000 }
    ],
    premium: false,
    featured: true
  },
  {
    id: 4,
    title: 'The Baroque Cabinet',
    category: 'Antiques & Collectibles',
    type: 'Collector Pick',
    price: 33000,
    startPrice: 17000,
    reservePrice: 22000,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 40).toISOString(),
    seller: 'Heritage & Co.',
    status: 'Live',
    description:
      'An intricately hand-carved antique cabinet with gilt detailing and storied provenance from a European estate.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
    ],
    bidHistory: [
      { bidder: 'Carla M.', amount: 18500 },
      { bidder: 'Theo R.', amount: 22500 },
      { bidder: 'Nina J.', amount: 27500 },
      { bidder: 'Olivia P.', amount: 33000 }
    ],
    premium: false,
    featured: false
  },
  {
    id: 5,
    title: 'Velvet Vantage',
    category: 'Luxury & Automobiles',
    type: 'Iconic',
    price: 98000,
    startPrice: 61000,
    reservePrice: 72000,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 57 + 1000 * 60 * 18).toISOString(),
    seller: 'Grand Class Motors',
    status: 'Live',
    description:
      'An exceptional classic motorcar with elegant craftsmanship and rare factory options, ready for a new custodian.',
    images: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80'
    ],
    bidHistory: [
      { bidder: 'Darius Q.', amount: 62000 },
      { bidder: 'Ria K.', amount: 76000 },
      { bidder: 'Ethan B.', amount: 89000 },
      { bidder: 'Pia L.', amount: 98000 }
    ],
    premium: true,
    featured: false
  },
  {
    id: 6,
    title: 'Eclipsed Relic',
    category: 'Antiques & Collectibles',
    type: 'Rare Find',
    price: 15500,
    startPrice: 9000,
    reservePrice: 12000,
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 6 + 1000 * 60 * 35).toISOString(),
    seller: 'The Archives Vault',
    status: 'Live',
    description:
      'A rare historical artifact admired for its unique provenance and exceptional preservation through generations.',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80'
    ],
    bidHistory: [
      { bidder: 'Iris V.', amount: 9800 },
      { bidder: 'Marcus C.', amount: 12000 },
      { bidder: 'Liam D.', amount: 13800 },
      { bidder: 'Sana Y.', amount: 15500 }
    ],
    premium: false,
    featured: false
  }
];

const blogPosts = [
  {
    title: 'How vintage watches are redefining luxury portfolios',
    date: 'April 12, 2026',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Five emerging artists to watch in the next collector cycle',
    date: 'April 08, 2026',
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'What modern buyers look for in signed antiques',
    date: 'April 02, 2026',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  }
];

const testimonials = [
  {
    quote:
      'The experience felt deeply personalized and the bidding interface made every decision simple and secure.',
    name: 'Maya L.',
    role: 'Private collector'
  },
  {
    quote:
      'We sold a rare piece within days, and the attention to detail throughout the auction process was exceptional.',
    name: 'Owen T.',
    role: 'Seller'
  },
  {
    quote:
      'The presentation, catalog quality and expert support are on par with the world’s top auction houses.',
    name: 'Sophie K.',
    role: 'Art advisor'
  }
];

const categoryMeta = {
  'Art & Paintings': { icon: 'fa-palette' },
  'Antiques & Collectibles': { icon: 'fa-gem' },
  'Jewelry & Watches': { icon: 'fa-ring' },
  'Luxury & Automobiles': { icon: 'fa-car' }
};

const state = {
  selectedAuctionId: 1,
  watchlist: new Set(JSON.parse(localStorage.getItem('auctionWatchlist') || '[]')),
  currentUser: JSON.parse(localStorage.getItem('auctionUser') || 'null')
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);

const getAuctionById = (id) => auctions.find((auction) => auction.id === Number(id));

const getTimeRemaining = (dateString) => {
  const diff = new Date(dateString) - new Date();
  if (diff <= 0) return 'Closed';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${days}d ${hours}h ${minutes}m left`;
};

const renderFeaturedAuctions = () => {
  const container = document.getElementById('featuredAuctions');
  const featured = auctions.filter((auction) => auction.featured).slice(0, 3);

  container.innerHTML = featured
    .map(
      (auction) => `
        <article class="auction-card">
          <div class="auction-image">
            <img src="${auction.images[0]}" alt="${auction.title}" />
            ${auction.premium ? '<span class="premium-tag">Premium</span>' : ''}
            <button class="watch-btn" data-watch="${auction.id}" aria-label="Add to watchlist">
              <i class="${state.watchlist.has(auction.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
            </button>
          </div>
          <div class="auction-body">
            <div class="meta-row">
              <span>${auction.category}</span>
              <span>${auction.status}</span>
            </div>
            <h3>${auction.title}</h3>
            <p class="auction-description">${auction.description}</p>
            <div class="price-row">
              <span>Current bid</span>
              <strong>${formatCurrency(auction.price)}</strong>
            </div>
            <div class="auction-footer">
              <span class="timer">${getTimeRemaining(auction.endDate)}</span>
              <button class="btn btn-secondary small" data-select-auction="${auction.id}">View lot</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
};

const renderCategoryGrid = () => {
  const container = document.getElementById('categoryGrid');
  const categories = Object.keys(categoryMeta);

  container.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card" data-category-filter="${category}">
          <span class="icon"><i class="fa-solid ${categoryMeta[category].icon}"></i></span>
          <h3>${category}</h3>
          <p>${auctions.filter((auction) => auction.category === category).length} live lots</p>
        </button>
      `
    )
    .join('');
};

const renderAuctionList = () => {
  const container = document.getElementById('auctionList');
  const categoryFilter = document.getElementById('categoryFilter').value;
  const priceFilter = document.getElementById('priceFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  const premiumOnly = document.getElementById('premiumOnly').checked;

  let filtered = [...auctions];

  if (categoryFilter !== 'all') {
    filtered = filtered.filter((auction) => auction.category === categoryFilter);
  }

  if (premiumOnly) {
    filtered = filtered.filter((auction) => auction.premium);
  }

  if (priceFilter !== 'all') {
    filtered = filtered.filter((auction) => {
      if (priceFilter === 'below-25000') return auction.price < 25000;
      if (priceFilter === '25000-75000') return auction.price >= 25000 && auction.price <= 75000;
      return auction.price > 75000;
    });
  }

  if (statusFilter === 'ending-soon') {
    filtered.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
  } else if (statusFilter === 'highest') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (statusFilter === 'newest') {
    filtered.sort((a, b) => b.id - a.id);
  } else if (statusFilter === 'premium') {
    filtered.sort((a, b) => Number(b.premium) - Number(a.premium));
  }

  if (!filtered.length) {
    container.innerHTML = '<div class="empty-state">No lots match your filters.</div>';
    return;
  }

  container.innerHTML = filtered
    .map(
      (auction) => `
        <article class="auction-card">
          <div class="auction-image">
            <img src="${auction.images[0]}" alt="${auction.title}" />
            ${auction.premium ? '<span class="premium-tag">Premium</span>' : ''}
            <button class="watch-btn" data-watch="${auction.id}" aria-label="Add to watchlist">
              <i class="${state.watchlist.has(auction.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
            </button>
          </div>
          <div class="auction-body">
            <div class="meta-row">
              <span>${auction.category}</span>
              <span>${auction.type}</span>
            </div>
            <h3>${auction.title}</h3>
            <p class="auction-description">${auction.description}</p>
            <div class="price-row">
              <span>Current bid</span>
              <strong>${formatCurrency(auction.price)}</strong>
            </div>
            <div class="auction-footer">
              <span class="timer">${getTimeRemaining(auction.endDate)}</span>
              <button class="btn btn-secondary small" data-select-auction="${auction.id}">View lot</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
};

const renderAuctionDetail = () => {
  const detail = document.getElementById('auctionDetail');
  const auction = getAuctionById(state.selectedAuctionId) || auctions[0];

  const latestBid = auction.bidHistory[auction.bidHistory.length - 1];
  const statusLabel = auction.price >= auction.reservePrice ? 'Reserve met' : 'Reserve pending';

  detail.innerHTML = `
    <div class="detail-layout">
      <div class="gallery-stack">
        <div class="gallery-main">
          <img src="${auction.images[0]}" alt="${auction.title}" />
        </div>
        <div class="gallery-side">
          <img src="${auction.images[1]}" alt="${auction.title} detail 1" />
          <img src="${auction.images[2]}" alt="${auction.title} detail 2" />
        </div>
      </div>

      <div class="detail-copy">
        <div class="detail-heading">
          <div>
            <p class="eyebrow">${auction.category}</p>
            <h2>${auction.title}</h2>
          </div>
          <span class="tag">${statusLabel}</span>
        </div>

        <p>${auction.description}</p>

        <div class="price-box">
          <p>Current bid</p>
          <strong>${formatCurrency(auction.price)}</strong>
          <p>Ends in: ${getTimeRemaining(auction.endDate)}</p>
        </div>

        <div class="bid-actions">
          <button class="btn btn-primary" data-bid-action="quick">Quick bid</button>
          <button class="btn btn-secondary" data-watch="${auction.id}">Watchlist</button>
        </div>

        <form id="bidForm" class="bid-form">
          <div class="field">
            <label for="bidAmount">Your bid</label>
            <input id="bidAmount" type="number" min="${auction.price + 100}" step="100" value="${auction.price + 100}" required />
          </div>
          <button type="submit" class="btn btn-primary">Place bid</button>
        </form>

        <div>
          <h3>Bid history</h3>
          <div class="history-list">
            ${auction.bidHistory
              .slice()
              .reverse()
              .map(
                (bid) => `
                  <div class="history-item">
                    <span>${bid.bidder}</span>
                    <strong>${formatCurrency(bid.amount)}</strong>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  const bidForm = document.getElementById('bidForm');
  bidForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = Number(document.getElementById('bidAmount').value);
    placeBid(auction.id, amount);
  });

  document.querySelector('[data-bid-action="quick"]').addEventListener('click', () => {
    placeBid(auction.id, auction.price + 500);
  });
};

const placeBid = (auctionId, amount) => {
  const auction = getAuctionById(auctionId);
  if (!auction) return;

  if (amount <= auction.price) {
    alert(`Your bid must be higher than ${formatCurrency(auction.price)}.`);
    return;
  }

  auction.price = amount;
  auction.bidHistory.push({ bidder: state.currentUser?.name || 'Guest Bidder', amount });
  renderAuctionList();
  renderAuctionDetail();
  renderDashboard();
  alert(`Bid placed successfully at ${formatCurrency(amount)}.`);
};

const renderTestimonials = () => {
  const container = document.getElementById('testimonialList');
  container.innerHTML = testimonials
    .map(
      (item) => `
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>“${item.quote}”</p>
          <h3>${item.name}</h3>
          <p>${item.role}</p>
        </div>
      `
    )
    .join('');
};

const renderBlog = () => {
  const container = document.getElementById('blogList');
  container.innerHTML = blogPosts
    .map(
      (post) => `
        <article class="blog-card">
          <img src="${post.image}" alt="${post.title}" />
          <div class="blog-content">
            <div class="meta">${post.date}</div>
            <h3>${post.title}</h3>
          </div>
        </article>
      `
    )
    .join('');
};

const renderDashboard = () => {
  const activeBidsCount = document.getElementById('activeBidsCount');
  const watchlistCount = document.getElementById('watchlistCount');
  const wonItemsCount = document.getElementById('wonItemsCount');
  const annualSpend = document.getElementById('annualSpend');
  const myBidsList = document.getElementById('myBidsList');
  const watchlistList = document.getElementById('watchlistList');

  const activeBids = auctions.filter((auction) => auction.price > 0).slice(0, 3);
  const watchlistItems = auctions.filter((auction) => state.watchlist.has(auction.id));

  activeBidsCount.textContent = activeBids.length;
  watchlistCount.textContent = watchlistItems.length;
  wonItemsCount.textContent = '2';
  annualSpend.textContent = formatCurrency(240000);

  myBidsList.innerHTML = activeBids
    .map(
      (auction) => `
        <div class="mini-item">
          <span>${auction.title}</span>
          <strong>${formatCurrency(auction.price)}</strong>
        </div>
      `
    )
    .join('');

  watchlistList.innerHTML = watchlistItems.length
    ? watchlistItems
        .map(
          (auction) => `
            <div class="mini-item">
              <span>${auction.title}</span>
              <button class="btn btn-secondary small" data-select-auction="${auction.id}">Open</button>
            </div>
          `
        )
        .join('')
    : '<p>No lots saved yet.</p>';
};

const updateCategoryOptions = () => {
  const select = document.getElementById('categoryFilter');
  const categories = ['all', ...Object.keys(categoryMeta)];

  select.innerHTML = categories
    .map((category) => `<option value="${category}">${category === 'all' ? 'All' : category}</option>`)
    .join('');
};

const setupListeners = () => {
  document.getElementById('categoryFilter').addEventListener('change', renderAuctionList);
  document.getElementById('priceFilter').addEventListener('change', renderAuctionList);
  document.getElementById('statusFilter').addEventListener('change', renderAuctionList);
  document.getElementById('premiumOnly').addEventListener('change', renderAuctionList);

  document.addEventListener('click', (event) => {
    const watchBtn = event.target.closest('[data-watch]');
    if (watchBtn) {
      const auctionId = Number(watchBtn.dataset.watch);
      if (state.watchlist.has(auctionId)) {
        state.watchlist.delete(auctionId);
      } else {
        state.watchlist.add(auctionId);
      }
      localStorage.setItem('auctionWatchlist', JSON.stringify([...state.watchlist]));
      renderFeaturedAuctions();
      renderAuctionList();
      renderAuctionDetail();
      renderDashboard();
      return;
    }

    const selectBtn = event.target.closest('[data-select-auction]');
    if (selectBtn) {
      state.selectedAuctionId = Number(selectBtn.dataset.selectAuction);
      renderAuctionDetail();
      document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const categoryButton = event.target.closest('[data-category-filter]');
    if (categoryButton) {
      const selectedCategory = categoryButton.dataset.categoryFilter;
      document.getElementById('categoryFilter').value = selectedCategory;
      renderAuctionList();
      document.getElementById('auctions').scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const authTrigger = event.target.closest('[data-open-auth]');
    if (authTrigger) {
      document.getElementById('authModal').classList.remove('hidden');
      return;
    }

    const closeAuth = event.target.closest('[data-close-auth]');
    if (closeAuth) {
      document.getElementById('authModal').classList.add('hidden');
      return;
    }

    const tabButton = event.target.closest('[data-auth-tab]');
    if (tabButton) {
      const target = tabButton.dataset.authTab;
      document.querySelectorAll('.tab-btn').forEach((button) => button.classList.toggle('active', button === tabButton));
      document.querySelectorAll('.auth-form').forEach((form) => form.classList.toggle('active', form.id === `${target}Form`));
      return;
    }
  });

  document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      country: document.getElementById('country').value,
      interests: document.getElementById('interests').value
    };
    state.currentUser = user;
    localStorage.setItem('auctionUser', JSON.stringify(user));
    alert(`Welcome, ${user.name}! Your bidder registration is complete.`);
    event.target.reset();
  });

  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const name = email.split('@')[0] || 'Member';
    state.currentUser = { name: name.charAt(0).toUpperCase() + name.slice(1), email };
    localStorage.setItem('auctionUser', JSON.stringify(state.currentUser));
    document.getElementById('authModal').classList.add('hidden');
    renderDashboard();
    alert(`Logged in as ${state.currentUser.name}.`);
    event.target.reset();
  });

  document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
      name: document.getElementById('signupName').value,
      email: document.getElementById('signupEmail').value
    };
    state.currentUser = user;
    localStorage.setItem('auctionUser', JSON.stringify(user));
    document.getElementById('authModal').classList.add('hidden');
    renderDashboard();
    alert(`Account created for ${user.name}.`);
    event.target.reset();
  });

  document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Your inquiry has been sent. A specialist will contact you shortly.');
    event.target.reset();
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('#themeToggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });

  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('open');
  });

  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.mobile-menu').classList.remove('open');
    });
  });
};

const startCountdownClock = () => {
  setInterval(() => {
    const timerElements = document.querySelectorAll('.timer');
    timerElements.forEach((element) => {
      const auctionId = Number(element.closest('[data-select-auction]')?.dataset.selectAuction || element.closest('.auction-card')?.querySelector('[data-watch]')?.dataset.watch);
      const auction = getAuctionById(auctionId);
      if (auction) {
        element.textContent = getTimeRemaining(auction.endDate);
      }
    });
  }, 60000);
};

const init = () => {
  updateCategoryOptions();
  renderFeaturedAuctions();
  renderCategoryGrid();
  renderAuctionList();
  renderAuctionDetail();
  renderTestimonials();
  renderBlog();
  renderDashboard();
  setupListeners();
  startCountdownClock();
};

init();





































































































