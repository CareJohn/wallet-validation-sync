# Wallet Validation Sync

A blockchain wallet validation and synchronization platform inspired by multisyncblock.xyz

## Features

- **Homepage**: Hero section with wallet syncing information and feature buttons
- **Wallets Page**: Display of supported cryptocurrency wallets with subscription capability
- **Email Form Integration**: Contact and subscription forms integrated with Formspree
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- **Modern UI**: Blue gradient color scheme matching the original design

## Project Structure

```
wallet-validation-sync/
├── index.html         # Main landing page
├── wallets.html       # Wallets selection page
├── styles.css         # Main stylesheet
├── wallets.css        # Wallet page specific styles
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Setup Instructions

### 1. Local Development

Clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/CareJohn/wallet-validation-sync.git
cd wallet-validation-sync
```

Open `index.html` in your web browser.

### 2. Formspree Integration (Email Forms)

To enable email form submissions:

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form and copy the form ID
4. In `index.html`, replace `YOUR_FORM_ID` in the contact form action with your actual Formspree form ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. In `wallets.html`, replace `YOUR_FORM_ID` in the subscribe form with the same ID

### 3. Deployment to Netlify

1. Push all changes to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build settings (no build command needed for static site)
6. Deploy!

## Color Scheme

- Primary Blue: `#0052FF`
- Dark Blue: `#001a4d`
- Light Background: `#f9f9f9`
- Text: `#1a1a1a`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Flexbox, CSS Grid)
- Vanilla JavaScript
- Formspree (email form handling)

## License

MIT License

## Support

For issues or questions, please open an issue on GitHub.
