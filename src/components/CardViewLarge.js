import '../App.css';
import { useInView } from "react-intersection-observer"
import { InView } from "react-intersection-observer";

export default function CardViewLarge(props) {
    return (
        <InView triggerOnce={true}>
            {/* <div className="card"> */}
            {({ inView, ref }) => (
                <a ref={ref} className={(inView ? "fade-in card-lg" : "transparent")}  href={props.href}>
                    <img className="flex-1 rounded-2xl rounded-b-none object-cover h-full" src={props.img} />
                    <div className={props.color + " rounded-b-2xl p-3 text-white text-xl"}>{props.label}</div>
                </a>
            )}

        </InView>
    );
}