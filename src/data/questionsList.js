export const questionsList = [
    {
        type: "TEXT",
        title: "Первая столица Украины",
        answers: 'Харьков',
        points: 1,
    },
    {
        type: "TEXT",
        title: "Столица США",
        answers: 'Вашингтон',
        points: 1,
    },
    {
        type: "CHECKBOX",
        title: "Выберите страны в Европе",
        answers: [
            {
                answer: "Франция",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Германия",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Греция",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Замбия",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Занзибар",
                isTrue: false,
                points: 0,
            }
        ]
    },
    {
        type: "RADIO",
        title: "Выберите страны в Азии",
        answers: [
            {
                answer: "Вьетнам",
                isTrue: true,
                points: 1,
            },
            {
                answer: "США",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Украина",
                isTrue: false,
                points: 0,
            },
        ]
    },

    {
        type: "SELECT",
        title: "Солнце - это",
        answers: [
            {
                answer: "Планета",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Звезда",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Комета",
                isTrue: false,
                points: 0,
            },
        ]
    },

    {
        type: "RADIO",
        title: "Гренландия - это...",
        answers: [
            {
                answer: "Остров",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Страна",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Материк",
                isTrue: false,
                points: 0,
            },
        ]
    },
    {
        type: "CHECKBOX",
        title: "Выберите из списка драгоценный металл...",
        answers: [
            {
                answer: "Золото",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Платина",
                isTrue: true,
                points: 1,
            },
            {
                answer: "Железо",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Медь",
                isTrue: false,
                points: 0,
            },
            {
                answer: "Олово",
                isTrue: false,
                points: 0,
            },
        ]
    },
]