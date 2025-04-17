# 🛒 E-commerce UI Clone


## 🚀 Live Demo

🔗 **Deployed Site**: https://e-commerce-frontend-ratnesh.vercel.app/
📁 **GitHub Repo**: https://github.com/RatneshMaurya1/E-commerce-Frontend

---

## 📌 Key Requirements

### ✅ Front-End Development

- Framework: **React.js**
- Responsive design
- Pages: Product Listings, Product Details, Cart, Checkout

### ✅ API Integration

- Uses **Platzi Fake API** to fetch:
  - Products
  - Categories
  - Images, Prices, Descriptions

### ✅ Additional Features

- 🔐 **User Authentication** using Firebase (Login/Signup)
- 🛒 Add to Cart & Mock Checkout
- 🔍 Bonus: Product Search and Filtering


---

## 🧰 Tech Stack

| Area            | Tech Used                     |
|-----------------|-------------------------------|
| Frontend        | React.js                      |
| State Mgmt      | React Context API             |
| Styling         | CSS Modules                   |
| Authentication  | Firebase                      |
| API             | Platzi Fake Store API         |
| Deployment      | Vercel / Netlify              |

---

## 📁 Folder Structure

```
E-COMMERCE-CHALLENGE/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Context/
│   │   ├── detailsPopup/
│   │   └── navbar/
│   ├── pages/
│   │   ├── cart/
│   │   ├── home/
│   │   ├── login/
│   │   └── myOrder/
│   ├── firebase.js
│   └── App.jsx
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-clone.git
cd ecommerce-clone
npm install
npm run dev
```

### 2. Firebase Setup

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable **Email/Password** authentication under the "Authentication" section
- Get your Firebase config and replace the content in `src/firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "YOUR_APP_ID"
};
```

## Screenshots
- Home page
  ![Screenshot 2025-04-17 144638](https://github.com/user-attachments/assets/56550acd-d506-44d3-b28b-a9d22e93d6ed)
- Cart page
  ![Screenshot 2025-04-17 144654](https://github.com/user-attachments/assets/d76b6b89-9019-4c06-a168-888429ec6f81)


## 👨‍💻 Author

- ✨ Developer: Ratnesh Kumar Maurya
- 📧 Email: ratneshmaurya083@gmail.com
