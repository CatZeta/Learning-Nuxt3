export default defineNuxtRouteMiddleware(() => {
    const { $auth } = useNuxtApp();
    if (!$auth?.currentUser?.uid) {
        return navigateTo("/");
    }
})