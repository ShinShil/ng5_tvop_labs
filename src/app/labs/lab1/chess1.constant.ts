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
        if(index === 0) {
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
            'assets/img/chess1_2_2.png',
            'assets/img/chess1_2_3.png',
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
            'chess1_3_1.png'
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
            'chess1_3_1.png'
        ]
    }
]