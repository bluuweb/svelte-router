<script>
    import {  Link, navigate } from "svelte-routing";
    import {user} from '../stores/user'
    import {auth} from '../firebase'

    const cerrarSesion = () => {
        auth.signOut()
        user.setUser(null)
        navigate('/', { replace: true })
    }
</script>

<nav>
    {#if $user}
        <Link to="/perfil">Perfil</Link>
        <button on:click={cerrarSesion}>Cerrar Sesión</button>
    {:else}
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    {/if}
</nav>