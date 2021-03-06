import { ERROR_TYPE, IMPORTANCE_TYPE } from '../../app.constant';
import { forEach } from 'lodash';

const getImage = (image: string) => `assets/img/chess3_${image}.png`;
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

const startProgramm = ['Запустить программу', 'Передвинуть экран, чтобы он был виден целиком', 'Нажать пункт меню "Игра"->"Опции"'];

const selectMenu = (path: string[]): string => {
    return `Выбрать пункт меню: ${getMenuPath(path)}`;
}

export const CHESS3: ILabError[] = [
    {
        title: 'После запуска приложения, окно приложения выходит за рамки монитора',
        description: 'При старте программы окно приложения смещено очень сильно влево вниз так, что его не видно полностью и для начала игры нужно вытащить его мышкой из-за экрана',
        steps: [
            ...startProgramm,
            'Окно приложения видно только частично'
        ],
        images: [
            getImage('1_1')
        ],
        fix: 'Отрисовывать окно по центру экрана после старте приложения',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Во время открытого модального диалога "О программе..." тикает таймер',
        description: 'Во время открытого модального диалога "О программе..." тикает таймер',
        steps: [
            ...startProgramm,
            selectMenu(['Помощь', 'О программе']),
            'Таймер продолжает тикать'
        ],
        images: [
            getImage('2_1'),
            getImage('2_2')
        ],
        fix: 'Останавливать таймер при открытии модальных диалогов',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'После завершения игры, внешний вид доски и информационной панели не меняется',
        description: 'После клика по пункту меню "Игра"->"Прервать игру", внешний вид доски и информационной панели не меняется',
        steps: [
            'Запустить игру',
            'Передвинуть экран, чтобы он был виден целиком',
            'Видна пустая доска',
            selectMenu(['Игра', 'Начать игру']),
            selectMenu(['Игра', 'Прервать игру']),
            'На доске по прежнему есть все шашки, в информационной панели сказано, что сейчас ходит белый'
        ],
        images: [
            getImage('3_1')
        ],
        fix: 'Выставлять внешний вид интефейса в начальное состояние, которое можно наблюдать после запуска до нажатия пукта меню "Игра"->"Начать игру"',
        type: ERROR_TYPE.PROJECTING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'При уменьшении размеров окна пропадает доска с шашками',
        description: 'Можно уменьшить размеры окна до такой степени, что пропадёт доска с шашками',
        steps: [
            ...startProgramm,
            'Навести курсор мыши на левый нижний угол окна приложения так, чтобы он принял форму стрелочки',
            'Нажать правую кнопку мыши и проведите кусор по диагонали к верхнему правому углу окна приложения до тех пор пока игровое поле не исчезнет',
        ],
        images: [
            getImage('4_1')
        ],
        fix: 'Запретить уменьшение размеров окна приложения',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'При клике по шашке, которая не может ходить в данный ход, внешний вид игры остаётся прежним',
        description: 'По правила шашек бить обязательно, в ситуации когда бить обязательно пользователь может кликать по шашкам, которым нельзя ходить из-за ранне упомяутого правила, однако никакого сообщения не появляется',
        steps: [
            ...startProgramm,
            'Нажать правой кнопкой мыши по второй слева белой шашке в третьем снизу ряду',
            'Нажать правой кнопкой мыши по третьей слева клетке в четвёртом снизу ряду',
            'Нажать правой кнопкой мыши по третьей слева чёрной шашке в шестом снизу ряду',
            'Нажать правой кнопкой мыши по четвёртой слева клетке в четвёртом снизу ряду',
            'Наступила ход белых',
            'Сложилась ситуация, при которой для белых бить обязательно',
            'Кликнуть от 1 до трёх раз по любой шашке кроме белой шашки в третьей слева клетке в пятом снизу ряду',
            'Ничего не просходит'
        ],
        images: [
            getImage('5_1')
        ],
        fix: 'Выводить сообщение о том, что бить обязательно, при клике по шашке, которая не может бить, при наличии шашки, которая может бить',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Клетки без имени',
        description: 'В классические шашки 8х8 играют на шахматной доске. Желательно наличие именования a-h, 1-8',
        steps: [
            ...startProgramm
        ],
        images: [
            getImage('6_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Версия правил, которая используется в игре, опущена',
        description: 'В игре есть ссылка на правила игры, однако не оговорено какая версия правил используется',
        steps: [
            ...startProgramm,
            selectMenu(['Помощь', 'О программе...']),
            'Есть ссылка на правила, но не сказано какая версия правил используется'
        ],
        images: [
            getImage('7_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Спорные правила не оговорены',
        description: 'В игре есть ссылка на правила игры, однако не оговорено какая версия правил используется',
        steps: [
            ...startProgramm,
            'Запустите диспетчер задач',
            'Откройте вкладку приложения',
            'Вместо названия приложения в диспетчере задач видны непонятные символы'
        ],
        images: [
            getImage('8_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'При первом запуске игры видно только пустое поле и пустые либо занудённые контролы в информационной панели',
        description: 'При первом запуске игры поле пустое и все контролы в информационной панели слева пустые либо равны нулю. Нету никаких подсказок на то, как начать игру',
        steps: [
            ...startProgramm
        ],
        images: [
            getImage('9_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Разный стиль оформления ссылок в окне "О программе..."',
        description: 'В окне "О программе..." есть две ссылки, которые по разному оформлены',
        steps: [
            ...startProgramm,
            selectMenu(['Помощь', 'О программе...']),
            'Ссылка https://vk.com/egorozum написана жирным курсивом, ссылка "Правила игры и другие реализации шашек" написан курсивом'
        ],
        images: [
            getImage('10_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Фотография вызодит за границы предназначенной рамки в окне "О программе..."',
        description: 'В окне "О программе..." фотография разработчика(вероятно) вызодит за границы рамки',
        steps: [
            ...startProgramm,
            selectMenu(['Помощь', 'О программе...']),
            'Ссылка https://vk.com/egorozum написана жирным курсивом, ссылка "Правила игры и другие реализации шашек" написан курсивом'
        ],
        images: [
            getImage('11_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Разный стиль оформления информациионных лейблов',
        description: 'В панели слева в главном окне по разному оформлены контрол, который выводит, чтя очередь ходить, и контрол, который выводит время. Первый жирным шрифтом, второй обычным, кроме того у второго более мелкий шрифт',
        steps: [
            ...startProgramm,
            'В панели слева в главном окне по разному оформлены контрол, который выводит, чтя очередь ходить, и контрол, который выводит время'
        ],
        images: [
            getImage('12_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Можно прервать прерванную игру',
        description: 'Пункт меню "Игра"->"Прервать игру" всегда доступен, поэтому можно прервать уже прерванную игру',
        steps: [
            ...startProgramm,
            selectMenu(['Игра', 'Начать игру']),
            selectMenu(['Игра', 'Прервать игру']),
            selectMenu(['Игра', 'Прервать игру']),
            selectMenu(['Игра', 'Прервать игру'])
        ],
        images: [
            getImage('13_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    }
];

