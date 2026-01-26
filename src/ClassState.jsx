import React from "react";
import { Loading } from "./Loading.jsx";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
      deleted: false,
      confirmed: false,
    };
  }
  // componentWillMount(){
  //     console.log("componentDidMount")
  //   }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("actualizar");
    if (this.state.loading) {
      setTimeout(() => {
        console.log("hacindo la validacion");
        if (this.state.value === "paradigma") {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ loading: false, error: true });
        }

        console.log("terminado la validacion ");
      }, 3000);
    }
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <h2>eliminar clas state</h2>
        <p>escribe tu pin de seguridad </p>
        <div>
          <input
            type="password"
            placeholder="pin de seguridad"
            value={this.state.value}
            onChange={(event) => {
              this.setState({ value: event.target.value });
            }}
          />
          {this.state.error && !this.state.loading && <p>Error: el pin es incorrecto</p>}
          {this.state.loading && <Loading />}

          <button onClick={() => this.setState({ loading: true })}>
            verificar{" "}
          </button>
        </div>
      </div>
    );
  }
}
export { ClassState };
