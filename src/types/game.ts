export interface Choice {
  id: string
  text: string
  nextSceneId: string
}

export interface Character {
  name: string
  emotion: string
  image: string
}

export interface Scene {
  id: string
  background: string
  character?: Character
  speaker?: string
  text: string
  isNarration?: boolean
  choices?: Choice[]
  nextSceneId?: string
}

export interface GameState {
  currentSceneId: string
  visitedScenes: string[]
  choices: { [key: string]: string }
  isGameEnded: boolean
  ending?: string
}

export type GameAction = 
  | { type: 'NEXT_SCENE'; sceneId: string }
  | { type: 'MAKE_CHOICE'; choiceId: string; sceneId: string }
  | { type: 'END_GAME'; ending: string }
  | { type: 'RESTART_GAME' }