<script setup>
    defineProps(['error'])
</script>
<template>
    <div class="w-full h-screen bg-gradient-to-r to-emerald-600 from-sky-400 flex flex-col justify-center items-center">
        <h1 class="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl">頁面發生錯誤 </h1>
        <div class="text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-400">{{ error.message }}</div>
    </div>
</template>

