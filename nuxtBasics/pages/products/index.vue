<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
/**
+     * Define the page meta data for this page.
+     * The `layout` property specifies the layout to use for this page.
+     * In this case, we are using the `products` layout.
+     */
    definePageMeta({
        layout: 'products'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped></style>