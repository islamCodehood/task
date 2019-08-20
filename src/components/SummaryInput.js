import React, { Component } from 'react';

class SummaryInput extends Component {
    state = {  }

    handleChange = e => this.props.updateSummary(e.target.value)  

    render() { 
        return ( 
            <div>
                <textarea id="summary-input" name="summary" onChange={this.handleChange} placeholder="Summary" required />
            </div>
         );
    }
}
 
export default SummaryInput;