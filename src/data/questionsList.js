export const questionsList = [
    {
        type: "TEXT",
        title: "Первая столица Украины",
        answer: 'Харьков',
        point: 1,
    },
    {
        type: "TEXT",
        title: "Столица США",
        answer: 'Вашингтон',
        point: 1,
    },
    {
        type: "CHECKBOX",
        title: "Выберите страны в Европе",
        question: ["охотничьи колбаски", "сосиски", "моцарелла", "баклажан", "томаты", "лук", "перец", "соус томатный", "соус BBQ", "зеленый соус", "майонез"],
        answers: [
            {
                answer: "Франиция",
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
                points: 1,
            },
            {
                answer: "Украина",
                isTrue: false,
                points: 1,
            },
        ]
    },

    {
        type: "SELECT",
        title: "Солнце - это",
        answers: [
            {
                answer: "Планета",
                points: 0,
            },
            {
                answer: "Звезда",
                points: 1,
            },
            {
                answer: "Комета",
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
                points: 1,
            },
            {
                answer: "Материк",
                isTrue: false,
                points: 1,
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
                points: 1,
            },
            {
                answer: "Медь",
                isTrue: false,
                points: 1,
            },
            {
                answer: "Олово",
                isTrue: false,
                points: 1,
            },
        ]
    },
]