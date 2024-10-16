import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const nouns = [
    "apple", "banana", "cherry", "date", "elephant", "fig", "grape", "house", "igloo", "jacket",
    "kite", "lemon", "monkey", "notebook", "octopus", "penguin", "queen", "robot", "snake", "tiger",
    "umbrella", "vase", "whale", "xylophone", "yacht", "zebra", "airplane", "ball", "cat", "dog"
];

function LetterFilter() {
    const { letter } = useParams();
    const startsWith = nouns.filter(word => word.startsWith(letter));
    const contains = nouns.filter(word => word.includes(letter) && !word.startsWith(letter));

    return (
        <div>
        <h2>Words starting with {letter.toUpperCase()}</h2>
        <ul>
            {startsWith.map(word => (
            <li key={word}>
                <Link to={`/word/${word}`}>{word}</Link>
            </li>
            ))}
        </ul>
        <h2>Words containing {letter.toUpperCase()}</h2>
        <ul>
            {contains.map(word => (
            <li key={word}>
                <Link to={`/word/${word}`}>{word}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default LetterFilter;