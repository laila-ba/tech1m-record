<template>
  <nav class="bg-blue-800 pt-4"></nav>
  <div
    class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 border border-gray-300 my-5"
  >
    <div class="pt-12 px-6 text-left text-gray-600">
      <h2 class="font-semibold text-2xl pb-8">Practice Question</h2>
      <p class="text-lg">
        Tell us about yourself and your previous experiences up until now
      </p>
      <div class="text-lg py-4 space-y-4">
        <p>
          • This is a
          <span class="font-bold text-blue-600">Practice question </span>to show
          you how the interview would work
        </p>
        <p>
          • Click <span class="font-bold">Record Response</span> to test. It
          won’t be added to your submission
        </p>
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
        <router-link to="/start">
          <button
            type="button"
            class="inline-flex items-center rounded border border-transparent bg-blue-600 px-4 py-3 text-sm text-white shadow-sm"
          >
            Start Interview
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
