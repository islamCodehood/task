import React, { Component } from 'react';
import TitleInput from './TitleInput'
import LinkInput from './LinkInput'
import SummaryInput from './SummaryInput'
class Form extends Component {
    state = { 
        title: "",
        link: "",
        summary: ""
     }

    addTitle = (title) => this.setState({
        title,
    })
    addLink = (link) => this.setState({
        link,
    })
    addSummary = (summary) => this.setState({
        summary,
    })

    handleClick = e => {
        e.preventDefault()
        const title = this.state.title
        const link = this.state.link
        const summary = this.state.summary
        this.props.addItem(title, link, summary)
    }
    render() { 
        
        return ( 
            <form>
                <TitleInput updateTitle={this.addTitle} />
                <LinkInput updateLink={this.addLink} />
                <SummaryInput updateSummary={this.addSummary} />
                <button id="add-btn" onClick={this.handleClick}>ADD</button>
            </form>
         );
    }
}
 
export default Form;