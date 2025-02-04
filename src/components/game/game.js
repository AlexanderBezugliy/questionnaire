import { useState } from 'react';
import Questions from '../questions/questions';
import Result from '../result/result';

import '../style/style.scss';


const Game = () => {
    const [step, setStep] = useState(0); // текущий шаг(номер вопроса)
    const [correct, setCorrect] = useState(0); //количество правильных ответов

    //текущий вопрос
    const question = Questions[step];

    const percent = Math.floor((step / Questions.length) * 100);

    const onClickVariant = (index) => {
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    }

    //если все вопросы завершены показываем результат
    if (step === Questions.length) {
        return  <Result correct={correct} />;
    }


    return (
        <>
            <div className="progress">
                <div style={{ width: `${percent}%` }} className="progress__inner"></div>
            </div>

            <h1>{question.title}</h1>

            <ul>
                {
                    question.variants.map((text, i) => {
                        return (
                            <li onClick={() => onClickVariant(i)} key={i} >
                                {text}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Game;