🎧 Headphones Project

A modern, responsive web application showcasing a premium headphones brand experience. This project demonstrates best practices in responsive design, accessibility, and user interaction patterns.
📋 Table of Contents

    Project Overview
    Features
    Design System
    Setup & Installation
    Responsive Design
    Interactive Elements
    Fonts & Typography
    Browser Support
    Contributing

🎯 Project Overview

This is a static website built with HTML and CSS that presents a sleek and modern design for a headphones brand. The project emphasizes responsive design, clean code, and excellent user experience across all device sizes.

Repository: alx_html_css
Directory: headphones
Main File: README.md
✨ Features

    Responsive Design – Seamlessly adapts from desktop to mobile devices
    Modern Aesthetics – Clean, professional design with contemporary styling
    Interactive Elements – Smooth hover and active states for enhanced user feedback
    Optimized Performance – Lightweight and fast-loading pages
    Accessibility – Semantic HTML structure for better screen reader support
    Mobile-First Approach – Optimized experience for all screen sizes

🎨 Design System
Color Palette

The design utilizes a carefully chosen color scheme that reflects the premium nature of the headphones brand:

    Primary Accent Color – #FF6565 (used for links and interactive elements on hover/active states)
    Background & Neutral Tones – Supporting colors for layout and typography

Typography

Two custom fonts are used throughout the project to create a distinctive visual identity:

    Source Sans Pro – Primary font for body text and general content
    Spin Cycle OT – Accent font for headlines and special elements

Note: If your system doesn't have these fonts installed, download them and add them to your project fonts folder. They are essential for maintaining the design integrity.
Layout Constraints

    Maximum Content Width: 1000px
    Centering: All content is centered within the viewport using flexbox or margin auto
    Padding: Consistent spacing maintained throughout for visual rhythm

🚀 Setup & Installation
Prerequisites

    A modern web browser (Chrome, Firefox, Safari, Edge)
    A code editor (VS Code recommended)
    Git for version control

Installation Steps

Clone the Repository

git clone https://github.com/abdisataryusuf10/alx_html_css.git
cd alx_html_css/headphones

Install Custom Fonts

    Download Source Sans Pro and Spin Cycle OT from your preferred font source
    Place them in a fonts/ directory within the project
    Link them in your CSS using @font-face declarations

Open in Browser

    Simply open index.html in your web browser, or
    Use a local server for development:

    python -m http.server 8000
    # or
    npx http-server

    View the Project
        Navigate to http://localhost:8000 in your browser

📱 Responsive Design
Breakpoints

The website is designed with a mobile-first approach and includes a critical breakpoint:

Mobile Layout (480px and below)

    Full-width content with adjusted padding
    Optimized touch targets for mobile interaction
    Stacked navigation and layout elements
    Readable font sizes optimized for smaller screens

Desktop Layout (480px and above)

    Multi-column layouts where appropriate
    Expanded navigation menus
    Enhanced spacing and visual hierarchy
    Optimized for mouse and keyboard interaction

Implementation

/* Mobile-first approach */
@media (max-width: 480px) {
  /* Mobile styles override base styles */
  body {
    padding: 1rem;
  }
}

🖱️ Interactive Elements
Link Interactions

All links respond to user interaction with visual feedback:

    Hover State: Links change to #FF6565 with smooth transition
    Active State: Maintains #FF6565 color while the link is active
    Transition: Smooth color transitions for polished feel

a {
  color: /* default color */;
  transition: color 0.3s ease;
}

a:hover,
a:active {
  color: #FF6565;
}

Button Interactions

Buttons provide tactile feedback through opacity changes:

    Default State: Full opacity (1)
    Hover State: opacity: 0.9 for subtle visual feedback
    Active State: opacity: 0.9 while being clicked
    Transition: Smooth opacity transition for refined interaction

button {
  opacity: 1;
  transition: opacity 0.3s ease;
}

button:hover,
button:active {
  opacity: 0.9;
}

🔤 Fonts & Typography
Font Implementation

To ensure the custom fonts display correctly across all devices:

    Download the Fonts
        Source Sans Pro: Available from Google Fonts or Adobe Fonts
        Spin Cycle OT: Available from appropriate font repositories

    Add to Project

    project/
    ├── fonts/
    │   ├── SourceSansPro-Regular.ttf
    │   ├── SourceSansPro-Bold.ttf
    │   ├── SpinCycleOT-Regular.ttf
    │   └── SpinCycleOT-Bold.ttf

CSS Declaration

@font-face {
  font-family: 'Source Sans Pro';
  src: url('../fonts/SourceSansPro-Regular.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: 'Spin Cycle OT';
  src: url('../fonts/SpinCycleOT-Regular.ttf') format('truetype');
  font-weight: normal;
}

Font Values

Some font size and spacing values may include decimals. These can be rounded to the nearest whole number for practical implementation without significant visual impact.
🌐 Browser Support

This project is designed to work with modern browsers:

    ✅ Chrome/Chromium (latest)
    ✅ Firefox (latest)
    ✅ Safari (latest)
    ✅ Edge (latest)
    ✅ Mobile browsers (iOS Safari, Chrome Mobile)

📝 Project Structure

alx_html_css/
└── headphones/
    ├── index.html
    ├── styles.css
    ├── README.md
    └── fonts/
        ├── source-sans-pro/
        └── spin-cycle-ot/

📄 License
This project is part of the ALX curriculum. Please refer to the main repository for licensing information.
