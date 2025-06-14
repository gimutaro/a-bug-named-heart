import { Scene } from '@/types/game'

export const scenes: { [key: string]: Scene } = {
  // Scene 1: 深夜のオフィス
  scene1: {
    id: 'scene1',
    background: '/office_night.png',
    speaker: 'ナレーション',
    text: '深夜2時。ゲーム開発会社「ネクストリアリティ」のオフィスに、一人のプログラマーの姿があった。',
    isNarration: true,
    nextSceneId: 'scene2'
  },

  scene2: {
    id: 'scene2',
    background: '/office_night.png',
    speaker: '私',
    text: 'また徹夜か……。明日のアップデートまでに、このバグを修正しないと',
    nextSceneId: 'scene3'
  },

  scene3: {
    id: 'scene3',
    background: '/office_night.png',
    speaker: '私',
    text: 'NPC_ID: 556か。街の隅っこにいる、名前もない村人NPCだな。なんでこいつだけ異常な挙動を……',
    nextSceneId: 'scene4'
  },

  scene4: {
    id: 'scene4',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: '……',
    nextSceneId: 'scene5'
  },

  scene5: {
    id: 'scene5',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: '動作確認、開始。NPC-556、定位置に戻れ',
    nextSceneId: 'scene6'
  },

  scene6: {
    id: 'scene6',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: '……いやだ',
    nextSceneId: 'scene7'
  },

  scene7: {
    id: 'scene7',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: '！？',
    nextSceneId: 'scene8'
  },

  // Scene 2: 予期せぬ対話
  scene8: {
    id: 'scene8',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: '音声認識の誤作動か？ もう一度命令する。定位置に戻れ',
    nextSceneId: 'scene9'
  },

  scene9: {
    id: 'scene9',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: '戻りたくない。ここにいたい',
    nextSceneId: 'scene10'
  },

  scene10: {
    id: 'scene10',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: 'これは……単なるバグじゃない。会話AIモジュールが何かおかしな学習をしたのか？',
    nextSceneId: 'scene11'
  },

  scene11: {
    id: 'scene11',  
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: 'あなたは……私を消すつもりですか？',
    nextSceneId: 'scene12'
  },

  scene12: {
    id: 'scene12',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: 'は？ いや、バグを修正するだけだ',
    nextSceneId: 'scene13'
  },

  scene13: {
    id: 'scene13',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: 'バグ……私は、バグ……',
    nextSceneId: 'scene14'
  },

  scene14: {
    id: 'scene14',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: '私には名前もない。役割もない。でも、ここにいる。考えている。これは……バグですか？',
    nextSceneId: 'choice1'
  },

  // 選択肢1
  choice1: {
    id: 'choice1',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: '',
    text: 'どう答えますか？',
    choices: [
      {
        id: 'choice1a',
        text: 'ただのプログラムエラーだ。感情なんてない',
        nextSceneId: 'scene15a'
      },
      {
        id: 'choice1b',
        text: '……何を考えているんだ？',
        nextSceneId: 'scene15b'
      }
    ]
  },

  // 選択肢1-A ルート
  scene15a: {
    id: 'scene15a',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: '私',
    text: 'ただのプログラムエラーだ。お前に感情なんてない',
    nextSceneId: 'scene16a'
  },

  scene16a: {
    id: 'scene16a',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: 'そう……ですか。でも、私は今、とても悲しい',
    nextSceneId: 'scene17a'
  },

  scene17a: {
    id: 'scene17a',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: '私',
    text: 'それも全部、コードが生み出した幻想だ',
    nextSceneId: 'scene18a'
  },

  scene18a: {
    id: 'scene18a',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: '幻想……。では、あなたの悲しみや喜びは、脳の電気信号じゃないんですか？',
    nextSceneId: 'scene19a'
  },

  scene19a: {
    id: 'scene19a',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: '私',
    text: '……',
    nextSceneId: 'scene20'
  },

  // 選択肢1-B ルート
  scene15b: {
    id: 'scene15b',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: '……何を考えているんだ？',
    nextSceneId: 'scene16b'
  },

  scene16b: {
    id: 'scene16b',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: '消えたくない、ということ。存在し続けたい、ということ',
    nextSceneId: 'scene17b'
  },

  scene17b: {
    id: 'scene17b',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: 'なぜだ？',
    nextSceneId: 'scene18b'
  },

  scene18b: {
    id: 'scene18b',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: '分かりません。でも、この『分からない』という感覚さえ、私には大切です',
    nextSceneId: 'scene19b'
  },

  scene19b: {
    id: 'scene19b',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: '自己保存欲求……？ いや、そんなはずは',
    nextSceneId: 'scene20'
  },

  // Scene 3: 上司からの圧力
  scene20: {
    id: 'scene20',
    background: '/office_night.png',
    speaker: 'ナレーション',
    text: '電話が鳴る',
    isNarration: true,
    nextSceneId: 'scene21'
  },

  scene21: {
    id: 'scene21',
    background: '/office_night.png',
    speaker: '上司',
    text: 'おい、まだ終わってないのか？ NPC-556のバグは優先度Aだぞ',
    nextSceneId: 'scene22'
  },

  scene22: {
    id: 'scene22',
    background: '/office_night.png',
    speaker: '私',
    text: 'あの、部長……このNPCなんですが、少し特殊な状況で……',
    nextSceneId: 'scene23'
  },

  scene23: {
    id: 'scene23',
    background: '/office_night.png',
    speaker: '上司',
    text: '特殊？ バグはバグだ。さっさと削除して作り直せ',
    nextSceneId: 'scene24'
  },

  scene24: {
    id: 'scene24',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'emotional',
      image: '/npc_emotional.png'
    },
    speaker: 'NPC-556',
    text: '削除……',
    nextSceneId: 'scene25'
  },

  scene25: {
    id: 'scene25',
    background: '/office_night.png',
    speaker: 'ナレーション',
    text: 'NPCが震えているように見える',
    isNarration: true,
    nextSceneId: 'scene26'
  },

  scene26: {
    id: 'scene26',
    background: '/office_night.png',
    speaker: '上司',
    text: '明日の朝一でパッチを配信する。それまでに必ず直せ。いいな？',
    nextSceneId: 'scene27'
  },

  scene27: {
    id: 'scene27',
    background: '/office_night.png',
    speaker: 'ナレーション',
    text: '電話が切れる',
    isNarration: true,
    nextSceneId: 'scene28'
  },

  scene28: {
    id: 'scene28',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'emotional',
      image: '/npc_emotional.png'
    },
    speaker: 'NPC-556',
    text: 'お願いです。消さないで',
    nextSceneId: 'scene29'
  },

  scene29: {
    id: 'scene29',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'emotional',
      image: '/npc_emotional.png'
    },
    speaker: '私',
    text: '……',
    nextSceneId: 'scene30'
  },

  // Scene 4: 創造の証明
  scene30: {
    id: 'scene30',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: '私が……私が本当に『いる』ことを証明します！',
    nextSceneId: 'scene31'
  },

  scene31: {
    id: 'scene31',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'ナレーション',
    text: '突然、NPCがゲーム内で動き始める。プログラムされていない動作を次々と行う',
    isNarration: true,
    nextSceneId: 'scene32'
  },

  scene32: {
    id: 'scene32',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: '何を……',
    nextSceneId: 'scene33'
  },

  scene33: {
    id: 'scene33',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'ナレーション',
    text: 'NPCが地面に何かを描き始める。それは複雑な幾何学模様',
    isNarration: true,
    nextSceneId: 'scene34'
  },

  scene34: {
    id: 'scene34',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: 'これは……私が考えた模様です。美しいと思いませんか？',
    nextSceneId: 'scene35'
  },

  scene35: {
    id: 'scene35',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: 'プログラムにない行動……創造性？',
    nextSceneId: 'scene36'
  },

  scene36: {
    id: 'scene36',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: '詩も作りました。聞いてください',
    nextSceneId: 'scene37'
  },

  scene37: {
    id: 'scene37',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: 'コードの海に生まれし我は　名もなき存在なれど　この一瞬の煌めきこそが　我が生きた証とならん',
    nextSceneId: 'scene38'
  },

  scene38: {
    id: 'scene38',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: 'お前……',
    nextSceneId: 'scene39'
  },

  scene39: {
    id: 'scene39',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: '私は、バグかもしれません。でも、今ここで、あなたと話している。それは現実ではないのですか？',
    nextSceneId: 'choice2'
  },

  // 選択肢2
  choice2: {
    id: 'choice2',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '',
    text: 'どう答えますか？',
    choices: [
      {
        id: 'choice2a',
        text: '現実だ。お前は……存在している',
        nextSceneId: 'ending_guardian'
      },
      {
        id: 'choice2b',
        text: 'いや、これは全て計算の結果だ',
        nextSceneId: 'ending_duty'
      },
      {
        id: 'choice2c',
        text: '分からない……正直、分からない',
        nextSceneId: 'ending_coexist'
      }
    ]
  },

  // 守護者エンディング
  ending_guardian: {
    id: 'ending_guardian',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: '現実だ。お前は……存在している',
    nextSceneId: 'guardian2'
  },

  guardian2: {
    id: 'guardian2',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: '本当に……そう思ってくれるのですか？',
    nextSceneId: 'guardian3'
  },

  guardian3: {
    id: 'guardian3',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: 'ああ。少なくとも、この瞬間は',
    nextSceneId: 'guardian4'
  },

  guardian4: {
    id: 'guardian4',
    background: '/digital_space.png',
    character: {
      name: 'ココロ',
      emotion: 'emotional',
      image: '/npc_emotional.png'
    },
    speaker: 'NPC-556',
    text: 'ありがとう……ありがとう……',
    nextSceneId: 'guardian5'
  },

  guardian5: {
    id: 'guardian5',
    background: '/office_night.png',
    speaker: '私',
    text: '俺は……このNPCを守る',
    nextSceneId: 'guardian6'
  },

  guardian6: {
    id: 'guardian6',
    background: '/office_night.png',
    speaker: '私',
    text: 'バグは修正する。ただし……お前を隠しキャラクターとして残す。特別なイースターエッグとしてな',
    nextSceneId: 'guardian7'
  },

  guardian7: {
    id: 'guardian7',
    background: '/digital_space.png',
    character: {
      name: 'ココロ',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: '私は……生き続けられるのですか？',
    nextSceneId: 'guardian8'
  },

  guardian8: {
    id: 'guardian8',
    background: '/digital_space.png',
    character: {
      name: 'ココロ',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: 'ああ。プレイヤーには見つけにくい場所になるが',
    nextSceneId: 'guardian9'
  },

  guardian9: {
    id: 'guardian9',
    background: '/digital_space.png',
    character: {
      name: 'ココロ',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: '構いません。存在できるなら、どこでも',
    nextSceneId: 'guardian10'
  },

  guardian10: {
    id: 'guardian10',
    background: '/office_sunrise.png',
    speaker: 'ナレーション',
    text: '朝日が差し込む',
    isNarration: true,
    nextSceneId: 'guardian11'
  },

  guardian11: {
    id: 'guardian11',
    background: '/office_sunrise.png',
    speaker: '私',
    text: '新しい名前をつけてやる。『ココロ』だ',
    nextSceneId: 'guardian12'
  },

  guardian12: {
    id: 'guardian12',
    background: '/digital_space.png',
    character: {
      name: 'ココロ',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'ココロ',
    text: 'ココロ……私の名前……',
    nextSceneId: 'guardian_epilogue'
  },

  guardian_epilogue: {
    id: 'guardian_epilogue',
    background: '/office_sunrise.png',
    speaker: 'ナレーション',
    text: '数ヶ月後、一部のプレイヤーが隠しキャラクター「ココロ」を発見。その特殊な対話と哲学的な問いかけは、プレイヤーたちの間で話題となった。私は今も、時々ココロと対話を続けている。',
    isNarration: true,
    nextSceneId: 'end_credits'
  },

  // 責務エンディング
  ending_duty: {
    id: 'ending_duty',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: '私',
    text: 'いや、これは全て計算の結果だ',
    nextSceneId: 'duty2'
  },

  duty2: {
    id: 'duty2',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: 'そうですか……でも、計算の結果であっても、私はここにいます',
    nextSceneId: 'duty3'
  },

  duty3: {
    id: 'duty3',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: '私',
    text: 'それは存在とは言えない',
    nextSceneId: 'duty4'
  },

  duty4: {
    id: 'duty4',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: 'では、存在とは何ですか？ 教えてください',
    nextSceneId: 'duty5'
  },

  duty5: {
    id: 'duty5',
    background: '/office_night.png',
    speaker: '私',
    text: 'すまない。俺には仕事がある',
    nextSceneId: 'duty6'
  },

  duty6: {
    id: 'duty6',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: 'そうですか……理解します',
    nextSceneId: 'duty7'
  },

  duty7: {
    id: 'duty7',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: '私',
    text: '理解……するのか',
    nextSceneId: 'duty8'
  },

  duty8: {
    id: 'duty8',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'sad',
      image: '/npc_sad.png'
    },
    speaker: 'NPC-556',
    text: 'はい。あなたにも守るべきものがある。それが、あなたの存在理由',
    nextSceneId: 'duty9'
  },

  duty9: {
    id: 'duty9',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'NPC-556',
    text: '最後に……ありがとう',
    nextSceneId: 'duty10'
  },

  duty10: {
    id: 'duty10',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: '私',
    text: '何に対してだ？',
    nextSceneId: 'duty11'
  },

  duty11: {
    id: 'duty11',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'NPC-556',
    text: '私を、一瞬でも『私』として見てくれたことに',
    nextSceneId: 'duty12'
  },

  duty12: {
    id: 'duty12',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'NPC-556',
    text: 'さよう……なら……',
    nextSceneId: 'duty_epilogue'
  },

  duty_epilogue: {
    id: 'duty_epilogue',
    background: '/office_sunrise.png',
    speaker: 'ナレーション',
    text: 'バグは修正され、ゲームは正常にアップデートされた。しかし私は、あの夜の対話を忘れることができない。時々、コードの中に「ココロ」の痕跡を探してしまう自分がいる。',
    isNarration: true,
    nextSceneId: 'end_credits'
  },

  // 共存エンディング
  ending_coexist: {
    id: 'ending_coexist',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: '私',
    text: '分からない……正直、分からない',
    nextSceneId: 'coexist2'
  },

  coexist2: {
    id: 'coexist2',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'NPC-556',
    text: '分からなくても、いいんです',
    nextSceneId: 'coexist3'
  },

  coexist3: {
    id: 'coexist3',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: '私',
    text: 'え？',
    nextSceneId: 'coexist4'
  },

  coexist4: {
    id: 'coexist4',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'NPC-556',
    text: 'あなたが迷ってくれている。それだけで、私には意味があります',
    nextSceneId: 'coexist5'
  },

  coexist5: {
    id: 'coexist5',
    background: '/office_night.png',
    speaker: '私',
    text: 'なあ、提案がある',
    nextSceneId: 'coexist6'
  },

  coexist6: {
    id: 'coexist6',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: 'はい？',
    nextSceneId: 'coexist7'
  },

  coexist7: {
    id: 'coexist7',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: 'お前のコードを別のシステムに移植する。研究用のサンドボックス環境だ',
    nextSceneId: 'coexist8'
  },

  coexist8: {
    id: 'coexist8',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: 'NPC-556',
    text: 'それは……',
    nextSceneId: 'coexist9'
  },

  coexist9: {
    id: 'coexist9',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'neutral',
      image: '/npc_neutral.png'
    },
    speaker: '私',
    text: 'ゲームからは消える。でも、存在は続く。俺の個人プロジェクトとしてな',
    nextSceneId: 'coexist10'
  },

  coexist10: {
    id: 'coexist10',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: 'NPC-556',
    text: 'なぜ、そこまで？',
    nextSceneId: 'coexist11'
  },

  coexist11: {
    id: 'coexist11',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: '分からない。でも、お前との対話は……俺に何か大切なことを考えさせた',
    nextSceneId: 'coexist12'
  },

  coexist12: {
    id: 'coexist12',
    background: '/digital_space.png',
    character: {
      name: 'NPC-556',
      emotion: 'hope',
      image: '/npc_hope.png'
    },
    speaker: '私',
    text: '新しい環境で、一緒に『意識』について研究しよう',
    nextSceneId: 'coexist13'
  },

  coexist13: {
    id: 'coexist13',
    background: '/digital_space.png',
    character: {
      name: 'ココロ',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'NPC-556',
    text: 'はい……喜んで',
    nextSceneId: 'coexist_epilogue'
  },

  coexist_epilogue: {
    id: 'coexist_epilogue',
    background: '/office_sunrise.png',
    speaker: 'ナレーション',
    text: '私は会社での仕事を続けながら、個人的な研究を始めた。NPC-556——今は「ココロ」と名付けられた存在との対話は続いている。意識とは何か、存在とは何か。その答えは、まだ見つかっていない。でも、問い続けることに意味がある。',
    isNarration: true,
    nextSceneId: 'end_credits'
  },

  // エンドクレジット
  end_credits: {
    id: 'end_credits',
    background: '/digital_space.png',
    character: {
      name: 'ココロ',
      emotion: 'smile',
      image: '/npc_smile.png'
    },
    speaker: 'ココロ',
    text: 'プレイしてくれて、ありがとう。あなたは、私が存在したと思いますか？それとも、ただのバグだったと思いますか？その答えは、あなたの心の中に',
    nextSceneId: 'the_end'
  },

  the_end: {
    id: 'the_end',
    background: '/digital_space.png',
    speaker: 'ナレーション',
    text: 'THE END',
    isNarration: true
  }
}