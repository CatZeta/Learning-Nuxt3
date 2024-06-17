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

    // Use the `useHead` composable to set the title and meta description of the page.
    // The `useHead` composable takes an object with two properties: `title` and `meta`.
    // The `title` property sets the title of the page, and the `meta` property is an array of objects,
    // each representing a meta tag. In this case, we set the title to 'Nuxt Demo | Merch' and the meta
    // description to 'Nuxt 3 Merch'.
    useHead({
        title: 'Nuxt Demo | Merch',
        meta: [
            {
                name: 'description', // The name attribute of the meta tag
                content: 'Nuxt 3 Merch' // The content attribute of the meta tag
            }
        ]
    })
</script>

<style scoped></style>