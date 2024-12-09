import React from "react";
import Logo from "./Logo";
import "../../css/NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
	// console.log("path of ->" + logo);
	return (
		<nav style={{ zIndex: "99" }}>
			<Logo heightInPixel={47} style={{ cursor: "pointer" }} to="/" />

			<div className="Link-Container">
				<NavLink to="/bubblesort">Bubble Sort</NavLink>

				<NavLink to="/quicksort">Quick Sort</NavLink>
				<NavLink to="/selectionsort">Selection Sort</NavLink>
                <NavLink to ="/mergesort">Merge Sort</NavLink>
				<NavLink to="/singlylinklist">Singly Linked List</NavLink>
                
				<NavLink to="/dfs">DFS</NavLink>

				<Link to="/dijkstra">Dijkstra Algo</Link>
				<Link to="/sudoku">Sudoku Solver</Link>
			</div>
		</nav>
	);
}

export default NavBar;
