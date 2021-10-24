import axios from 'axios'
import React from 'react'

class Form extends React.Component {
    state = { username: '' }

    handleSubmit = async event => {
        event.preventDefault()
        const response = await axios.get(`https://api.github.com/users/${this.state.username}`)
        this.props.onSubmit(response.data)
        this.setState({ username: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    required
                    type="text"
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value })}
                    placeholder="GitHub username"/>
                <button>Add</button>
            </form>
        )
    }
}

export default Form
