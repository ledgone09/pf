const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Use environment variable for port, fallback to 8000 for local development
const port = process.env.PORT || 8000;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    
    // Parse URL
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // If requesting root, serve index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }
    
    // Build file path
    const filePath = path.join(__dirname, pathname);
    
    // Get file extension
    const ext = path.parse(filePath).ext;
    
    // Check if file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>404 - Not Found</title>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            text-align: center; 
                            background: #1a0b2e; 
                            color: #00ff88; 
                            padding: 50px; 
                        }
                        h1 { font-size: 48px; margin-bottom: 20px; }
                        p { font-size: 18px; }
                        a { color: #00ff88; text-decoration: none; }
                        a:hover { color: #7c3aed; }
                    </style>
                </head>
                <body>
                    <h1>404 - File Not Found</h1>
                    <p>The requested file <code>${pathname}</code> was not found.</p>
                    <p><a href="/">← Back to 3D Drawing Studio</a></p>
                </body>
                </html>
            `);
            return;
        }
        
        // Read and serve the file
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
            }
            
            // Set content type
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            res.setHeader('Content-Type', contentType);
            
            // Add CORS headers for development
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            
            // Cache control for static assets
            if (ext === '.css' || ext === '.js' || ext === '.png' || ext === '.jpg' || ext === '.gif') {
                res.setHeader('Cache-Control', 'public, max-age=3600'); // 1 hour
            }
            
            res.statusCode = 200;
            res.end(data);
        });
    });
});

// Bind to all interfaces (0.0.0.0) for cloud deployment
server.listen(port, '0.0.0.0', () => {
    console.log('🚀 3D Drawing Studio Server Started!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`🌐 Server running on port: ${port}`);
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🔗 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');
    console.log('✨ Features available:');
    console.log('   • 3D Drawing Canvas');
    console.log('   • Pump.fun Token Launch');
    console.log('   • Real-time 3D Rotation');
    console.log('   • Canvas Screenshot Capture');
    console.log('');
    if (process.env.NODE_ENV === 'production') {
        console.log('🎯 Production deployment ready!');
    } else {
        console.log('🎯 Local development server:');
        console.log(`   http://localhost:${port}`);
    }
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});

// Handle server shutdown gracefully
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    server.close(() => {
        console.log('✅ Server stopped successfully');
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    server.close(() => {
        console.log('✅ Server stopped successfully');
        process.exit(0);
    });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
}); 