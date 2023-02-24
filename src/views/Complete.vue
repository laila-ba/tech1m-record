<template>
  <nav class="bg-blue-800 pt-4"></nav>
  <div
    class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 border border-gray-300 my-16"
  >
    <img class="pt-24 mx-auto" src="../assets/complete.png" alt="" />
    <div>
      <h2 class="text-2xl font-semibold">Application Complete!</h2>
      <p class="px-16 leading-7 pt-3 text-sm font-medium">
        Congratulations on completeing your application, your responses would be
        recorded and if successful, the next steps would be communicated to you
      </p>
    </div>

    <div>
      <div class="mx-4 pt-8 pb-16">
        <router-link to="/question1">
          <button
            type="button"
            class="items-center rounded border border-transparent bg-blue-600 px-4 py-3 text-sm text-white shadow-sm w-full text-center"
          >
            Back to job board
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Complete",
  components: {},
};
</script>
