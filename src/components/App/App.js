import './App.css';
import MapRender from '../mapRender';
import { useState, useEffect } from 'react';

import createMap from '../../functions/createMap';

const startHero = [1, 1]
const mapSize = [13, 13]

function App() {
  const [map, setMap] = useState([]);
  const [HeroInfo, setHeroInfo] = useState({
    position: startHero,
    visible: 5,
    step: 0
  });

  useEffect(() => {
    setMap(createMap(startHero, mapSize));
  }, []);

  return (
    <div className="App">
      {`Шаг ${HeroInfo.step}`}
      <MapRender map={map} hero={HeroInfo} mapSize />
    </div>
  );
}

export default App;
