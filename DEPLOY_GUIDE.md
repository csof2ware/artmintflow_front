
# 🚀 Deployment Guide: ArtMintFlow (Vercel + Render + GitHub)

---

## 🧰 1. GitHub Repository Setup

1. Create a new private/public GitHub repo (e.g. `artmintflow`).
2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/artmintflow.git
git push -u origin main
```

---

## ⚙️ 2. Backend Deployment to Render

1. Login to [https://render.com](https://render.com)
2. Click **New + Web Service**
3. Connect your GitHub repo
4. Select root path: `artmintflow_backend`
5. Set environment:
   - Runtime: Python
   - Start Command: `uvicorn app.main:app --host 0.0.0.0 --port 8000`
   - Add environment variable:
     ```
     NFT_STORAGE_API=your_nft_storage_api_key
     ```
6. Deploy. Copy your public backend URL:
   ```
   e.g. https://artmintflow-backend.onrender.com
   ```

---

## 🌐 3. Frontend Deployment to Vercel

1. Login to [https://vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Select repo (e.g. `artmintflow_allinone`)
4. Set Project Root: `artmintflow_allinone/`
5. Add Environment Variable:
   ```
   NEXT_PUBLIC_API_BASE=https://artmintflow-backend.onrender.com
   ```

✅ Vercel will build and deploy your frontend. Done!

---

## 🔁 4. Confirm Integration Works

- Open Vercel frontend domain
- Connect MetaMask
- Upload artwork, fill form
- Submit and verify IPFS + metadata JSON appears

---

## 🛡️ 5. Security Tips

- Use `.env.local` in dev
- Never hardcode private keys
- Consider adding CORS restriction on backend
- Add request logging and rate limiting for production

---

## 🧠 Advanced Ideas

- Stripe integration before mint
- Role-based artist panel
- NFT gallery grid
- PDF certificate downloader with QR code

Happy minting! 🌍
