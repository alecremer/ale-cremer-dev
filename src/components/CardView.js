import '../App.css';
import { useInView } from "react-intersection-observer"
import { InView } from "react-intersection-observer";

export default function CardView(props) {
    return (
        <InView triggerOnce={true}>
            {/* <div className="card"> */}
            {({ inView, ref }) => (
                <div ref={ref} className={(inView ? "animation-1 card" : "transparent")}>
                    <h2 className="card-title">{props.title}</h2>
                    <h3 className="card-text">{props.content}</h3>
                </div>
            )}

        </InView>
    );
}