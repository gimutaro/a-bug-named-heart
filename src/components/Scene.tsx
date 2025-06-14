'use client'

import { Scene as SceneType } from '@/types/game'
import Image from 'next/image'
import TypewriterText from './TypewriterText'

interface SceneProps {
  scene: SceneType
  isTextComplete: boolean
  onTextComplete: () => void
}

export default function Scene({ scene, isTextComplete, onTextComplete }: SceneProps) {
  return (
    <div className="relative min-h-screen flex">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={scene.background}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Character */}
      {scene.character && (
        <div className="relative z-10 flex-1 flex items-end justify-center px-8 pb-32">
          <div className="relative">
            <Image
              src={scene.character.image}
              alt={scene.character.name}
              width={400}
              height={600}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      )}

      {/* Dialogue Box */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4">
        <div className="bg-black bg-opacity-80 backdrop-blur-sm p-6 mb-4 rounded-lg border border-gray-700">
          {/* Speaker Name */}
          {scene.speaker && !scene.isNarration && (
            <div className="mb-3">
              <span className="text-blue-300 font-semibold text-lg">
                {scene.speaker}
              </span>
            </div>
          )}

          {/* Dialogue Text */}
          <div className={`text-lg leading-relaxed ${
            scene.isNarration ? 'text-gray-300 italic' : 'text-white'
          }`}>
            <TypewriterText
              text={scene.text}
              isComplete={isTextComplete}
              onComplete={onTextComplete}
              speed={30}
            />
          </div>
        </div>
      </div>
    </div>
  )
}