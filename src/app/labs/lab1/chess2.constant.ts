import { forEach } from 'lodash';

const startProgamm = 'Запустите программу';
const getImage = (image: string) => `assets/img/${image}`;
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
export const CHESS2_ERRORS: ILabError[] = [
    {
        title: 'На максимальном уровне зависает компьютер',
        description: 'Если выставить уровень на 32, то во время своего хода компьютер зависает',
        steps: [
            startProgamm,
            'Нажмите на стрелоку вверх возле слова Уровень 28 раз',
            'Нажмите мышкой на ячейку с-3',
            'Нажмите мышкой на ячейку d-4',
            'Наступил ход компьютера',
            'Компьютер завис'
        ],
        images: [
            getImage('chess2_1_1.png')
        ]
    },
    {
        title: 'В диалоге "Расстановка" отсутствует кнопка закрыть',
        description: 'Ожидается, что любой диалог можно закрыть, однако в диалоге "Расстановка" отсутствует такая кнопка',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Расстановка']),
            'Открылся диалог "Расстановка"',
            'У диалога "Расстановка" нету кнопки "Закрыть"'
        ],
        images: [
            getImage('chess2_2_1.png')
        ]
    },
    {
        title: 'На русском языке ошибка в правописании пункта меню "Новыя игра"',
        description: 'ПО правилам русского языка новая игра пишется так: "новая игра", в приложении на русском языке пункт меню называет "новыя игра"',
        steps: [
            startProgamm,
            selectMenu(['Язык', 'Русский']),
            selectMenu(['Игра'])
        ],
        images: [
            getImage('chess2_3_1.png')
        ]
    },
    {
        title: 'Отсутствует перевод кнопки "New" на русский язык',
        description: 'При выбранном языке русский, текст кнопки "New" не меняется',
        steps: [
            startProgamm,
            selectMenu(['Язык', 'Русский'])
        ],
        images: [
            getImage('chess2_4_1.png')
        ]
    },
    {
        title: 'Пункт меню подсказка делает ход',
        description: 'При выборе пункта меню подсказка, ожидается получиться подсказку, вместо этого компьютер делает ход за игрока',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Подсказка']),
            'Компьютер походит белыми вместо игрока'
        ],
        images: [
            getImage('chess2_5_1.png')
        ]
    },
    {
        title: '',
        description: 'При выборе пункта меню подсказка, ожидается получиться подсказку, вместо этого компьютер делает ход за игрока',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Подсказка']),
            'Компьютер походит белыми вместо игрока'
        ],
        images: [
            getImage('chess2_5_1.png')
        ]
    }
]