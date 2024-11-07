import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, } from "@fortawesome/free-solid-svg-icons";
//create your first component
const Home = () => {

	const [imputValue, setImputValue] = useState("")
	const [todoList, setTodoList] = useState(["Salir a andar minimo una hora", "Estudiar 4 horas"])


	return (
		<div>
			<div className="cabecero"><h1 className="text-center p-5">Todo List</h1></div>
			<div className=" hoja hoja3 p-4">
				<div className="container input-group flex-nowrap p-3 ps-5">
					<span className="input-group-text" id="addon-wrapping">Introduce tareas</span>
					<input type="text" className="form-control" placeholder="Ejemplo programar 35 horas al dia"
						onChange={(e) => {
							setImputValue(e.target.value);
						}}
						value={imputValue}
						onKeyUp={(e) => {
							if (e.key === "Enter" && imputValue !== "") {
								setTodoList([...todoList, imputValue])
								setImputValue("")
							}
						}}
					/>
				</div>
				<div>
					<div className="ps-3 container">
						<ul><h3 className="p-3 text-center">Tareas pendientes...</h3>
							{
								todoList.length === 0 ? (
									<p className="text-center">¡No quedan tareas pendientes! <img src="https://media.tenor.com/12vvBX1HaPUAAAAi/dance.gif" alt="" /> </p>
								) :
									todoList.map((item, index) => {
										return (
												<h5 key={index} className="tareapendiente">
												<input class="form-check-input" type="checkbox" />
												- {item}
												<FontAwesomeIcon onClick={() => {
													setTodoList(todoList.filter((e, i) => i !== index))
												}}
													className="eliminar float-end"
													icon={faTrash} />
											</h5>	
										)
									})}
						</ul>
					</div>
					<div className="container text-end">
						<p>{todoList.length} tareas restantes </p>
					</div>
				</div>

			</div>
			<div className="hoja hoja2 p-4">
				<div className="container input-group flex-nowrap p-3 ps-5">
					<span className="input-group-text" id="addon-wrapping">Introduce tareas</span>
					<input type="text" className="form-control" placeholder="Ejemplo programar 35 horas al dia" />
				</div>
				<div>
					<div className="ps-3 container">
						<ul><h3 className="p-3 text-center">Tareas pendientes...</h3>
							{
								todoList.length === 0 ? (
									<p className="text-center">¡No quedan tareas pendientes! <img src="https://media.tenor.com/12vvBX1HaPUAAAAi/dance.gif" alt="" /> </p>
								) :
									todoList.map((item, index) => {
										return (
											<h5 key={index}><FontAwesomeIcon
												icon={faTrash} /> - {item}  </h5>
										)
									})}h5
						</ul>
					</div>
					<div className="container text-end">
						<p>tareas restantes </p>
					</div>
				</div>
			</div>
			<div className="hoja hoja1 p-4">
				<div className="container input-group flex-nowrap p-3 ps-5">
					<span className="input-group-text" id="addon-wrapping">Introduce tareas</span>
					<input type="text" className="form-control" placeholder="Ejemplo programar 35 horas al dia" />
				</div>
				<div>
					<div className="ps-3 container">
						<ul><h3 className="p-3 text-center">Tareas pendientes...</h3>
							{
								todoList.length === 0 ? (
									<p className="text-center">¡No quedan tareas pendientes! <img src="https://media.tenor.com/12vvBX1HaPUAAAAi/dance.gif" alt="" /> </p>
								) :
									todoList.map((item, index) => {
										return (
											<h5 key={index}><FontAwesomeIcon
												icon={faTrash} /> - {item}  </h5>
										)
									})}
						</ul>
					</div>
					<div className="container text-end">
						<p>tareas restantes </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
