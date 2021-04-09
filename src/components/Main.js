import React, { Component } from 'react';
import './Main.css';

import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  // vai ser executado uma vez assim que o componente for montado
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));// pegando as tarefas do localstorage
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  // utilizado para salvar no localstorage
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // funcao criada para o submit
  handleSubmit = (e) => {
    e.preventDefault(); // previnindo o envio ao clicar no submit
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return; // caso a tarefa exista returna nada
    const novasTarefas = [...tarefas];// copiando o array de tarefas para novasTarefas
    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa], // setando os estados em um novo objeto de arrays
        novaTarefa: '',
        index: -1,
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  // setando as mudanças
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  // funcao de editar
  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  // funcao de deletar
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  // renderizando na tela
  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
