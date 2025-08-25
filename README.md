# Move37 Podcast Website

A modern, cool website for the Move37 podcast featuring AI research, PhD life, and everything remotely interesting. Built with a design inspired by the Squarepusher aesthetic.

## 🚀 Features

- **Modern Dark Theme** - Sleek dark interface with neon green accents
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Typing effects, parallax scrolling, and hover animations
- **Interactive Elements** - Audio player simulation, contact form, and notifications
- **Performance Optimized** - Lazy loading, throttled scroll events, and smooth animations
- **Mobile Friendly** - Responsive navigation and mobile-optimized layout

## 🎨 Design Elements

- **Color Scheme**: Dark backgrounds with neon green (#00ff88), pink (#ff0080), and blue (#0080ff) accents
- **Typography**: Inter font for body text, JetBrains Mono for the logo
- **Animations**: Floating elements, waveform animations, typing effects, and smooth transitions
- **Visual Effects**: Glow shadows, gradient text, and backdrop blur effects

## 📁 File Structure

```
move37.github.io/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Customization

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #00ff88;      /* Main accent color */
    --secondary-color: #ff0080;    /* Secondary accent */
    --accent-color: #0080ff;      /* Blue accent */
    --bg-dark: #0a0a0a;           /* Main background */
    --bg-darker: #050505;         /* Darker background */
    --bg-light: #1a1a1a;          /* Light background */
}
```

### Content
Update the content in `index.html`:

- **Hero Section**: Change the title, description, and call-to-action buttons
- **Episodes**: Add your actual podcast episodes with titles, descriptions, and durations
- **About Section**: Customize the podcast description and features
- **Contact Information**: Update email, social media links, and contact details

### Podcast Platforms
Modify the subscribe section to include your actual podcast platform links:

```html
<a href="YOUR_SPOTIFY_LINK" class="platform-btn spotify">
    <i class="fab fa-spotify"></i>
    Spotify
</a>
```

## 🎵 Adding Real Audio Functionality

The current implementation simulates audio playback. To add real audio functionality:

1. **Replace the audio player simulation** in `script.js`
2. **Add actual audio files** or streaming service integration
3. **Implement real play/pause controls** with HTML5 audio or a service like Spotify Web Playback SDK

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first navigation
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Responsive typography and spacing

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Services
- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Traditional hosting**: Upload files via FTP/SFTP

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 Performance Features

- **Lazy Loading**: Images and content load as needed
- **Throttled Scroll Events**: Optimized scroll performance
- **CSS Animations**: Hardware-accelerated animations
- **Minimal Dependencies**: Only Font Awesome for icons

## 🎨 Customization Ideas

### Theme Variations
- **Cyberpunk**: Add more neon colors and futuristic elements
- **Minimalist**: Reduce animations and focus on typography
- **Retro**: Use retro fonts and color schemes

### Additional Features
- **Blog Section**: Add a blog for show notes and articles
- **Guest Profiles**: Showcase podcast guests
- **Episode Search**: Add search functionality
- **Newsletter Signup**: Integrate with email marketing services
- **Analytics**: Add Google Analytics or other tracking

## 🐛 Troubleshooting

### Common Issues
1. **Fonts not loading**: Check internet connection for Google Fonts
2. **Icons missing**: Ensure Font Awesome CDN is accessible
3. **Animations not working**: Check if JavaScript is enabled
4. **Mobile menu issues**: Verify CSS and JavaScript are properly loaded

### Performance Issues
- Check browser console for JavaScript errors
- Optimize images if adding real content
- Consider using a CDN for external resources

## 📞 Support

For customization help or questions:
- Check the code comments for guidance
- Review the CSS variables for easy changes
- Modify the JavaScript functions as needed

## 📄 License

This project is open source and available under the MIT License.

---

**Move37 Podcast** - Exploring AI research, PhD life, and everything remotely interesting. 🤖📚
