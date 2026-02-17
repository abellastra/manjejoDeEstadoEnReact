import React, { useEffect, useReducer } from "react";

type StateType = {
  value: string;
  loading: boolean;
  error: boolean;
  deleted: boolean;
  confirmed: boolean;
};

type Action =
  | { type: "ERROR" }
  | { type: "CONFIRMED" }
  | { type: "CHECK" }
  | { type: "WRITE"; payload?: string }
  | { type: "DELETE" }
  | { type: "RESET" };

const inicializeState: StateType = {
  value: "",
  loading: false,
  error: false,
  deleted: false,
  confirmed: false,
};
const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "ERROR":
      return { ...state, error: true, loading: false };
    case "CONFIRMED":
      return {
        ...state,
        loading: false,
        confirmed: true,
        error: false,
      };
    case "CHECK":
      return {
        ...state,
        loading: true,
      };
    case "WRITE":
      return {
        ...state,
        value: action.payload || "",
      };
    case "DELETE":
      return { ...state, deleted: true };
    case "RESET":
      return {
        ...state,
        confirmed: false,
        deleted: false,
        value: "",
        error: false,
        loading: false,
      };
    default:
      return state;
  }
  // const next = reducerObjet(state, action)[action.type];
  // return next ? next : state;
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, inicializeState);

  const SECURITYCODE = "paradigma";

  const onConfirmed = () => {
    dispatch({ type: "CONFIRMED" });
  };
  const onError = () => {
           dispatch({ type: "ERROR" });

  };
  const onWrite = (newValue: string) => {
              dispatch({ type: "WRITE", payload: newValue });
  };
  const onCheck = () => {
    dispatch({ type: "CHECK" });
  };
  const onDelete = () => {
dispatch({ type: "DELETE" })
  };
  const onReset = () => {
dispatch({ type: "RESET" })  };

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITYCODE) {
          onConfirmed();
        } else {
          onError();
        }
      }, 3000);
    }
  }, [state.loading, state.value]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar con useReducer</h2>
        <p>Escribe tu pin de seguridad</p>
        <div>
          {state.error && !state.loading && <p>Error: el pin es incorrecto</p>}
          {state.loading && <p>Cargando...</p>}

          <input
            type="text"
            placeholder="pin de seguridad"
            value={state.value}
            onChange={(event) => onWrite(event.target.value)}
          />
          <button onClick={() => onCheck()}>Verificar</button>
        </div>
      </div>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <>
        <p>¿Seguro que quieres eliminar?</p>
        <button onClick={() => onDelete()}>Sí, eliminar</button>
        <button onClick={() => onReset()}>Cancelar</button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </>
    );
  }
}

export { UseReducer };
