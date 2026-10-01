# 🏛️ AuctionHouse - Premium Auction Platform

**Free Web Development Internship Online Project (WD-AUC-003)**

A sophisticated premium auction platform for discovering and bidding on exclusive art, antiques, jewelry, and luxury collectibles. Built with vanilla HTML5, CSS3, and JavaScript.

---

## 📋 Project Overview

AuctionHouse is a full-featured online auction marketplace designed for collectors and art enthusiasts. The platform features a premium user experience with real-time bidding, watchlist management, seller/bidder dashboards, and a responsive design that works seamlessly across all devices.

**Student Code:** DAS-AUC-003  
**Company:** Data Alcott Systems  
**Task Link:** [https://www.freeinternships.in/blog/](https://www.freeinternships.in/blog/)

---

## 🎯 Features Implemented

### Core Features
✅ **Home Page** - Hero banner with featured auctions and key statistics  
✅ **Auction Listing** - Browse all auctions with advanced filters (category, price range, status)  
✅ **Auction Detail** - Full lot details with image gallery, bid history, and countdown timer  
✅ **Place Bid** - Real-time bidding system with bid validation  
✅ **Bid History** - Complete bidding history with bidder names and amounts  
✅ **User Registration** - Bidder registration form with profile creation  
✅ **Bidder Dashboard** - Track active bids, watchlist, won items, and spending analytics  
✅ **Watchlist** - Save favorite lots and manage saved items  
✅ **Login/Register** - User authentication modal (localStorage-based)  
✅ **Responsive Design** - Full mobile, tablet, and desktop compatibility

### Additional Pages
✅ **Categories Section** - Browse by Art, Antiques, Jewelry, Automobiles  
✅ **Upcoming Events** - Auction schedule and live preview events  
✅ **About Us** - Auction house history and team profiles  
✅ **Blog/News** - Market insights and auction news  
✅ **Testimonials** - Client reviews and success stories  
✅ **Contact Us** - Inquiry form and location information  

### Bonus Features
✅ **Dark/Light Mode Toggle** - Theme switcher with system preference support  
✅ **Premium Badge** - Highlight premium auction listings  
✅ **Live Countdown Timer** - Real-time auction end countdown  
✅ **Mobile Menu** - Hamburger navigation for mobile devices  
✅ **LocalStorage Persistence** - Save watchlist and user data  
✅ **Smooth Scrolling** - Enhanced navigation experience  

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Icons** | Font Awesome 6 |
| **Typography** | Google Fonts (Cormorant Garamond, Inter) |
| **Data Storage** | JavaScript Arrays/Objects + LocalStorage |
| **Database** | None (Frontend-only) |

---

## 🎨 Design Specifications

**Color Scheme:**
- **Dark Background:** #1A1A2E
- **Panel/Cards:** #171F2F
- **Text Primary:** #F3F4F6
- **Text Secondary:** #C1C8D6
- **Accent (Gold):** #D4A574
- **Success:** #83DBA8
- **Error:** #FF7A7A

**Fonts:**
- Headings: Cormorant Garamond (serif) - elegant and premium
- Body: Inter (sans-serif) - clean and readable

**Vibe:** Sophisticated, premium, trustworthy auction house experience

---

## 📁 Project Structure

```
auction-house-website/
├── index.html          # Main HTML structure (all pages)
├── style.css           # Complete styling with responsive design
├── script.js           # JavaScript functionality & data
└── README.md           # Project documentation
```

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/akshith1506/auction-house-website.git
cd auction-house-website
```

### 2. Open in Browser
Simply open `index.html` in your web browser:
```bash
# Using Python (if available)
python -m http.server 8000

# Then visit: http://localhost:8000
```

Or directly open:
```
file:///path/to/auction-house-website/index.html
```

### 3. Explore Features
- Browse auctions with filters
- Register as a bidder
- Place bids on lots
- Add items to watchlist
- View bid history
- Check member dashboard
- Toggle dark/light mode

---

## 📊 Data Structure

### Auctions Array
```javascript
{
  id: 1,
  title: 'The Imperial Rose',
  category: 'Jewelry & Watches',
  type: 'Premium',
  price: 42000,
  startPrice: 22000,
  reservePrice: 30000,
  endDate: '2026-10-15T18:00:00Z',
  seller: 'Maison de Lune',
  status: 'Live',
  description: '...',
  images: ['url1', 'url2', 'url3'],
  bidHistory: [{ bidder: 'Name', amount: 28500 }],
  premium: true,
  featured: true
}
```

### User Object (localStorage)
```javascript
{
  name: 'John Smith',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  country: 'United States',
  interests: 'Art, Watches'
}
```

### Watchlist (localStorage array)
```javascript
[1, 3, 5] // Auction IDs
```

---

## 🎮 How to Use

### Browsing Auctions
1. Navigate to the "Auctions" section
2. Use filters to narrow results by category, price, or status
3. Click "View lot" to see detailed information

### Placing a Bid
1. Click on an auction to view details
2. Enter your bid amount (must exceed current bid)
3. Click "Place bid" to submit
4. Confirm the bid in the alert

### Managing Watchlist
1. Click the heart icon on any auction card
2. View saved items in the watchlist
3. Click to open and bid on watchlisted items

### Dashboard Analytics
- **Active Bids:** Track current bidding activity
- **Watchlist Count:** Number of saved auctions
- **Won Items:** Historical purchase summary
- **Annual Spend:** Total spending tracker

---

## 📱 Responsive Breakpoints

| Device | Width | Features |
|--------|-------|----------|
| **Mobile** | < 640px | Single column, hamburger menu, stacked layout |
| **Tablet** | 640px - 980px | Two-column grid, optimized spacing |
| **Desktop** | > 980px | Full 3-column grid, desktop navigation |

---

## 🔧 Customization

### Add More Auctions
Edit `script.js` and add to the `auctions` array:
```javascript
const auctions = [
  {
    id: 7,
    title: 'Your Auction Title',
    category: 'Art & Paintings', // or other categories
    price: 50000,
    // ... other properties
  }
];
```

### Change Color Scheme
Modify CSS variables in `style.css`:
```css
:root {
  --gold: #your-color;
  --bg: #your-background;
  /* ... other variables */
}
```

### Add New Categories
Update `categoryMeta` in `script.js`:
```javascript
const categoryMeta = {
  'Your New Category': { icon: 'fa-icon-name' }
};
```

---

## 🌐 Live Demo

**GitHub Pages:** [View Live Site](https://akshith1506.github.io/auction-house-website/)

---

## 📸 Screenshots

Screenshots showing:
- Home page with hero banner
- Auction listing with filters
- Auction detail with bid history
- Dashboard with analytics
- Mobile responsive view
- Dark mode toggle

*(Add screenshots in project report)*

---

## ✨ Key Features Explained

### 1. Real-Time Bidding
- Current bid updates instantly
- Bid history shows all activity
- Validation prevents invalid bids

### 2. Smart Filtering
- Filter by category (Art, Antiques, Jewelry, Automobiles)
- Price range filtering (Under $25K, $25K-$75K, $75K+)
- Sort by ending soon, newest, highest bid, or premium

### 3. Premium Auction Highlighting
- Special badges for premium lots
- Enhanced visual emphasis
- Curated collection feature

### 4. Countdown Timer
- Live auction end countdown
- Updates every minute
- Shows days, hours, minutes remaining

### 5. Dark/Light Mode
- System preference detection
- Manual toggle option
- Persistent mode selection

---

## 🐛 Known Limitations

- No backend/database (frontend-only demonstration)
- Bids are stored in browser session only
- Email notifications are simulated
- Payment processing is not implemented
- No actual money transactions

---

## 📚 Learning Outcomes

Through this project, you will master:

✅ **HTML5 Semantics** - Proper document structure and accessibility  
✅ **CSS3 Advanced** - Grid/Flexbox layouts, animations, responsive design  
✅ **JavaScript ES6+** - Modern JS features, DOM manipulation, event handling  
✅ **Data Management** - Arrays, objects, JSON, localStorage API  
✅ **UI/UX Design** - Premium design principles, color theory, typography  
✅ **Responsive Design** - Mobile-first approach, media queries  
✅ **Git & GitHub** - Version control, commits, repository management  

---

## 🎓 Internship Task Details

**Task ID:** WD-AUC-003  
**Domain:** Auction House  
**Internship Type:** Free Web Development Internship Online  
**Timeline:** 7 Days  
**Difficulty:** Intermediate  

**Submission Requirements:**
- ✅ GitHub repository with source code
- ✅ README.md with project details
- ✅ Screenshots (desktop + mobile)
- ✅ Project report (1-2 pages)
- ✅ Demo video (3-5 minutes)
- ✅ Live website deployment
- ✅ YouTube video link
- ✅ Blog post submission

---

## 📝 Project Report Outline

**1. Objective**
- Project goals and target audience
- Problem statement and solution

**2. Technologies Used**
- HTML5, CSS3, JavaScript
- Frameworks/Libraries used
- Design tools and resources

**3. Features Implemented**
- Core functionality
- Bonus features
- Technical implementation details

**4. Learning Outcomes**
- Skills acquired
- Challenges overcome
- Key takeaways

**5. Challenges & Solutions**
- Technical obstacles
- Design decisions
- Performance optimizations

**6. Future Enhancements**
- Backend integration
- Database implementation
- Additional features

---

## 🎬 Video Demonstration Checklist

**Your demo video should include:**

1. **Introduction** (30 seconds)
   - Project name and purpose
   - Brief overview of features

2. **Home Page Tour** (1 minute)
   - Hero section
   - Featured auctions
   - Featured statistics

3. **Browsing & Filtering** (1 minute)
   - Category filtering
   - Price filtering
   - Sort options

4. **Auction Detail & Bidding** (1 minute)
   - Image gallery
   - Bid placement
   - Bid history view

5. **Dashboard** (1 minute)
   - User login
   - Dashboard analytics
   - Watchlist management

6. **Responsive Demo** (1 minute)
   - Mobile view
   - Tablet view
   - Dark mode toggle

7. **Code Walkthrough** (1 minute)
   - File structure
   - Key functions
   - Data storage approach

---

## 📞 Support & Resources

- **Internship Platform:** https://www.freeinternships.in
- **Task Details:** https://www.freeinternships.in/blog/
- **Company Website:** www.dataalcott.com
- **Contact:** mail@freeinternships.in | 9600095045

---

## 📄 License

This project is created for educational purposes as part of the Data Alcott Systems Free Web Development Internship Online program.

---

## 🙏 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **Unsplash** for stock photography
- **Data Alcott Systems** for the internship opportunity

---

## 🔗 Quick Links

- **GitHub Repository:** https://github.com/akshith1506/auction-house-website
- **Live Website:** [Your GitHub Pages Link]
- **YouTube Demo:** [Your YouTube Link]
- **Blog Post:** https://www.freeinternships.in/blog/
- **Student Code:** DAS-AUC-003

---

**Created with ❤️ during the Free Web Development Internship Online**

Last Updated: October 1, 2026
