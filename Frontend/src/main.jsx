import "./App.css";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="font-mono text-pretty text-[20px] font-bold">
        <h1>Curious Developers Community</h1>
      </div>
      <section id="section1" className="h-screen bg-blue-100">
        <h2>Section 1</h2>
      </section>
      <section id="section2" className="h-screen bg-green-100">
        <h2>Section 2</h2>
      </section>
      <section id="section3" className="h-screen bg-yellow-100">
        <h2>Section 3</h2>
      </section>
    </>
  );
}

export default App;
