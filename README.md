# Prescripto - Healthcare Management System

A comprehensive healthcare management platform that connects patients with trusted doctors, enabling seamless appointment booking and medical record management.

## 🌟 Features

### For Patients
- **Easy Registration & Login** - Secure user authentication system
- **Doctor Discovery** - Browse doctors by specialty and availability
- **Appointment Booking** - Schedule appointments with preferred time slots
- **Profile Management** - Update personal information and medical history
- **Appointment History** - Track past and upcoming appointments
- **Responsive Design** - Optimized for all devices

### For Doctors
- **Doctor Dashboard** - Manage appointments and patient information
- **Appointment Management** - Accept, complete, or cancel appointments
- **Profile Management** - Update professional information and availability
- **Patient Records** - Access patient details and appointment history

### For Administrators
- **Admin Dashboard** - Overview of system statistics and metrics
- **Doctor Management** - Add new doctors and manage their profiles
- **Appointment Oversight** - Monitor and manage all appointments
- **User Management** - Oversee patient and doctor accounts

## 🏗️ Project Structure

```
prescripto/
├── frontend/          # React.js frontend application
├── backend/           # Node.js/Express backend API
├── admin/            # React.js admin panel
└── README.md
```

## 🚀 Tech Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Styling framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Multer** - File upload handling

### Admin Panel
- **React.js** - UI library
- **Tailwind CSS** - Styling framework
- **React Router** - Client-side routing
- **Axios** - HTTP client

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Cloudinary Account** (for image storage)

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/prescripto.git
cd prescripto
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@prescripto.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Admin Panel Setup
```bash
cd admin
npm install
```

Create a `.env` file in the admin directory:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin panel:
```bash
npm run dev
```

## 🌐 API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/get-profile` - Get user profile
- `POST /api/user/update-profile` - Update user profile
- `POST /api/user/book-appointment` - Book appointment
- `GET /api/user/appointments` - Get user appointments
- `POST /api/user/cancel-appointment` - Cancel appointment

### Doctor Routes
- `GET /api/doctor/list` - Get all doctors
- `POST /api/doctor/login` - Doctor login
- `GET /api/doctor/appointments` - Get doctor appointments
- `POST /api/doctor/complete-appointment` - Mark appointment as completed
- `POST /api/doctor/cancel-appointment` - Cancel appointment

### Admin Routes
- `POST /api/admin/add-doctor` - Add new doctor
- `POST /api/admin/login` - Admin login
- `POST /api/admin/all-doctors` - Get all doctors
- `POST /api/admin/change-availability` - Change doctor availability
- `GET /api/admin/appointments` - Get all appointments
- `POST /api/admin/cancel-appointment` - Cancel appointment
- `GET /api/admin/dashboard` - Get dashboard data

## 🎨 UI/UX Features

- **Modern Design** - Clean and intuitive interface
- **Responsive Layout** - Works seamlessly on all devices
- **Smooth Animations** - Enhanced user experience with transitions
- **Interactive Elements** - Hover effects and micro-interactions
- **Accessibility** - WCAG compliant design principles

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **Input Validation** - Server-side validation for all inputs
- **CORS Protection** - Cross-origin resource sharing configuration
- **Environment Variables** - Sensitive data protection

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Deployment

### Backend Deployment
1. Deploy to platforms like Heroku, Railway, or DigitalOcean
2. Set up environment variables
3. Configure MongoDB connection
4. Set up Cloudinary for image storage

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to Netlify, Vercel, or similar platforms
3. Configure environment variables

### Admin Panel Deployment
1. Build the production version: `npm run build`
2. Deploy to hosting platform
3. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Developer** - React.js, Tailwind CSS
- **Backend Developer** - Node.js, Express.js, MongoDB
- **UI/UX Designer** - Design and user experience

## 📞 Support

For support, email support@prescripto.com or join our Slack channel.

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Special thanks to the healthcare professionals who provided insights
- Icons and images from various open-source resources

---

**Made with ❤️ for better healthcare management**