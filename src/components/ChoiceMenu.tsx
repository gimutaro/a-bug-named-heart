'use client'

import { Choice } from '@/types/game'

interface ChoiceMenuProps {
  choices: Choice[]
  onChoice: (choiceId: string, nextSceneId: string) => void
}

export default function ChoiceMenu({ choices, onChoice }: ChoiceMenuProps) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-600 max-w-2xl w-full mx-4">
        <h3 className="text-xl font-semibold mb-4 text-center text-white">
          選択してください
        </h3>
        
        <div className="space-y-3">
          {choices.map((choice, index) => (
            <button
              key={choice.id}
              onClick={(e) => {
                e.stopPropagation()
                onChoice(choice.id, choice.nextSceneId)
              }}
              className="w-full p-4 text-left rounded-lg border border-gray-600 
                         bg-gray-800 hover:bg-gray-700 text-white transition-colors
                         hover:border-blue-400 focus:outline-none focus:ring-2 
                         focus:ring-blue-400"
            >
              <span className="text-blue-300 font-semibold mr-2">
                {index + 1}.
              </span>
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}