import { Form } from "./components/Form";

function App() {
  return (
    <>
      <div className="min-h-screen flex-col flex">
        <header className=" bg-emerald-500 h-20">
          <h1 className="text-4xl ml-4 mt-4 bold text-white tracking-wide">
            Slugify
          </h1>
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
