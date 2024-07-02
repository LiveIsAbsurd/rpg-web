import styles from './App.module.sass'
import MapRender from '../mapRender';
import Keyboard from '../Keyboard';
import { useState, useEffect } from 'react';

import createMap from '../../functions/createMap';

const startHero = [1, 1]
const mapSize = [151, 151]

function App() {
  const [map, setMap] = useState([]);
  const [HeroInfo, setHeroInfo] = useState({
    position: [...startHero],
    visible: 3,
    step: 0
  });

  useEffect(() => {
    setMap(createMap(startHero, mapSize));
  }, []);

  const replay = () => {
    setHeroInfo({
      position: [...startHero],
      visible: 3,
      step: 0
    });
    setMap(createMap(startHero, mapSize));
  }

  const heroMove = (move) => {
    let prevPosition = [HeroInfo.position[0], HeroInfo.position[1]];
    let realPosition = [...prevPosition];

    switch (move) {
      case 'up':
        if (map[HeroInfo.position[0] - 1][HeroInfo.position[1]] === 'wall') {
          return;
        }
        realPosition[0] -= 1;
        setHeroInfo(info => {
          let newInfo = { ...info };
          newInfo.position[0] -= 1;
          newInfo.step += 1;
          return newInfo;
        });
        break;

      case 'down':
        if (map[HeroInfo.position[0] + 1][HeroInfo.position[1]] === 'wall') {
          return;
        }
        realPosition[0] += 1;
        setHeroInfo(info => {
          let newInfo = { ...info };
          newInfo.position[0] += 1;
          newInfo.step += 1;
          return newInfo;
        });
        break;
      
      case 'left':
        if (map[HeroInfo.position[0]][HeroInfo.position[1] - 1] === 'wall') {
          return;
        }
        realPosition[1] -= 1;
        setHeroInfo(info => {
          let newInfo = { ...info };
          newInfo.position[1] -= 1;
          newInfo.step += 1;
          return newInfo;
        });
        break;

      case 'right': 
        if (map[HeroInfo.position[0]][HeroInfo.position[1] + 1] === 'wall') {
          return;
        }
        realPosition[1] += 1;
        setHeroInfo(info => {
          let newInfo = { ...info };
          newInfo.position[1] += 1;
          newInfo.step += 1;
          return newInfo;
        });
        break;
      
      default:
        return;
    }
    
    setMap(prevMAP => {
      let newMap = [...prevMAP]
      newMap[realPosition[0]][realPosition[1]] = 'hero';
      newMap[prevPosition[0]][prevPosition[1]] = 'floor'
      return newMap;
    });
  }

  return (
    <div className={styles.App}>
      <div className={styles.counter}>{`Шаг ${HeroInfo.step}`}</div>
      <MapRender map={map} hero={HeroInfo} mapSize />
      <Keyboard heroMove={move => heroMove(move)} replay={() => replay()} />
    </div>
  );
}

export default App;
