import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (!todo.text) {
			return;
		}

		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const removeTodo = (id) => {
		const removeArr = [...todos].filter((todo) => todo.id !== id);
		setTodos(removeArr);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const leftItems = todos.length === 0 || todos.length > 1 ? "items" : "item";

	return (
		<div>
			<h1>To-Do List</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
			/>
			<p className="left-items">{`There are ${todos.length} ${leftItems} To Do`}</p>
		</div>
	);
}

export default TodoList;
