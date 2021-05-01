<script>
    import {user} from '../stores/user'
    import { navigate } from "svelte-routing";
    import {onMount} from 'svelte'

    
    onMount(() => {
        if(!$user){
            navigate('/', { replace: true })
        }
    })
    
</script>

<div>
    {#if $user}
         <h1>Perfil (ruta protegida)</h1>
    {/if}
</div>