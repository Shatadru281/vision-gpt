🚀 Vision-GPT 🤖

AI-Powered Chat Assistant with Visual Flair

📖 Description

Vision-GPT is a full-stack conversational assistant inspired by the capabilities of modern GPT-based AI. Built using the MERN stack, the project integrates OpenAI’s GPT models to deliver intelligent chat responses, enhanced with a real-time typing effect and persistent message storage in MongoDB.
GitHub

This project serves both as a practical implementation of a GPT-powered assistant and a learning example of how to combine backend APIs, frontend experience, real-time UX, and database persistence into a cohesive application.

✨ Features

💬 GPT-Powered Chat: AI responses driven by OpenAI’s language models

⌨️ Real-Time Typing Indicator: Simulates natural typing feedback

🗃️ Persistent Chat Storage: Chats saved to MongoDB for later retrieval

📡 Express API Backend: Handles requests and communication with OpenAI

🌐 Interactive Frontend UI: Built with modern web technologies

🔒 Secure API Integration: Keeps keys and sensitive data out of client code

🧠 Extensible Architecture: Easy to expand with authentication, image vision, etc.

🧰 Tech Stack

Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express
Database	MongoDB
AI Integration	OpenAI GPT API
Real-Time UI	JavaScript/DOM
Deployment Options	Heroku, Vercel, Railway
📁 Project Structure

vision-gpt/
│
├── Backend/                # Express API & OpenAI integration
├── Frontend/               # UI client with chat interface
├── .gitignore              # Ignored files
├── package.json            # Project dependencies & scripts
├── README.md               # Project documentation
└── …


👉 The separation of Frontend and Backend folders makes it easy to scale the application into microservices or add features like authentication or image uploads.

⚙️ How to Run Locally
1. Clone the repo
git clone https://github.com/Shatadru281/vision-gpt.git
cd vision-gpt

2. Install backend dependencies
cd Backend
npm install

3. Set up environment variables

Create a .env file in the Backend folder:

OPENAI_API_KEY=your_openai_api_key
MONGO_URL=your_mongodb_connection_string
PORT=5000

4. Start backend
npm start


The backend will start at:

http://localhost:5000

5. Run Frontend

In another terminal:

cd Frontend
npm install
npm start


Open your browser:

http://localhost:3000

🧪 Testing

Add tests using Jest or Mocha for backend API routes and frontend UI behavior.

Example command after setup:

npm test

📦 API Endpoints
Method	Endpoint	Description
POST	/api/chat	Send user message to GPT and get reply
GET	/api/chats	Retrieve stored chats
DELETE	/api/chats/:id	Delete a specific chat

(Endpoints may vary based on Backend folder implementation.)


🚀 Deployment

You can deploy your project using platforms like:

Vercel (frontend)

Heroku or Railway (backend + MongoDB)

Make sure to set your environment variables on the platform before deploying.

👤 Author

Created with 💡 and ☕ by SHATADRU ADHIKARY 🙋‍♂️
