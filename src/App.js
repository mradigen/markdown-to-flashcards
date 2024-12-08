import React, { useState } from 'react';
import markdownIt from 'markdown-it';

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const md = new markdownIt();
    md.options.typographer = true;

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const content = reader.result.split('\n');
            const parsedQuestions = [];
            let currentQuestion = null;

            for (let i = 0; i < content.length; i++) {
                const line = content[i].trim();

                if (line.startsWith('> [!question]')) {
                    if (currentQuestion) parsedQuestions.push(currentQuestion);
                    currentQuestion = {
                        question: line.replace('> [!question]', '').trim(),
                        options: [],
                        answer: null,
                    };
                } else if (line.startsWith('>> [!success]')) {
                    currentQuestion.answer = content[i + 1]
                        ?.split('>>')[1]
                        ?.trim()[0];
                    i++;
                } else if (/^> [a-d]\)/.test(line)) {
                    const id = line[2];
                    const value = line.substring(4).trim();
                    currentQuestion.options.push({ id, value });
                }
            }
            if (currentQuestion) parsedQuestions.push(currentQuestion);
            setQuestions(parsedQuestions);
        };
        reader.readAsText(file);
    };

    const handleAnswerSelect = (id) => {
        setSelectedAnswer(id);
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePreviousQuestion = () => {
        setSelectedAnswer(null);
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold text-center mb-4">
                    Flashcard App
                </h1>
                <input
                    type="file"
                    accept=".md"
                    onChange={handleFileUpload}
                    className="mb-4 p-2 border rounded"
                />
                <p className="text-center">
                    Upload a markdown file to get started.
                </p>
            </div>
        );
    }

    const { question, options, answer } = questions[currentIndex];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Flashcard App</h1>
            <div className="bg-white p-6 rounded shadow-md w-96 text-center">
                <p className="text-xl font-bold mb-4">
                    {md.renderInline(question)}
                </p>
                <div className="flex flex-col gap-2">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleAnswerSelect(option.id)}
                            className={`p-2 rounded border ${
                                selectedAnswer
                                    ? option.id === answer
                                        ? 'bg-green-500 text-white'
                                        : option.id === selectedAnswer
                                          ? 'bg-red-500 text-white'
                                          : 'bg-gray-200'
                                    : 'bg-gray-200'
                            }`}
                            disabled={selectedAnswer !== null}
                        >
                            {option.id}) {option.value}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    onClick={handlePreviousQuestion}
                    className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    disabled={currentIndex === 0}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextQuestion}
                    className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    disabled={currentIndex === questions.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
