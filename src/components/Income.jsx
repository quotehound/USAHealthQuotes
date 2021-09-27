import React, { Component } from 'react';
import { withRouter } from 'react-router';

import './forms.css';

import Footer from '../Footer.jsx'



class Income extends Component {

    income = (values) => {

        values.preventDefault();
        
        let incomeAmount = values.currentTarget.dataset.value;

        this.props.setIncome(incomeAmount);

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const zip = urlParams.get('zip_code');
        const plan = urlParams.get('health_insurance_plan');
        const time = urlParams.get('coverage_time')

        this.props.history.push('/coverage-time' + '?zip_code=' + zip + '&health_insurance_plan=' + plan + '&coverage_time=' + time);
    }


    render() {
        return (
            <div className="back bg-white"> 
       <div className="bg-blue-500 headerText justify-center align-middle text-center">
                    <h2>Get Your Free Health Insurance Quote</h2>
                </div>
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  25%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
            <div className="relative flex justify-center text-sm leading-5 con">
              <span className="px-2 text-black-500 text-3xl bold header">
              What is your total household income?
              </span>
            </div>
          </div>
          <form onSubmit={this.income} >
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

              <div className="text-sm leading-5 buttonBlock">
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="10000" onClick={this.income}>$0 - 10,000</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="30000" onClick={this.income}>$10,0001 - 30,000</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="55000" onClick={this.income}>$30,0001 - 55,000</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="70000" onClick={this.income}>$55,0001 - 70,000</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="100000" onClick={this.income}>$70,0001 - 100,000</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="100000" onClick={this.income}>$100,001+</button>

                
                
              </div>
            </div>
          </div>

          </form>

          </div>

          </div>
        </div>

       


      </div>
     <Footer />

      </div>
       

        )
    }
}

export default withRouter(Income)
