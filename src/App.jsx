import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <header className='min-h-screen flex flex-col relative hero'>
      {/* Wrap header component within the homepage */}
      <Header />
      <div className='flex justify-center items-start p-6 -mt-20'/>
    </header>
      <Home/>
      
    </div>
  );
}

export default App;
