import React, { useState } from 'react';
import './App.css';

import OptionButton from './components/OptionButtons';
import CitySearch from './components/CitySearch';
import CityModal from './components/CityModal';
import ipify from '../src/api/ipify';
import weatherApi from '../src/api/weatherApi';
import cloudImage from './assets/cloud.png';

import { useEffect } from 'react';

function App() {

  const [result, setResult] = useState([]);
  const [ip, setIp] = useState('');
  const [pesAuto, setPesAuto] = useState(false);
  const [pesCid, setPesCid] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if(result["temp"]) {
      setDisplay(true);
    }
  }, [result])

  useEffect(() => {
    if(ip) {
      getInfoByIP();
    }
  }, [ip])

  useEffect(() => {
    if(pesAuto) {
      getIP();
    }
  }, [pesAuto]);

  const getIP = async () => {
    const resIP = await ipify.getUserIP();
    setIp(resIP);
  }

  const getInfoByIP = async () => {
    const res = await weatherApi.getInfoByIP(ip);
    setResult(res);
  }

  return (
    <div className="container">
      <div className="mt-5 text-center">
        <h1 className="azulClaro">Busca Cidade </h1>
        <h2 className="cinzaEscuro">O aplicativo que busca informações sobre a sua cidade</h2>
        <img src={cloudImage} alt=""/>
      </div>

      <OptionButton pesAutoTrigger={getInfoByIP} getValuesOptions={ async (auto, cid) => {
        setPesAuto(auto);
        setPesCid(cid);
      }}/>
      
      {
        pesCid ?
        <CitySearch results={ result => setResult(result)}/>
        : null
      }

      <CityModal displayParam={display} cityParam={result} getCloseModal={() => { setDisplay(false); setResult([]);}} />

    </div>
  );
}

export default App;
