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

  if (!currentScene || state.isGameEnded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center text-white max-w-md mx-auto px-4">
          <h1 className="text-4xl mb-4 font-bold">ゲーム終了</h1>
          <p className="text-xl mb-12 text-gray-300">物語はここで終わります</p>
          <button 
            onClick={handleRestart}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            New Game
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