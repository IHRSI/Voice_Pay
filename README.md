# <img src="https://github.com/user-attachments/assets/b6ee6820-905b-4022-801b-350ade65f443" alt="VoicePay Logo" width="75" /> VoicePay — Voice-Powered E-Commerce

> An **AI-powered, voice-first payment experience** designed to make online shopping more accessible for users with **visual, motor, and cognitive disabilities**.

🌐 **Live Demo:** https://voicepay1.netlify.app/

<p align="left">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/shadcn/ui-%23000000?style=for-the-badge&logo=radixui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Web%20Speech%20API-FF5722?style=for-the-badge&logo=mozilla&logoColor=white" alt="Web Speech API" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</p>

---

## 📌 Overview

**VoicePay** is an accessible e-commerce platform that introduces a **voice-powered checkout experience** for users with disabilities.

Inspired by an **Amazon-style payment flow**, the platform enables users to complete checkout interactions through **voice commands**, **speech feedback**, and **multilingual accessibility support**.

The system simulates a real-world payment process while prioritizing **hands-free navigation**, **accessibility**, and **inclusive digital experiences**.

---

## 🎯 Problem Statement

Traditional online checkout systems can create accessibility barriers for users with **visual, motor, or cognitive impairments**.

**VoicePay** addresses this challenge by providing a **voice-first payment experience**, enabling users to navigate checkout workflows using:

* 🎙️ Voice Commands
* 🔊 Speech Feedback
* 🌍 Multilingual Support
* 🛒 Accessible Payment Navigation

---

## ✨ Features

### 🎙️ Voice-Powered Checkout

* Voice-triggered payment flow using `SpeechRecognition`
* Hands-free checkout interaction
* Voice confirmation for payment steps

### 🧠 Smart Voice Interaction

* Detects **amounts and order references**
* Validates payment methods
* Confirms transactions using voice feedback

### 🔊 Speech Assistance

* Uses `SpeechSynthesis` for spoken responses
* Announces success/error states
* Guides users through checkout

### 🌍 Accessibility Support

* Multilingual voice support
* Designed for accessibility-first interaction
* Inclusive experience for diverse users

### ⚡ Frontend-Only Architecture

* Static site deployment
* Mock backend payment behavior
* Lightweight and easy to deploy

---

## 🏆 Highlights

✔️ Designed a **voice-first payment flow** for accessibility

✔️ Implemented **speech-based checkout** using **Web Speech API**

✔️ Added **multilingual voice interaction support**

✔️ Built an **Amazon-inspired payment experience** focused on inclusivity


---

## 🎬 VoicePay Flow Walkthrough

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/799d70ec-983d-4290-bb8f-56ade15919a8" width="600"/></td>
    <td><img src="https://github.com/user-attachments/assets/bd205517-954e-4de6-832c-9224d458323c" width="600"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/c38b662f-4e70-41ae-8057-a08e44502a59" width="600"/></td>
    <td><img src="https://github.com/user-attachments/assets/7292ffa0-16bd-4b52-9d0d-a698b5ab0e00" width="600"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/0b1fee7a-e943-45d7-98b8-9d6cb6645b80" width="600"/></td>
    <td><img src="https://github.com/user-attachments/assets/97d868e5-309f-452c-b0e8-c9c13e36d34c" width="600"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/39d6c027-1d5e-4a5d-ab61-031be8367983" width="600"/></td>
    <td><img src="https://github.com/user-attachments/assets/68e818a0-74b1-483a-9a38-2624e411ca26" width="600"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/d36aab1b-41c7-46af-bba4-4452bacf534b" width="600"/></td>
    <td><img src="https://github.com/user-attachments/assets/de3ced3f-055a-434b-84d9-4802239eb0b1" width="600"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/f9ca1b45-f74d-474c-8fd5-5b6b248fac52" width="600"/></td>
    <td><img src="https://github.com/user-attachments/assets/05fde13d-6776-4b34-966d-d5397db136b4" width="600"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/021390a6-5924-4e0c-8061-cdd747e35b14" width="600"/></td>
    <td><img src="https://github.com/user-attachments/assets/672a8073-b6d0-40fe-a35e-2c6198e192ce" width="600"/></td>
  </tr>
</table>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9fa609d6-8741-4057-bc41-ffcafdbe2e43" width="1000" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9783062d-6396-49b4-817b-6a600351971b" width="1000" />
</p>

---

## ⚙️ Getting Started

### Clone Repository

```bash
git clone https://github.com/IHRSI/VoicePay.git
cd VoicePay
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Runs locally at:

```bash
http://localhost:5173
```

---

## 🚀 Deployment

You can deploy VoicePay using:

* Netlify
* Vercel
* GitHub Pages
* Firebase Hosting

Build production bundle:

```bash
npm run build
```

Deploy the generated `dist` folder.

---

## 🔮 Future Enhancements

* 🔗 Real payment gateway integration
* 🧾 Backend-based order management
* ⚠️ Improved microphone error handling
* 🌍 Expanded multilingual support
* 🔐 Secure authentication and payment validation

---

## 👨‍💻 Developed For

Built to promote **inclusive digital payments and accessibility-first user experiences**.
