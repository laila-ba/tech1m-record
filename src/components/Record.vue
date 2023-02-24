<template>
  <div
    class="text-left items-center flex border border-gray-300 rounded-md py-3 px-2 w-48"
  >
    <div class="pr-4 flex items-center space-x-2 border-r border-gray-300">
      <button @click="timer.start()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="17"
          fill="none"
        >
          <path
            fill="#EF4444"
            d="M8.962.42c-1.53 0-2.73 0-3.682.103-.97.105-1.758.324-2.43.812a4.792 4.792 0 0 0-1.06 1.06c-.488.672-.707 1.459-.812 2.43-.103.952-.103 2.152-.103 3.682v.076c0 1.53 0 2.73.103 3.681.105.972.324 1.759.812 2.43.296.407.653.765 1.06 1.06.672.489 1.46.708 2.43.813.952.103 2.152.103 3.682.103h.076c1.53 0 2.73 0 3.682-.103.97-.105 1.758-.324 2.43-.812a4.794 4.794 0 0 0 1.06-1.06c.488-.672.707-1.46.812-2.43.103-.952.103-2.152.103-3.682v-.076c0-1.53 0-2.73-.103-3.682-.105-.971-.324-1.758-.812-2.43a4.793 4.793 0 0 0-1.06-1.06c-.672-.488-1.46-.707-2.43-.812C11.768.42 10.568.42 9.038.42h-.076Z"
          />
        </svg>
      </button>
      <div>
        <span>{{ timer.minutes }}</span
        >:<span>{{ timer.seconds }}</span>
      </div>
    </div>
    <div class="px-4 flex items-center space-x-2 border-r border-gray-300">
      <button @click="restartOne()">
        <svg
          class="mt-1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          fill="none"
        >
          <path
            fill="#6B7280"
            fill-rule="evenodd"
            d="M5.707.838a1 1 0 0 1 0 1.414L3.414 4.545H9a7 7 0 0 1 7 7v2a1 1 0 1 1-2 0v-2a5 5 0 0 0-5-5H3.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="pl-4 flex items-center">
      <button @click="timer.pause()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          fill="none"
        >
          <path
            stroke="#6B7280"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5 3.879h3.333v13.333H5V3.88ZM11.667 3.879H15v13.333h-3.333V3.88Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- <button @click="timer.resume()">Resume</button> -->
  </div>
</template>

<script setup>
import { watchEffect, onMounted } from "vue";
import { useTimer } from "vue-timer-hook";

const time = new Date();
time.setSeconds(time.getSeconds() + 60); // 1min timer
const timer = useTimer(time);
const restartOne = () => {
  // Restarts to 1 minute timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  timer.restart(time);
};
onMounted(() => {
  watchEffect(async () => {
    if (timer.isExpired.value) {
      console.warn("IsExpired");
    }
  });
});
</script>
