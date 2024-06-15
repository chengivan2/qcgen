import QRCodeComponent from '../qrasync'
import { QCHeader } from './QCHeader'
import "@/app/componentsstyles/herostyles/Hero.css"

export const Hero = () => {
  return (
    <div className="qc-hero-section">
        <QCHeader />
        <QRCodeComponent url="https://ivanthedev.guru/" />
    </div>
  )
}
