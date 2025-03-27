const questions = {
    bronze: [
      {
        id: 1,
        question: "Which sentence is in the present continuous tense?",
        options: [
          "She reads a book.",
          "She is reading a book.",
          "She has read a book."
        ],
        answer: "She is reading a book."
      },
      {
        id: 2,
        question: "Which phrasal verb means 'start a journey'?",
        options: ["Set off", "Take up", "Give up"],
        answer: "Set off"
      },
      {
        id: 3,
        question: "Which word is a noun?",
        options: ["Quickly", "Happiness", "Run"],
        answer: "Happiness"
      },
      {
        id: 4,
        question: "Which sentence uses the correct article?",
        options: [
          "I saw a elephant.",
          "I saw an elephant.",
          "I saw the elephant."
        ],
        answer: "I saw an elephant."
      },
      {
        id: 5,
        question: "What is the opposite of 'begin'?",
        options: ["Start", "End", "Continue"],
        answer: "End"
      },
      {
        id: 6,
        question: "Which sentence is in the passive voice?",
        options: [
          "The cat chased the mouse.",
          "The mouse was chased by the cat.",
          "The mouse chased the cat."
        ],
        answer: "The mouse was chased by the cat."
      },
      {
        id: 7,
        question: "What is the plural of 'child'?",
        options: ["Childs", "Children", "Childes"],
        answer: "Children"
      },
      {
        id: 8,
        question: "Which word is a verb?",
        options: ["Beautiful", "Quickly", "Run"],
        answer: "Run"
      },
      {
        id: 9,
        question: "What does the phrasal verb 'call off' mean?",
        options: ["To make a phone call", "To shout loudly", "To cancel something"],
        answer: "To cancel something"
      },
      {
        id: 10,
        question: "Which sentence uses 'can' correctly?",
        options: [
          "I can to swim.",
          "I can swim.",
          "I can swimming."
        ],
        answer: "I can swim."
      },
      {
        id: 11,
        question: "What is the past participle of 'eat'?",
        options: ["Ate", "Eaten", "Eating"],
        answer: "Eaten"
      },
      {
        id: 12,
        question: "Which word is an adverb?",
        options: ["Quick", "Quickly", "Quickness"],
        answer: "Quickly"
      },
      {
        id: 13,
        question: "What is the opposite of 'light'?",
        options: ["Dark", "Bright", "Heavy"],
        answer: "Dark"
      },
      {
        id: 14,
        question: "Which sentence is in the future tense?",
        options: [
          "I will go to the market.",
          "I went to the market.",
          "I am going to the market."
        ],
        answer: "I will go to the market."
      },
      {
        id: 15,
        question: "What is the synonym of 'big'?",
        options: ["Small", "Large", "Tiny"],
        answer: "Large"
      },
      {
        id: 16,
        question: "What is the antonym of 'Optimistic'?",
        options: ["Cheerful", "Pessimistic", "Hopeful"],
        answer: "Pessimistic"
      },
      {
        id: 17,
        question: "Which sentence uses 'might' correctly?",
        options: [
          "I might go to the party.",
          "I might to go to the party.",
          "I might going to the party."
        ],
        answer: "I might go to the party."
      },
      {
        id: 18,
        question: "What is the past tense of 'sing'?",
        options: ["Sang", "Sung", "Singing"],
        answer: "Sang"
      },
      {
        id: 19,
        question: "Which word is a conjunction?",
        options: ["And", "Quickly", "Run"],
        answer: "And"
      },
      {
        id: 20,
        question: "Change the narration: 'He said, \"I have finished my work.\"'",
        options: [
            "He said that he has finished his work.",
            "He said that he had finished his work.",
            "He said that he will finish his work."
        ],
        answer: "He said that he had finished his work."
      },
      {
        id: 21,
        question: "Which sentence is in the past perfect tense?",
        options: [
          "I had eaten before he arrived.",
          "I ate before he arrived.",
          "I have eaten before he arrived."
        ],
        answer: "I had eaten before he arrived."
      },
      {
        id: 22,
        question: "What is the plural of 'mouse'?",
        options: ["Mouses", "Mice", "Mousees"],
        answer: "Mice"
      },
      {
        id: 23,
        question: "Which word is an adjective?",
        options: ["Quickly", "Happiness", "Beautiful"],
        answer: "Beautiful"
      },
      {
        id: 24,
        question: "What is the synonym of 'sad'?",
        options: ["Happy", "Joyful", "Miserable"],
        answer: "Miserable"
      },
      {
        id: 25,
        question: "Which sentence uses 'should' correctly?",
        options: [
          "I should to go now.",
          "I should go now.",
          "I should going now."
        ],
        answer: "I should go now."
      },
      {
        id: 26,
        question: "What is the past participle of 'write'?",
        options: ["Wrote", "Written", "Writing"],
        answer: "Written"
      },
      {
        id: 27,
        question: "Which word is a preposition?",
        options: ["And", "Quickly", "Under"],
        answer: "Under"
      },
      {
        id: 28,
        question: "What is the opposite of 'win'?",
        options: ["Lose", "Gain", "Succeed"],
        answer: "Lose"
      },
      {
        id: 29,
        question: "What is the meaning of 'Obsolete'?",
        options: [
          "Modern",
          "Outdated or no longer in use",
          "New."
        ],
        answer: "Outdated or no longer in use"
      },
      {
        id: 30,
        question: "What is the synonym of 'small'?",
        options: ["Big", "Tiny", "Large"],
        answer: "Tiny"
      },
      {
        id: 31,
        question: "Which article fits in the sentence: 'I need ___ umbrella.'?",
        options: [
          "a",
          "an",
          "the"
        ],
        answer: "an"
      },
      {
        id: 32,
        question: "What is the correct adverb in the sentence: 'She sings ___.'?",
        options: ["beautiful", "beautifully", "beauty"],
        answer: "beautifully"
      },
      {
        id: 33,
        question: "Which word is an interjection?",
        options: ["Wow", "Quickly", "Run"],
        answer: "Wow"
      },
      {
        id: 34,
        question: "What is the opposite of 'build'?",
        options: ["Create", "Destroy", "Construct"],
        answer: "Destroy"
      },
      {
        id: 35,
        question: "Which sentence is in the future perfect tense?",
        options: [
          "I will have finished by then.",
          "I will finish by then.",
          "I am finishing by then."
        ],
        answer: "I will have finished by then."
      },
      {
        id: 36,
        question: "What is the plural of 'deer'?",
        options: ["Deers", "Deer", "Deeres"],
        answer: "Deer"
      },
      {
        id: 37,
        question: "Translate to English: 'वह जल्दी सो गया।'",
        options: ["He slept early.", "He sleep early.", "He is sleeping early."],
        answer: "He slept early."
      },
      {
        id: 38,
        question: "What does the phrasal verb 'set up' mean?",
        options: ["To sit down", "To destroy something", "To arrange or establish something"],
        answer: "To arrange or establish something"
      },
      {
        id: 39,
        question: "What is the meaning of the phrasal verb 'look after'?",
        options: [
          "To search for something",
          "To take care of someone or something",
          "To ignore someone"
        ],
        answer: "To take care of someone or something"
      },
      {
        id: 40,
        question: "What is the past participle of 'break'?",
        options: ["Broke", "Broken", "Breaking"],
        answer: "Broken"
      },
      {
        id: 41,
        question: "Which word is a determiner?",
        options: ["The", "Quickly", "Run"],
        answer: "The"
      },
      {
        id: 42,
        question: "Translate 'मैंने उसे बुलाया' to English",
        options: ["I called him", "I will call him", "I am calling him"],
        answer: "I called him"
      },
      {
        id: 43,
        question: "Which sentence is in the past continuous tense?",
        options: [
          "I was reading when he called.",
          "I read when he called.",
          "I have read when he called."
        ],
        answer: "I was reading when he called."
      },
      {
        id: 44,
        question: "What is the meaning of 'Voracious'?",
        options: ["Having a small appetite", "Having a huge appetite", "Lazy"],
        answer: "Having a huge appetite"
      },
      {
        id: 45,
        question: "Change the narration: 'He said, \"I may go to the party.\"'",
        options: [
          "He said that he may go to the party.",
          "He said that he might go to the party.",
          "He said that he will go to the party."
        ],
        answer: "He said that he might go to the party."
      },
      {
        id: 46,
        question: "What is the past tense of 'fly'?",
        options: ["Flew", "Flown", "Flying"],
        answer: "Flew"
      },
      {
        id: 47,
        question: "Which word is a modal verb?",
        options: ["Can", "Quickly", "Run"],
        answer: "Can"
      },
      {
        id: 48,
        question: "Translate to English: 'मुझे पानी चाहिए।'",
        options: ["I need water.", "I needed water.", "I am needing water."],
        answer: "I need water."
      },
      {
        id: 49,
        question: "Which sentence is in the present perfect continuous tense?",
        options: [
          "I have been working for two hours.",
          "I worked for two hours.",
          "I am working for two hours."
        ],
        answer: "I have been working for two hours."
      },
      {
        id: 50,
        question: "What is the synonym of 'brave'?",
        options: ["Cowardly", "Courageous", "Timid"],
        answer: "Courageous"
      }
    ],
    silver: [
      {
        id: 51,
        question: "Which sentence uses 'may' correctly?",
        options: [
          "I may to go to the party.",
          "I may go to the party.",
          "I may going to the party."
        ],
        answer: "I may go to the party."
      },
      {
        id: 52,
        question: "What is the past tense of 'teach'?",
        options: ["Taught", "Teaching", "Teached"],
        answer: "Taught"
      },
      {
        id: 53,
        question: "Convert to indirect speech: She said, 'I am cooking now.'",
        options: ["She said she cook now.", "She said she cooking now.", "She said she was cooking then."],
        answer: "She said she was cooking then."
      },
      {
        id: 54,
        question: "What is the opposite of 'success'?",
        options: ["Victory", "Failure", "Achievement"],
        answer: "Failure"
      },
      {
        id: 55,
        question: "Which sentence is in the future continuous tense?",
        options: [
          "I will be working at 8 PM.",
          "I will work at 8 PM.",
          "I am working at 8 PM."
        ],
        answer: "I will be working at 8 PM."
      },
      {
        id: 56,
        question: "What is the plural of 'sheep'?",
        options: ["Sheeps", "Sheep", "Sheepes"],
        answer: "Sheep"
      },
      {
        id: 57,
        question: "Translate to English: 'तुम्हें जल्दी उठना चाहिए।'",
        options: ["You should wake up early.", "You wake up early.", "You waked up early."],
        answer: "You should wake up early."
      },
      {
        id: 58,
        question: "What is the synonym of 'intelligent'?",
        options: ["Stupid", "Clever", "Dull"],
        answer: "Clever"
      },
      {
        id: 59,
        question: "Which sentence uses 'shall' correctly?",
        options: [
          "I shall to go now.",
          "I shall go now.",
          "I shall going now."
        ],
        answer: "I shall go now."
      },
      {
        id: 60,
        question: "What is the past participle of 'drive'?",
        options: ["Drove", "Driven", "Driving"],
        answer: "Driven"
      },
      {
        id: 61,
        question: "Translate to English: 'बच्चे पार्क में खेल रहे हैं।'",
        options: ["The children are playing in the park.", "The children plays in the park.", "The children play in the park."],
        answer: "The children are playing in the park."
      },
      {
        id: 62,
        question: "What is the opposite of 'accept'?",
        options: ["Reject", "Agree", "Approve"],
        answer: "Reject"
      },
      {
        id: 63,
        question: "Which sentence is in the past perfect continuous tense?",
        options: [
          "I had been waiting for hours.",
          "I was waiting for hours.",
          "I have been waiting for hours."
        ],
        answer: "I had been waiting for hours."
      },
      {
        id: 64,
        question: "What is the synonym of 'generous'?",
        options: ["Selfish", "Kind", "Stingy"],
        answer: "Kind"
      },
      {
        id: 65,
        question: "Which sentence uses 'ought to' correctly?",
        options: [
          "I ought to go now.",
          "I ought go now.",
          "I ought going now."
        ],
        answer: "I ought to go now."
      },
      {
        id: 66,
        question: "What is the past tense of 'choose'?",
        options: ["Chose", "Chosen", "Choosing"],
        answer: "Chose"
      },
      {
        id: 67,
        question: "Which word is a demonstrative pronoun?",
        options: ["This", "Quickly", "Run"],
        answer: "This"
      },
      {
        id: 68,
        question: "Which preposition fits in the sentence: 'The cat is hiding ___ the bed.'?",
        options: ["under", "on", "at"],
        answer: "under"
      },
      {
        id: 69,
        question: "Which sentence is in the present perfect continuous tense?",
        options: [
          "I have been working for two hours.",
          "I worked for two hours.",
          "I am working for two hours."
        ],
        answer: "I have been working for two hours."
      },
      {
        id: 70,
        question: "What does the phrasal verb 'put off' mean?",
        options: ["To postpone something", "To wear something", "To turn off a device"],
        answer: "To postpone something"
      },
      {
        id: 71,
        question: "Which sentence uses 'used to' correctly?",
        options: [
          "I used to play football.",
          "I used play football.",
          "I used playing football."
        ],
        answer: "I used to play football."
      },
      {
        id: 72,
        question: "What is the past participle of 'forget'?",
        options: ["Forgot", "Forgotten", "Forgetting"],
        answer: "Forgotten"
      },
      {
        id: 73,
        question: "Which phrasal verb means 'to continue'?",
        options: ["Give up", "Carry on", "Break down"],
        answer: "Carry on"
      },
      {
        id: 74,
        question: "What is the opposite of 'increase'?",
        options: ["Decrease", "Grow", "Expand"],
        answer: "Decrease"
      },
      {
        id: 75,
        question: "Which sentence is in the future perfect continuous tense?",
        options: [
          "I will have been working for hours.",
          "I will work for hours.",
          "I am working for hours."
        ],
        answer: "I will have been working for hours."
      },
      {
        id: 76,
        question: "What is the synonym of 'famous'?",
        options: ["Unknown", "Renowned", "Obscure"],
        answer: "Renowned"
      },
      {
        id: 77,
        question: "Which sentence uses 'need' correctly?",
        options: [
          "I need to go now.",
          "I need go now.",
          "I need going now."
        ],
        answer: "I need to go now."
      },
      {
        id: 78,
        question: "What is the past tense of 'bring'?",
        options: ["Brought", "Bringed", "Bringing"],
        answer: "Brought"
      },
      {
        id: 79,
        question: "Which phrasal verb means 'cancel'?",
        options: ["Break Down", "Come to", "Call off"],
        answer: "Call off"
      },
      {
        id: 80,
        question: "Which article fits in the sentence: 'She is ___ best student in the class.'?",
        options: ["a", "an", "the"],
        answer: "the"
      },
      {
        id: 81,
        question: "Which sentence is in the present perfect tense?",
        options: [
          "I have finished my homework.",
          "I finished my homework.",
          "I am finishing my homework."
        ],
        answer: "I have finished my homework."
      },
      {
        id: 82,
        question: "What is the meaning of 'Eloquent'?",
        options: ["Fluent and persuasive in speaking", "Unable to speak", "Quiet"],
        answer: "Fluent and persuasive in speaking"
      },
      {
        id: 83,
        question: "Which sentence uses 'dare' correctly?",
        options: [
          "I dare not to go.",
          "I dare not go.",
          "I dare not going."
        ],
        answer: "I dare not go."
      },
      {
        id: 84,
        question: "What is the past participle of 'swim'?",
        options: ["Swam", "Swum", "Swimming"],
        answer: "Swum"
      },
      {
        id: 85,
        question: "Translate to English: 'तुम कहाँ जा रहे हो?'",
        options: ["Where do you go?", "Where are you going?", "Where you going?"],
        answer: "Where are you going?"
      },
      {
        id: 86,
        question: "What is the opposite of 'build'?",
        options: ["Destroy", "Create", "Construct"],
        answer: "Destroy"
      },
      {
        id: 87,
        question: "Change the narration: 'She said, \"I can help you.\"'",
        options: [
          "She said that she can help me.",
          "She said that she could help me.",
          "She said that she will help me."
        ],
        answer: "She said that she could help me."
      },
      {
        id: 88,
        question: "What does the phrasal verb 'fall apart' mean?",
        options: ["To fall asleep", "To come together", "To break into pieces"],
        answer: "To break into pieces"
      },
      {
        id: 89,
        question: "Which sentence uses 'would' correctly?",
        options: [
          "I would to go if I could.",
          "I would go if I could.",
          "I would going if I could."
        ],
        answer: "I would go if I could."
      },
      {
        id: 90,
        question: "Which of the following is a conjunction?",
        options: ["And", "Quickly", "Beautiful"],
        answer: "And"
      },
      {
        id: 91,
        question: "Which word is a modal verb?",
        options: ["Can", "Quickly", "Run"],
        answer: "Can"
      },
      {
        id: 92,
        question: "Which is the correct preposition? 'She is interested __ music.'",
        options: ["on", "in", "at"],
        answer: "in"
      },
      {
        id: 93,
        question: "Which sentence is in the present perfect continuous tense?",
        options: [
          "I have been working for two hours.",
          "I worked for two hours.",
          "I am working for two hours."
        ],
        answer: "I have been working for two hours."
      },
      {
        id: 94,
        question: "Translate 'वह गाना गा रही है' to English.",
        options: ["She has sung a song.", "She will sing a song.", "She is singing a song."],
        answer: "She is singing a song."
      },
      {
        id: 95,
        question: "Translate 'वह बाजार गया है' to English.",
        options: [
          "He has gone to the market.",
          "He is going to the market.",
          "He will go to the market."
        ],
        answer: "He has gone to the market."
      },
      {
        id: 96,
        question: "What does the phrasal verb 'take off' mean?",
        options: ["To fail at something", "To remove something", "To land an airplane"],
        answer: "To remove something"
      },
      {
        id: 97,
        question: "Which word is a determiner?",
        options: ["The", "Sir", "Would"],
        answer: "The"
      },
      {
        id: 98,
        question: "What does the phrasal verb 'get along' mean?",
        options: ["To argue with someone", "To leave a place", "To have a good relationship with someone"],
        answer: "To have a good relationship with someone"
      },
      {
        id: 99,
        question: "Which sentence is in the past continuous tense?",
        options: [
          "I was reading when he called.",
          "I read when he called.",
          "I have read when he called."
        ],
        answer: "I was reading when he called."
      },
      {
        id: 100,
        question: "Translate 'वह रो रहा है' to English.",
        options: ["He is crying", "He will cry", "He has cried"],
        answer: "He is crying"
      }
    ],
    gold: [
      {
        id: 101,
        question: "Which preposition fits in the sentence: 'The bird flew ___ the tree.'?",
        options: [
          "over",
          "on",
          "at"
        ],
        answer: "over"
      },
      {
        id: 102,
        question: "What is the past tense of 'drink'?",
        options: ["Drunk", "Drank", "Drinking"],
        answer: "Drank"
      },
      {
        id: 103,
        question: "Which word is an interjection?",
        options: ["Wow", "Quickly", "Run"],
        answer: "Wow"
      },
      {
        id: 104,
        question: "What is the opposite of 'build'?",
        options: ["Create", "Destroy", "Construct"],
        answer: "Destroy"
      },
      {
        id: 105,
        question: "Change the narration: 'He said, \"I am going to the market.\"'",
        options: [
          "He said that he is going to the market.",
          "He said that he was going to the market.",
          "He said that he will go to the market."
        ],
        answer: "He said that he was going to the market."
      },
      {
        id: 106,
        question: "What is the plural of 'deer'?",
        options: ["Deers", "Deer", "Deeres"],
        answer: "Deer"
      },
      {
        id: 107,
        question: "Choose the correct preposition: 'I am good __ mathematics.'",
        options: ["in", "at", "on"],
        answer: "on"
      },
      {
        id: 108,
        question: "What does the phrasal verb 'pick up' mean?",
        options: ["To lift or collect something", "To drop something", "To ignore someone"],
        answer: "To lift or collect something"
      },
      {
        id: 109,
        question: "Which sentence uses 'must' correctly?",
        options: [
          "I must to go now.",
          "I must go now.",
          "I must going now."
        ],
        answer: "I must go now."
      },
      {
        id: 110,
        question: "What does the phrasal verb 'give up' mean?",
        options: ["To surrender or stop trying", "To distribute something", "To celebrate"],
        answer: "To surrender or stop trying"
      },
      {
        id: 111,
        question: "Which word is a determiner?",
        options: ["The", "Quickly", "Run"],
        answer: "The"
      },
      {
        id: 112,
        question: "What is the opposite of 'buy'?",
        options: ["Sell", "Purchase", "Acquire"],
        answer: "Sell"
      },
      {
        id: 113,
        question: "Which sentence is in the past continuous tense?",
        options: [
          "I was reading when he called.",
          "I read when he called.",
          "I have read when he called."
        ],
        answer: "I was reading when he called."
      },
      {
        id: 114,
        question: "What does the phrasal verb 'come across' mean?",
        options: ["To cross a road", "To find or encounter something by chance", "To ignore something"],
        answer: "To find or encounter something by chance"
      },
      {
        id: 115,
        question: "Which sentence uses 'would' correctly?",
        options: [
          "I would to go if I could.",
          "I would go if I could.",
          "I would going if I could."
        ],
        answer: "I would go if I could."
      },
      {
        id: 116,
        question: "Which sentence correctly uses a preposition?",
        options: [
            "She is fond on music",
            "She is fond in music.",
            "She is fond of music."],
        answer: "She is fond of music."
      },
      {
        id: 117,
        question: "Which word is a modal verb?",
        options: ["Can", "Quickly", "Run"],
        answer: "Can"
      },
      {
        id: 118,
        question: "What is the opposite of 'lend'?",
        options: ["Borrow", "Give", "Take"],
        answer: "Borrow"
      },
      {
        id: 119,
        question: "Which sentence is in the present perfect continuous tense?",
        options: [
          "I have been working for two hours.",
          "I worked for two hours.",
          "I am working for two hours."
        ],
        answer: "I have been working for two hours."
      },
      {
        id: 120,
        question: "What is the meaning of 'Ponder'?",
        options: ["To ignore", "To think deeply about something", "To run quickly"],
        answer: "To think deeply about something"
      },
      {
        id: 121,
        question: "Which sentence uses 'used to' correctly?",
        options: [
          "I used to play football.",
          "I used play football.",
          "I used playing football."
        ],
        answer: "I used to play football."
      },
      {
        id: 122,
        question: "What does the phrasal verb 'look forward to' mean?",
        options: ["To anticipate something with pleasure", "To look behind", "To ignore something"],
        answer: "To anticipate something with pleasure"
      },
      {
        id: 123,
        question: "Choose the correct preposition: 'He is afraid __ spiders.'",
        options: ["of", "on", "from"],
        answer: "of"
      },
      {
        id: 124,
        question: "What is the opposite of 'increase'?",
        options: ["Decrease", "Grow", "Expand"],
        answer: "Decrease"
      },
      {
        id: 125,
        question: "Which sentence is in the future perfect continuous tense?",
        options: [
          "I will have been working for hours.",
          "I will work for hours.",
          "I am working for hours."
        ],
        answer: "I will have been working for hours."
      },
      {
        id: 126,
        question: "What is the synonym of 'famous'?",
        options: ["Unknown", "Renowned", "Obscure"],
        answer: "Renowned"
      },
      {
        id: 127,
        question: "Translate 'मैं उसे समझता हूँ' to English.",
        options: [
          "I understand him",
          "I will understand him",
          "I understood him"
        ],
        answer: "I understand him"
      },
      {
        id: 128,
        question: "What is the past tense of 'bring'?",
        options: ["Brought", "Bringed", "Bringing"],
        answer: "Brought"
      },
      {
        id: 129,
        question: "What is the correct article? '__ Eiffel Tower is in Paris.'",
        options: ["A", "An", "The"],
        answer: "The"
      },
      {
        id: 130,
        question: "Translate 'वह दौड़ रहा है' to English.",
        options: ["He is running", "He will run", "He has run"],
        answer: "He is running"
      },
      {
        id: 131,
        question: "What does the phrasal verb 'bring up' mean?",
        options: [
          "To raise a topic or a child",
          "To bring something down",
          "To ignore something"
        ],
        answer: "To raise a topic or a child"
      },
      {
        id: 132,
        question: "What is the synonym of 'Vivid'?",
        options: ["Dull", "Bright and intense", "Faint"],
        answer: "Bright and intense"
      },
      {
        id: 133,
        question: "Translate 'मैंने उसे पढ़ाया' to English.",
        options: [
          "I will teach him",
          "Flexible",
          "I am teaching him"
        ],
        answer: "I taught him"
      },
      {
        id: 134,
        question: "What is the past participle of 'swim'?",
        options: ["Swam", "Swum", "Swimming"],
        answer: "Swum"
      },
      {
        id: 135,
        question: "Choose the correct synonym for 'difficult'.",
        options: ["Easy", "Challenging", "Simple"],
        answer: "Challenging"
      },
      {
        id: 136,
        question: "What is the opposite of 'build'?",
        options: ["Destroy", "Create", "Construct"],
        answer: "Destroy"
      },
      {
        id: 137,
        question: "What is the correct adverb in the sentence: 'She danced ___.'?",
        options: [
          "graceful",
          "gracefully",
          "grace"
        ],
        answer: "gracefully"
      },
      {
        id: 138,
        question: "What is the synonym of 'quick'?",
        options: ["Slow", "Fast", "Lazy"],
        answer: "Fast"
      },
      {
        id: 139,
        question: "What is the correct adverb in the sentence: 'He speaks ___.'?",
        options: [
          "loud",
          "loudly",
          "loudness"
        ],
        answer: "loudly"
      },
      {
        id: 140,
        question: "Choose the correct indirect speech: He said, 'I am happy.'",
        options: ["He said that he was happy.", "He said that he is happy.", "He said that he happy."],
        answer: "He said that he was happy."
      },
      {
        id: 141,
        question: "Which word is a modal verb?",
        options: ["Can", "Quickly", "Run"],
        answer: "Can"
      },
      {
        id: 142,
        question: "Choose the correct conjunction: 'She was tired, ___ she kept working.'",
        options: ["so", "or", "but"],
        answer: "but"
      },
      {
        id: 143,
        question: "Which sentence is in the present perfect continuous tense?",
        options: [
          "I have been working for two hours.",
          "I worked for two hours.",
          "I am working for two hours."
        ],
        answer: "I have been working for two hours."
      },
      {
        id: 144,
        question: "Translate 'मैंने उसे देखा' to English.",
        options: ["I am seeing him", "I will see him", "I saw him"],
        answer: "I saw him"
      },
      {
        id: 145,
        question: "What does the phrasal verb 'run out of' mean?",
        options: [
          "To escape from a place",
          "To run quickly",
          "To exhaust a supply of something"
        ],
        answer: "To exhaust a supply of something"
      },
      {
        id: 146,
        question: "Translate 'वह किताब पढ़ रहा है' to English.",
        options: ["He is reading a book", "He will read a book", "He has read a book"],
        answer: "He is reading a book"
      },
      {
        id: 147,
        question: "Which word is a determiner?",
        options: ["The", "Quickly", "Run"],
        answer: "The"
      },
      {
        id: 148,
        question: "What is the antonym of 'Rigid'?",
        options: ["Stiff", "Flexible", "Hard"],
        answer: "Flexible"
      },
      {
        id: 149,
        question: "Which sentence is in the past continuous tense?",
        options: [
          "I was reading when he called.",
          "I read when he called.",
          "I have read when he called."
        ],
        answer: "I was reading when he called."
      },
      {
        id: 150,
        question: "Which preposition fits in the sentence: 'She is sitting ___ the chair.'?",
        options: ["on", "in", "at"],
        answer: "on"
      }
    ]
  };
  
  export default questions;