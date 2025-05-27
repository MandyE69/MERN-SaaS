
import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import NavBar from "../components/Nav-Bar"


function HomePage() {
    const[books,setBooks] = useState([{}])
    const fetchBook = async()=>{
    const response = await axios.get("http://localhost:3000/api/books/")
    setBooks(response.data.datas)
    console.log(response.data.datas)
  }
  useEffect(()=>{
    fetchBook()
  },[])

    return (
        <div>
            <NavBar />
            <div className="pt-20">
                <section className="bg-white dark:bg-green-950">
                    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                                Building digital <br />products &amp; brands.
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This
                                free and open-source landing page template was built using the utility classes from
                                <a target="_blank" className="hover:underline">Tailwind CSS</a> and based on the
                                components from the <a href="#/" className="hover:underline" target="_blank">Flowbite Library</a> and the
                                <a href="https://flowbite.com/blocks/" target="_blank" className="hover:underline">Blocks System</a>.
                            </p>
                            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                <a href target="_blank" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                     View on GitHub
                                </a>
                                <a href target="_blank" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <svg className="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width={1667} height={2500}>
                            
                                        <title>Figma.logo</title>
                                        <desc>Created using Figma</desc>
                                        <path id="path0_fill" className="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
                                        <path id="path1_fill" className="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
                                        <path id="path1_fill_1_" className="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
                                        <path id="path2_fill" className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z">
                                        </path>
                                        <path id="path3_fill" className="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
                                    </svg>
                                    Get Figma file
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
                        </div>
                    </div>
              </section>
                <hr className="pt-8 border to-black" />
            <div className="pt-6 container mx-auto"><h1 className="flex justify-center font-bold text-5xl pb-10" >"Features Books"</h1>
                <div className="flex  space-x-6 flex-wrap space-y-4 justify-center-safe">
                {
                    books.map(function(books, index){
                        return(
                             <Card key={index} book={books}/>
                            
                        )
                    })
                } 
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomePage