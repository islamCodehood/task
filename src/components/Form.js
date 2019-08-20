import React, { Component } from 'react';
import TitleInput from './TitleInput'
import LinkInput from './LinkInput'
import SummaryInput from './SummaryInput'
class Form extends Component {
    state = { 
        title: "",
        link: "",
        summary: "",
        timeStamp: null
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
        const linkExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(linkExpression);
        const timeStamp = new Date().getTime()
        if (!title || !link || !summary) {
            return;
        } 
        if (!link.match(regex)) {
            alert("Please, Enter a valid link!")
            return
        }
        
        this.addTimeStamp(timeStamp)
        this.props.addItem(title, link, summary, timeStamp)
    }

    addTimeStamp = timeStamp => this.setState({
        timeStamp,
    })


    render() { 
        
        return ( 
            <form>
                <div className="input-col">
                    <TitleInput className="input-item" updateTitle={this.addTitle} />
                    <LinkInput className="input-item" updateLink={this.addLink} />
                </div>
                <div className="input-col">

                <SummaryInput updateSummary={this.addSummary} />
                </div>
                <div className="input-col">

                <button  id="add-btn" onClick={this.handleClick}>ADD</button>
                </div>
            </form>
         );
    }
}
 
export default Form;