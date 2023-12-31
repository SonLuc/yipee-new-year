import confetti from 'canvas-confetti'

export default async function startConfetti2 (): Promise<void> {
  try {
    await confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  } catch (err) {
    console.log(err)
  }
}
