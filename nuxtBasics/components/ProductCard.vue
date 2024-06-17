<template>
    <div class="card text-center">
        <img :src="`${product.image}`" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <!-- NuxtLink is a component that enables navigation between different pages; 
             The :to property is used to specify the target route. In this case, it is set to the product's id;
             The NuxtLink component generates a link that, when clicked, will navigate to the product's details page. 
             The v-slot syntax is used to define a named slot inside the component. The slot is filled with the content 
             of the NuxtLink component. -->
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>
