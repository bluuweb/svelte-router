<script>
    import {user} from '../stores/user'
    import { navigate } from "svelte-routing";
    import {auth, provider} from '../firebase'

    const procesarFormulario = async() => {
        
        try {
            const res = await auth.signInWithPopup(provider)
            user.setUser(res.user)
            console.log(res.user)
            navigate('/perfil', { replace: true })
        } catch (error) {
            console.log(error)
        }

    }
</script>

<div>
    <h1>Login</h1>
    <form on:submit|preventDefault={procesarFormulario}>
        <button type="submit">Acceder</button>
    </form>
</div>
