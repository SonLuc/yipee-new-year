import Fireworks from 'fireworks-js'

export default function startFireworks (canvas: string): Fireworks {
  const container: HTMLElement = document.getElementById(canvas)!
  container.style.zIndex = '1'

  const fireworks = new Fireworks(container, {
    maxRockets: 3, // max # of rockets to spawn
    rocketSpawnInterval: 150, // millisends to check if new rockets should spawn
    numParticles: 100, // number of particles to spawn when rocket explodes (+0-10)
    explosionMinHeight: 0.2, // percentage. min height at which rockets can explode
    explosionMaxHeight: 0.9, // percentage. max height before a particle is exploded
    explosionChance: 0.08 // chance in each tick the rocket will explode
  })

  return fireworks
}
