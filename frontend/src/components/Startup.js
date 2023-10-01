import '../styles/UI.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';


export default function Startup(props) {
    const [width, setWidth] = useState(undefined);
    const [height, setHeight] = useState(undefined);

    function submit() {
        fetch("https://localhost:8081/")
    }

    return <div className='main'>
        <div className='popup-window'>
            <h1>WELCOME TO ANIMATOR</h1>
            <h3>Enter Dimension Size</h3>
            <form>
                <input type="number" placeholder="Enter width..." onChange={(e)=> setWidth(e.target.value)}></input> x
                <input type="number" placeholder="Enter height..." onChange={(e)=> setHeight(e.target.value)}></input>
            </form>
            <Link to="/projects/1" class="button" onClick={submit}>Start Animating</Link>
        </div>

    </div>
}