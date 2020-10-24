import React, { useState } from 'react';
import weatherApi from '../api/weatherApi';

export default function CitySearch({ results }) {

  const [city, setCity] = useState('');

  const searchCity = async (event) => {

    event.preventDefault();

    if (city.trim().length > 0) {
      const res = await weatherApi.getInfoByName(city);
      results(res);
    }
  }

  const setValueCity = (value) => {
    setCity(value);
  }

  return (
    <div className="form-group d-flex flex-row justify-content-center">
      <div className="mt-3">
        <span>Informe o nome da cidade</span>
        <input type="text" className="form-control mt-2" id="cityInput" placeholder="Ex: Salto" value={city} onChange={e => {
          setValueCity(e.target.value);
        }} />
        <button type="button" className="btn btn-primary mt-2" onClick={searchCity}>Buscar</button>
      </div>
    </div>
  )
}