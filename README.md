Real Time Blood Managing System (RTBMS)

This project is a lightweight, real-time web application built to solve a critical issue: finding blood donors quickly during medical emergencies. It connects users with a live database of local blood banks and tracks nearby donation events, ensuring that time-sensitive information is readily available.

Features

* Live Availability Feed: Displays current blood stock levels for local hospitals and blood banks.
* Emergency Broadcasting: Allows users to submit urgent blood requests that are immediately saved to the system database.
* Dynamic Search and Filter: Quickly sort through facilities to find specific blood types or hospital names.
* Real-Time Architecture: Configured with WebSockets to handle live inventory updates without requiring page refreshes.

Tech Stack

* Frontend: HTML5, Vanilla JavaScript, Tailwind CSS (via CDN)
* Backend: Node.js, Express.js
* Real-Time Communication: Socket.io
* Database: Node's native File System (fs) module (using JSON files for lightweight, serverless local storage)

Getting Started

To run this project locally on your machine, follow these steps.

Prerequisites

You will need Node.js installed on your computer.

Installation

1. Clone the repository or download the source code.
2. Open your terminal and navigate to the project directory.
3. Install the required backend dependencies by running: npm install express cors socket.io
4. Ensure you have a database.json file in the root directory. This acts as the mock database for the initial blood bank inventory. If it does not exist, create it and add an array of hospital objects.

Running the Server

Start the backend server by running the following command in your terminal: node server.js
The terminal will confirm that the server is running safely on port 3000. Keep this terminal window open.

Viewing the Application

Because this prototype separates the static frontend from the API backend, you do not need to run the HTML file through a local server. Once your Node.js backend is running, simply double-click the index.html file to open it directly in your web browser.

Architecture and Development Notes

For this initial prototype, I prioritized building a functional full-stack loop (GET and POST data flows) over deploying a heavy database infrastructure. I utilized Node's native fs module to read from database.json and write incoming emergency requests to a dynamically generated requests.json file. This keeps the application incredibly lightweight and easy to demo locally.

Currently, the geographical distances are simulated to test the UI and backend routing. The immediate next step for the production version is integrating the HTML5 Geolocation API to calculate exact distances between the user and the facilities.

Author

Developed by Arkaprava Chakraborty
