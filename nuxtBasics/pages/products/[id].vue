<template>
    <!-- Render the ProductDetails component and pass the product data as a prop -->
    <div>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
    // Get the id parameter from the current route
    const {id} = useRoute().params
    
    // Construct the URI for the product API endpoint, including the id parameter
    const uri = 'https://fakestoreapi.com/products/' + id
    
    // Fetch the product data from the API using the useFetch composable
    // The key option is used to cache the data and prevent unnecessary API calls
    const { data: product } = await useFetch(uri, { key: id })
    
    // Define the page metadata, specifying the layout to use for this page
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>