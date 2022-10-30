import Header from './assets/components/Header/Header';
import Navbar from './assets/components/Navbar/Navbar';
import Service from './assets/components/Service/Service';

function App() {
  return (
    <div className="min-h-screen w-full  overflow-x-hidden">
      <Navbar />
      <main class="container prose prose-slate mx-auto max-w-5xl px-4 dark:prose-invert lg:prose-2xl xl:max-w-7xl">
        <Header />
        <Service />
      </main>
    </div>
  );
}

export default App;
