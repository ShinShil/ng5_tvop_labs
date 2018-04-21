import { ERROR_TYPE, IMPORTANCE_TYPE } from '../../app.constant';
import { forEach } from 'lodash';

const getImage = (image: string) => `assets/img/calc_${image}.png`;
const startProgramm = 'Запустить программу';
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
};

const selectMenu = (path: string[]): string => {
    return `Выбрать пункт меню: ${getMenuPath(path)}`;
};

export const CALC: ILabError[] = [
    {
        title: 'Программа вылетает',
        description: 'При нажатии мышкой в область окна приложения мимо контрола winapi, происходит вылет из приложения',
        steps: [
            startProgramm,
            'Нажать мышкой в область окна приложения, которая не является кнтролом winapi и не является строкой меню'
        ],
        images: [
            getImage('1_1')
        ],
        fix: 'Обрабатывать нажатие мимо контролов в рабочей области приложения',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.FATAL,
        repeatable: true
    },
    {
        title: 'Кнопка "9" заблокирована при первом запуске приложения',
        description: 'Приложение предоставляет возможность ввести числа с помощью кнопок winapi, однако кнопка с цифрой 9 изнально заблокирована',
        steps: [
            startProgramm,
            'Кнопка 9 заблокирована'
        ],
        images: [
            getImage('2_1')
        ],
        fix: 'Сделать кнопку с цифрой 9 изначально доступной',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true
    },
    {
        title: 'Кнопка с цифрой 2 имеет стиль, который отлиается от остальных подобных кнопок',
        description: 'Кнопка с цифрой 2 имеет стиль, который отлиается от остальных подобных кнопок, все цифры написаны простым шрифтом, кнопка 2 - жирны, кроме того размер шрифта кнопки 2 больше чем у остальных кнопок',
        steps: [
            startProgramm,
            'Стиль кнопки 2 отличается от остальных шрифтов'
        ],
        images: [
            getImage('3_1')
        ],
        fix: 'Сделать одинаковые шрифты для всех кнопок приложения',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Кнопка "0." рисует только 0',
        description: 'В приложении есть возможность вводить числа с помощью кнопок, есть кнопка 0 с точкой, но она печатает только 0, если на неё нажать',
        steps: [
            startProgramm,
            'Нажать на кнопку 0',
            'Точка не появилась'
        ],
        images: [
            getImage('4_1')
        ],
        fix: 'Убрать точку с кнопки с нулём',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Программа вылетает при большом количестве разрядов в числе',
        description: 'Программа вылетает если при нажатии на кнопку с цифрой, количество цифр превышает длину поля для ввода',
        steps: [
            startProgramm,
            'Ввести в текстовое поле "11111111111111111111111111111"',
            'Нажать на кнопку "1"',
            'Появился диалог с ошибкой',
            'Нажать ок',
            'Программа завершилась'
        ],
        images: [
            getImage('5_1')
        ],
        fix: 'Добавить поддержку числе большой разрядности',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.FATAL,
        repeatable: true
    },
    {
        title: 'Подкрашивание при нажатии пукта меню "Выбор"->"Обычный"',
        description: 'Калькулятор закрашивается красным при выборе режима обычный',
        steps: [
            startProgramm,
            selectMenu(['Выбор', 'Обычный']),
            'Задний фон области кнопок с цифрами закрасился красным'
        ],
        images: [
            getImage('6_1')
        ],
        fix: '',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.FATAL,
        repeatable: true
    },
    {
        title: 'Синтаксическая ошибка',
        description: 'Пункт меню о программе написано слитно, согласно правилам русского языка должно быть "О программе"',
        steps: [
            startProgramm,
            'Пункт меню "опрограмме" написан с ошибкой'
        ],
        images: [
            getImage('7_1')
        ],
        fix: '',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Противоречивое поведение',
        description: 'Программа запрещает вводить операцию равно, если не было выбрано ни одно из действий, при этом она считает результат',
        steps: [
            startProgramm,
            'Нажать на кнопку "2"',
            'Нажать на кнопку "="',
            'Появился диалог об ошибке',
            'Закройте диалог',
            'В текстовом поле видно: "В результате получилось: 2"'
        ],
        images: [
            getImage('8_1'),
            getImage('8_2')
        ],
        fix: '',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'Тултип кнопки "8" показывает странные символы',
        description: 'При наведении курсора мыши на кнопку "8" появляется тултип с иероглифами',
        steps: [
            startProgramm,
            'Наведите куросор мыши на кнопку "8"',
            'Подождите 3 секунды',
            'Виден тултип с иероглифами'
        ],
        images: [
            getImage('9_1')
        ],
        fix: '',
        type: ERROR_TYPE.CODING,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    },
    {
        title: 'После каждого вычисления трубется нажимать кнпоку "С"',
        description: 'После каждого вычесления трубется нажимать кнпоку "С"',
        steps: [
            startProgramm,
            'Нажать на кнопку 2',
            'Нажать на кнопку +',
            'Нажать на кнопку 2',
            'Нажать на кнопку =',
            'В текстовом поле появился текст: "В результате получилось: 4"',
            'Нажать кнопку +',
            'Появилось сообщение об ошибке',
            'Нажать кнопку "Ок", чтобы закрыть сообщение об ошибке',
            'Нажать кнопку С',
            'Нажать кнопку +',
            'Сообщения об ошибке не появись'
        ],
        images: [
            getImage('10_1')
        ],
        fix: '',
        type: ERROR_TYPE.PROPOSAL,
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true
    }
];
