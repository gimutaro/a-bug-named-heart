'use client'

import { useGameState } from '@/hooks/useGameState'
import { scenes } from '@/data/story'
import Scene from './Scene'
import ChoiceMenu from './ChoiceMenu'
import { useState, useEffect } from 'react'

export default function GameScreen() {
  const { state, dispatch } = useGameState()
  const [isTextComplete, setIsTextComplete] = useState(false)
  const currentScene = scenes[state.currentSceneId]

  useEffect(() => {
    setIsTextComplete(false)
  }, [state.currentSceneId])

  const handleNext = () => {
    if (!isTextComplete) {
      setIsTextComplete(true)
      return
    }

    if (currentScene.choices) {
      return
    }

    if (currentScene.nextSceneId) {
      dispatch({ type: 'NEXT_SCENE', sceneId: currentScene.nextSceneId })
    } else {
      dispatch({ type: 'END_GAME', ending: 'unknown' })
    }
  }

  const handleChoice = (choiceId: string, nextSceneId: string) => {
    dispatch({ type: 'MAKE_CHOICE', choiceId, sceneId: nextSceneId })
  }

  const handleRestart = () => {
    dispatch({ type: 'RESTART_GAME' })
  }

  if (!currentScene) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Game Complete</h1>
          <button 
            onClick={handleRestart}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Restart Game
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen" onClick={handleNext}>
      <Scene 
        scene={currentScene} 
        isTextComplete={isTextComplete}
        onTextComplete={() => setIsTextComplete(true)}
      />
      
      {currentScene.choices && isTextComplete && (
        <ChoiceMenu 
          choices={currentScene.choices} 
          onChoice={handleChoice}
        />
      )}
      
      {isTextComplete && !currentScene.choices && (
        <div className="absolute bottom-4 right-4 text-sm text-gray-400 animate-pulse">
          Click to continue...
        </div>
      )}
    </div>
  )
}