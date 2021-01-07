import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import AboveGame from './component/AboveGame';
import Game from './component/Game';
import useLocalStorageNumber from './hook/useLocalStorage';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}
/*
vscode에서 jsconfig를 만들면 타입 체크도 되고, 타입스크립트가 아닌데도 타입스크립트를 이용해서 자바스크립트에서 타입 체크 가능
마찬가지로 auto import도 가능
*/