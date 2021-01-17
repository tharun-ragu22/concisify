import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: '',
        }
    }


    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }


    handleSubmit = event => {
        alert(`${this.state.comments}`)
        event.preventDefault()
    }

    render() {
        const { comments } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Paste your Study Content Here! 💾</label>
                    <textarea 
                    value={comments} 
                    onChange={this.handleCommentsChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form