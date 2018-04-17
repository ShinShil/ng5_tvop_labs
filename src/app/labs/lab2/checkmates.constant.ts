import { ERROR_TYPE, IMPORTANCE_TYPE } from '../../app.constant';

const getImage = (image: string) => `assets/img/checkmates_${image}.png`;
const startProgramm = 'Запустите программу';
export const CHECKMATES: ILabError[] = [
    {
        title: 'Можно изменить размер окна',
        description: 'Можно вручную изменять размер окна приложения',
        steps: [
            startProgramm,
            'Подведите мышку к краю окна приложения так, чтобы курсор мыши принял форму стрелочки',
            'Зажмите левую кнопку мыши',
            'Перемещайте курсор мыши',
            'Размер окна неограниченно меняется'
        ],
        images: [
            getImage('1_1'),
            getImage('1_2')
        ],
        fix: 'Запретить изменение размеров окна',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Можно ввести очень большую глубину поиска',
        description: 'Можно ввести очень большую глубину поиска',
        steps: [
            startProgramm,
            'В текствое поле "Глубина поиска(сложность)" введит число 100000000000000000000000000000000000000'
        ],
        images: [
            getImage('2_1')
        ],
        fix: 'Запретить вводе больших чисел',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Можно ввести отрицательное число в глубину поиска',
        description: 'Можно ввести отрицательную глубину поиска',
        steps: [
            startProgramm,
            'В текствое поле "Глубина поиска(сложность)" введит число -4'
        ],
        images: [
            getImage('3_1')
        ],
        fix: 'Запретить ввод отрицательных чисел',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Не работает переход в истории по клику',
        description: 'Можно кликать по элементам истории ходов, но перехода в истории не происходит',
        steps: [
            startProgramm,
            'Сделайте ход пешкой D-2 на D-4',
            'ПОходит противник',
            'В окне "История ходов" появилось 2 хода',
            'Щёлкните любое количество раз правой кнопкой мыши по любым элементам окна "История ходов"',
            'Ситуация на доске не меняется'
        ],
        images: [
            getImage('4_1')
        ],
        fix: 'Сделать переходы на клики парвой кнопкой мыши по истории ходов',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Пунктирная линия на кнопке заново',
        description: 'После клика по кнопке "Заново" на кнопке появлется пунктирная линия',
        steps: [
            startProgramm,
            'Нажмите на кнопку "Заново"',
            'На кнопке "Заново" появилась пуктирная линия'
        ],
        images: [
            getImage('5_1')
        ],
        fix: 'Не показывать пунктирную линию на кнопке "Заново"',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Пропадает графический интерфейс игры',
        description: 'После нажатия кнопки "Заново" пропадает графический интерфейс игры',
        steps: [
            startProgramm,
            'На левой панели выберите для нижнего игрока компьютер',
            'Нажмите на кнопку "Заново"',
            'Пропал графический интерфейс игры'
        ],
        images: [
            getImage('6_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.FATAL,
        repeatable: false
    },
    {
        title: 'Компьютер против компьютера не ходит',
        description: 'Если выставить компьютер против компьютера, то после нажатия "Заново" игра зависает',
        steps: [
            startProgramm,
            'На левой панели выберите для нижнего игрока компьютер',
            'Нажмите на кнопку "Заново"',
            'Игра началась заново, но компьютер не ходит'
        ],
        images: [
            getImage('7_1'),
            getImage('7_2')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: false
    },
    {
        title: 'Можно нажать на стречки истори ходов при пустой истории',
        description: 'ПРи пустой истории кнопки для перемещения по истории активны, например, в гугл хром, они недоступны, если нету истории',
        steps: [
            startProgramm,
            'Кнопки со стрелоками под окном "История ходов" доступны, хотя истории нету'
        ],
        images: [
            getImage('8_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Можно нажать на стречки истори ходов при пустой истории',
        description: 'ПРи пустой истории кнопки для перемещения по истории активны, например, в гугл хром, они недоступны, если нету истории',
        steps: [
            startProgramm,
            'Кнопки со стрелоками под окном "История ходов" доступны, хотя истории нету'
        ],
        images: [
            getImage('8_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Графика игры после скриншоты вылазит поверх других окон',
        description: 'Каким-то образом после сделанного скриншота, фигуры окна вылезли поверх текстового редактора',
        steps: [
            startProgramm,
            'В левой панели установите, чтобы за обоих игроков играл компьютер',
            'Скачайте и установите программу lightshot',
            'Дождитесь момент, когда будет передвигаться фигура',
            'В момент из прыдыдущего шага сделайте скриншот с помощью программы Lightshot',
            'Неизвестные баги с изображением'
        ],
        images: [
            getImage('9_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.FATAL,
        repeatable: true
    },
    {
        title: 'Утечка памяти',
        description: 'Программа потребляет очень много ресурсов, даже когда находится в бездействии',
        steps: [
            'Закройте все активные приложения',
            startProgramm,
            'Подождите 15 минут',
            'Откройте диспетчер задач',
            'ВО вкладке процессы посмотрите, что project1.exe потребляет очень много ресурсов'
        ],
        images: [
            getImage('10_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.FATAL,
        repeatable: true
    },
    {
        title: 'Некорректное название процесса в диспетере задач',
        description: 'Программа подписана в диспетчере задач, как Project1.exe, что затрудняет её поиск',
        steps: [
            'Закройте все активные приложения',
            startProgramm,
            'Откройте диспетчер задач',
            'Откройте вкладку приложения',
            'Завершите процесс Project1.exe',
            'Программа завершилась'
        ],
        images: [
            getImage('11_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Неуте возможности сделать корректный скриншот',
        description: 'В режиме компьютер против компьютер, программа продолжает рисовать, даже если нужно сделать скриншот',
        steps: [
            startProgramm,
            'В левой панели установите, чтобы за обоих игроков играл компьютер',
            'Скачайте и установите программу lightshot',
            'Дождитесь момент, когда будет передвигаться фигура',
            'В момент из прыдыдущего шага сделайте скриншот с помощью программы Lightshot',
            'Пока вы делает скриншот, программа продолжает рисовать'
        ],
        images: [
            getImage('12_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Программа сообщает о ничьей, если есть ходы',
        description: 'Программа сообщает о ничьей если есть ходы',
        steps: [
            startProgramm,
            'В левой панели установите, чтобы за обоих игроков играл компьютер',
            'Уйдите на 15 минут',
            'Появится окно о ничьей'
        ],
        images: [
            getImage('13_1')
        ],
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    }
];
