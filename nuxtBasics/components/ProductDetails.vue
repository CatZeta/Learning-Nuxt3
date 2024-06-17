<template>
    <!-- The grid layout creates two columns, with a gap of 10 pixels between them. -->
    <div class="card">
      <div class="grid grid-cols-2 gap-10">
        <!-- The first column contains the product image. -->
        <div class="p-7">
          <img :src="`${product.image}`" class="mx-auto my-7" /> <!-- The image is centered and has a margin of 7 pixels on the top and bottom. -->
        </div>
        <!-- The second column contains the product details. -->
        <div class="p-7">
          <h2 class="text-4xl my-7">{{ product.title }}</h2> <!-- The title has a font size of 4xl and a margin of 7 pixels on the top and bottom. -->
          <p class="text-xl my-7">Price - ${{ product.price }}</p> <!-- The price has a font size of xl and a margin of 7 pixels on the top and bottom. -->
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3> <!-- The heading has a font weight of bold, a bottom border, and a margin and padding on the bottom. -->
          <p class="mb-7">{{ product.description }}</p> <!-- The description has a margin on the bottom. -->
          <button class="btn flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
    img {
      max-width: 400px;
    }
  </style>