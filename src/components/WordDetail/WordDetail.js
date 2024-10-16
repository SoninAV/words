import React from 'react';
import { useParams } from 'react-router-dom';

function WordDetail() {
    const { word } = useParams();

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'cursive', fontSize: '100px' }}>
        {word.toUpperCase()}
        </div>
    );
}

export default WordDetail;