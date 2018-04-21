import { forEach } from 'lodash';
import { IMPORTANCE_TYPE, ERROR_TYPE } from '../../app.constant';

const getImage = (image: string) => `assets/img/1000_${image}.png`;
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
const startProgramm = ['Запустить программу', selectMenu(['Игра', 'Новая'])];
export const THOUSAND: ILabError[] = [
    {
        title: 'При вводе имени при нажатии enter, ввод продолжается',
        description: 'Общепринятая практика для ПК приложений при вводе в диалог с одни текстовым полем, закрывать диалог по нажатию enter, в данном приложении после нажатия enter проложается ввод',
        steps: [
            'Запустить игру',
            selectMenu(['Игра', 'Новая']),
            'Ввести в текстовое поле "Nick"',
            'Нажать enter',
            'Ввода продолжается'
        ],
        images: [
            getImage('1_1')
        ],
        importance: IMPORTANCE_TYPE.MINOR,
        fix: 'Заканчивать процесс ввода имени после нажатия enter',
        repeatable: true,
        type: ERROR_TYPE.PROPOSAL
    },
    {
        title: 'В окне "Правила" есть лишние переносы и отступы различной длины',
        description: 'В окне "Правила" написанный текст плохо форматирован - есть лишение переносы и неравывнены отступы',
        steps: [
            ...startProgramm,
            selectMenu(['Помощь', 'Правила']),
            'Появилось окно "Правила"',
            'В этом окне видны лишние переносы текста и текст не выравнен по левому краю'
        ],
        images: [
            getImage('2_1')
        ],
        importance: IMPORTANCE_TYPE.MINOR,
        fix: 'Отформатировать текст - убрать лишние переносы и выравнивать текст по ширине края',
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'В игре очень громкий и не приятный звук, без возможности его отключения',
        description: 'В игре каждое действие сопровождается какими-либо звуками. Звуки хочется отключить, однако нету такой возможности',
        steps: [
            ...startProgramm,
            'Играть',
            'Когда кто-либо объявит марьяж, слышно громкий звук орла'
        ],
        images: [
            getImage('3_1')
        ],
        importance: IMPORTANCE_TYPE.MINOR,
        fix: 'Добавить опцию отключения звука',
        repeatable: true,
        type: ERROR_TYPE.PROPOSAL
    },
    {
        title: 'После загрузки сохранённой игры появляется неизвестная ошибка',
        description: 'В игре присутствует понятие загрузки игры',
        steps: [
            ...startProgramm,
            'Играть',
            'Сохранить игру в место отличное от запускаемого файла 1000.exe',
            selectMenu(['Игра', 'Загрузить']),
            'Выбрать файл сохранённый на пред-предущем шаге',
            'Повилось окно с ошибкой'
        ],
        images: [
            getImage('4_1')
        ],
        importance: IMPORTANCE_TYPE.SERIOUS,
        fix: 'Не показывать ошибку после созранения игры',
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'После загрузки игры во премя торгов виден прикуп',
        description: 'После загрузки игры во время торгов виден прикуп',
        steps: [
            ...startProgramm,
            'Играть, до тех пока не настанет время торга',
            'Сохранить игру в место отличное от запускаемого файла 1000.exe',
            selectMenu(['Игра', 'Загрузить']),
            'Выбрать файл сохранённый на пред-предущем шаге',
            'Появилось окно с ошибкой',
            'Закрыть окно, нажав на кнопку "ок"',
            'Время торга, на прикуп виден игроку'
        ],
        images: [
            getImage('5_1')
        ],
        importance: IMPORTANCE_TYPE.MINOR,
        fix: 'Не показывать прикуп во время торгов',
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'После загрузки появляется ошибка во время каждого хода',
        description: 'После загрузки появляется ошибка во время каждого хода',
        steps: [
            ...startProgramm,
            'Играть, до тех пока не настанет время торга',
            'Сохранить игру в место отличное от запускаемого файла 1000.exe',
            selectMenu(['Игра', 'Загрузить']),
            'Выбрать файл сохранённый на пред-предущем шаге',
            'Появилось окно с ошибкой',
            'Закрыть окно, нажав на кнопку "ок"',
            selectMenu(['Игра', 'Новая']),
            'Играть',
            'Во время каждого хода будет появляться ошибка об отсутствующем файле звука для каждой масти'
        ],
        images: [
            getImage('6_1')
        ],
        importance: IMPORTANCE_TYPE.SERIOUS,
        fix: '',
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'После загрузки бот набирает очень много очков',
        description: 'После загрузки в новой игре бот набирает очень много очков',
        steps: [
            ...startProgramm,
            'Играть, до тех пока не настанет время торга',
            'Сохранить игру в место отличное от запускаемого файла 1000.exe',
            selectMenu(['Игра', 'Загрузить']),
            'Выбрать файл сохранённый на пред-предущем шаге',
            'Появилось окно с ошибкой',
            'Закрыть окно, нажав на кнопку "ок"',
            selectMenu(['Игра', 'Новая']),
            'Пасануть',
            'Во время своего хода, бот будет набирать очень много очков',
            'Все окошка ошибок закрывать нажатием кнопки "ок"'
        ],
        images: [
            getImage('7_1')
        ],
        importance: IMPORTANCE_TYPE.SERIOUS,
        fix: '',
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'Бот ожидает клика пользователя по столу для выполнения сброса карт',
        description: 'В ситуации, когда ставка бота, бот ожидает клика по столу от пользователю, перед выполнением сброса карт',
        steps: [
            ...startProgramm,
            'Если есть возможность - пасануть, если нет дождаться следующих торгов и пасануть',
            'Наступило время прикупа',
            'Бот ожидает, клика пользователя',
            'Кликнуть левой кнопкой мыши по столу',
            'Бот выполнит сброс карт'
        ],
        images: [
            getImage('8_1')
        ],
        importance: IMPORTANCE_TYPE.SERIOUS,
        fix: '',
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'При кликам по картам во время торгов, игра отображает игровое поле, вместо диалога с инcтрукцией',
        description: 'При клики по картам во время торгов, игра отображает игровое поле, вместо диалога с инcтрукцией',
        steps: [
            ...startProgramm,
            'Кликнуть по самой правой карте в руке',
            'Игра отображает игровое поле',
            'Кликнуть по второй справа карке',
            'Игра отображает игровое поле'
        ],
        images: [
            getImage('9_1')
        ],
        importance: IMPORTANCE_TYPE.MINOR,
        fix: '',
        repeatable: true,
        type: ERROR_TYPE.PROPOSAL
    },
    {
        title: 'После начала новой игры после старта приложения, первые ячейки в таблицах выделены синим цветом',
        description: 'Для отображения набранных очков как текущей партии, так и в предыдщих используются таблицы. После начала новой игры после старта приложения, первые ячейки в таблицах выделены синим цветом.',
        steps: [
            ...startProgramm
        ],
        images: [
            getImage('10_1')
        ],
        importance: IMPORTANCE_TYPE.MINOR,
        fix: '',
        repeatable: true,
        type: ERROR_TYPE.CODING
    }
];