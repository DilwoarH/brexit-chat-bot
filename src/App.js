import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.cf = null; // <-- Conversational Form ref
  }
  componentDidMount() {
    // customize your questions here
    this.refs.lot.setAttribute('cf-questions', "What are you looking for?");

    this.cf = window.cf.ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      }
    });
  }

  render() {
    return (
      <div>
        <div id="cf-context" > {/* <-- the cf form will be bound to this element */}
          <form id="form" className="form" ref="form" action="https://www.digitalmarketplace.service.gov.uk/g-cloud/search" method="GET">
            <select name="lot" ref="lot" type="radio"> {/* <-- using selection for options */}
              <option value="cloud-hosting">Cloud hosting</option>
              <option value="cloud-software">Cloud software</option>
              <option value="cloud-support">Cloud support</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
