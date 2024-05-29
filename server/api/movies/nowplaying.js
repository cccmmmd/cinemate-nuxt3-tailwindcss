export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const nowPlayUrl = 'https://api.themoviedb.org/3/movie/now_playing'
    

    const nowplaying = await $fetch(nowPlayUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        }
    })
    console.log(nowplaying)
    return {nowplaying}
})
