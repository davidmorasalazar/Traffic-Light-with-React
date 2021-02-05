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
function TrafficCenter() {
	return (
		<div className="container1">
			<div id="Traffic" className="row"></div>
		</div>
	);
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
