'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import type { PersonData } from '@/lib/data'

interface PersonalCardClientProps {
  name: string
  personInfo: PersonData
}

export default function PersonalCardClient({ name, personInfo }: PersonalCardClientProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="container">
      {/* Global Logo */}
      <div className="global-logo-container">
        <a href="https://www.facebook.com/fptinformationassurance" target="_blank" rel="noopener noreferrer" aria-label="FIA Facebook">
          <Image 
            src="/logo.png" 
            alt="FIA Logo" 
            width={60} 
            height={60}
            className="fia-logo"
          />
        </a>
      </div>
      
      <div className="personal-page">
        {/* Back Button */}
        <div className="back-button" onClick={handleBack}>
          <span>← Quay lại</span>
        </div>

        {/* Personal Main Card - centered */}
        <div className="main-greeting-card">
          {/* Decorative corner elements */}
          <div className="corner-decoration top-left"></div>
          <div className="corner-decoration top-right"></div>
          <div className="corner-decoration bottom-left"></div>
          <div className="corner-decoration bottom-right"></div>

          {/* Watercolor background effect */}
          <div className="watercolor-bg"></div>

          {/* Splatter effect */}
          <div className="splatter-effect"></div>

          {/* Header */}
          <div className="greeting-header">
            <h1 className="greeting-title">FIA CHÚC {name.toUpperCase()}</h1>
            <div className="subtitle">Câu lạc bộ FPT Information Assurance</div>
          </div>

          {/* Content */}
          <div className="greeting-content">
            <div className="date-container">
              <h2 className="main-date">20/10</h2>
            </div>
            <div className="main-message">
              <p>{personInfo.message}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="greeting-footer">
            <div className="signature">FROM FIA</div>
            <div className="signature">WITH LOVE</div>
          </div>
        </div>
      </div>

      {/* Floating Hearts Animation - removed inside personal pages to avoid overlap */}
    </div>
  )
}
