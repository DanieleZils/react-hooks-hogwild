import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {
	const eachHog = hogs.map((hog) =>
	<Hog key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} image={hog.image} />
	)
  

	return (
		<div className="App">
		 	<Nav />
			{eachHog}
		</div>
	);
}

export default App;
