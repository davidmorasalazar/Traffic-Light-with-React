//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
//recordar que las etiquetas siempre inician en mayuscula por sintaxis
function TrafficTop() {
	return (
		<div className="container">
			<div id="Traffic" className="row"></div>
		</div>
	);
}
class TrafficCenter extends React.Component {
	constructor() {
		super();
		this.state = { ClickedLight: null };
	}
	render() {
		let redextraclass = "";
		if (this.state.ClickedLight == "red") redextraclass = "selected";
		let orangeextraclass = "";
		if (this.state.ClickedLight == "orange") orangeextraclass = "selected";
		let greenextraclass = "";
		if (this.state.ClickedLight == "green") greenextraclass = "selected";
		return (
			<div className="container1">
				<div
					className={"Traffic " + redextraclass}
					onClick={() =>
						this.setState({ ClickedLight: "red" })
					}></div>
				<div
					className={"Traffic1 " + orangeextraclass}
					onClick={() =>
						this.setState({ ClickedLight: "orange" })
					}></div>
				<div
					className={"Traffic2 " + greenextraclass}
					onClick={() =>
						this.setState({ ClickedLight: "green" })
					}></div>
			</div>
		);
	}
}
function App() {
	return (
		<div>
			<TrafficTop />
			<TrafficCenter />
		</div>
	);
}

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
