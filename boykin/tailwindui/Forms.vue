<template>
  <div class="px-24 bg-white">
    <div class="py-12">
      <h2 class="text-2xl font-bold">Simple</h2>
      <div class="max-w-md mt-8">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input
              type="text"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john@example.com"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">When is your event?</span>
            <input
              type="date"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">What type of event is it?</span>
            <select
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
            ></textarea>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    checked=""
                  />
                  <span class="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-12">
      <h2 class="text-2xl font-bold">Underline</h2>
      <div class="max-w-md mt-8">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input
              type="text"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              placeholder="john@example.com"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">When is your event?</span>
            <input
              type="date"
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">What type of event is it?</span>
            <select
              class="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
            >
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea
              class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
              rows="2"
            ></textarea>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  <span class="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-12">
      <h2 class="text-2xl font-bold">Solid</h2>
      <div class="max-w-md mt-8">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Full name</span>
            <input
              type="text"
              class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder=""
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="john@example.com"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">When is your event?</span>
            <input
              type="date"
              class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">What type of event is it?</span>
            <select
              class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
            >
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea
              class="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
              rows="3"
            ></textarea>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="text-gray-700 bg-gray-200 border-transparent rounded focus:border-transparent focus:bg-gray-200 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                  />
                  <span class="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 antialiased text-gray-900">
      <div class="max-w-xl py-12 mx-auto md:max-w-4xl">
        <h2 class="text-2xl font-bold">Reset styles</h2>
        <p class="mt-2 text-lg text-gray-500">
          These are form elements this plugin styles by default.
        </p>
        <div class="grid items-start grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Input (text)</span>
              <input
                type="text"
                class="block w-full mt-1"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (email)</span>
              <input
                type="email"
                class="block w-full mt-1"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (email, multiple)</span>
              <input
                type="email"
                multiple=""
                class="block w-full mt-1"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (password)</span>
              <input
                type="password"
                class="block w-full mt-1"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (date)</span>
              <input type="date" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (datetime-local)</span>
              <input type="datetime-local" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (month)</span>
              <input type="month" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (number)</span>
              <input type="number" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (search)</span>
              <input type="search" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (time)</span>
              <input type="time" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (week)</span>
              <input type="week" class="block w-full mt-1" />
            </label>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Input (tel)</span>
              <input
                type="tel"
                multiple=""
                class="block w-full mt-1"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (url)</span>
              <input
                type="url"
                multiple=""
                class="block w-full mt-1"
                placeholder="john@example.com"
              />
            </label>
            <label class="block">
              <span class="text-gray-700">Select</span>
              <select class="block w-full mt-1">
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">Select (multiple)</span>
              <select class="block w-full mt-1" multiple="">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </label>
            <label class="block">
              <span class="text-gray-700">Textarea</span>
              <textarea
                class="block w-full h-24 mt-1"
                rows="3"
                placeholder="Enter some long form content."
              ></textarea>
            </label>
            <div class="block">
              <span class="text-gray-700">Checkboxes</span>
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" checked="" />
                    <span class="ml-2">Option 1</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" />
                    <span class="ml-2">Option 2</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="checkbox" />
                    <span class="ml-2">Option 3</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="block">
              <span class="text-gray-700">Radio Buttons</span>
              <div class="mt-2">
                <div>
                  <label class="inline-flex items-center">
                    <input
                      type="radio"
                      checked=""
                      name="radio-direct"
                      value="1"
                    />
                    <span class="ml-2">Option 1</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="radio" name="radio-direct" value="2" />
                    <span class="ml-2">Option 2</span>
                  </label>
                </div>
                <div>
                  <label class="inline-flex items-center">
                    <input type="radio" name="radio-direct" value="3" />
                    <span class="ml-2">Option 3</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-4xl py-12 mx-auto">
        <h2 class="text-2xl font-bold">Untouched</h2>
        <p class="mt-2 text-lg text-gray-500">
          These are form elements we don't handle (yet?), but we use this to
          make sure we haven't accidentally styled them by mistake.
        </p>
        <div class="grid items-start grid-cols-2 gap-6 mt-8">
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Input (range)</span>
              <input type="range" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (color)</span>
              <input type="color" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (file)</span>
              <input type="file" class="block w-full mt-1" />
            </label>
            <label class="block">
              <span class="text-gray-700">Input (file, multiple)</span>
              <input type="file" multiple="" class="block w-full mt-1" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>