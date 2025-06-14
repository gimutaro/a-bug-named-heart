'use client'

import { GameProvider } from '@/hooks/useGameState'
import GameScreen from './GameScreen'

export default function VisualNovel() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <GameScreen />
      </div>
    </GameProvider>
  )
}