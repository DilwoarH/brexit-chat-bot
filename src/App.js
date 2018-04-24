import React, { Component } from 'react';
import './App.css';
import filter_data from './filters.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.cf = null; // <-- Conversational Form ref
  }
  componentDidMount() {
    // customize your questions here
    /* this.refs.lot.setAttribute('cf-questions', "What are you looking for?");
    this.cf = window.cf.ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      }
    }); */
  }

  getFilters() {
    var checkboxes = [];
    console.info('fdsfsd', filter_data);
    for (var i = 0; i < filter_data.length; i++) {
      var filters = filter_data[i].filters;

      var options = [];

      for (let x = 0; x < filters.length; x++) {
        var option = filters[x];
        options.push(
          <div key={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input type="checkbox" name={option.name} ref={option.name} value={option.value} id={option.id} />
          </div>
        );
      }
      
      checkboxes.push( 
        <fieldset cf-questions={filter_data[i].question} key={i}>
          {options}
        </fieldset>
      );
      
    }

    return checkboxes;
  }


  render() {
    var filters = this.getFilters();
    console.log(filters);
    return (
      <div>
        <div id="cf-context" > {/* <-- the cf form will be bound to this element */}
          <form id="form" className="form" ref="form" action="https://www.digitalmarketplace.service.gov.uk/g-cloud/search" method="GET" cf-form="true">
            <fieldset cf-questions="What are you looking for?">
              <select name="lot" ref="lot" type="radio"> {/* <-- using selection for options */}
                <option value="cloud-hosting">Cloud hosting</option>
                <option value="cloud-software">Cloud software</option>
                <option value="cloud-support">Cloud support</option>
              </select>
            </fieldset>
            {filters}
            <fieldset cf-questions="Enter any keywords which you would like to match:">
              <input type="text" name="q" ref="q" />
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
