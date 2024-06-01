<script setup lang="ts">

import { getListServer } from '@/utils/serverHelper';
import { computed, onMounted } from 'vue';
import Initialization from "./components/Initialization.vue"

const serverList = getListServer();
const hasServerList = computed(() => serverList.list.length > 0)
onMounted(() => {

})
</script>

<template>
    <Initialization v-if="!hasServerList" />
    <div v-else>
        {{ serverList.list }}
    </div>
</template>

<style scoped></style>