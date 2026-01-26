import React, { use, useEffect, useState } from "react";

function UseState() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const SECURITYCODE = "paradigma";
  console.log(value === SECURITYCODE);

  const onConfirmed =()=>{
  setLoading(false);
  setError(false);
  setConfirmed(true);
  }
   const onError =()=>{
    setLoading(false);
    setError(true);
    }
   const onWrite =(newValue)=>{
    setValue(newValue);
   }
const onCheck =()=>{
    setLoading (true);
   }
   const onDelete =()=>{
    setDeleted (true);
   }
   const onReset =()=>{ 
    setConfirmed(false), setDeleted(false), setValue("")
   }
  
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        if (value === SECURITYCODE) {
         onConfirmed();
        } else {
        onError();
        }
      }, 3000);
    }
  }, [loading]);

  if (!deleted && !confirmed) {
    return (
      <div>
        <h2>eliminar UseState</h2>
        <p>escribe tu pin de seguridad </p>
        <div>
          {error && !loading && <p>Error: el pin es incorrecto</p>}
          {loading && <p>Cargando...</p>}

          <input
            type="password"
            placeholder="pin de seguridad"
            value={value}
            onChange={(event) => onWrite(event.target.value)}
          />
          <button
            onClick={() => {
              onCheck();
            }}
          >
            verificar{" "}
          </button>
        </div>
      </div>
    );
  } else if (!deleted && !!confirmed) {
    return (
      <React.Fragment>
        <p> seguro q quire eliminar </p>
        <button onClick={() =>onDelete()}> si , eliminar </button>
        <button
          onClick={() => {
            onReset()
            }}
        >
          {" "}
          cancelar{" "}
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>eliminado con exito </p>
        <button
          onClick={() => {
            onReset()
          }}
        >
          reset{" "}
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
