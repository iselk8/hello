import {useState, useEffect} from 'react';

export default function Dictionary(){
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('State word 1 updated ' + word);
    }, [word]);

    useEffect(() => {
        console.log('State word 2 updated ' + word2);
    }, [word2]);

    return (
        <>
            <input type='text' onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h2>Let's get the definition for {word}</h2>

            <input type='text' onChange={(e) => {
                setWord2(e.target.value);
            }} />
            <h2>Let's get the definition for {word2}</h2>
        </>
    );
}