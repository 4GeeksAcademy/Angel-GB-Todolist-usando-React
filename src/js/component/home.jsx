import React, { useState } from "react";


//create your first component
const Home = () => {

	const [imputValue, setImputValue] = useState("")
	const [todoList, setTodoList] = useState(["Salir a andar minimo una hora", "Estudiar 4 horas"])

	
	return (
		<div>
			<div><h1 className="text-center p-5">Todo List</h1></div>
			<div className=" hoja hoja3 container p-4">
				<div className="container input-group flex-nowrap p-3 ps-5">
					<span className="input-group-text" id="addon-wrapping">Introduce tareas</span>
					<input type="text" className="form-control" placeholder="Ejemplo programar 35 horas al dia" 
					onChange={(e) => {setImputValue(e.target.value);
					 }}
					value={imputValue}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							setTodoList([...todoList, imputValue])
							setImputValue("")
						} 
					}}
					/>
				</div>
				<div>
					<div className="p-5 container">
						<ul className="ps-4"><h3 className="p-3 text-center">Tareas pendientes...</h3>
							{todoList.map((item, index) => {
								return (
									<p className="p-1 ps-3">{item}</p>
								)
							})}
						</ul>
					</div>
					<div className="container text-end">
						<p>{todoList.length} tareas restantes </p>
					</div>
				</div>

			</div>
			<div className="hoja hoja2"></div>
			<div className="hoja hoja1"></div>
		</div>
	);
};

export default Home;
