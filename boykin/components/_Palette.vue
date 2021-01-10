<template>
  <div class="w-full mx-auto px-2 mt-4">
    <!--- ----------- --->
    <!--- BASE COLORS --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Base Colors</h3>
    <h3 class="markdown text-xl no-toc mb-4 mt-8">Brand</h3>
    <div class="flex justify-start">
      <div
        class="swatch text-cool-gray-100 mr-2 w-1/5 h-16 sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in brand"
        :class="['bg-' + color + '-400']"
      >
        {{ color }}
      </div>
    </div>
    <h3 class="markdown text-xl no-toc mb-4 mt-8">Status</h3>
    <div class="flex justify-start">
      <div
        class="swatch text-cool-gray-100 mr-2 w-1/5 h-16 sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in status"
        :class="['bg-' + color + '-400']"
      >
        {{ color }}
      </div>
    </div>
    <h3 class="markdown text-xl no-toc mb-4 mt-8">Neutral</h3>
    <div class="flex justify-start">
      <div
        class="swatch text-cool-gray-100 mr-2 mb-24 w-1/5 h-16 sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in neutral"
        :class="['bg-' + color + '-400']"
      >
        {{ color }}
      </div>
    </div>
    <!--- BREAK DOWN OF WORK HORSE COLORS --->
    <!--- PRIMARY --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Primary</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-primary-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- SECONDARY --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Secondary</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-secondary-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- TERTIARY --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Tertiary</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-tertiary-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- INFO --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Info</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-info-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- SUCCESS --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Success</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-success-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- WARNING --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Warning</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-warning-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- DANGER --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Danger</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-danger-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- NEUTRAL COOL --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Neutral Cool</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-cool-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- NEUTRAL --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Neutral</h3>
    <div>
      <div
        class="swatch w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-neutral-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>
    <!--- DEFAULT TAILWIND DEFINITION --->
    <!--- TAILWIND GRAY --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Tailwind Gray</h3>
    <div>
      <div
        class="swatch mb-24 w-1/6 h-16 sm:h-24 md:h-36 lg:h-36 xl:h-40"
        id="primary-800"
        v-for="color in principle_scale"
        :class="{
          'text-cool-gray-100': color >= '400',
          ['bg-gray-' + color]: true,
        }"
      >
        {{ color }}
      </div>
    </div>

    <!--- FULL COLOR PALETTE --->
    <!--- PRIMARY --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Full Color Palette</h3>
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-primary-' + color]"
      ></div>
    </div>
    <!--- SECONDARY --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-secondary-' + color]"
      ></div>
    </div>
    <!--- TERTIARY --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-tertiary-' + color]"
      ></div>
    </div>
    <!--- INFO --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-info-' + color]"
      ></div>
    </div>
    <!--- SUCCESS --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-success-' + color]"
      ></div>
    </div>
    <!--- WARNING --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-warning-' + color]"
      ></div>
    </div>
    <!--- DANGER --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-danger-' + color]"
      ></div>
    </div>
    <!--- NEUTRAL COOL --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-cool-' + color]"
      ></div>
    </div>
    <!--- NEUTRAL --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-neutral-' + color]"
      ></div>
    </div>
    <!--- TAILWIND GRAY --->
    <div>
      <div
        class="swatch w-1/12 h-7 sm:h-13 md:h-15 lg:h-20 xl:h-24"
        id="primary-800"
        v-for="color in scale"
        :class="['bg-gray-' + color]"
      ></div>
    </div>
    <!--- ----------- --->
    <!--- FINAL PALETTE --->
    <h3 class="markdown text-2xl no-toc mb-4 mt-8">Site Pallete</h3>

    <!--- BRAND --->
    <h3 class="markdown text-xl no-toc mb-4 mt-8">Brand</h3>
    <div class="flex">
      <div
        class="w-64 h-64 mr-2 text-white flex items-end flex-wrap"
        v-for="color in brand"
        :class="['bg-' + color + '-400']"
      >
        <div class="w-full text-center p-4">
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
    <h3 class="markdown text-xl no-toc mb-4 mt-8">Status</h3>
    <div class="flex">
      <div
        class="w-64 h-64 mr-2 text-white flex items-end flex-wrap"
        v-for="color in status"
        :class="['bg-' + color + '-400']"
      >
        <div class="w-full text-center p-4">
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
    <h3 class="markdown text-xl no-toc mb-4 mt-8">Neutral</h3>
    <div class="flex">
      <div
        class="w-64 h-64 mr-2 text-white flex items-end flex-wrap"
        v-for="color in neutral"
        :class="['bg-' + color + '-400']"
      >
        <div class="w-full text-center p-4">
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
    <h3 class="markdown text-xl no-toc mb-4 mt-8">Paper Whites</h3>
    <div class="flex justify-start">
      <div
        class="swatch text-gray-900 border border-gray-200 mr-2 w-1/5 h-16 sm:h-32 md:h-40 lg:h-40 xl:h-48"
        id="primary-800"
        v-for="color in base"
        :class="['bg-' + color + '-25']"
      >
        <span class="hidden lg:block">{{ color }}</span>
      </div>
    </div>

    <h3 class="markdown text-xl no-toc mb-4 mt-8">Component Examples</h3>
    <!--- INFO --->
    <div class="bg-info-25 border-l-4 border-info-400 p-4 my-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="h-5 w-5 text-info-400"
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
          <h3 class="text-sm leading-5 font-medium text-info-800">
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
    <div class="bg-success-25 border-l-4 border-success-400 p-4 my-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="h-5 w-5 text-success-400"
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
          <h3 class="text-sm leading-5 font-medium text-success-800">
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
    <div class="bg-warning-25 border-l-4 border-warning-400 p-4 my-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="h-5 w-5 text-warning-400"
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
          <h3 class="text-sm leading-5 font-medium text-warning-800">
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
    <div class="bg-danger-25 border-l-4 border-danger-400 p-4 my-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <!-- Heroicon name: exclamation -->
          <svg
            class="h-5 w-5 text-danger-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm leading-5 font-medium text-danger-800">
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
    <h4 class="markdown text-xl no-toc mb-4 mt-8">Buttons</h4>
    <!--- PRIMARY --->
    <!--- 400 CORE --->
    <div class="mt-10">
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 hidden lg:block border border-transparent text-xs leading-4 font-medium rounded text-white bg-primary-800 hover:bg-primary-900 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-400 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-500 border-primary-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-primary-25 hover:text-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-secondary-700 hover:bg-secondary-800 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-secondary-600 hover:bg-secondary-700 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-secondary-500 hover:bg-secondary-600 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-secondary-400 hover:bg-secondary-500 focus:outline-none focus:border-secondary-700 focus:shadow-outline-secondary active:bg-secondary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-secondary-600 bg-white hover:text-secondary-500 border-secondary-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-secondary-600 bg-secondary-25 hover:text-secondary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-tertiary-700 hover:bg-tertiary-800 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-tertiary-600 hover:bg-tertiary-700 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-tertiary-500 hover:bg-tertiary-600 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-tertiary-400 hover:bg-tertiary-500 focus:outline-none focus:border-tertiary-700 focus:shadow-outline-tertiary active:bg-tertiary-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
        <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-tertiary-600 bg-white hover:text-tertiary-500 border-tertiary-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-tertiary-600 bg-tertiary-25 hover:text-tertiary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-info-800 hover:bg-info-800 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-info-700 hover:bg-info-700 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-info-600 hover:bg-info-600 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-info-500 hover:bg-info-500 focus:outline-none focus:border-info-700 focus:shadow-outline-info active:bg-info-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
        <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-info-600 bg-white hover:text-info-500 border-info-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-info-600 bg-info-25 hover:text-info-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-success-700 hover:bg-success-800 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-success-600 hover:bg-success-700 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-success-500 hover:bg-success-600 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-success-400 hover:bg-success-500 focus:outline-none focus:border-success-700 focus:shadow-outline-success active:bg-success-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
        <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-success-600 bg-white hover:text-success-500 border-success-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-success-600 bg-success-25 hover:text-success-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-warning-700 hover:bg-warning-800 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-warning-600 hover:bg-warning-700 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-warning-500 hover:bg-warning-600 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-warning-400 hover:bg-warning-500 focus:outline-none focus:border-warning-700 focus:shadow-outline-warning active:bg-warning-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
        <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-warning-600 bg-white hover:text-warning-500 border-warning-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-warning-600 bg-warning-25 hover:text-warning-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-danger-700 hover:bg-danger-800 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-danger-600 hover:bg-danger-700 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-danger-500 hover:bg-danger-600 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-danger-400 hover:bg-danger-500 focus:outline-none focus:border-danger-700 focus:shadow-outline-danger active:bg-danger-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
        <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-danger-600 bg-white hover:text-danger-500 border-danger-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-danger-600 bg-danger-25 hover:text-danger-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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
      <button type="button" class="inline-flex items-center x-3 py-2 hidden lg:block border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-4 py-2 hidden md:block border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
    <span class="inline-flex rounded-md shadow-sm">
      <button type="button" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150">
        Button text
      </button>
    </span>
        <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-white hover:text-gray-600 border-gray-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    <span class="ml-3 inline-flex rounded-md shadow">
      <button type="button" class="hidden sm:block inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-gray-25 hover:text-gray-600  focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
        Button text
      </button>
    </span>
    </div>      
 

    <h4 class="markdown text-xl no-toc mb-4 mt-8">CTA Sections</h4>  
    <!--
      primary
    -->
    <div class="bg-primary-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-primary-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-primary-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-400 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-primary-600 bg-white hover:text-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--
      secondary
    -->
    <div class="bg-secondary-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-secondary-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-secondary-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-secondary-400 hover:bg-secondary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-secondary-600 bg-white hover:text-secondary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      tertiary
    -->
    <div class="bg-tertiary-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-tertiary-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-tertiary-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-tertiary-400 hover:bg-tertiary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-tertiary-600 bg-white hover:text-tertiary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      info
    -->
    <div class="bg-info-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-info-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-info-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-info-400 hover:bg-info-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-info-600 bg-white hover:text-info-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      success
    -->
    <div class="bg-success-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-success-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-success-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-success-400 hover:bg-success-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-success-600 bg-white hover:text-success-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      warning
    -->
    <div class="bg-warning-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-warning-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-warning-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-warning-400 hover:bg-warning-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-warning-600 bg-white hover:text-warning-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      danger
    -->
    <div class="bg-danger-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-danger-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-danger-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-danger-400 hover:bg-danger-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-danger-600 bg-white hover:text-danger-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
        <!--
      neutral
    -->
    <div class="bg-neutral-50 my-10">
      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-neutral-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br>
          <span class="text-neutral-600">Start your free trial today.</span>
        </h2>
        <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-neutral-400 hover:bg-neutral-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-neutral-600 bg-white hover:text-neutral-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
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