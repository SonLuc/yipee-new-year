export function countDown (): void {
  let value: number = 10

  const count = setInterval(() => {
    
    console.log(value)

    if (value <= 0) {
      clearInterval(count)
    } else {
      value--
    }
  }, 1000)
}




