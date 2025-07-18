
# 🎨 ArtMintFlow All-in-One

**Your complete NFT art tokenization suite**, with:
- ✅ MetaMask wallet connection
- ✅ Lazy minting integration (OpenSea-ready)
- ✅ IPFS storage via NFT.Storage
- ✅ FastAPI backend
- ✅ PDF certificate generation
- ✅ React + Tailwind + Next.js UI
- ✅ Vercel + Render ready

---

## 🚀 1. PROJECT STRUCTURE

```
artmintflow_allinone/
├── pages/                  # Frontend pages (Next.js)
├── components/             # MetaMask & reusable UI
├── utils/                  # Lazy mint and certificate logic
├── public/                 # Static assets
├── styles/                 # Tailwind CSS setup
├── api/                    # Proxy routes to backend (tokenize)
├── README.md               # This guide
```

Backend (FastAPI) is hosted separately (e.g. `/artmintflow_backend`)

---

## ⚙️ 2. SETUP FOR LOCAL DEVELOPMENT

### 🧪 Backend (FastAPI)

```bash
cd artmintflow_backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Edit `.env`:

```
NFT_STORAGE_API=your_nft_storage_api_key
```

---

### 💻 Frontend (Next.js)

```bash
cd artmintflow_allinone
npm install
npm run dev
```

✅ Visit: `http://localhost:3000`

---

## ☁️ 3. DEPLOY TO VERCEL + RENDER

### ✅ Backend on Render

1. Go to [https://dashboard.render.com](https://dashboard.render.com)
2. Click “New Web Service”
3. Connect your GitHub repository
4. Select **FastAPI** as language
5. Set environment variable:
   ```
   NFT_STORAGE_API=your_nft_storage_api_key
   ```
6. Choose region, hit deploy

Your backend will run on something like:
```
https://artmintflow-backend.onrender.com
```

---

### ✅ Frontend on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Import the frontend repo (`artmintflow_allinone`)
3. During setup, add env var:
   ```
   NEXT_PUBLIC_API_BASE=https://artmintflow-backend.onrender.com
   ```

4. In `pages/api/tokenize.ts`, edit:
```ts
const response = await fetch('https://artmintflow-backend.onrender.com/nft/tokenize', {
  method: 'POST',
  body: data,
})
```

✅ Deploy and test at:
```
https://your-vercel-project.vercel.app
```

---

## 🧩 4. OPTIONAL FEATURES TO CONFIGURE

### ✅ PDF Certificate Generator
- Uses `pdf-lib`
- Generates authenticity certificate for each NFT
- You can extend it to save certificate as downloadable blob

### ✅ Lazy Minting
- Simulated in `utils/openseaLazyMint.ts`
- Replace this with OpenSea/Zora's real API later

---

## 🛡 5. SECURITY AND SCALABILITY
- API is modular with FastAPI and validated with Pydantic
- File uploads are streamed to IPFS using NFT.Storage
- Future: add authentication, rate limits, and contract ownership verification

---

## 🧠 NEXT UPGRADE IDEAS
- Crypto payment or Stripe checkout before mint
- DAO gating for token access
- IPFS-backed metadata viewer
- Mint with dynamic royalties

Need help configuring or extending? Let’s build it together. 💪
