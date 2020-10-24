import React, { useEffect } from 'react';
import { useState } from 'react';

export default function CityModal( {displayParam, cityParam, getCloseModal} ) {

  const [display, setDisplay] = useState(displayParam ? "block": "none");
  const [city, setCity] = useState(cityParam);

  useEffect(() => {
    if(cityParam["temp"] && cityParam["city"]) {
      cityParam = formatData(cityParam)
      setCity(cityParam);
    }
  }, [cityParam])

  const formatData = data => {
    data["city"] = data["city"].replace(",", " -");
    data["temp"] = data["temp"] + " ºc";
    return data;
  }

  useEffect(() => {
    displayParam ? setDisplay("block") : setDisplay("none");
  }, [displayParam])

  const closeModal = () => {
    setDisplay("none");
    getCloseModal(true);
  }

  return (
    <div className="modal fade show" id="cityModal" style={{display: display}} role="dialog" aria-labelledby="cityModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cityModal">{city["city"]}</h5>
            <button type="button" className="close" onClick={closeModal} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <span>Temperatura: {city["temp"]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}