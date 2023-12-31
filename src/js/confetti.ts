import ConfettiGenerator from 'confetti-js'

export default function startConfetti (canvas: string): ConfettiGenerator {
  const settings = {
    target: canvas
  }
  const confetti = new ConfettiGenerator(settings)
  
  return confetti
}
