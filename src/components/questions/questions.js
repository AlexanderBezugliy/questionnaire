import '../style/style.scss';


const Questions = [
    {
        title: 'NextJs - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Component - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое jsx?',
        variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

export default Questions;