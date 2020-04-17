<template>
    <div class="home-component">
        <WelcomeComponent/>
        <DeleteButtonComponent/>
    </div>
</template>

<script>
    import WelcomeComponent from './WelcomeComponent';
    import DeleteButtonComponent from './DeleteButtonComponent';

    export default {
        name: "HomeComponent",
        components: {
            WelcomeComponent,
            DeleteButtonComponent
        }
    }
</script>

<style scoped>

</style>