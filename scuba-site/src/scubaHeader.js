import React, { Component } from 'react';
import './style.scss';
import scubalogo from './Gfx/ScubaLiving_logo_small.svg';


class ScubaHeader extends Component{
    render(){
        return (
            <header>
        <nav>

            <div id="logo">
                <a href="#home">
                    <img src={scubalogo} alt="Logo" title="Scuba logo" />
                </a>
            </div>


            <ul>
                <li><a href="#home" title="tilbage til forsiden">Home</a></li>
                <li><a href="#dykkerudstyr">Dykkerudstyr</a></li>
                <li><a href="#dykkerrejser">Dykkerrejser</a></li>
                <li><a href="#dykkerkurser">Dykkerkurser</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
                <li><a href="#om">Om os</a></li>
            </ul>
            


            {/* <div id="seachbar">
                <form>
                <input type="text" />
                <button>Søg</button>
            </form>
            </div>



            <div id="loginbar">
                <img src="../WebRoot/Gfx/lock-icon-300x300.png" alt="loginbar" />
                <button type="submit">Login</button>
            </div> */}

        </nav>
    </header>
        )
    }
}

export default ScubaHeader