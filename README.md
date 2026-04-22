# Aora Standard Company Limited - Professional Website

A modern, professional, and fully-featured website for Aora Standard Company Limited, built with HTML5, CSS3, and JavaScript.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Email Integration](#email-integration)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Performance](#performance)

## ✨ Features

### 🎨 Design
- **Premium & Professional Look**: Dark blue/black with gold and green accents
- **Responsive Design**: Fully mobile-optimized for all devices
- **Smooth Animations**: AOS (Animate On Scroll) integration for smooth page transitions
- **Clean Typography**: Professional fonts and spacing throughout
- **Modern UI**: Glass morphism effects and modern card designs

### 📄 Pages Included

1. **Home Page** (`index.html`)
   - Hero section with professional imagery
   - Trust badges and company verification
   - Key statistics
   - Why Choose Us section
   - Call-to-action buttons

2. **About Us** (`about.html`)
   - Company information with CAC details
   - Mission, Vision, and Values
   - Problem-solution framework
   - Team expertise areas

3. **Services** (`services.html`)
   - Business Consulting
   - General Contracts
   - Supply Services
   - Operations Support
   - Service process and benefits
   - Pricing packages

4. **Legal/Verification** (`legal.html`)
   - CAC registration details
   - Why verification matters
   - How to verify on CAC website
   - Trust indicators
   - Document availability

5. **Contact** (`contact.html`)
   - Contact information
   - Professional contact form
   - WhatsApp integration
   - FAQ section
   - Alternative contact methods

### 🔧 Functionality

- **Contact Form**:
  - Validation for all fields
  - Error messages for invalid inputs
  - Success/error feedback
  - Ready for email integration

- **Mobile Menu**:
  - Responsive hamburger menu
  - Smooth animations
  - Auto-close on link click

- **WhatsApp Integration**:
  - Floating WhatsApp button
  - Direct chat links
  - Available on every page

- **FAQ Accordion**:
  - Click to expand/collapse
  - Smooth transitions
  - Multiple FAQs supported

- **Navigation**:
  - Fixed navbar with active link highlighting
  - Scroll effects
  - Smooth scrolling to sections

## 📁 Project Structure

```
Aora/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── legal.html              # Legal/Verification page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet (fully responsive)
├── js/
│   └── main.js             # JavaScript functionality
├── img/                    # Images folder
│   ├── img 1.jpg          # Professional office (hero image)
│   ├── img 2.jpg          # Business analytics
│   ├── img 3.jpg          # Team meeting
│   ├── img 4.jpg          # (for additional content)
│   ├── img 5.jpg          # (for additional content)
│   └── img 6.jpg          # (for additional content)
└── README.md              # This file
```

## 🚀 Getting Started

### 1. Basic Setup
Simply open `index.html` in your web browser. No build process or dependencies required!

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Local Server (Recommended)
For better development experience, use a local server:

**Using Python 3:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Using Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

**Using VS Code Live Server:**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

### 3. Deploy to Web

You can deploy this website to:

- **Netlify** (recommended - free tier available)
  ```bash
  npm install -g netlify-cli
  netlify deploy
  ```

- **Vercel**
  ```bash
  npm install -g vercel
  vercel
  ```

- **GitHub Pages**
  - Push to GitHub
  - Enable GitHub Pages in repository settings

- **Traditional Hosting**
  - Upload files via FTP to your hosting provider

## 📧 Email Integration

The contact form is ready for email integration. Here are the best options:

### Option 1: FormSubmit.co (Easiest - Recommended)

1. Go to https://formsubmit.co
2. Use the form to connect your email
3. Update the form action in `contact.html`:

```html
<form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
    <!-- rest of form -->
</form>
```

### Option 2: Formspree

1. Visit https://formspree.io
2. Create a new form
3. Update form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: EmailJS (JavaScript-based)

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

<script>
    emailjs.init("YOUR_PUBLIC_KEY");
    
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_id', 'template_id', this)
            .then(() => {
                console.log('Email sent successfully');
            });
    });
</script>
```

### Option 4: Backend API (Node.js/Express)

Create a backend endpoint to handle form submissions:

```javascript
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    // Send email using nodemailer
    transporter.sendMail({
        from: email,
        to: 'olamideadeniyi82@gmail.com',
        subject: subject,
        text: message
    });
});
```

## 🎨 Customization

### Colors
Edit the color variables in `css/styles.css`:

```css
:root {
    --primary-dark: #0f172e;      /* Main dark color */
    --accent-gold: #d4af37;       /* Gold accent */
    --accent-green: #10b981;      /* Green accent */
    --blue-accent: #1e40af;       /* Blue accent */
}
```

### Fonts
Change the font family:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Content
Simply edit the HTML files to update:
- Company information
- Service descriptions
- Team details
- Contact information
- Social media links

### Images
Replace images in the `img/` folder:
- `img 1.jpg` - Hero image
- `img 2.jpg` - Services showcase
- `img 3.jpg` - Team image

### Company Details
Update these locations with your actual information:

```html
<!-- In all pages -->
RC Number: 8690768
Registration Date: August 11, 2025
Email: olamideadeniyi82@gmail.com
WhatsApp: https://wa.me/2349000000000
```

## 📱 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

### Optimizations Included
- Lazy loading of images
- Minified CSS and JavaScript
- Responsive image sizing
- Efficient animations with hardware acceleration
- Smooth scroll behavior

### Lighthouse Score
Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔐 Security

- No sensitive data stored locally
- Form submissions via secure HTTPS only
- Content Security Policy ready
- No third-party tracking by default

## 📊 Analytics Setup

To add Google Analytics:

```html
<!-- Add to the <head> of each page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## 🎯 SEO Optimization

Already included:
- Meta descriptions on all pages
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times
- Clean URLs

### Add to `<head>` for better SEO:
```html
<meta name="description" content="Trusted business solutions...">
<meta name="keywords" content="business consulting, contracts, supplies">
<meta property="og:title" content="Aora Standard Company Limited">
<meta property="og:description" content="...">
<meta property="og:image" content="path/to/image.jpg">
```

## 🐛 Troubleshooting

### Images not loading
- Check image file paths
- Ensure spaces in filenames are encoded as `%20`
- Use absolute paths for web hosting

### Form not working
- Check your email service integration
- Verify the form endpoint/action URL
- Check browser console for JavaScript errors

### Mobile menu not working
- Clear browser cache
- Ensure JavaScript is enabled
- Check that hamburger menu is visible

### Animations not showing
- Update your browser
- Disable browser extensions that might interfere
- Check that CSS file is loading properly

## 📄 File Sizes

- HTML pages: ~15-20 KB each
- CSS: ~45 KB
- JavaScript: ~12 KB
- Total (without images): ~120 KB

## 🚀 Future Enhancements

Consider adding:
- Blog section with articles
- Team member profiles
- Client testimonials/reviews
- Case studies section
- Online booking system
- Multi-language support
- Dark mode toggle
- Advanced analytics

## 📞 Support

For questions or assistance:
- Email: olamideadeniyi82@gmail.com
- WhatsApp: https://wa.me/2349000000000

## 📝 License

This website template is created for Aora Standard Company Limited.

---

## 🎉 Ready to Launch!

Your professional website is ready. All you need to do is:

1. ✅ Update contact information
2. ✅ Integrate email service
3. ✅ Update WhatsApp number
4. ✅ Deploy to web hosting
5. ✅ Share with your customers!

**Thank you for choosing this professional template!**
