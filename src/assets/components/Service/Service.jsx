import Card from '../Card/Card';
import { textData } from '../../../textData';

function Service() {
  return (
    <section
      id="sluzby"
      className="mx-auto mt-[10vh] grid items-center text-center lg:text-left">
      <h2 className="text-center">Nabízím tyto služby</h2>
      <div className="flex flex-wrap justify-center gap-10 p-3">
        <Card data={textData[0]}/>
        {/* <Card textData={textData[1]}/> */}
      </div>
    </section>
  );
}

export default Service;
