import React from "react";


//create your first component
const Home = () => {
	return (
		<div>
			<div><h1 className="text-center p-5">Todo List</h1></div>
			<div className="carta container p-4">
				<div class="container input-group flex-nowrap">
					<span class="input-group-text" id="addon-wrapping">Introduce tareas</span>
					<input type="text" class="form-control" placeholder="" />
				</div>
				<div>
					<div className="p-4 container">
						<ul><h3 className="text-center">Tareas pendientes...</h3>
							<li>Salir a andar minimo una hora</li>
							<li>Estudiar 4 horas </li>
						</ul>
					</div>
					<div className="container text-end">
						<h4>2 tareas restantes </h4>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Home;
