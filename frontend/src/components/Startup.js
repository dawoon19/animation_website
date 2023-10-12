import '../styles/UI.css'
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '../config.json';
import axios from 'axios';


export default function Startup(props) {
    const [width, setWidth] = useState(undefined);
    const [height, setHeight] = useState(undefined);
    const nav = useNavigate();

    function submit() {
        if (width === undefined || height === undefined || width <= 100 || height <= 100) {
            alert('ERROR: Please put in valid canvas size.')
        } else {
            axios.put(config.API_URL + "/projects/init-project/" + width + "/" + height).then(res => {
                alert('Successfully created project.');
                nav('/projects/' + res.data.id)
            }).catch(err =>  {
                alert('Unable to connect to server.')
                console.log(err);
            })
        }
    }

    return <div className='main'>
        <div className='popup-window'>
            <h1>WELCOME TO ANIMATOR</h1>
            <h3>Enter Dimension Size</h3>
            <form>
                <input type="number" placeholder="Enter width..." onChange={(e)=> setWidth(e.target.value)}></input> x
                <input type="number" placeholder="Enter height..." onChange={(e)=> setHeight(e.target.value)}></input>
            </form>
            <div class="button" onClick={submit}>Start Animating</div>
        </div>

    </div>
}