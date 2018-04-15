import { forEach } from 'lodash';

const errorType = {
    CODING: 1,
    ARCHTECHTURE: 2,
    IMPROVEMENT: 3,
    DOCUMENTATION: 4,
    HARDWARE: 5,
    QUESTION: 6
}
const errorFatality = {
    FATAL: 1,
    SERIOUS: 2,
    SMALL: 3
}
const startProgamm = 'Запустите программу';
const getMenuPath = (path: string[]): string => {
    let selectMenu = '';
    forEach(path, (p, index) => {
        if (index === 0) {
            selectMenu += `"${p}"`;
        } else {
            selectMenu += `->"${p}"`;
        }
    })
    return selectMenu;
}
const selectMenu = (path: string[]): string => {
    return `Выберите пункт меню: ${getMenuPath(path)}`;
}
export const CHESS1_ERRORS: ILabError[] = [
    {
        title: 'Непонятное поведение текста пункта меню - текст всё время меняется и не ясно, что он делает',
        description: 'Не понятна задача пунктов меню Options->"Black Side"/"White Side"/"Black Side on the bottom", кроме того на пункт меню Options->"Black Side on the bottom", можно нажать только 1 раз, а на остальные пункты, приведённые в данном описании, сколько угодно',
        steps: [
            startProgamm,
            selectMenu(['options', 'Black side to the bottom']),
            getMenuPath(['options', 'Black side to the bottom']) + 'пропал, появился ' + getMenuPath(['options', 'Black side']),
            selectMenu(['options', 'Black side']),
            getMenuPath(['options', 'Black side']) + 'пропал, появился ' + getMenuPath(['options', 'White side']),
            selectMenu(['options', 'White side']),
            getMenuPath(['options', 'White side']) + 'пропал, появился ' + getMenuPath(['options', 'Black side']),
        ],
        images: [
            'assets/img/chess1_1_1.png',
            'assets/img/chess1_1_2.png',
            'assets/img/chess1_1_3.png',
            'assets/img/chess1_1_4.png',
        ]
    },
    {
        title: 'Некорректно работает передача управления с игрока на компьютер',
        description: 'При переклюении с человека на компьютер, компьютер сразу не принимает управление, компьютер принимает управление только на следуюший ход.',
        steps: [
            startProgamm,
            selectMenu(['options', 'players', 'bottom', 'computer']),
            'Ожидайте несколько секунд',
            'Компьютер не принял на себя управление',
            'Нажмите мышкой на вторую шашку слева в третьем снизу ряду',
            'На шашке появился кружок, который говорит о том, что шашка выделена',
            'Нажмите мышкой на синюю клеточку - 2-я слева в 4-м снизу ряду',
            'На клеточке появилась галочка',
            'Нажмите мышкой на клеточку, в которой появилась галочка',
            'Выделенная шашка переместится на место галочки, галочка пропадёт',
            'Компьютер походит за чёрных',
            'Компьютер походит за белых',
            'Далее компьютер продолжит играть сам с собой'
        ],
        images: [
            'assets/img/chess1_2_1.png',
            'assets/img/chess1_2_2.png'
        ]
    },
    {
        title: 'Игрок который ходит вторым, может отменить первый ход первого игрока',
        description: 'Если игрок ходит вторым, то он может через пункт меню "Game"->"Back One Move" отменить ход первого игрока',
        steps: [
            startProgamm,
            selectMenu(['options', 'Black side to the bottom']),
            selectMenu(['Game', 'Start new game']),
            'Первым походит компьютер',
            selectMenu(['Game', 'Back one mobe']),
            'Первый ход компьютер отменился',
            'Компьютер сделает другой ход'
        ],
        images: [
            'assets/img/chess1_3_1.png'
        ]
    },
    {
        title: 'Пункт меню всегда заблокирован',
        description: 'Пункт меню "Game"->"Stop" всегда заблокирован',
        steps: [
            startProgamm,
            'Совершите любые действия, кроме закрытия программы',
            'Пункт меню "Game"->"Stop" заблокирован'
        ],
        images: [
            'assets/img/chess1_4_1.png'
        ]
    },
    {
        title: 'Непонятный процент в левом нижнем углу',
        description: 'После запуска приложения в левом нижнем углу видны проценты, но совершенно не ясно к чему они относятся',
        steps: [
            startProgamm,
            'В левом нижнем углу видны проценты'
        ],
        images: [
            'assets/img/chess1_5_1.png'
        ]
    },
    {
        title: 'Нельзя выбрать другую шашку, пока не снимешь выделение с текущей',
        description: 'В программе после того как выбрал шашку для хода для выбора другой шашки необходимо явным образом снять выделение с текущей шашки',
        steps: [
            startProgamm,
            'Щёлкните правой кнопкой мыши по белой шашке второй справа в третьем снизу ряду',
            'Вторая спарава белая шашка в третьем снизу ряду приобрела выделенное состояние',
            'Щёлкните правой кнопкой мыши по белой шашке третьей справа в третьем снизу ряду',
            'Шашка не выделилась'
        ],
        images: [
            'assets/img/chess1_6_1.png'
        ]
    },
    {
        title: 'В editor panel есть непонятные радио кнопки',
        description: 'В программе присутствует editor panel. В editor panel есть непонятные радиокнопки.',
        steps: [
            startProgamm,
            selectMenu(['Options', 'Editor panel']),
            'Открылась editor panel'
        ],
        images: [
            'assets/img/chess1_7_1.png',
            'assets/img/chess1_7_2.png'
        ]
    },
    {
        title: 'Не подписаны клетки шахматной доски',
        description: 'В приложении используются классическая шахматная доска, однако клетки не подписаны, из-за его сложно описать ситуацию на столе',
        steps: [
            startProgamm
        ],
        images: [
            'assets/img/chess1_8_1.png'
        ]
    },
    {
        title: 'Не понятно чья очередь ходить',
        description: 'Приложение скрывает информацию о том, какой игрок в данный момент активен',
        steps: [
            startProgamm
        ],
        images: [
            'assets/img/chess1_9_1.png'
        ]
    },
    {
        title: 'В документации следует привести пример, как выглядит шашка в дамках',
        description: 'В игре шашки есть шашки, которые называют дамками. В документации следует привести пример того, как в игре выглядит дамка',
        steps: [
            'Если на компьютере нету браузера, то установите его на свой компьютер',
            startProgamm,
            selectMenu(['Help', 'Rules']),
            'Откроется бразер, в нём откроется html страница с правилам',
            'В правилах нету картинки, демонструющей шашку'
        ],
        images: [
            'assets/img/chess1_10_1.png',
            'assets/img/chess1_10_2.png'
        ]
    },
    {
        title: 'Не работающая кнопка "History" в диалоге "Draughts"',
        description: 'В диалоге "About..." есть кнопка "History", при нажатии на неё ниего не происходит',
        steps: [
            startProgamm,
            selectMenu(['Help', 'About']),
            'Появится диалог "About..."',
            'Нажмите любое количество раз меньшее 10 на кнопку "History"',
            'Ничего не происходит'
        ],
        images: [
            'assets/img/chess1_11_1.png',
            'assets/img/chess1_11_2.png'
        ]
    },
    {
        title: 'Ссылка ведущая на поламанную страницу в диалоге "About"',
        description: 'В диалоге "About..." есть ccылка, которая ведёт на поломанную страницу',
        steps: [
            'Если на компьютере нету браузера, то установите его на свой компьютер',
            startProgamm,
            selectMenu(['Help', 'About']),
            'Появится диалог "About..."',
            'Нажмите на ссылку HomePage : shra.web.ur.ru',
            'В браузере откроется страница с адресом http://shra.web.ur.ru/',
            'На странице выведены символы'
        ],
        images: [
            'assets/img/chess1_12_1.png',
            'assets/img/chess1_12_2.png'
        ]
    },
    {
        title: 'Не очевидность управления',
        description: 'Интерфейс игры может быть сложен для неподготоваленного пользователя, чтобы разобраться с приложением необходимо прочитать help, следует при запуске программы указывать на него',
        steps: [
            startProgamm,
        ],
        images: [
            'assets/img/chess1_13_1.png'
        ]
    }
]
