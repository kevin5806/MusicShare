# 🎵 MusicShare

A modern web app to share your Spotify listening history and music tastes with friends.

---

## ✅ Features

- **💬 Spotify Integration**  
  Connect your Spotify account to display recent tracks, top artists, favorite songs, and more.

- **👥 Make Music Friends**  
  Users can send friend request to every user on the platform.

- **🔒 Profile & Permissions**  
  Public/private profiles, friend requests, and controls over who views your data.

- **🌐 Real-Time Play History**  
  Live-updated feed of current listening activity, powered by Next.js, MongoDB, and Spotify API.

- **⌛ Still in Active Development**  
  As of July 8, 2025, this project is still under development

---

## 🔧 Tech Stack

| Component         | Technologies Used                                           |
|------------------|------------------------------------------------------------|
| **Frontend**      | Next.js, React, Tailwind CSS                             |
| **Backend/API**   | Node.js, API Routes, Spotify Web API                      |
| **Database**      | MongoDB (via Mongoose)                                   |
| **Deployment**    | Vercel                                                   |
| **Auth**          | OAuth 2.0 flow using Spotify’s API                       |
| **Email**         | Nodemailer, Resend |
| **Utilities**     | TypeScript, ESLint, Prettier...                     |


## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/kevin5806/MusicShare.git
cd MusicShare
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file with:

```
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXTAUTH_URL=https://your-domain.com
MONGODB_URI=mongodb://username:password@host:port/dbname
EMAIL_USER=you@example.com
EMAIL_PASS=your-email-password
```

### 4. Run Locally

```bash
npm run dev
```

Navigate to `http://localhost:3000`

### 5. Deployment on Vercel

1. Connect the GitHub repo to Vercel.
2. Add the same `.env` variables in the Vercel dashboard.
3. Deploy!


## 📘 Usage

1. Log in through Spotify.
2. Browse your dashboard: top artists, recent songs, listening trends.
3. Invite friends or get invited by creating taste buddies.
4. Explore shared music and discover new tracks with friends.


## 🛠 Contributing

1. Fork this repo 🕶  
2. Create a new feature branch (`git checkout -b feature/my-feature`)  
3. Make your changes & organize with commits  
4. Run `npm run lint` + `npm run test` (if tests exist)  
5. Submit a pull request. Describe your feature, motivation, and any screenshots


## 📝 License

This project is open-source under the **MIT License**. See [LICENSE.md](LICENSE.md) for details.


## 👤 About

Built by **Kevin Leoni** — passionate about web dev, music, and connecting friends through shared tastes.  
For support or feedback, reach out: [GitHub Issues](https://github.com/kevin5806/MusicShare/issues).
