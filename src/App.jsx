import Contact from './assets/components/Contact/Contact';
import Footer from './assets/components/Footer/Footer';
import Header from './assets/components/Header/Header';
import Navbar from './assets/components/Navbar/Navbar';
import Service from './assets/components/Service/Service';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="container prose prose-slate mx-auto max-w-5xl px-4 dark:prose-invert lg:prose-2xl xl:max-w-7xl">
        <Header />
        {/* <Service /> */}
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
