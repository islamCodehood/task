import React, { Component } from 'react';
import TitleInput from './TitleInput'
import LinkInput from './LinkInput'
import SummaryInput from './SummaryInput'
class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <TitleInput />
                <LinkInput />
                <SummaryInput />
            </form>
         );
    }
}
 
export default Form;