// import Carousel from "../components/CarouselOld";
import Carousel from "../components/Carousel";
import "../App.css";
import CardView from "../components/CardView";
import CardViewLarge from "../components/CardViewLarge";
import { useInView } from "react-intersection-observer"
import { InView } from "react-intersection-observer";
import img_1 from '../assets/images/B5_Green2.png';
import img_2 from '../assets/images/mush_extended.png';
import img_3 from '../assets/images/Flowers_mountain_blue_sky_grass_pixel.png';
import img_4 from '../assets/images/SnowMountains.png';

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

			<div className="pt-20 lg:flex-row md:flex-col xl:w-full 2xl:w-4/5 xl:pl-10 xl:pr-10 flex  justify-center ">

				<div className=" text-left p-5 mt-5 m-2">

					<h2 className="xl:text-3xl font-semibold 2xl:text-5xl">Tire seu projeto do papel </h2>
					<h3 className="xl:text-xl 2xl:text-3xl pt-10 font-semibold">Profissionalismo e confiança para tornar seu projeto realidade </h3>
					<h3 className="xl:text-md 2xl:text-xl pt-5 ">Soluções em desenvolvimento de software, criação de sites, games, arte digital, embarcados e muito mais!</h3>

				</div>


				<div className="grid grid-cols-2 sm:grid-cols-1 2xl:gap-x-2">

					<CardView title="Criação de sites" content="Crie seu site ou servidor personalizado com a gente!" />
					<CardView title="Arte 3D" content="Desenvolvimento de modelos, texturas e animações para games, peças de marketing, impressão 3D e vídeos" />
					<CardView title="Arte para games" content="Animações, pixel arte, arte vetorial, concept art, environment design, character design e muito mais" />
					<CardView title="Desenvolvimento de software" content="Desenvolvimento Web, automação com python, aplicações mobile e desktop" />
					<CardView title="Desenvolvimento Unity" content="Desenvolvimento de games, imersões virtuais e simulações com Unity" />
					<CardView title="Automação" content="Desenvolvimento de aplicações para microcontroladores e robôs utilizando ROS" />




				</div>



			</div>


				

			<div className="grid grid-cols-1 grid-flow-row-dense gap-y-20 md:p-10 2xl:p-20">
				<h2 className="text-left text-5xl font-semibold w-full ">Confira nossos portfolios</h2>

					<CardViewLarge img={img_1} color={"bg-orange-700"} href={"https://www.artstation.com/alecremer"} label="Portfolio de artes em geral"/>
					<CardViewLarge img={img_2} color={"bg-slate-700"} href={"https://www.artstation.com/alecremer"} label="Artes 3D"/>
					<CardViewLarge img={img_3} color={"bg-slate-700"} href={"https://www.artstation.com/alecremer"} label="Portfolio pixel art"/>
					<CardViewLarge img={img_4} color={"bg-slate-700"} href={"https://www.artstation.com/alecremer"} label="Portfolio de ilustrações"/>

				

			</div>


			<div className="bg-neutral-900 text-left p-5 mt-5 mt-44 flex justify-center w-full">


				{/* <h2 className="bg-orange-600 text-white p-3 rounded-full font-semibold text-2xl text-center">Confira nossos serviços</h2> */}
				<button className="btn">Confira nossos serviços</button>
			</div>


		</div>
	);
}

export default HomePage;
