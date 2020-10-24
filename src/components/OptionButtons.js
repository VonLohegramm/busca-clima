import React, { useState } from 'react';
import { useEffect } from 'react';

export default function OptionButton( { getValuesOptions, pesAutoTrigger } ) {

  const [pesAuto, setPespAuto] = useState(false);
  const [pesCid, setPesCid] = useState(false);

  useEffect(() => {
    getValuesOptions(pesAuto, pesCid);
  }, [pesAuto, pesCid])

  const setValuePesqAuto = () => {
    setPespAuto(true);
    setPesCid(false);
    pesAutoTrigger();
  }

  const setValuePesqCid = () => {
    setPespAuto(false);
    setPesCid(true);
  }

  return (    
    <div className="d-flex flex-row justify-content-center">
      <div className="text-center">
        <h2>Selecione o tipo de busca</h2>
        <div className="col-lg-12 mb-1">
          <button className="btn btn-outline-primary" onClick={setValuePesqAuto}>Pesquisa Automática</button>
        </div>
        <div className="col-lg-12 mb-1">
          <button className="btn btn-outline-secondary" onClick={setValuePesqCid}>Pesquisa por cidade</button>
        </div>
      </div>
    </div>
  )
}
