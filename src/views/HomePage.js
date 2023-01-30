import Carousel from "../components/CarouselOld";
import "../App.css"
function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
        

        <div className="bg-neutral-900 pb-10 w-screen h-96 flex items-center justify-center " >
          carousel
        </div>

        
        {/* <Carousel /> */}
        <div className="bg-neutral-900 w-full sm:p-3 md:pt-10 pb-3 ">
          <button className="btn">Confira nosso portfólio</button>
        </div>
        
        <div className="lg:flex-row md:flex-col xl:w-full 2xl:w-4/5 xl:ml-1 xl:mr-1 flex  justify-center">
         
          <div className=" text-left p-5 mt-5 m-2">

            <h2 className="xl:text-3xl font-semibold 2xl:text-5xl">Tire seu projeto do papel </h2>
            <h3 className="xl:text-xl 2xl:text-3xl pt-10 font-semibold">Profissionalismo e confiança para tornar seu projeto realidade </h3>
            <h3 className="xl:text-md 2xl:text-xl pt-5 ">Soluções em desenvolvimento de software, criação de sites, games, arte digital, embarcados e muito mais!</h3>
          
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-1 2xl:gap-x-2">
            
            <div className="card">
              
              <h2 className="card-title">Criação de sites</h2>
              <h3 className="card-text">Crie seu site ou servidor personalizado com a gente!</h3>
            
            </div>
            
            <div className="card">

              <h2 className="card-title">Arte 3D</h2>
              <h3 className="card-text">Desenvolvimento de modelos, texturas e animações para games, peças de marketing, impressão 3D e vídeos</h3>

            </div>

            <div className="card">

              <h2 className="card-title">Arte para games</h2>
              <h3 className="card-text">Animações, pixel arte, arte vetorial, concept art, environment design, character design e muito mais.</h3>

            </div>

            <div className="card">

              <h2 className="card-title">Desenvolvimento de software</h2>
              <h3 className="card-text">Desenvolvimento Web, automação com python, aplicações mobile e desktop</h3>

            </div>

            <div className="card">

              <h2 className="card-title">Desenvolvimento Unity</h2>
              <h3 className="card-text">Desenvolvimento de games, imersões virtuais e simulações com Unity</h3>
            
            </div>

            <div className="card">
              
              <h2 className="card-title">Automação</h2>
              <h3 className="card-text">Desenvolvimento de aplicações para microcontroladores e robôs utilizando ROS</h3>
            
            </div>
          </div>


        </div>

        <div className="bg-neutral-900 text-left p-5 mt-5 flex justify-center w-full">


          {/* <h2 className="bg-orange-600 text-white p-3 rounded-full font-semibold text-2xl text-center">Confira nossos serviços</h2> */}
          <button className="btn">Confira nossos serviços</button>          
        </div>

      
    </div>
  );
}

export default HomePage;
