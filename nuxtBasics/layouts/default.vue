<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/">ZetaNuxt</NuxtLink>
                <ul class="flex">
                    <li><NuxtLink class="font-bold" to="/">Home</NuxtLink></li> ||
                    <li><NuxtLink to="/about">About</NuxtLink></li> ||
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <!--output content-->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
    
</template>