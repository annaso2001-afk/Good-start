// ============================================================
// listening_data.js
// Данные для раздела «Аудирование»
// Уровни: A1, A2, B1, B2
// ============================================================

window.listeningData = {

    // ============================================================
    // 1. ДЕТИ: ИСТОРИИ (Простые диалоги)
    // ============================================================
    kidsStories: [
        {
            id: 'kids_airport_1',
            title: 'At the airport',
            level: 'A1', // ← Уровень
            audio: 'TTS', 
            lines: [
                { speaker: 'Anna', text: 'Hello, I am going to Spain.' },
                { speaker: 'Ben',  text: 'Nice! Are you going by plane?' },
                { speaker: 'Anna', text: 'Yes, my flight is at three o’clock.' }
            ],
            questions: [
                {
                    q: 'Where is Anna going?',
                    options: ['To Spain', 'To England', 'To France'],
                    correct: 0
                },
                {
                    q: 'How is Anna travelling?',
                    options: ['By train', 'By plane', 'By car'],
                    correct: 1
                }
            ]
        },
        {
            id: 'kids_cafe_1',
            title: 'At the cafe',
            level: 'A2', // ← Уровень
            audio: 'TTS',
            lines: [
                { speaker: 'Waiter', text: 'Hello! What would you like to order?' },
                { speaker: 'Emma', text: 'Can I have a cup of tea and a piece of chocolate cake, please?' },
                { speaker: 'Waiter', text: 'Sure. Anything else?' },
                { speaker: 'Emma', text: 'No, that’s all. How much is it?' },
                { speaker: 'Waiter', text: 'That’s five pounds.' }
            ],
            questions: [
                {
                    q: 'What does Emma want to drink?',
                    options: ['Coffee', 'Juice', 'Tea'],
                    correct: 2
                },
                {
                    q: 'How much does she need to pay?',
                    options: ['Five pounds', 'Ten pounds', 'Three pounds'],
                    correct: 0
                }
            ]
        }
    ],

    // ============================================================
    // 2. ВЗРОСЛЫЕ: ТЕКСТЫ И ДИАЛОГИ
    // ============================================================
    adultsTexts: [
        {
            id: 'adult_sleep_1',
            title: 'Why do we need sleep?',
            level: 'B1', // ← Уровень
            audio: 'TTS',
            lines: [
                { speaker: 'Host', text: 'Today we are talking about sleep. Do you sleep well?' },
                { speaker: 'Guest', text: 'Not really. I usually sleep about six hours a night.' },
                { speaker: 'Host', text: 'That is not enough. Scientists say we need seven to eight hours for our brain to rest.' },
                { speaker: 'Guest', text: 'I know, but I have so much work to do.' }
            ],
            questions: [
                {
                    q: 'What is the topic of the conversation?',
                    options: ['Food', 'Sleep', 'Work'],
                    correct: 1
                },
                {
                    q: 'How many hours does the guest usually sleep?',
                    options: ['Seven to eight', 'Eight to nine', 'About six'],
                    correct: 2
                }
            ]
        },
        {
            id: 'adult_remote_work',
            title: 'The future of remote work',
            level: 'B2', // ← Уровень
            audio: 'TTS',
            lines: [
                { speaker: 'Interviewer', text: 'Do you think companies will continue to allow remote work after the pandemic?' },
                { speaker: 'Expert', text: 'Absolutely. The pandemic proved that productivity doesn’t necessarily drop when people work from home.' },
                { speaker: 'Interviewer', text: 'But some managers still prefer having their team in the office.' },
                { speaker: 'Expert', text: 'That’s true, but the hybrid model is becoming the new standard. It offers the best of both worlds.' }
            ],
            questions: [
                {
                    q: 'What is the expert’s opinion on remote work?',
                    options: ['It decreases productivity', 'It will continue and hybrid models will be standard', 'Managers hate it'],
                    correct: 1
                },
                {
                    q: 'What does the phrase "best of both worlds" mean here?',
                    options: ['Working only from home', 'Working only in the office', 'A mix of office and home work'],
                    correct: 2
                }
            ]
        }
    ],

    // ============================================================
    // 3. VOA: ТЕКСТЫ (Новости и наука, амер. английский)
    // ============================================================
    voaTexts: [
        {
            id: 'voa_science_1',
            title: 'New planet discovered',
            level: 'B1', // ← Уровень
            audio: 'TTS', 
            lang: 'en-US', 
            lines: [
                { speaker: 'Reporter', text: 'Scientists have discovered a new planet.' },
                { speaker: 'Scientist', text: 'This planet is very similar to Earth. It is located in a habitable zone.' },
                { speaker: 'Reporter', text: 'Does that mean there might be water there?' },
                { speaker: 'Scientist', text: 'Yes, there is a high possibility of liquid water on its surface.' }
            ],
            questions: [
                {
                    q: 'What did scientists discover?',
                    options: ['A new star', 'A new planet', 'A new moon'],
                    correct: 1
                },
                {
                    q: 'Why is this planet interesting?',
                    options: ['It has aliens', 'It is very hot', 'It might have liquid water'],
                    correct: 2
                }
            ]
        },
        {
            id: 'voa_climate_1',
            title: 'Climate change and oceans',
            level: 'B2', // ← Уровень
            audio: 'TTS',
            lang: 'en-US',
            lines: [
                { speaker: 'Reporter', text: 'A new study shows that ocean temperatures are rising faster than expected.' },
                { speaker: 'Researcher', text: 'Rising temperatures cause coral bleaching and threaten marine ecosystems.' },
                { speaker: 'Reporter', text: 'What can be done to stop this?' },
                { speaker: 'Researcher', text: 'We must reduce greenhouse gas emissions immediately and globally.' }
            ],
            questions: [
                {
                    q: 'What is the consequence of rising ocean temperatures?',
                    options: ['Coral bleaching', 'More fish', 'Cooler weather'],
                    correct: 0
                },
                {
                    q: 'What solution did the researcher suggest?',
                    options: ['Building more ships', 'Reducing greenhouse gas emissions', 'Swimming more'],
                    correct: 1
                }
            ]
        }
    ],

    // ============================================================
    // 4. ДОП. ФРАЗЫ ДЛЯ УРОВНЕЙ
    // ============================================================
    extraPhrases: [
        // Формат: { en: '...', ru: '...' }
        // Сюда можно добавить то, чего нет в phrasesData:
        // например, длинные фразы для уровня «Расставь слова».
        { en: 'I would like to book a table for two.', ru: 'Я хотел бы забронировать столик на двоих.' },
        { en: 'Could you tell me how to get to the station?', ru: 'Не могли бы вы подсказать, как добраться до станции?' },
        { en: 'It has been raining since morning.', ru: 'Дождь идёт с самого утра.' }
    ]
};