import React, { Component } from "react";

// form
import { FaPlus } from 'react-icons/fa';

// tarefas 
import {FaEdit, FaWindowClose} from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {

    state = {
        novaTarefa: '',
        tarefas: [
            'Fazer café',
            'Estudar Programação',
            'Amar as pessoas como se não houvesse amanhã'
        ]
    };

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        })

    }




    render() {

        const { novaTarefa, tarefas } = this.state;


        return (
            <div className="Main">
                <h1>Lista de tarefas</h1>

                <form className="form">
                    <input
                        onChange={this.handleChange}
                        type='text'
                        value={novaTarefa} />




                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map(tarefas => (
                        <li key={tarefas}>
                            {tarefas}

                            <div>
                                <FaEdit className="edit"/>
                                <FaWindowClose className="delete"/>

                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
};