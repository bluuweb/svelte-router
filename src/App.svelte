<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from './views/Home.svelte'
	import Login from './views/Login.svelte'
	import Perfil from './views/Perfil.svelte'
	import Navbar from './components/Navbar.svelte'
</script>

<div>
	<h1>App</h1>
	<Router>
		<Navbar />

		<Route path="/">
			<Home></Home>
		</Route>
		<Route path="/login">
			<Login></Login>
		</Route>
		<Route path="/perfil">
			<Perfil></Perfil>
		</Route>
	</Router>
</div>

<style>
	h1 {
		color: rgb(47, 103, 153);
	}
</style>