<script>
	import { Router, Route } from "svelte-routing";
	import Home from './views/Home.svelte'
	import Login from './views/Login.svelte'
	import Perfil from './views/Perfil.svelte'
	import Navbar from './components/Navbar.svelte'

	import {onMount} from 'svelte'
	import {user} from './stores/user'

	onMount(async() => {
		await user.current()
        console.log('app', $user)
	})
</script>

{#if $user === false}
	<h1>Cargando...</h1>
{:else}
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
{/if}

<style>
	h1 {
		color: rgb(47, 103, 153);
	}
</style>