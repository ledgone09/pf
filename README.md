# 🚀 3D Drawing Studio - Pump.fun Token Launcher

A stunning 3D drawing application that allows users to create rotating 3D artwork and launch tokens on pump.fun with their creations as the token image.

![3D Drawing Studio](https://img.shields.io/badge/3D-Drawing%20Studio-00ff88?style=for-the-badge)
![PumpfunAPI](https://img.shields.io/badge/PumpfunAPI.org-Integration-7c3aed?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Ready-339933?style=for-the-badge)

## ✨ Features

- **🎨 3D Drawing Canvas** - Draw with mouse/finger and see your artwork in rotating 3D space
- **🚀 Token Launch** - Create pump.fun tokens using **PumpfunAPI.org** reliable service
- **📸 Screenshot Capture** - Automatically captures your 3D drawings for token creation
- **🎮 Interactive Controls** - Clear, Pause, Undo, and navigation controls
- **🌈 Pump.fun Styling** - Beautiful green/purple color scheme matching pump.fun branding
- **📱 Mobile Responsive** - Works on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- **Frontend**: HTML5 Canvas, CSS3, Vanilla JavaScript
- **Backend**: Node.js HTTP Server
- **Token Creation**: PumpfunAPI.org reliable service
- **3D Engine**: Custom ge1doot.js library
- **Styling**: Modern CSS with pump.fun color palette

## 🚀 Quick Deploy to Render.com

**✅ READY FOR PRODUCTION: Uses PumpfunAPI.org for reliable token creation!**

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
- ✅ **Real Token Creation** - PumpfunAPI.org integration
- ✅ **Phantom Wallet Integration** - Enhanced connection for hosted environments
- ✅ **Reliable API** - Uses official PumpfunAPI.org service
- ✅ **Solana Blockchain** - Real transactions on mainnet

## 🎮 How to Use

1. **Draw Your Art** - Create 3D rotating artwork on the canvas
2. **Click "🚀 Launch Token"** - Opens the token creation modal
3. **Connect Phantom Wallet** - Enhanced connection for hosted apps
4. **Provide Private Key** - For secure token creation (use burner wallet!)
5. **Launch Token** - Creates a real token on pump.fun with your art!

## 🔐 Security Important Notes

### Private Key Requirements
- **PumpfunAPI.org requires your wallet private key** for token creation
- **⚠️ SECURITY WARNING**: Only use a **burner wallet** with minimal SOL (0.2-0.5 SOL max)
- **Never use your main wallet** for this purpose
- **Export private key** from Phantom wallet settings when prompted

### How to Create a Burner Wallet
1. Create a new Phantom wallet
2. Send only 0.2-0.5 SOL to it (enough for token creation + fees)
3. Use this wallet's private key for token creation
4. Keep your main wallet safe and separate

## 🛠️ Local Development

For development and testing:

```bash
# Install dependencies
npm install

# Start local server
node server.js

# Open in browser
http://localhost:8000
```

**Note**: Token creation works on both localhost and production with PumpfunAPI.org!

## 🔧 Technical Implementation

### PumpfunAPI.org Integration
- **Reliable Service**: Uses official PumpfunAPI.org instead of direct pump.fun APIs
- **Proper Error Handling**: Comprehensive error messages and user guidance
- **Security Prompts**: Clear warnings about private key usage
- **Success Tracking**: Direct links to created tokens and transactions

### Enhanced Phantom Integration
- **Hosted Environment Support**: Improved detection for deployed apps
- **Connection Retry Logic**: Better handling for slower loading environments
- **Error Codes**: Specific handling for different connection errors
- **User Guidance**: Clear instructions for wallet setup

## 📦 API Details

Uses [PumpfunAPI.org](https://docs.pumpfunapi.org/api-endpoints/create-token) with these features:
- **Endpoint**: `https://api.pumpfunapi.org/pumpfun/create/token`
- **Rate Limit**: 60 requests per minute per IP
- **Fees**: 0.05 SOL system cost + 0.00065 SOL transaction fee
- **Requirements**: Private key, 0.1 SOL purchase amount
- **Image Upload**: Direct file upload support

## 🌐 Live Demo

After deploying to Render, your app will be available at:
`https://your-app-name.onrender.com`

Example: `https://3d-drawing-studio-abc123.onrender.com`

## 🎨 Enhanced Features

- **Reliable Token Creation**: PumpfunAPI.org service (99%+ uptime)
- **Security Guidance**: Clear instructions for safe private key usage
- **Enhanced Wallet Support**: Better Phantom integration for hosted apps
- **Error Recovery**: Comprehensive error handling and user guidance
- **Success Tracking**: Direct links to created tokens and blockchain transactions

## 🚀 Production Ready Features

This app includes:
- ✅ Reliable PumpfunAPI.org integration
- ✅ Enhanced security warnings and guidance
- ✅ Improved Phantom wallet connection for hosted environments
- ✅ Comprehensive error handling
- ✅ Direct token creation without redirects
- ✅ Professional success/error messages
- ✅ Mobile-responsive design

## 🔍 Troubleshooting

### Phantom Wallet Not Connecting
1. Ensure Phantom extension is installed and unlocked
2. Refresh the page and try again
3. Check browser console for specific error messages
4. Try incognito/private browsing mode

### Token Creation Issues
1. **Private Key Error**: Use Phantom settings > Export Private Key
2. **Insufficient SOL**: Ensure wallet has at least 0.2 SOL
3. **Network Issues**: Check internet connection and try again
4. **API Limits**: Wait a few minutes if hitting rate limits

### Security Best Practices
1. **Always use a burner wallet** for token creation
2. **Never share your private key** with anyone
3. **Keep main wallet separate** from token creation activities
4. **Verify all transaction details** before confirming

Deploy to Render.com and start creating tokens from 3D art with confidence! 🎨→🪙

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













