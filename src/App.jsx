import "./App.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import LinkedIn from "./assets/linkedin.svg";

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">Adnan Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#project" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-6">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Adnan Pirzada,</h2>
              <h2 className="font-bold text-4xl mt-1 gradiant-text running-text">
                Web developer
              </h2>
              <p className="mt-4 text-gray-400">
                Aspiring student, seeking to apply for a Co-op with competent
                development skills <br /> with focus on collaboration,
                communication, and passion.
              </p>
            </div>
            <div>
              <img className="photo-logo w-[220px] sm:w-[520px]" src={Porfile}  />
            </div>
          </div>
        </section>

        {/* Projects section */}

        <section id="project">
          <div className="container m-auto px-4 py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-s mt-2">
                  Responsive HTML/CSS layout for online furniture store.
                </p>
                <div className="flex  gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-s mt-2">
                  Responsive HTML/CSS layout for online furniture store.
                </p>
                <div className="flex  gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-s mt-2">
                  Responsive HTML/CSS layout for online furniture store.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Furniture store landing page
                </h3>
                <p className="text-gray-400 text-s mt-2">
                  Responsive HTML/CSS layout for online furniture store.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700 rounded-full">
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technologies Section */}

        <section className="py-10">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Tailwind</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Javascript, jQuery</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[80%]  h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    UI Design in Adobe Photoshop
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%]  h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[55%]  h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Jest</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[60%]  h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">SQL</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[65%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md"></span>
              </div>
            </div>
          </div>
        </section>

        {/* Additional skills section */}

        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Javascript animation libraries
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5 ">
                  Docker
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5 ">
                  Wordpress
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About us */}


        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className=" pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-12  relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-12  relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a><img src={Facebook} className="w-5" alt="" /></a>
              </li>
              <li>
                <a><img src={Instagram} className="w-5" alt="" /></a>
              </li>
              <li>
                <a><img src={LinkedIn} className="w-5" alt="" /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
