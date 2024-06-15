'use client'

import { QCHeader } from './QCHeader'
import "@/app/componentsstyles/herostyles/Hero.css"
import QCHeroMain from './QCHeroMain'

export const Hero = () => {
  return (
    <div className="qc-hero-section">
        <QCHeader />
        <QCHeroMain />
    </div>
  )
}
