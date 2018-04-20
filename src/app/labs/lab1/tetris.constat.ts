import { forEach } from 'lodash';
import { IMPORTANCE_TYPE, ERROR_TYPE } from '../../app.constant';

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
export const TETRIS: ILabError[] = [
    {
        title: 'Подпись горячих клавиш не соответсвует действительности',
        description: 'В меню Game для пунктов меню указаны горяие клавиши, хотя некоторые клавиши указаны в верхнем регистре, нажимать нужно клавиши в нижнем регистре.',
        images: [
            getImage('tetris_1_1.png')            
        ],
        fix: 'Подписать пункты меню в соотвествии с реальными клавишами',
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'Бесконечное количество ошибок, при отстутствии картинки',
        description: 'В папке игры есть папка img, по тем или иным причинам она или её содержимое может быть удалено или изменено. В этом случае программа кинет бесконечное количество ошибок и загрузит Ваш компьютер',
        steps: [
            'Зайдите в папку img в то же каталоге, что и MegaTetris.exe',
            'Переименовать файл sloth.jpg в sloth1.jpg',
            'Запустить приложение'       
        ],
        fix: 'Не показывать картинку',
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true,
        type: ERROR_TYPE.PROJECTING
    },
    {
        title: 'Не отцентрированны фигуры в окне следующей фигуры',
        description: 'В окне, в котором отображается следующая фигура, которая будет падать, фигура не отцентриорванна',
        steps: [
            'Запустить программу'
        ],
        images: [
            getImage('tetris_3_1.png')
        ],
        fix: 'Отцентрировать фигуры',
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true,
        type: ERROR_TYPE.PROPOSAL
    },
    {
        title: 'При нажатии altf + f4, программа не закрывается',
        description: 'В пункте меню "Game" написано, что программа закрывается при нажатии alt+f4, есть такие случаи, когда программа продолжает работать после гажатия alt+f4',
        steps: [
            'Запустить программу',
           selectMenu(['Game','Best scores']),
           'Окно best scores открылось',
           'Нажать alt + f4',
           'Окно best scores закрылось, программа продолжила работу'
        ],
        images: [
            getImage('tetris_4_1.png')
        ],
        fix: 'Закрывать программу при нажатии alt+f4',
        importance: IMPORTANCE_TYPE.SERIOUS,
        repeatable: true,
        type: ERROR_TYPE.CODING
    },
    {
        title: 'Игра сразу начинается',
        description: 'После запуска, игра сразу запускает игровой процессе, лишая возможности почитать правила игры перед стартом игрового процесса и нервируя неопытного пользователя, т.к. он совершенно не понимает, то происходит',
        steps: [
            'Запустить программу',
        ],
        images: [
            getImage('tetris_5_1.png')
        ],
        fix: 'Не начинать игру сразу, а предоставить возможность нажать на кнопку "Новая игра" либо "Помощь"',
        importance: IMPORTANCE_TYPE.MINOR,
        repeatable: true,
        type: ERROR_TYPE.PROPOSAL
    },
    {
        title: 'Пункт меню "Help"->"Help" вызывает окно "Справку"',
        description: 'Ожидается, что пункт меню "Help" откроет окно "Help"',
        steps: [
            'Запустить программу',
            selectMenu(['Help', 'Help'])
        ],
        images: [
            getImage('tetris_6_1.png')
        ]
    },
    {
        title: 'Отстутвие единой языковой локали',
        description: 'Пункты меню в приложении написаны на английском, а название окна о программе на русском',
        steps: [
            'Запустить программу',
            selectMenu(['Help', 'About'])
        ],
        images: [
            getImage('tetris_7_1.png')
        ]
    }
];
