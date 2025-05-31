# 🚀 3D Drawing Studio - Pump.fun Token Launcher

A stunning 3D drawing application that allows users to create rotating 3D artwork and launch tokens on pump.fun with their creations as the token image.

![3D Drawing Studio](https://img.shields.io/badge/3D-Drawing%20Studio-00ff88?style=for-the-badge)
![Phantom Secure](https://img.shields.io/badge/Phantom-Secure%20Signing-7c3aed?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-Ready-339933?style=for-the-badge)

## ✨ Features

- **🎨 3D Drawing Canvas** - Draw with mouse/finger and see your artwork in rotating 3D space
- **🚀 Secure Token Launch** - Create pump.fun tokens using **Phantom wallet signing**
- **📸 Screenshot Capture** - Automatically captures your 3D drawings for token creation
- **🎮 Interactive Controls** - Clear, Pause, Undo, and navigation controls
- **🌈 Pump.fun Styling** - Beautiful green/purple color scheme matching pump.fun branding
- **📱 Mobile Responsive** - Works on desktop, tablet, and mobile devices

## 🛠️ Technology Stack

- **Frontend**: HTML5 Canvas, CSS3, Vanilla JavaScript
- **Backend**: Node.js HTTP Server
- **Token Creation**: Secure Phantom wallet transaction signing
- **3D Engine**: Custom ge1doot.js library
- **Styling**: Modern CSS with pump.fun color palette

## 🚀 Quick Deploy to Render.com

**✅ SECURE & READY: Uses Phantom wallet transaction signing!**

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
- ✅ **Secure Token Creation** - Phantom wallet transaction signing
- ✅ **No Private Keys** - Wallet stays secure in Phantom
- ✅ **Direct Blockchain** - Real transactions on Solana mainnet
- ✅ **Pump.fun Integration** - Tokens appear on pump.fun

## 🎮 How to Use

1. **Draw Your Art** - Create 3D rotating artwork on the canvas
2. **Click "🚀 Launch Token"** - Opens the token creation modal
3. **Connect Phantom Wallet** - One-click secure connection
4. **Sign Transaction** - Phantom wallet handles all the security
5. **Token Created** - Your token appears on pump.fun instantly!

## 🔐 Security Benefits

### Secure Phantom Wallet Signing
- ✅ **No Private Keys Required** - Your keys stay safe in Phantom
- ✅ **Transaction Preview** - See exactly what you're signing
- ✅ **User Control** - Approve or reject each transaction
- ✅ **Industry Standard** - Uses standard web3 wallet practices

### How It Works
1. **Build Transaction** - App creates the token transaction locally
2. **Phantom Signs** - Wallet securely signs without exposing keys
3. **Submit to Network** - Signed transaction goes to Solana blockchain
4. **Token Created** - New token appears on pump.fun

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

**✅ Works everywhere**: Localhost, hosted, anywhere Phantom can connect!

## 🔧 Technical Implementation

### Secure Transaction Flow
- **Local Transaction Building** - Constructs pump.fun token creation transaction
- **Phantom Wallet Signing** - Secure signing without key exposure
- **Direct Blockchain Submission** - Sends signed transaction to Solana
- **Pump.fun Integration** - Token automatically appears on pump.fun

### Enhanced Security Features
- **No Private Key Handling** - App never sees your private keys
- **Transaction Transparency** - Users see exactly what they're signing
- **Error Recovery** - Graceful fallback to pump.fun website if needed
- **Network Flexibility** - Works with any Solana RPC endpoint

## 📦 Technical Details

### Solana Integration
- **Web3.js Library** - Official Solana JavaScript SDK
- **Transaction Building** - Constructs proper pump.fun token instructions
- **Phantom Signing** - Secure wallet integration
- **Network Submission** - Direct blockchain transaction submission

## 🌐 Live Demo

After deploying to Render, your app will be available at:
`https://your-app-name.onrender.com`

Example: `https://3d-drawing-studio-abc123.onrender.com`

## 🎨 Enhanced Security Features

- **🔐 Secure by Design** - No private key handling or storage
- **🛡️ Phantom Integration** - Industry-standard wallet security
- **👁️ Transaction Transparency** - Users see what they're signing
- **🚨 Error Handling** - Comprehensive error messages and recovery
- **🔄 Fallback Support** - Redirects to pump.fun if direct creation fails

## 🚀 Production Ready Features

This app includes:
- ✅ Secure Phantom wallet transaction signing
- ✅ No private key requirements or handling
- ✅ Professional error handling and user feedback
- ✅ Direct token creation with blockchain integration
- ✅ Automatic pump.fun token listing
- ✅ Mobile-responsive design
- ✅ Cross-platform compatibility

## 🔍 Troubleshooting

### Phantom Wallet Issues
1. **Install Phantom** - Download from [phantom.app](https://phantom.app)
2. **Unlock Wallet** - Make sure Phantom is unlocked
3. **Refresh Page** - Reload the app after installing Phantom
4. **Check Connection** - Ensure wallet is connected to Solana mainnet

### Token Creation Issues
1. **Transaction Rejected** - User can always try again
2. **Insufficient SOL** - Need ~0.01 SOL for transaction fees
3. **Network Issues** - Check internet connection
4. **Phantom Popup** - Allow popup windows for transaction approval

### Success Indicators
1. **Phantom Popup** - Transaction approval window appears
2. **Signature Generated** - Unique transaction signature provided
3. **Explorer Link** - Direct link to view transaction on Solscan
4. **Pump.fun Link** - Direct link to trade the new token

Deploy to Render.com and enjoy secure token creation with Phantom wallet! 🎨→🪙🔐

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













