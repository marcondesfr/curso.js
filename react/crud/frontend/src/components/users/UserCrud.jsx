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
    
    
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de usuario 
            </Main>
        )
    }
}