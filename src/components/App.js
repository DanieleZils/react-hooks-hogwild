import React from "react";
import Nav from "./Nav";
import Hog from "./Hog"
import hogs from "../porkers_data";

function App() {
	const eachHog = hogs.map((hog) => {
	return (

			<Hog key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} image={hog.image} />

	)
})
	return (
		<div className="App ">
			<Nav />
			<div className="ui grid container">
				{eachHog}
			</div>
		</div>
	);
}

export default App;
