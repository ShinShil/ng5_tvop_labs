import { ERROR_TYPE, IMPORTANCE_TYPE } from '../../app.constant';
const getImage = (image: string) => `assets/img/pyatnashki_${image}.png`;
const startProgramm = 'Запустите программу';
export const PYATNASHKI: ILabError[] = [
    {
        title: 'Нельзя отключить звук',
        description: 'Отсутсвует пункт меню, в котором можно было бы отключить звук',
        steps: [
            startProgramm
        ],
        images: [
            getImage('1_1')
        ],
        fix: 'Добавить пункт меню "Опции". По нажатию на него будет открывается окно "Опции", в котором можно будет отключить звук',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Пропадающая кнопка "Закрыть"',
        description: 'С помощью изменения размера окна можно скрыть кнопку "Закрыть" окна "Об авторе"',
        steps: [
            startProgramm,
            'Выберите пункт меню об авторе',
            'Появится окно "Об авторе"',
            'Подведите курсор мыши к правому краю окно "Об авторе" так, чтобы он принял форму двухсторонней стрелочки',
            'Зажмите левую кнопку мыши и ведите курсор мыши влево до тех пор, пока не скроется кнопка "Закрыть"'
        ],
        images: [
            getImage('2_1')
        ],
        fix: 'Запретить изменение размеров окна "О программе"',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Теряющися диалог',
        description: 'При перелючении окон, можно потерять диалог',
        steps: [
            startProgramm,
            'Выберите пункт меню "Правила"',
            'Подведите курсор мыши к заголовку окна "ПРавила" - "Правила".',
            'Зажмите левую кнопку мыши и переместите курсор мыши в правую сторону так, чтобы стал видно окно с главным меню игры',
            'Выберите пункт меню "Об авторе"',
            'Появится окно "Об авторе"',
            'Нажмите мышкой на заголовок окна с главным меню - диалог об авторе пропал'
        ],
        images: [
            getImage('3_1')
        ],
        fix: 'Сделать все диалоги модальными',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Обрезающися звук в главном меню',
        description: 'В главном меню есть звук при наведении курсора на пункт меню. При быстром мотании по пунктам, звук обрезается',
        steps: [
            startProgramm,
            'Максимально быстро водите курсором мыши по пунктам меню'
        ],
        images: [
            getImage('4_1')
        ],
        fix: 'Убрать звук при наведении мыши на пункт меню',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Два одновременно выделенных пункта меню',
        description: 'В приложении при наведении курсора мыши на пункт меню в главном меню, пункт меню меняет цвет. При быстром выводе курсора за рабочую область приложения, может оказаться выделено одновременно дву пунка меню',
        steps: [
            startProgramm,
            'Наведите курсор мыши мимо окна с пуктами меню, снизу, так чтобы строго кверху были пункты меню',
            'Максимально быстро проведите кусором мыши наверх через всё окно с пунктами меню, конечная тока курсора должна быть вне рабочей области окна с пунктами меню',
            'Повторите предыдущий шаг несколько раз, пока не получится воспроизвести баг, с одновременно выделенными несколькими пунктами меню',
        ],
        images: [
            getImage('5_1')
        ],
        fix: 'Скидывать выделение с пунктов меню, когда курсор находится за пределами рабочей области окна с пунктами меню',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Скрывающееся окно, при нажатии нет в диалог о выходе',
        description: 'При нажатии кнопки выход появляет вопрос - хотите ли выйти из игры, если нажать да, то, окно с пуктами меню скроется',
        steps: [
            'Запустите любое приложение, которое можно развернуть на весь экран, и разверните его на весь экран',
            startProgramm,
            'Разверните на весь экран приложение из шага 1 и сделайте активным окно тестируемого приложения "Пятнашки"',
            'Выберите пункт меню "Выход"',
            'Появится диалог с двумя кнопками "Да" и "Нет"',
            'Нажмите кнопку "Да"',
            'Приложение "Пятнашки скрылись'
        ],
        images: [
            getImage('6_1')
        ],
        fix: '',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Синтаксическая ошибка в слове "Пятнашку"',
        description: 'Приложение называется "Пятнашки", также как и сама игра. В окне "Правила" написано "как играть в Пятнашку"',
        steps: [
            startProgramm,
            'Выберите пункт меню "Правила"',
            'Появится окно "Правила"',
            'В окне "Правила" написано "как играть в Пятнашку"'
        ],
        images: [
            getImage('7_1')
        ],
        fix: '',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    }
];