import React, { useState } from 'react';
import times from 'lodash/times';
import useMoveTile from '../hook/useMoveTile';
import { getInitialTileList } from '../util/tile';
import { MAX_POS } from '../constant';
import Tile from './Tile';

export default function Game({ setScore }) {
  const [tileList, setTileList] = useState(getInitialTileList);
  // up, down, left, right 타일 움직이기
  // hook을 이용해 로직을 분리
  useMoveTile({tileList, setTileList,setScore }); // 훅을 만들어 관리
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, y => (
          <div key={y} className="grid-row">
            {times(MAX_POS, x => (
              <div key={y * MAX_POS + x} className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map(item => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}