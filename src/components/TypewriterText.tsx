'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  isComplete: boolean
  onComplete: () => void
  speed?: number
}

export default function TypewriterText({ 
  text, 
  isComplete, 
  onComplete, 
  speed = 50 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayText('')
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (isComplete) {
      setDisplayText(text)
      return
    }

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (currentIndex === text.length && displayText === text) {
      onComplete()
    }
  }, [currentIndex, text, isComplete, onComplete, speed, displayText])

  return (
    <span>
      {displayText}
      {!isComplete && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}