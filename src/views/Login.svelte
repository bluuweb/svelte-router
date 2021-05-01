<script>
    import {user} from '../stores/user'
    import { navigate } from "svelte-routing";

    let email = '', password = '';

    const procesarFormulario = () => {
        
        if(!email.trim() || !password.trim()){
            console.log('campos vacios')
            return
        }

        user.setUser({
            displayName: email,
            uid: Date.now()
        })

        email = ''
        password = ''

        navigate('/perfil', { replace: true })
    }
</script>

<div>
    <h1>Login</h1>
    <form on:submit|preventDefault={procesarFormulario}>
        <input 
            type="text"
            placeholder="Email"
            bind:value={email}
        >
        <input 
            type="text"
            placeholder="Password"
            bind:value={password}
        >
        <button type="submit">Acceder</button>
    </form>
</div>
