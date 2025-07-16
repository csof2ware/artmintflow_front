
import { useState } from 'react'
import Head from 'next/head'
import WalletConnect from '@/components/WalletConnect'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [walletAddress, setWalletAddress] = useState('')
  const [form, setForm] = useState({
    title: '',
    description: '',
    artist: '',
    year: '',
  })
  const [response, setResponse] = useState<any>(null)

  const handleUpload = async () => {
    if (!file || !walletAddress) return alert('Select image and connect wallet.')
    const formData = new FormData()
    formData.append('wallet_address', walletAddress)
    Object.entries(form).forEach(([key, value]) => formData.append(key, value))
    formData.append('file', file)

    const res = await fetch('/api/tokenize', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()
    setResponse(data)
  }

  return (
    <>
      <Head><title>ArtMintFlow</title></Head>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-6">🎨 ArtMintFlow with Wallet Connect</h1>
        <Card className="max-w-xl mx-auto">
          <CardContent className="space-y-4">
            <WalletConnect onConnect={setWalletAddress} />
            <div>
              <Label>Artwork File</Label>
              <Input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </div>
            <div>
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div>
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <div>
              <Label>Artist</Label>
              <Input value={form.artist} onChange={(e) => setForm({ ...form, artist: e.target.value })} />
            </div>
            <div>
              <Label>Year</Label>
              <Input value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
            </div>
            <Button onClick={handleUpload}>Tokenize & Mint</Button>

            {response && (
              <div className="bg-white p-4 rounded shadow mt-4">
                <h2 className="font-semibold text-lg">NFT Metadata</h2>
                <pre className="whitespace-pre-wrap text-xs mt-2">{JSON.stringify(response.metadata, null, 2)}</pre>
                <p className="mt-2 text-sm">Image URL: <a href={response.image_url} target="_blank" className="text-blue-600 underline">{response.image_url}</a></p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
