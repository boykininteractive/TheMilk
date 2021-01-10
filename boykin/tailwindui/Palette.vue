<template>
  <div class="w-full px-2 mx-auto mt-4">
    <!--- ----------- --->
    <!--- BASE COLORS --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Base Colors</h3>
    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Brand</h3>
    <div class="flex justify-start">
      <div
        class="w-1/5 h-16 mr-2 swatch text-gray-50 sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in brand"
        :class="['bg-' + color + '-400']"
      >
        {{ color }}
      </div>
    </div>
    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Status</h3>
    <div class="flex justify-start">
      <div
        class="w-1/5 h-16 mr-2 swatch text-gray-50 sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in status"
        :class="['bg-' + color + '-400']"
      >
        {{ color }}
      </div>
    </div>
    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Neutral</h3>
    <div class="flex justify-start">
      <div
        class="w-1/5 h-16 mb-24 mr-2 swatch text-gray-50 sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in neutral"
        :class="['bg-' + color + '-400']"
      >
        {{ color }}
      </div>
    </div>
    <!--- BREAK DOWN OF WORK HORSE COLORS --->
    <!--- PRIMARY --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Primary</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-primary-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- SECONDARY --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Secondary</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-secondary-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- TERTIARY --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Tertiary</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-tertiary-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- INFO --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Info</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-info-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- SUCCESS --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Success</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-success-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- WARNING --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Warning</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-warning-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- DANGER --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Danger</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-danger-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- NEUTRAL COOL --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Neutral Cool</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-cool-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- NEUTRAL --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Neutral</h3>
    <div>
      <div
        class="w-1/6 h-16 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-neutral-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- DEFAULT TAILWIND DEFINITION --->
    <!--- TAILWIND GRAY --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Tailwind Gray</h3>
    <div>
      <div
        class="w-1/6 h-16 mb-24 swatch sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-gray-50': color >= '400',
          ['bg-gray-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>

    <!--- FULL COLOR PALETTE --->
    <!--- PRIMARY --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Full Color Palette</h3>
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-primary-' + color]"
      ></div>
    </div>
    <!--- SECONDARY --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-secondary-' + color]"
      ></div>
    </div>
    <!--- TERTIARY --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-tertiary-' + color]"
      ></div>
    </div>
    <!--- INFO --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-info-' + color]"
      ></div>
    </div>
    <!--- SUCCESS --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-success-' + color]"
      ></div>
    </div>
    <!--- WARNING --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-warning-' + color]"
      ></div>
    </div>
    <!--- DANGER --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-danger-' + color]"
      ></div>
    </div>
    <!--- NEUTRAL COOL --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-cool-' + color]"
      ></div>
    </div>
    <!--- NEUTRAL --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-neutral-' + color]"
      ></div>
    </div>
    <!--- TAILWIND GRAY --->
    <div>
      <div
        class="w-1/12 swatch h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-gray-' + color]"
      ></div>
    </div>
    <!--- ----------- --->
    <!--- FINAL PALETTE --->
    <h3 class="mt-8 mb-4 text-2xl markdown no-toc">Site Pallete</h3>

    <!--- BRAND --->
    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Brand</h3>
    <div class="flex">
      <div
        class="flex flex-wrap items-end w-64 h-64 mr-2 text-white"
        v-for="color in brand"
        :class="['bg-' + color + '-400']"
      >
        <div class="w-full p-4 text-center">
          {{ color }}
        </div>
        <div class="w-1/4 h-16 p-0 lg:p-4" :class="['bg-' + color + '-800']">
          <span class="hidden lg:block">800</span>
        </div>
        <div class="w-1/4 h-16 p-0 lg:p-4" :class="['bg-' + color + '-600']">
          <span class="hidden lg:block">600</span>
        </div>
        <div
          class="w-1/4 h-16 p-0 lg:p-4 text-cool-gray-900"
          :class="['bg-' + color + '-200']"
        >
          <span class="hidden lg:block">200</span>
        </div>
        <div
          class="w-1/4 h-16 p-0 lg:p-4 text-cool-gray-900"
          :class="['bg-' + color + '-50']"
        >
          <span class="hidden lg:block">050</span>
        </div>
      </div>
    </div>

    <!--- STATUS --->
    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Status</h3>
    <div class="flex">
      <div
        class="flex flex-wrap items-end w-64 h-64 mr-2 text-white"
        v-for="color in status"
        :class="['bg-' + color + '-400']"
      >
        <div class="w-full p-4 text-center">
          {{ color }}
        </div>
        <div class="w-1/4 h-16 p-0 lg:p-4" :class="['bg-' + color + '-800']">
          <span class="hidden lg:block">800</span>
        </div>
        <div class="w-1/4 h-16 p-0 lg:p-4" :class="['bg-' + color + '-600']">
          <span class="hidden lg:block">600</span>
        </div>
        <div
          class="w-1/4 h-16 p-0 lg:p-4 text-cool-gray-900"
          :class="['bg-' + color + '-200']"
        >
          <span class="hidden lg:block">200</span>
        </div>
        <div
          class="w-1/4 h-16 p-0 lg:p-4 text-cool-gray-900"
          :class="['bg-' + color + '-50']"
        >
          <span class="hidden lg:block">050</span>
        </div>
      </div>
    </div>

    <!--- NEUTRAL --->
    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Neutral</h3>
    <div class="flex">
      <div
        class="flex flex-wrap items-end w-64 h-64 mr-2 text-white"
        v-for="color in neutral"
        :class="['bg-' + color + '-400']"
      >
        <div class="w-full p-4 text-center">
          {{ color }}
        </div>
        <div class="w-1/4 h-16 p-0 lg:p-4" :class="['bg-' + color + '-800']">
          <span class="hidden lg:block">800</span>
        </div>
        <div class="w-1/4 h-16 p-0 lg:p-4" :class="['bg-' + color + '-600']">
          <span class="hidden lg:block">600</span>
        </div>
        <div
          class="w-1/4 h-16 p-0 lg:p-4 text-cool-gray-900"
          :class="['bg-' + color + '-200']"
        >
          <span class="hidden lg:block">200</span>
        </div>
        <div
          class="w-1/4 h-16 p-0 lg:p-4 text-cool-gray-900"
          :class="['bg-' + color + '-50']"
        >
          <span class="hidden lg:block">050</span>
        </div>
      </div>
    </div>
    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Paper Whites</h3>
    <div class="flex justify-start">
      <div
        class="w-1/5 h-16 mr-2 text-gray-900 border border-gray-200 swatch sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in base"
        :class="['bg-' + color + '-25']"
      >
        <span class="hidden lg:block">{{ color }}</span>
      </div>
    </div>

    <h3 class="mt-8 mb-4 text-xl markdown no-toc">Component Examples</h3>
    <!--- INFO --->
    <div class="p-4 my-4 border-l-4 bg-info-25 border-info-400">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="w-5 h-5 text-info-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium leading-5 text-info-800">
            Info - Attention needed
          </h3>
          <div class="mt-2 text-sm leading-5 text-info-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--- SUCCESS --->
    <div class="p-4 my-4 border-l-4 bg-success-25 border-success-400">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="w-5 h-5 text-success-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium leading-5 text-success-800">
            Success - Attention needed
          </h3>
          <div class="mt-2 text-sm leading-5 text-success-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--- WARNING --->
    <div class="p-4 my-4 border-l-4 bg-warning-25 border-warning-400">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="w-5 h-5 text-warning-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium leading-5 text-warning-800">
            Warning - Attention needed
          </h3>
          <div class="mt-2 text-sm leading-5 text-warning-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--- DANGER --->
    <div class="p-4 my-4 border-l-4 bg-danger-25 border-danger-400">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="w-5 h-5 text-danger-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium leading-5 text-danger-800">
            Danger - Attention needed
          </h3>
          <div class="mt-2 text-sm leading-5 text-danger-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--- BUTTONS --->
    <h4 class="mt-8 mb-4 text-xl markdown no-toc">Buttons</h4>
    <!--- PRIMARY --->
    <!--- 400 CORE --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-primary-800 hover:bg-primary-900 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-md x-3 lg:block bg-primary-700 hover:bg-primary-800 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-primary-600 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-primary-500 hover:bg-primary-600 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-400 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-primary-600 hover:text-primary-500 border-primary-400 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md sm:block text-primary-600 bg-primary-25 hover:text-primary-500 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div>
    <!--- secondary --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-secondary-800 hover:bg-secondary-900 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-md x-3 lg:block bg-secondary-700 hover:bg-secondary-800 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-secondary-600 hover:bg-secondary-700 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-secondary-500 hover:bg-secondary-600 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-secondary-400 hover:bg-secondary-500 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-secondary-600 hover:text-secondary-500 border-secondary-400 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md sm:block text-secondary-600 bg-secondary-25 hover:text-secondary-500 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div>
    <!--- tertiary --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-tertiary-800 hover:bg-tertiary-900 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-md x-3 lg:block bg-tertiary-700 hover:bg-tertiary-800 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-tertiary-600 hover:bg-tertiary-700 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-tertiary-500 hover:bg-tertiary-600 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-tertiary-400 hover:bg-tertiary-500 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700">
        Button text
      </button>
    </span>
        <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-tertiary-600 hover:text-tertiary-500 border-tertiary-400 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md sm:block text-tertiary-600 bg-tertiary-25 hover:text-tertiary-500 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div>
    <!--- info --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-info-900 hover:bg-info-900 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-md x-3 lg:block bg-info-800 hover:bg-info-800 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-info-700 hover:bg-info-700 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-info-600 hover:bg-info-600 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-info-500 hover:bg-info-500 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700">
        Button text
      </button>
    </span>
        <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-info-600 hover:text-info-500 border-info-400 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md sm:block text-info-600 bg-info-25 hover:text-info-500 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div> 
    <!--- success --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-success-800 hover:bg-success-900 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-md x-3 lg:block bg-success-700 hover:bg-success-800 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-success-600 hover:bg-success-700 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-success-500 hover:bg-success-600 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-success-400 hover:bg-success-500 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700">
        Button text
      </button>
    </span>
        <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-success-600 hover:text-success-500 border-success-400 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md sm:block text-success-600 bg-success-25 hover:text-success-500 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div>     
     <!--- warning --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-warning-800 hover:bg-warning-900 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-md x-3 lg:block bg-warning-700 hover:bg-warning-800 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-warning-600 hover:bg-warning-700 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-warning-500 hover:bg-warning-600 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-warning-400 hover:bg-warning-500 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700">
        Button text
      </button>
    </span>
        <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-warning-600 hover:text-warning-500 border-warning-400 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md sm:block text-warning-600 bg-warning-25 hover:text-warning-500 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div>   
    <!--- danger --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-danger-800 hover:bg-danger-900 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-md x-3 lg:block bg-danger-700 hover:bg-danger-800 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-danger-600 hover:bg-danger-700 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md md:block bg-danger-500 hover:bg-danger-600 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-danger-400 hover:bg-danger-500 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700">
        Button text
      </button>
    </span>
        <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-danger-600 hover:text-danger-500 border-danger-400 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md sm:block text-danger-600 bg-danger-25 hover:text-danger-500 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div>    
    <!--- gray --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md x-3 lg:block hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md md:block hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center hidden px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-500 border border-transparent rounded-md md:block hover:bg-gray-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700">
        Button text
      </button>
    </span>
        <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-transparent border-gray-400 rounded-md hover:text-gray-600 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    <span class="inline-flex ml-3 rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center hidden px-5 py-3 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out border border-transparent rounded-md sm:block bg-gray-25 hover:text-gray-600 focus:outline-none focus:shadow-outline">
        Button text
      </button>
    </span>
    </div>      
 

    <h4 class="mt-8 mb-4 text-xl markdown no-toc">CTA Sections</h4>  
    <!--
      primary
    -->
    <div class="my-10 bg-primary-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-primary-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-primary-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-400 hover:bg-primary-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-primary-600 hover:text-primary-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--
      secondary
    -->
    <div class="my-10 bg-secondary-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-secondary-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-secondary-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-secondary-400 hover:bg-secondary-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-secondary-600 hover:text-secondary-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      tertiary
    -->
    <div class="my-10 bg-tertiary-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-tertiary-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-tertiary-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-tertiary-400 hover:bg-tertiary-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-tertiary-600 hover:text-tertiary-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      info
    -->
    <div class="my-10 bg-info-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-info-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-info-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-info-400 hover:bg-info-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-info-600 hover:text-info-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      success
    -->
    <div class="my-10 bg-success-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-success-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-success-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-success-400 hover:bg-success-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-success-600 hover:text-success-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      warning
    -->
    <div class="my-10 bg-warning-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-warning-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-warning-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-warning-400 hover:bg-warning-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-warning-600 hover:text-warning-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      danger
    -->
    <div class="my-10 bg-danger-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-danger-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-danger-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-danger-400 hover:bg-danger-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-danger-600 hover:text-danger-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      neutral
    -->
    <div class="my-10 bg-neutral-50">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-neutral-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-neutral-600">Start your free trial today.</span>
        </h2>
        <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-neutral-400 hover:bg-neutral-500 focus:outline-none focus:shadow-outline">
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-neutral-600 hover:text-neutral-500 focus:outline-none focus:shadow-outline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      brand: ["primary", "secondary", "tertiary"],
      status: ["info", "success", "warning", "danger"],
      neutral: ["cool", "neutral", "gray"],
      base: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "danger",
        "cool",
        "neutral",
        "gray",
      ],
      scale: [900, 800, 700, 600, 500, 400, 300, 200, 100, 75, 50, 25],
      principle_scale: [800, 600, 400, 200, 50],
      compact_scale: [800, 600, 200, 50],
    };
  },
};
</script>

<style scoped>
.swatch {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>