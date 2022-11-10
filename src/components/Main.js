import React, { Component } from "react";

// form
import { FaPlus } from 'react-icons/fa';

// tarefas 
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {

    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim();

        if (tarefas.indexOf(novaTarefa) !== -1) {
            return
        }

        const novasTarefas = [...tarefas];
        
        if(index === -1){
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: ''
            })
        } else {
            
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: [...novasTarefas],
                index: -1
            })
        }

       
    }



    handleChange = (e, index) => {
        this.setState({
            novaTarefa: e.target.value,
        })

    }

    handleEdit = (e, index) => {
        const {tarefas} = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    handleDelete = (e, index) => {
        const {tarefas} = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas]
        })
    }


    render() {

        const { novaTarefa, tarefas } = this.state;


        return (
            <div className="Main">
                <h1>Lista de tarefas</h1>

                <form onSubmit={this.handleSubmit} className="form">
                    <input
                        onChange={this.handleChange}
                        type='text'
                        value={novaTarefa} />




                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefas, index) => (
                        <li key={tarefas}>
                            {tarefas}

                            <span>
                                <FaEdit 
                                onClick={(e)=> this.handleEdit(e, index)}
                                className="edit" />


                                <FaWindowClose 
                                onClick={(e)=> this.handleDelete(e, index)} 
                                className="delete" />

                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
};