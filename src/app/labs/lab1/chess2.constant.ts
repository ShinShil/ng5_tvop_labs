import { forEach } from 'lodash';
import { IMPORTANCE_TYPE, ERROR_TYPE } from '../../app.constant';

const startProgamm = 'Запустить программу';
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
    return `Выбрать пункт меню: ${getMenuPath(path)}`;
}
const pressButton = (buttonTitle: string): string => `Нажать на кнопку в диалоге "${buttonTitle}"`;
const pressField = (fieldCoords: string): string => `Нажать правой кнопкой мыши в игровом поле на клетку ${fieldCoords}`
export const CHESS2_ERRORS: ILabError[] = [
    {
        title: 'На максимальном уровне зависает компьютер',
        description: 'Если выставить уровень на 32, то во время своего хода компьютер бездействует на протяжении 2 минут 36 секунд',
        steps: [
            startProgamm,
            'Нажать на стрелочку вверх возле слова Уровень 28 раз',
            pressField('с-3'),
            pressField('d-4'),
            'Наступил ход компьютера',
            'Компьютер завис'
        ],
        images: [
            getImage('chess2_1_1.png')
        ],
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true,
        type: ERROR_TYPE.PROPOSAL
    },
    {
        title: 'В диалоге "Расстановка" отсутствует кнопка "Закрыть", есть только кнопка "Начать"',
        description: 'Ожидается, что любой диалог можно закрыть через кнопку "Закрыть", однако в диалоге "Расстановка" отсутствует такая кнопка, можно закрыть диалог только нажав на кнопку "Начать"',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Расстановка']),
            'Открылся диалог "Расстановка"',
            'У диалога "Расстановка" нету кнопки "Закрыть"'
        ],
        images: [
            getImage('chess2_2_1.png')
        ],
        fix: 'Добавить кнопку "Закрыть"',
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true,
        type: ERROR_TYPE.PROJECTING
    },
    {
        title: 'На русском языке ошибка в правописании пункта меню "Новыя игра"',
        description: 'По правилам русского языка новая игра пишется так: "новая игра", в приложении на русском языке пункт меню называется "Новыя игра"',
        steps: [
            startProgamm,
            selectMenu(['Язык', 'Русский']),
            selectMenu(['Игра'])
        ],
        images: [
            getImage('chess2_3_1.png')
        ],
        fix: 'Изменить написание пукта меню "Новыя игра" на "Новая игра"',
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true,
        type: ERROR_TYPE.CODING
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
        ],
        fix: 'Добавить перевод кнопки "New" на русский язык',
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'Пункт меню подсказка делает ход, вместо подсказки',
        description: 'При выборе пункта меню подсказка, ожидается получить подсказку, вместо этого компьютер делает ход за игрока',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Подсказка']),
            'Компьютер походит белыми вместо игрока'
        ],
        images: [
            getImage('chess2_5_1.png')
        ],
        fix: 'Показывать подсказку',
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true,
        type: ERROR_TYPE.PROPOSAL
    },
    {
        title: 'Кнопка ведущая на несущуствующий сайт',
        description: 'В диалоге "О программе..." есть кнопка, при нажатии на которую, открывается браузер и пробует перейти по адресу http://www.chsv-soft.narod.ru/, однако такого адреса в сети интернет не существует',
        steps: [
            'Если на компьютере, с которого будет запускаться приложение chess2, отсутствует браузер, то установите любой браузер',
            startProgamm,
            selectMenu(['О программе...']),
            'Нажать на кнопку с изображение спутниковой тарелки',
            'Откроется браузер',
            'Выполнится переход на адрес http://www.chsv-soft.narod.ru/',
            'Такого адреса не существует'
        ],
        images: [
            getImage('chess2_6_1.png'),
            getImage('chess2_6_2.png'),
            getImage('chess2_6_3.png')
        ]
    },
    {
        title: 'При необходимости побить несколько шашек не даётся подсказок',
        description: 'По правилам шашек бить нужно максимально возможное колиество шашек, однако новички часто не замечают эту возможность. Управление в игре построено так, что при атаке шашек нужно указать на клетку, в которой шашка будет назодиться после конца хода. Это бывает особенно неудобно, в случаях когда нужно побить несколько шашек.',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Расстановка']),
            'Откроется диалог "Расстановка", далее будем называть его диалог',
            pressButton('Очистить поле'),
            pressButton('Чёрная шашка'),
            'Нажать правой кнопкой мыши в игровом поле на клетку b-6',
            'Нажать правой кнопкой мыши в игровом поле на клетку d-6',
            pressButton('Белая шашка'),
            'Нажать правой кнопкой мыши в игровом поле на клетку e-5',
            pressButton('Начать'),
            'Нажать правой кнопкой мыши в игровом поле на клетку e-5',
            'Белая шашка начала мигать',
            'Нажать правой кнопкой мыши в игровом поле на клетку c-7',
            'Ничего не происходит',
            'Нажать правой кнопкой мыши в игровом поле на клетку a-5',
            'Две чёрные шашки будут сбиты и появится сообщение о победе белых'
        ],
        images: [
            getImage('chess2_7_1.png'),
            getImage('chess2_7_2.png')
        ]
    },
    {
        title: 'Кнопка "Начать" не помещается на рабочей области диалога "Расстановка"',
        description: 'После нажатия пункта меню "Расстановка" открывается диалог "Расстановка", в нём не видно кнопку "Начать", которая закрывает этот диалог',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Расстановка']),
            'Откроется диалог "Расстановка"',
        ],
        images: [
            getImage('chess2_8_1.png'),
        ]
    },
    {
        title: 'После завершения игры ход назад возвращает создает ситуацию, котороая отличается от реальной ситуации ход назад',
        description: 'После завершения игры ход назад возвращает создает ситуацию, которая отличается от реальной ситуации ход назад',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Расстановка']),
            'Откроется диалог "Расстановка", далее будем называть его диалог',
            pressButton('Очистить поле'),
            pressButton('Чёрная шашка'),
            pressField('c-3'),
            pressField('d-6'),
            pressButton('Белая шашка'),
            pressField('d-2'),
            pressButton('Начать'),
            pressField('d-2'),
            pressField('b-4'),
            selectMenu(['Игра', 'Расстановка']),
            'Откроется диалог "Расстановка", далее будем называть его диалог',
            pressButton('Очистить поле'),
            pressButton('Белая шашка'),
            pressField('e-5'),
            pressButton('Начать'),
            pressField('e-5'),
            'Белая шашка начала мигать',
            pressField('c-7'),
            'Ничего не происходит',
            pressField('a-5'),
            'Две чёрные шашки будут сбиты и появится сообщение о победе белых',
            selectMenu(['Игра', 'Ход назад']),
            'Ситуация на доске не соответсвует ситуации на предыдущем ходе'
        ],
        images: [
            getImage('chess2_9_1.png'),
            getImage('chess2_9_2.png'),
            getImage('chess2_9_3.png'),
            getImage('chess2_9_4.png'),
            getImage('chess2_9_5.png'),
            getImage('chess2_9_6.png'),
        ]
    },
    {
        title: 'Разное написание слова "Дамка"',
        description: 'В игре используется термин дамка. ПРедполагается, что на одной UI части, термины пишутся одинаковым образом. В диалог "Расстановка" используется термин "дамка" на двух кноках, на одной кнопке пишется маленькой буквы, на другой с большой',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Расстановка']),
            'Откроется диалог "Расстановка", далее будем называть его диалог',
            'На двух кнопках "Белая дамка" и "Черная Дамка" термин "дамка" написан в разлиных стилях'
        ],
        images: [
            getImage('chess2_10_1.png'),
        ]
    },
    {
        title: 'Отсуствует перевод фразы "Freeware programm" на русский язык',
        description: 'В диалоге "О программе..." есть фраза, для которой нету перевода на русский',
        steps: [
            startProgamm,
            selectMenu(['Язык', 'Русский']),
            selectMenu(['О программе...']),
            'Откроется диалог "О программе..."'
        ],
        images: [
            getImage('chess2_11_1.png'),
        ]
    },
    {
        title: 'Неверный перевод слова подсказка',
        description: 'Слова подсказка неверное перевердено как Promt',
        steps: [
            startProgamm,
            selectMenu(['Язык', 'English']),
            'Щёлкните правой кнопкой мыши по пункту меню "Game"'
        ],
        images: [
            getImage('chess2_12_1.png'),
        ]
    },
    {
        title: 'Можно очистить доску и нажать start',
        description: 'В диалоге "Расстановка" можно нажать кнопку "Начальная расстановка", а затем нажать кнопку "Begin", после чего появится сообщение, что выиграли шашки цвета противоположного тем, которые начинали',
        steps: [
            startProgamm,
            selectMenu(['Игра', 'Расстановка']),
            pressButton('Начальная расстановка'),
            'Установите щёлкните левой кнопкой по ралиокнопке "Белые начинают"',
            pressButton('Начать'),
            'Появится сообщение о том, что чёрные победили'
        ],
        images: [
            getImage('chess2_13_1.png'),
            getImage('chess2_13_2.png'),
        ]
    }
]
