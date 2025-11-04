# 💰 PennyPilot

A simple and elegant expense tracking application built with MERN stack.

## 📝 About

PennyPilot helps you track your daily expenses and income. Manage your finances with an easy-to-use interface and visualize your spending patterns.

## ✨ Features

- 👤 User registration and login
- 💳 Add, edit, and delete transactions
- 📊 View transaction history
- 🎨 Custom avatar selection
- 🔐 Secure authentication with JWT

## 🛠️ Tech Stack

**Frontend:** React, Material-UI, Bootstrap, Axios  
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Authentication:** JWT, Bcrypt

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- MongoDB (local or Atlas account)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pennypilot.git
cd pennypilot
```

2. **Setup Backend**
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

Start the backend:
```bash
npm run dev
```

3. **Setup Frontend**
```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
pennypilot/
├── backend/
│   ├── controllers/      # Business logic
│   ├── models/          # Database models
│   ├── routers/         # API routes
│   └── app.js           # Main server file
│
└── frontend/
    ├── src/
    │   ├── components/  # React components
    │   ├── Pages/       # Page components
    │   └── utils/       # Helper functions
    └── public/
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/setAvatar` - Set avatar

### Transactions
- `GET /api/v1/getTransaction` - Get all transactions
- `POST /api/v1/addTransaction` - Add transaction
- `PUT /api/v1/updateTransaction/:id` - Update transaction
- `DELETE /api/v1/deleteTransaction/:id` - Delete transaction

## 🌐 Deployment

### Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Set root directory to `frontend`
4. Deploy

### Deploy Backend to Vercel/Render

1. Import your repository
2. Set root directory to `backend`
3. Add environment variables (MONGO_URL, PORT)
4. Deploy

**Important:** Update the API URL in `frontend/src/utils/ApiRequest.js` after deployment.

## 👨‍💻 Author

**Pushpraj Pandey**

- GitHub: [@PushprajPandey](https://github.com/PushprajPandey)
- Email: sajalpandey858@gmail.com

## 📄 License

MIT License - feel free to use this project for learning and development.

---

Made with ❤️ using MERN Stack
