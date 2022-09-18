<template>
    <footer id="footer">
        <div class="container">
            <div class="jsx"></div>
            <p>Mejor con Salud Revista sobre buenos hábitos y cuidados para tu salud © 2012 – 2022 . Todos los derechos reservados.</p>
            <div class="jsx"></div>
        </div>
    </footer>
</template>

<script>
    export default{
        name: 'Baseboard'
    }
</script>

<style scoped>
    #footer{
        height: 100px;
        background: #265e6c;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-direction: column;
    }
    .jsx{
        border: 0;
        background: repeating-linear-gradient( -45deg, transparent 0px, transparent 2px, #419fb9 2px, #419fb9 4px );
        height: 8px;
        width: 100%;
    }
    p{
        padding: 20px 0; 
    }
</style>