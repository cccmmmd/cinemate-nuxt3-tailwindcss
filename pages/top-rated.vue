<template>
    <div>
        <section>
            <h1 class="text-5xl font-extrabold dark:text-white mb-5">
                歷年最高好評電影
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
        <section>
            <h1 class="text-5xl font-extrabold dark:text-white mb-5">
                歷年最高好評影集
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
    const movies = useState(()=> [])
    const series = useState(()=> [])

    const {data} = await useFetch('/api/movies/toprated',{
        transform: data =>{
            movies.value = data.topRatedMovies.results
            series.value = data.topRatedSeries.results
        }
   })
</script>

<style lang="scss" scoped>
    
</style>