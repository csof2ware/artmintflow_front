
import { useEffect, useState } from 'react'

export default function WalletConnect({ onConnect }: { onConnect: (address: string) => void }) {
  const [account, setAccount] = useState<string | null>(null)

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
        onConnect(accounts[0])
      } catch (err) {
        console.error('Wallet connection error:', err)
      }
    } else {
      alert('MetaMask not found. Please install it.')
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0])
        onConnect(accounts[0])
      })
    }
  }, [])

  return (
    <div className="my-2">
      {account ? (
        <div className="text-sm text-green-600">Connected: {account}</div>
      ) : (
        <button onClick={connect} className="text-blue-500 underline">Connect Wallet</button>
      )}
    </div>
  )
}
