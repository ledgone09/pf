# 🚀 3D Drawing Studio - Pump.fun Token Launcher

A stunning 3D drawing application that allows users to create rotating 3D artwork and launch tokens on pump.fun with their creations as the token image.

![3D Drawing Studio](https://img.shields.io/badge/3D-Drawing%20Studio-00ff88?style=for-the-badge)
![Pump.fun](https://img.shields.io/badge/Pump.fun-Integration-7c3aed?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Ready-339933?style=for-the-badge)

## ✨ Features

- **🎨 3D Drawing Canvas** - Draw with mouse/finger and see your artwork in rotating 3D space
- **🚀 Token Launch** - Create pump.fun tokens using your 3D artwork as the token image
- **📸 Screenshot Capture** - Automatically captures your 3D drawings for token creation
- **🎮 Interactive Controls** - Clear, Pause, Undo, and navigation controls
- **🌈 Pump.fun Styling** - Beautiful green/purple color scheme matching pump.fun branding
- **📱 Mobile Responsive** - Works on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- **Frontend**: HTML5 Canvas, CSS3, Vanilla JavaScript
- **Backend**: Node.js HTTP Server
- **3D Engine**: Custom ge1doot.js library
- **Styling**: Modern CSS with pump.fun color palette

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 3d-drawing-studio
   ```

2. **Start the server**
   ```bash
   node server.js
   ```

3. **Open your browser**
   ```
   http://localhost:8000
   ```

### 🌐 Deploy to Render.com

1. **Fork this repository** to your GitHub account

2. **Create a new Web Service** on [Render.com](https://render.com)

3. **Connect your GitHub repository**

4. **Configure the service:**
   - **Build Command**: `npm install` (optional, no dependencies needed)
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - **Plan**: Free tier works perfectly

5. **Deploy!** - Your app will be live at `https://your-app-name.onrender.com`

### 🔧 Environment Variables

The app automatically detects the deployment environment:

- **PORT**: Automatically set by Render.com (defaults to 8000 locally)
- **NODE_ENV**: Set to `production` for production deployments

### 📦 Other Deployment Options

#### Heroku
```bash
# Install Heroku CLI, then:
heroku create your-app-name
git push heroku main
```

#### Vercel
```bash
# Install Vercel CLI, then:
vercel --prod
```

#### Railway
```bash
# Connect your GitHub repo to Railway
# No additional configuration needed
```

## 🎮 How to Use

1. **Draw Your Art**: Use mouse or finger to draw on the canvas
2. **Watch it Rotate**: Your drawing automatically rotates in 3D space
3. **Launch Token**: Click the "🚀 Launch Token" button
4. **Enter Details**: Add token name and ticker symbol
5. **Create on Pump.fun**: Your 3D artwork becomes the token image

## 🎨 Controls

- **Draw**: Click and drag to draw
- **Clear**: Remove all drawings
- **Pause**: Stop/start rotation
- **Undo**: Remove last drawing
- **Space**: Toggle rotation
- **Z**: Switch drawing depth
- **Del**: Undo last shape

## 🌟 Features in Detail

### 3D Drawing Engine
- Real-time 3D rendering using HTML5 Canvas
- Smooth curves and particle effects
- Multiple depth layers for complex artwork
- Automatic rotation with pause/resume

### Token Launch Integration
- Canvas screenshot capture
- Pump.fun URL generation
- Form validation for token details
- Beautiful modal interface

### Responsive Design
- Works on all screen sizes
- Touch-friendly controls
- Mobile-optimized interface
- Cross-browser compatibility

## 🔧 Development

### File Structure
```
3d-drawing-studio/
├── index.html          # Main application
├── server.js           # Node.js server
├── package.json        # Dependencies and scripts
├── README.md          # Documentation
└── static/
    ├── css/
    │   └── slider.css  # Navigation styling
    └── js/
        └── ge1doot.js  # 3D graphics engine
```

### Local Development
```bash
# Start development server
npm run dev

# Or directly with Node.js
node server.js
```

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📄 License

MIT License - feel free to use this project for your own applications!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🆘 Support

If you encounter any issues:

1. Check the browser console for errors
2. Ensure you're using a modern browser
3. Try refreshing the page
4. Open an issue on GitHub

## 🎯 Roadmap

- [ ] Save/load drawings to local storage
- [ ] Export drawings as images
- [ ] More drawing tools and effects
- [ ] Social sharing features
- [ ] Gallery of community creations

---

**Made with ❤️ for the pump.fun community**

Deploy your 3D Drawing Studio today and start creating amazing token art! 🚀













