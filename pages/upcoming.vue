<template>
    <div>
        <section>
            <h1 class="text-5xl font-extrabold dark:text-white mb-5">
                Upcoming Movies
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
    </div>
</template>

<script setup>
    const movies = useState(()=> [])
    const {data} = await useFetch('/api/movies/upcoming',{
    transform: data =>{
        movies.value = data.upcomingMovies.results
    }
   })
</script>

<style lang="scss" scoped>

</style>