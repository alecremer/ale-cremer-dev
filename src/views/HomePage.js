import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <div>
        

        
        <Carousel />
        <div className="bg-neutral-900 w-full p-3">
          <button className="btn">Confira nosso portfólio</button>
        </div>
        
        <div >
         
          <div className=" text-left p-5 mt-5 m-2">

            <h2 className="text-3xl font-semibold">Tire seu projeto do papel </h2>
            <h3 className="text-xl pt-10 font-semibold">Profissionalismo e confiança para tornar seu projeto realidade </h3>
            <h3 className="text-md pt-5 ">Soluções em desenvolvimento de software, games, arte digital, embarcados e muito mais!</h3>
          
          </div>


          <div className="bg-slate-200 rounded-xl text-left p-5 mt-5 m-2">

            <h2 className="text-2xl font-semibold">Por que contar conosco? </h2>
            <h3 className="text-lg pt-5 ">Carrossel de competências</h3>
          
          </div>

          <div className="bg-neutral-900 text-left p-5 mt-5 flex justify-center">

            {/* <h2 className="bg-orange-600 text-white p-3 rounded-full font-semibold text-2xl text-center">Confira nossos serviços</h2> */}
            <button className="btn">Confira nossos serviços</button>          
          </div>

        </div>


      
    </div>
  );
}

export default HomePage;
