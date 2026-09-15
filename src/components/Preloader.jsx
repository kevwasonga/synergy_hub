import { useEffect, useState } from 'react'
import logoImg from '../assets/logo.png'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000)
    const onLoad = () => setTimeout(() => setHidden(true), 400)
    window.addEventListener('load', onLoad)
    return () => { clearTimeout(timer); window.removeEventListener('load', onLoad) }
  }, [])

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      <div className="loader">
        <img src={logoImg} alt="Synergy Hub Africa" className="loader-img" />
        <div className="loader-text">Synergy Hub Africa</div>
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}
