export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const moviesUrl = 'https://api.themoviedb.org/3/movie/popular'
    const seriesUrl = 'https://api.themoviedb.org/3/tv/popular'
    

    const popularMovie = await $fetch(moviesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })

    const popularTv = await $fetch(seriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })

    return {popularMovie, popularTv}
})
