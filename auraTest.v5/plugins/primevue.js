
import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import Card from 'primevue/card';


 const MyPreset = definePreset(Aura, {

    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    },
     // components: {
     //    button: {
     //        colorScheme: {
     //            light: {
     //                root: {
     //                    border: '3px solid red',
     //
     //                },
     //            },
     //            dark: {
     //                root: {
     //                    border: '3px solid red',
     //                },
     //
     //            }
     //        }
     //    }
     // }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {

    theme: {
        preset: MyPreset
    }});

})
