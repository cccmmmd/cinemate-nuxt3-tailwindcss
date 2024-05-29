<template>
    <div>
        <MovieCard v-if="item.release_date"
            :title = "item.title"
            :id = "item.id"
            :overview = "item.overview"
            :release_date = "item.release_date"
            :popularity = "item.popularity"
            :poster_path = "item.poster_path"
            :item = "item"/>
    </div>
</template>

<script setup>
    const itemState = useState('chosenItem', () => {})
    const item = itemState.value
</script>

<style lang="scss" scoped>

</style>