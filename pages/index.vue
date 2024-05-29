<template>
    <div>
        <section>
            <h1 class="text-5xl font-extrabold dark:text-white mb-5">
                Featured Movies
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
                Featured TV Series
            </h1>
            <ul class="grid grid-cols-5 gap-3">
                <li v-for="ser in series">
                    <SeriesCard
                        :name = "ser.name"
                        :overview = "ser.overview"
                        :first-air-date = "ser.first-air-date"
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

   const {data} = await useFetch('/api/movies/discover',{
    transform: data =>{
        movies.value = data.movies.results
        series.value = data.series.results
    }
   })
</script>

