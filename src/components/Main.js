import React, { Component } from 'react';
import './Main.css';
// form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// tarefas
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  // funcao criada para o submit
  handleSubmit = (e) => {
    e.preventDefault(); // previnindo o envio ao clicar no submit
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return; // caso a tarefa exista returna nada
    const novasTarefas = [...tarefas];// copiando o array de tarefas para novasTarefas
    this.setState({
      tarefas: [...novasTarefas, novaTarefa], // setando os estados em um novo objeto de arrays
    });
  }

  // setando as mudanças
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    console.log('edit', index);
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
