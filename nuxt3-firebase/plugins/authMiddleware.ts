//https://nuxt.com/docs/guide/directory-structure/middleware
export default defineNuxtPlugin(() => {
  /* addRouteMiddleware('global-test', () => {
      console.log('this global middleware was added in a plugin and will be run on every route change')
    }, { global: true }) */

  addRouteMiddleware("auth", () => {
    const { $auth } = useNuxtApp();
    console.log("$auth", $auth);

    //Auth route guards
    //TODO fix ts error
    if (!$auth?.currentUser?.uid) {
      return abortNavigation();
    }
  });
});
