<script setup lang="ts">

</script>

<template>
    <RouterView></RouterView>

</template>

<style>
body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
}

#app {
    height: 100vh;
}

.form-col div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.pixel-400 {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.pixel-500 {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}

.pixel-600 {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
}

.pixel-700 {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
}
</style>