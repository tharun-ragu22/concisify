import React, { Component } from 'react'
//const TextCleaner = require('text-cleaner');
import Note from './Note'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: '',
            has_notes: false,
            notes:''

        }
    }


    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }


    handleSubmit = event => {
        //alert(`${this.state.comments}`)
        fetch("https://fb93fdaa2c61.ngrok.io/post", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "text": `${this.state.comments}`,
                "ratio": "0.25"
            })
        })
            .then(res => res.json())
            .then(response => {
                let apiData = ''
                apiData = response.response;
                //alert(apiData)
                const my_notes = apiData.map(data => <Note text={data.note}/>)
                const answers = apiData.map(data => data.answer).join(', ')
                this.setState({
                    has_notes: true,
                    notes: my_notes,
                    answers: answers
                })
                //alert(this.state.has_notes)
            })
            .catch(err => {
                console.error(err);
            });
        event.preventDefault()
    }

    render() {
        const { comments } = this.state
        if (this.state.has_notes === true) {
            return (
                    <div id="notes">
                    {this.state.notes}
                    <div style={{paddingTop: 20}}>
                    Answers: {this.state.answers}
                    </div>
                    </div> )
        }
        return (
            <form onSubmit={this.handleSubmit} >
                <div id="body">
                    <label style={{textAlign: 'center', alignSelf:'center', paddingRight:10}}>Paste your Quiz Content Here! 💾</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentsChange}
                        style={{display:'block', alignSelf:'center', marginRight:5}}
                    />
                    <button type="submit" style={{display:'block'}}>Submit</button>
                </div>
                
            </form>
        )
        }
    }

export default Form