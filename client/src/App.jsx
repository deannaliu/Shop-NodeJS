import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import './App.css'
import Layout from './Layouts/Layouts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default App
