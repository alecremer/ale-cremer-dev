import '../App.css';
import img from '../assets/icons/whatsapp-icon.svg';


export default function FloatingWhatsapp(props) {


    return (
        <a className="fixed bottom-16 right-5 z-10" href={"https://wa.me/5541984620878"}>
            <img className='w-16' src={img} />
        </a>
    );
}