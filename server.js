
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.get('/api/bloodbanks', (req, res) => {
    console.log("API Hit: Frontend requested blood bank data");
    
    try {
        if (fs.existsSync('database.json')) {
            const rawData = fs.readFileSync('database.json', 'utf-8');
            const bloodBanks = JSON.parse(rawData);
            res.json(bloodBanks);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error("Error reading database:", error);
        res.status(500).json({ error: "Failed to read database" });
    }
});

app.post('/api/requests', (req, res) => {
    console.log("API Hit: New Emergency Request Received:", req.body);
    
    try {
        const requestFilePath = 'requests.json';
        let allRequests = [];

        if (fs.existsSync(requestFilePath)) {
            const rawData = fs.readFileSync(requestFilePath, 'utf-8');
            if (rawData.trim() !== "") {
                allRequests = JSON.parse(rawData);
            }
        }
        
        const newRequest = { 
            ...req.body, 
            timestamp: new Date().toLocaleString() 
        };
        
        allRequests.push(newRequest);
        fs.writeFileSync(requestFilePath, JSON.stringify(allRequests, null, 4));
        
        res.status(201).json({ message: "Emergency request saved successfully!" });
        
    } catch (error) {
        console.error("Error saving the request:", error);
        res.status(500).json({ error: "Failed to save the emergency request" });
    }
});

io.on('connection', (socket) => {
    console.log('Network Socket: A user connected for real-time updates');
    socket.on('disconnect', () => {
        console.log('Network Socket: User disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`[ SUCCESS ] RTBMS Backend running safely on http://localhost:${PORT}`);
});
