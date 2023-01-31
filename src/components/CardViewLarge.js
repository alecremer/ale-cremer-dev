import '../App.css';
import { useInView } from "react-intersection-observer"
import { InView } from "react-intersection-observer";

export default function CardViewLarge(props) {

    return (
        <InView triggerOnce={true}>
            {/* <div className="card"> */}
            {({ inView, ref }) => (
                <a ref={ref} className={(inView ? "fade-in card-lg" : "transparent card-lg")}  href={props.href}>
                    <img className=" rounded-2xl  object-cover h-full" src={props.img} />
                    <div className={props.color + " rounded-b-2xl  p-3 text-white text-xl absolute bottom-0 w-full"}>{props.label}</div>
                </a>
            )}

        </InView>
    );
}