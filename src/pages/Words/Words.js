import React from 'react';
import { Link } from 'react-router-dom';

const nouns = [
    "apple", "banana", "cherry", "date", "elephant", "fig", "grape", "house", "igloo", "jacket",
    "kite", "lemon", "monkey", "notebook", "octopus", "penguin", "queen", "robot", "snake", "tiger",
    "umbrella", "vase", "whale", "xylophone", "yacht", "zebra", "airplane", "ball", "cat", "dog"
];

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function Words() {
    return (
        <div>
        <div>
            {alphabet.map(letter => (
            <Link key={letter} to={`/letter/${letter}`}>
                <button>{letter.toUpperCase()}</button>
            </Link>
            ))}
        </div>
        <ul>
            {nouns.map(word => (
            <li key={word}>
                <Link to={`/word/${word}`}>{word}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default Words;