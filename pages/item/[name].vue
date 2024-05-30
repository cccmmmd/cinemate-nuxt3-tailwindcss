<template>
    <div v-if="item.release_date">
        <div class="w-full flex flex-row bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-center">
                <img :src="`${imageSiteUrl}${item.poster_path}`" alt="Movie Image" />
            </div>
            <div class="p-5">
                <span href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}</h5>
                </span>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Release date: {{ item.release_date }}</p>
                <p v-if="item.overview" class="inline-flex items-center py-2 text-sm font-medium text-black bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  
                    {{ item.overview }} 
                </p>
                <p v-else class="inline-flex items-center py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  
                    沒有 overview 
                </p>
            </div>
        </div>
    </div>
    <div v-else-if="item.first_air_date">
        <div class="w-full flex flex-row bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-center">
                <img :src="`${imageSiteUrl}${item.poster_path}`" alt="Movie Image" />
            </div>
            <div class="p-5">
                <span href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
                </span>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Release date: {{ item.first_air_date }}</p>
                <p v-if="item.overview" class="inline-flex items-center py-2 text-sm font-medium text-black bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  
                    {{ item.overview }} 
                </p>
                <p v-else class="inline-flex items-center py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  
                    沒有 overview 
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const imageSiteUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face/'
    const itemState = useState('chosenItem', () => {})
    const item = itemState.value
</script>

<style lang="scss" scoped>

</style>