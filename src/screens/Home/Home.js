import React, {Component} from 'react';

import './home.css';
import Input from '../../components/Input/Input';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import Portada from '../../assets/images/5af2a0d4be515.png';

class HomePage extends Component {
    state = {
        nameMe: '',
        nameYou: ''
    };

    renderForm() {
        return (
            <div className="home-page-form">
                <Typography type="subtitle" text="Digita tu nombre y el de tu lof para saber que tan compatible son" />
                <div className="container_inputs" >
                    <Input
                        className="input-name"
                        placeholder="Tu nombre"
                        type="text"
                        onChange={(val) => this.setState({nameMe: val})}
                    />
                    <Input
                        className="input-name"
                        placeholder="El nombre de tu crush"
                        type="text"
                        onChange={(val) => this.setState({nameYou: val})}
                    />
                </div>
                
                <Button classNames="button-material" >Calcular</Button>
            </div>
        );
    }

    renderResult(){
        return (
            <div className="home-page-result">

            </div>
        );
    }

    render(){
        return (
            <div className="container-home-page" >
                <Image src={Portada} classNames="portada-image" alt="Calculadora del amor" />
                <Typography type="title" text="Calcula que tanto te ama..." />
                <div className="home_page-container-app" >
                    {this.renderForm()}
                    {this.renderResult()}
                </div>
            </div>
        )
    }
}

export default HomePage;