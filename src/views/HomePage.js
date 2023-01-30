// import Carousel from "../components/CarouselOld";
import Carousel from "../components/Carousel";
import "../App.css";
import CardView from "../components/CardView";
import { useInView } from "react-intersection-observer"
import { InView } from "react-intersection-observer";
import img_1 from '../assets/images/B5_Green2.png'


function HomePage() {


	const th = 0.5;

	const [card_0, inView_0] = useInView({ threshold: th });
	const [card_1, inView_1] = useInView({ threshold: th });
	const [card_2, inView_2] = useInView({ threshold: th });
	const [card_3, inView_3] = useInView({ threshold: th });
	const [card_4, inView_4] = useInView({ threshold: th });
	const [card_5, inView_5] = useInView({ threshold: th });



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
			
			<div className="flex justify-center xl:p-4 pt-20 ">
				<a className=" 2xl:w-5/6 xl:w-full rounded-2xl shadow-2xl shadow-black md:h-96 flex flex-col"  href="https://www.artstation.com/alecremer">
					<img className="flex-1 rounded-2xl rounded-b-none object-cover w-full h-full" src={img_1} />
					<div className="bg-slate-700 rounded-b-2xl p-3 text-white text-xl">Portfolio de artes 3D</div>
				</a>
			</div>


			<div className="bg-neutral-900 text-left p-5 mt-5 flex justify-center w-full">


				{/* <h2 className="bg-orange-600 text-white p-3 rounded-full font-semibold text-2xl text-center">Confira nossos serviços</h2> */}
				<button className="btn">Confira nossos serviços</button>
			</div>


		</div>
	);
}

export default HomePage;
