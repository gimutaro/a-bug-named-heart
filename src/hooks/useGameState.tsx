'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { GameState, GameAction } from '@/types/game'

const initialGameState: GameState = {
  currentSceneId: 'scene1',
  visitedScenes: [],
  choices: {},
  isGameEnded: false,
  ending: undefined
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'NEXT_SCENE':
      return {
        ...state,
        currentSceneId: action.sceneId,
        visitedScenes: [...state.visitedScenes, state.currentSceneId]
      }
    
    case 'MAKE_CHOICE':
      return {
        ...state,
        choices: {
          ...state.choices,
          [state.currentSceneId]: action.choiceId
        },
        currentSceneId: action.sceneId,
        visitedScenes: [...state.visitedScenes, state.currentSceneId]
      }
    
    case 'END_GAME':
      return {
        ...state,
        isGameEnded: true,
        ending: action.ending
      }
    
    case 'RESTART_GAME':
      return initialGameState
    
    default:
      return state
  }
}

interface GameContextType {
  state: GameState
  dispatch: React.Dispatch<GameAction>
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGameState() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameProvider')
  }
  return context
}