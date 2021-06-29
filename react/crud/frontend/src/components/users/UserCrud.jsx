import React, { Component } from 'react'
import Main from '../templats/Main'
import axios from 'axios'

const headerProps = {
    icons: 'users',
    title: 'Usuarios',
    subtitle: 'Cadastro de usuarios: Incluir, Listar, Alterar e Excluir.'
}

const baseUrl = 'http://localhost:3000/users'
const initialState = {
    user: {name: '', email: ''},
    list: []
}



export default class UserCrud extends Component {
    
    state = { ...initialState }
    
    clear() {
        this.setState({ user: initialState })
    }
    
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url =user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user).then(resp => {
            const list = this.getUpdateList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }

    getUpdateList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }
    
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={e => this.updateField(e)} placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="from-grou">
                            <label>E-mail</label>
                            <input type="text" onChange={e => this.updateField(e)} placeholder="Digite o e-mail..." className="form-control" name="email" value="this.state.user.email"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                        <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}