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
        <router-link to="/practice">
          <button
            type="button"
            class="inline-flex items-center rounded border border-transparent bg-blue-600 px-4 py-3 text-sm text-white shadow-sm"
          >
            Record Response
          </button>
        </router-link>
      </div>
      <div class="mr-4 flex-shrink-0">
        <div class="flex space-x-10">
          <div class="flex items-center">
            Macbook Pro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              fill="none"
            >
              <path
                stroke="#7B8794"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1.045 5 5 5-5"
              />
            </svg>
          </div>
          <div class="flex items-center">
            Facetime HD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              fill="none"
            >
              <path
                stroke="#7B8794"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1.045 5 5 5-5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "practiceTech",
};
</script>
