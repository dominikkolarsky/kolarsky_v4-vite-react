import Card from '../Card/Card';

function Service() {
  return (
    <section
      id="sluzby"
      className="mx-auto mt-[10vh] grid items-center text-center lg:text-left">
      <h1 className="text-center">Nabízím tyto služby</h1>
      <div className="flex flex-wrap justify-center gap-10 p-3">
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Service;
