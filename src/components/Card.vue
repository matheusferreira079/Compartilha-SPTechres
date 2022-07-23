<template>
    <Box>
        <div class="columns">
            <div class="column is-2 display">
                <h4 class="title__informs">Título:</h4>
                {{ tarefa.titulo }}
            </div>
            <div class="column is-7 display">
                <h4 class="title__informs">Descrição:</h4>
                {{ tarefa.descricao }}
            </div>
            <div class="column is-3 display">
                <span class="title__informs">Link GitHub: </span>{{ tarefa.github }}
                <hr>
                <span class="title__informs">Autor: </span> Administrador              
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IPostagens from "../interfaces/IPostagens";
import Box from "./Box.vue";

export default defineComponent({
    name: 'Card',
    components: {
        Box
    },
    props: {
        tarefa: {
            type: Object as PropType<IPostagens>,
            required: true
        }
    }
})
</script>

<style>
.display {
    color: var(--texto-primario);
}

.title__informs {
    color: #D0D3D4;
    font-weight: bold;
}

hr {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>