import React, { useState } from 'react';
import questions from './questions'; // agar savollarni alohida faylga qo'ysan

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (correct) => {
        if (correct) setScore(prev => prev + 1);
        const next = currentIndex + 1;
        if (next < questions.length) setCurrentIndex(next);
        else setShowScore(true);
    };

    const restartQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setShowScore(false);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#f4f4f4' }}>
            <div style={{ background: '#fff', padding: 24, borderRadius: 12, width: 420 }}>
                {showScore ? (
                    <div style={{ textAlign: 'center' }}>
                        <h2>Quiz tugadi!</h2>
                        <p>Sizning ballingiz: {score} / {questions.length}</p>
                        <button onClick={restartQuiz}>Qayta boshlash</button>
                    </div>
                ) : (
                    <div>
                        <h3>{questions[currentIndex].question}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {questions[currentIndex].answers.map((ans, i) => (
                                <button key={i} onClick={() => handleAnswer(ans.correct)}>{ans.text}</button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}