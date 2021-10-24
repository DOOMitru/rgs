import React from 'react'
import Form from './components/Form'
import CardList from './components/CardList'

import './CardListApp.css'

class CardListApp extends React.Component {
    state = { profiles: [] }

    addNewProfile = profile => {
        console.log(profile)
        this.setState({
            profiles: [...this.state.profiles, profile]
        })
    }

    render() {
        return (
            <div>
                <div className="header">GitHub Cards</div>
                <Form onSubmit={this.addNewProfile}></Form>
                <CardList profiles={this.state.profiles}></CardList>
            </div>
        )
    }
}

export default CardListApp
