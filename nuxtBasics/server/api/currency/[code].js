//Dynamic Route

// The function takes an event object as a parameter, which contains the event context which includes the currency code. 
export default defineEventHandler(async (event) => {
    // This event handler fetches the latest exchange rate for a given currency code using the CurrencyAPI.
    const {code} = event.context.params
    // The currency key is obtained from the runtime config.
    const {currencyKey} = useRuntimeConfig()
    //It then constructs a URI using the currency code and the currency key, and fetches the data from the CurrencyAPI. 
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`	
    //The data is then returned as the response.
    const {data} = await $fetch(uri)

    return data
})
