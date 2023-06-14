import { Form } from "./components/Form";

function App() {
  return (
    <>
      <div className="min-h-screen flex-col flex">
        <header className=" bg-emerald-500 h-20 flex items-baseline lg:px-10 px-4 pt-4 gap-4">
          <svg
            className="w-10 h-10 fill-emerald-200 stroke-emerald-200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <path d="M477.19,33.677c-19.215,0-34.793,15.578-34.793,34.792c0,13.354,7.518,24.935,18.538,30.763v33.723 c0,8.245-6.69,14.942-14.942,14.942h-32.502c-8.253,0-14.95-6.697-14.95-14.942V99.231c11.02-5.828,18.546-17.409,18.546-30.763 c0-19.214-15.586-34.792-34.802-34.792c-19.215,0-34.801,15.578-34.801,34.792c0,14.048,8.328,26.106,20.302,31.624 c0,22.543,0,45.562,0,79.987c0,5.987-0.861,12.476-2.551,19.248c0,51.391-103.918,147.717-215.228,177.685 c-59.142,14.458-119.981,36.691-135.5,39.794c-26.364,5.276-15.82,37.786,23.73,43.94c30.996,4.816,31.364,17.576,62.737,17.576 c31.373,0,31.373-17.576,62.754-17.576c31.365,0,31.365,17.576,62.738,17.576s31.373-17.576,62.746-17.576 c31.381,0,31.381,17.576,62.754,17.576c36.909,0,142.366-19.332,142.366-159.055c0-124.296,0-199.877,0-220.53 C504.867,92.76,512,81.463,512,68.469C512,49.254,496.413,33.677,477.19,33.677z" />
          </svg>
          <h1 className="text-4xl  bold text-white tracking-wide">Slugify</h1>
        </header>
        <main className="bg-emerald-950 flex-grow">
          <Form />
        </main>
        <footer className=" bg-emerald-950 h-20 border-t-2 border-emerald-600 border-solid">
          <p className="text-gray-300 text-lg text-center mt-4">
            Created by{" "}
            <a
              href="https://github.com/kristijanribaric"
              target="_blank"
              className="text-emerald-400"
            >
              Kristijan Ribarić
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
