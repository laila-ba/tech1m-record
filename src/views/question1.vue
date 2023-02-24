<template>
  <nav class="bg-blue-800 pt-4"></nav>
  <div
    class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 border border-gray-300 my-5"
  >
    <div class="pt-12 px-6 text-left text-gray-600">
      <p>Question 1/2</p>
      <h2 class="font-semibold text-2xl pb-8 pt-3">
        Introduce Yourself to the Hiring Team
      </h2>
      <p class="text-lg">
        Recording this video would allow the hiring team get to know you better
      </p>
      <div class="text-lg py-4 space-y-4">
        <p>• Remember this is an introductory video, therefore be friendly</p>
        <p>• Smile and remember the limit is 1 minute</p>
      </div>
    </div>
    <div>
      <img class="pb-8" src="../assets/video.jpg" alt="" />
    </div>
    <div
      class="flex flex-wrap items-center justify-between sm:flex-nowrap mb-4"
    >
      <div class="ml-4">
        <Record></Record>
      </div>
      <div class="ml-4 flex-shrink-0">
        <router-link to="/complete">
          <button
            type="button"
            class="inline-flex items-center rounded border border-transparent bg-blue-600 px-4 py-3 text-sm text-white shadow-sm"
          >
            Next Question
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Record from "../components/Record.vue";

export default {
  name: "practiceQuestion",
  components: { Record },
};
</script>
