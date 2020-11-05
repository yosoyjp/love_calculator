import React, {Component} from 'react';
import Loader from 'react-loader-spinner'

import './home.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Corazon from '../../components/Corazon/Corazon';
import { getResults } from '../../service/love-calculator';
import Typography from '../../components/Typography/Typography';


class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            nameMe: '',
            nameYou: '',
            result: 0,
            loading: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    

    async onSubmit(){
        this.setState({loading: true});
        const { nameMe, nameYou } = this.state;
        const results = await getResults(nameMe, nameYou);
        this.setState({result: results.percentage, loading: false});
    }

    renderForm() {
        return (
            <div className="home-page-form">
                <Typography type="subtitle" text="¡Digita tu nombre y el de tu crush para saber que tan compatible son!" />
                <Typography type="label" text="Version 2" />
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
                
                <Button onClick={this.onSubmit} classNames="button-material" >Calcular</Button>
            </div>
        );
    }

    render(){
        return (
            <div className="container-home-page" >
                <Typography type="title" classNames="title-home" text="Calcula que tanto te ama..." />
                <div className="container-results" >
                    <Corazon percentage={this.state.result} />
                </div>
                <div className="home_page-container-app" >
                    {this.renderForm()}
                </div>
                {(this.state.loading) && (
                    <div className="container-loader" >
                        <Loader
                            type="Puff"
                            color="#ffffff"
                            height={100}
                            width={100}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default HomePage;