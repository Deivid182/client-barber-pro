import type { FormKitConfig } from '@formkit/core'
import { generateClasses } from '@formkit/themes'

const config: FormKitConfig = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'space-y-2 mb-3',
        messages: 'text-sm rounded-md text-red-600 bg-red-300 text-center uppercase p-2 my-2 font-semibold',
        label: 'block font-bold text-lg text-white',
        input: 'w-full p-2 border border-gray-700 rounded-lg text-gray-700 placeholder-gray-400'
      },
      submit: {
        input: '$reset bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold w-full p-2 mt-10',
      }
    })
  },
  delimiter: '',
  rootClasses: false
}

export default config;