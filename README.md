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

## 🚀 Quick Deploy to Render.com (Recommended)

**⚠️ IMPORTANT: Token creation requires hosting on a live domain due to CORS restrictions. Deploy to Render for full functionality!**

### 1. Deploy to Render.com

1. **Fork/Clone this repository**
2. **Go to [Render.com](https://render.com)** and sign up
3. **Create a new Web Service**
4. **Connect your GitHub repository**
5. **Configure the service:**
   - **Name**: `3d-drawing-studio`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Port**: `8000` (auto-detected)

6. **Click "Deploy"** - Your app will be live in ~5 minutes!

### 2. Your Live App Features
- ✅ **3D Drawing Canvas** - Draw with mouse/touch
- ✅ **Real Token Creation** - Direct pump.fun integration
- ✅ **Phantom Wallet Integration** - Connect & sign transactions
- ✅ **IPFS Upload** - Automatic artwork storage
- ✅ **Solana Blockchain** - Real transactions on mainnet

## 🎮 How to Use

1. **Draw Your Art** - Create 3D rotating artwork on the canvas
2. **Click "🚀 Launch Token"** - Opens the token creation modal
3. **Connect Phantom Wallet** - One-click wallet connection
4. **Launch Token** - Creates a real token on pump.fun with your art!

## 🛠️ Local Development

For development only (token creation won't work due to CORS):

```bash
# Install dependencies
npm install

# Start local server
node server.js

# Open in browser
http://localhost:8000
```

## ⚠️ CORS Limitations on Localhost

When running locally, pump.fun's API is blocked by browser CORS policies. You'll see:
- ✅ 3D drawing works
- ✅ Wallet connection works  
- ❌ Token creation fails (CORS blocked)
- 🔄 Automatic redirect to pump.fun as fallback

**Solution**: Deploy to Render.com for full functionality!

## 🔧 Technical Stack

- **Frontend**: HTML5 Canvas, JavaScript, CSS3
- **3D Engine**: Custom WebGL implementation
- **Blockchain**: Solana Web3.js
- **Wallet**: Phantom integration
- **Storage**: IPFS via pump.fun
- **Backend**: Node.js HTTP server

## 📦 Dependencies

- `@solana/web3.js` - Solana blockchain integration
- `buffer` - Browser compatibility
- Node.js built-in modules for server

## 🌐 Live Demo

Deploy to Render and your app will be available at:
`https://your-app-name.onrender.com`

## 🎨 Features

- **3D Drawing Canvas**: Real-time 3D artwork creation
- **Token Launch**: Direct pump.fun integration
- **Wallet Integration**: Phantom wallet support
- **Mobile Responsive**: Touch-friendly interface
- **Auto-fill Forms**: Random token names for testing
- **Transaction Links**: Direct links to blockchain explorer
- **IPFS Storage**: Permanent artwork storage

## 🚀 Production Ready

This app is configured for production deployment with:
- Environment variable support
- Proper error handling
- Security headers
- Static file serving
- Graceful shutdown handling

Deploy to Render.com and start creating tokens from 3D art! 🎨→🪙

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













