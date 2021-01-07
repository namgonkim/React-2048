import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../util/keyboard"
import { makeTile, moveTile } from "../util/tile";

export default function useMoveTile({ tileList, setTileList, setScore }) {
    useEffect(() => {

        function moveAndAdd({ x, y }) { // 움직이고 추가까지
            const newTileList = moveTile({ tileList, x, y }) // 타일을 움직여서 새로운 타일을 주는 .
            // 움직인 다음에 추가
            const score = newTileList.reduce(
                (acc, item) => (item.isMerged ? acc + item.value : acc),
                0,
            );
            setScore(v => v + score);
            const newTile = makeTile(newTileList);
            newTile.isNew = true;
            newTileList.push(newTile);
            setTileList(newTileList);
        }
        function moveUp() {
            moveAndAdd({ x: 0, y: -1 });
        }
        function moveDown() {
            moveAndAdd({ x: 0, y: 1 });
        }
        function moveLeft() {
            moveAndAdd({ x: -1, y: 0 });
        }
        function moveRight() {
            moveAndAdd({ x: 1, y: 0 });
        }
        addKeyObserver('up', moveUp);
        addKeyObserver('down', moveDown);
        addKeyObserver('left', moveLeft);
        addKeyObserver('right', moveRight);
        return () => {
            removeKeyObserver('up', moveUp);
            removeKeyObserver('down', moveDown);
            removeKeyObserver('left', moveLeft);
            removeKeyObserver('right', moveRight);
        };
    }, [tileList, setTileList, setScore]);
}