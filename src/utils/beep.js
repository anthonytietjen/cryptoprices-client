//Source: https://odino.org/emit-a-beeping-sound-with-javascript/

const a = new AudioContext() // browsers limit the number of concurrent audio contexts, so you better re-use'em

export function beep(vol, freq, duration) {
  const v = a.createOscillator()
  const u = a.createGain()
  v.connect(u)
  v.frequency.value = freq
  v.type = "square"
  u.connect(a.destination)
  u.gain.value = vol * 0.01
  v.start(a.currentTime)
  v.stop(a.currentTime + duration * 0.001)
  return new Promise(resolve => {
    setTimeout(() => resolve(), duration)
  })
}