<template>
    <div>
        <div class=" max-w-2xl mx-auto">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input v-model="searchTerm" type="text" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="輸入想搜尋的電影名稱、影集名稱" required />
        </div>
        </div>
        <section v-if="movies.length">
            <h1 class="text-5xl font-extrabold dark:text-white my-5">
                電影搜尋結果
            </h1>
            <ul class="grid grid-cols-5 gap-3">
                <li v-for="mov in movies">
                    <MovieCard
                        :title = "mov.title"
                        :id = "mov.id"
                        :overview = "mov.overview"
                        :release_date = "mov.release_date"
                        :popularity = "mov.popularity"
                        :poster_path = "mov.poster_path"
                        :item = "mov"/>
                </li>
                <br/><br/>
            </ul>
        </section>
        <section v-if="series.length">
            <h1 class="text-5xl font-extrabold dark:text-white mb-5">
                影集搜尋結果
            </h1>
            <ul class="grid grid-cols-5 gap-3">
                <li v-for="ser in series">
                    <SeriesCard
                        :name = "ser.name"
                        :overview = "ser.overview"
                        :first_air_date = "ser.first_air_date"
                        :popularity = "ser.popularity"
                        :poster_path = "ser.poster_path"
                        :item = "ser"
                        />
                </li>
                <br/><br/>
            </ul>
        </section>

    </div>
</template>

<script setup>
   const searchTerm = useState('searchTerm', () => '')
   const movies = useState(()=> [])
   const series = useState(()=> [])

   const {data} = await useFetch('/api/movies/search', {
        query: {
            searchTerm
        },
        immediate: false,
        transform: (data) => {
            movies.value = data.movies.results
            series.value = data.series.results
        }
   })

</script>

<style lang="scss" scoped>

</style>