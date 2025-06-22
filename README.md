# 🗣️ VoicePay - Voice-Powered E-Commerce

## 🚀 Live Demo

Try it live ➜ [amazonvoicepay.netlify.app](https://amazonvoicepay.netlify.app/)

## Project info

An accessible e-commerce platform with voice-powered checkout for users with visual, motor, or cognitive disabilities.

## 🧠 What it Is

A web app that:
- Simulates authentic Payment checkout via voice commands.
- Responds through voice descriptions at all the sections of the website.
- Validates payment method and confirms transactions through voice.
- Built on static site deployment—frontend-only with mock backend behavior.

---

## 🧩 Features

- **Voice-triggered checkout** using `SpeechRecognition`.
- Amount and order reference detection via voice.
- Mock validation of billing methods (Amazon Pay–style flow).
- Success/error announcements via `SpeechSynthesis`.
- Multilingual voice support for commands in multiple languages beyond English.

---

## ➕ Future Enhancements

- 🔗 **Real Amazon Pay integration** via official SDK/API for actual transactions.
- 🧾 **Replace mock data** with a real-time order and payment management system.
- ⚠️ **Robust error handling** for microphone access issues and unsupported browsers.
- 🌐 **Multilingual voice support** for commands in multiple languages beyond English.

---

## 🛠️ Why You’ll Love It

Easy to extend with real Amazon Pay integration or backend

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/shadcn/ui-%23000000?style=for-the-badge&logo=radixui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Web%20Speech%20API-FF5722?style=for-the-badge&logo=mozilla&logoColor=white" alt="Web Speech API" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</p>

- ⚡ **Vite** – Fast and optimized build tool
- 🟦 **TypeScript** – Type-safe JavaScript for scalable development
- ⚛️ **React** – Component-based UI framework
- 🎨 **shadcn/ui** – Accessible UI components built on Radix and Tailwind
- 💨 **Tailwind CSS** – Utility-first CSS framework for styling
- 🧠 **Web Speech API** – Voice input (SpeechRecognition) & output (SpeechSynthesis)
- ☁️ **Netlify** – For seamless deployment and hosting

- No backend or database required — everything runs client-side

---

## 🎬 Screenshots
![Screenshot 2025-06-22 202651](https://github.com/user-attachments/assets/799d70ec-983d-4290-bb8f-56ade15919a8)

![Screenshot 2025-06-22 201912](https://github.com/user-attachments/assets/bd205517-954e-4de6-832c-9224d458323c)

![Screenshot 2025-06-22 202121](https://github.com/user-attachments/assets/c38b662f-4e70-41ae-8057-a08e44502a59)

![Screenshot 2025-06-22 203802](https://github.com/user-attachments/assets/7292ffa0-16bd-4b52-9d0d-a698b5ab0e00)

![Screenshot 2025-06-22 203958](https://github.com/user-attachments/assets/0b1fee7a-e943-45d7-98b8-9d6cb6645b80)

![Screenshot 2025-06-22 202748](https://github.com/user-attachments/assets/97d868e5-309f-452c-b0e8-c9c13e36d34c)

![Screenshot 2025-06-22 202828](https://github.com/user-attachments/assets/39d6c027-1d5e-4a5d-ab61-031be8367983)

![Screenshot 2025-06-22 202848](https://github.com/user-attachments/assets/68e818a0-74b1-483a-9a38-2624e411ca26)

![Screenshot 2025-06-22 203022](https://github.com/user-attachments/assets/d36aab1b-41c7-46af-bba4-4452bacf534b)

![Screenshot 2025-06-22 203237](https://github.com/user-attachments/assets/de3ced3f-055a-434b-84d9-4802239eb0b1)

![Screenshot 2025-06-22 203253](https://github.com/user-attachments/assets/f9ca1b45-f74d-474c-8fd5-5b6b248fac52)

![Screenshot 2025-06-22 204852](https://github.com/user-attachments/assets/05fde13d-6776-4b34-966d-d5397db136b4)

![Screenshot 2025-06-22 203613](https://github.com/user-attachments/assets/021390a6-5924-4e0c-8061-cdd747e35b14)

![Screenshot 2025-06-22 203639](https://github.com/user-attachments/assets/672a8073-b6d0-40fe-a35e-2c6198e192ce)

![Screenshot 2025-06-22 203736](https://github.com/user-attachments/assets/9fa609d6-8741-4057-bc41-ffcafdbe2e43)

![Screenshot 2025-06-22 211707](https://github.com/user-attachments/assets/9783062d-6396-49b4-817b-6a600351971b)


## ⚙️ How to Run Locally

```bash
git clone https://github.com/your-username/amazon-voice-pay.git
cd amazon-voice-pay        # ✅ Enters the project folder
npm install                # ✅ Installs all dependencies from package.json
npm run dev                # ✅ Starts the Vite development server



## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes to your version control system.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## How can I deploy this project?

You can deploy this project using any modern hosting platform that supports static sites, such as:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Simply build the project using `npm run build` and deploy the generated `dist` folder.

## Can I connect a custom domain?

Yes, you can! Most hosting platforms support custom domain connections. Check your hosting platform's documentation for specific instructions on how to connect a custom domain.
