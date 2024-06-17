export default defineEventHandler(async (event) => {

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_JzNLGT1SRkclXIQmV0BKMFWxE8FKy3SdaYuKTAu3')

    return data

})