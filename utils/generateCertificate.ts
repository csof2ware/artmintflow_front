
import { PDFDocument, rgb } from 'pdf-lib'

export async function generateNFTCertificate(name: string, artist: string): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([600, 400])
  const { width, height } = page.getSize()

  page.drawText('Certificate of NFT Authenticity', {
    x: 50,
    y: height - 80,
    size: 24,
    color: rgb(0.1, 0.2, 0.6)
  })

  page.drawText(`NFT: ${name}`, { x: 50, y: height - 130, size: 16 })
  page.drawText(`Artist: ${artist}`, { x: 50, y: height - 160, size: 16 })
  page.drawText(`Blockchain Authenticated`, { x: 50, y: height - 190, size: 16 })

  return await pdfDoc.save()
}
