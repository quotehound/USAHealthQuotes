import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import LandingPage from './LandingPage';
import HealthPlan from './components/HealthPlan';
import CoverageTime from './components/CoverageTime';
import Income from './components/Income';

class App extends Component {


  state = {

    // For Routes
    route: '/',
    routes: [
      '/',
      '/health-plan',
      '/coverage-time',
      '/income'
    ],

    // For Post 

    postData: {

      lp_campaign_id: '60ec904883e96',
      lp_campaign_key: 'HdnykrcQ76bVq8BtWmFK',
      lp_s1: '12',
      lp_s2: '13',
      landing_Page: 'usahealthquotes.com',
      TCPA_Consent: 'Yes',
      TCPA_Language:
        'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
      trusted_form_cert_id: '',
      jornaya_lead_id: '',
      IP_Address: '',
      user_agent: navigator.userAgent,

      zip_code: '',
      health_insurance_plan: '',
      coverage_time: '',
      household_income: '',

    }

  }


    // Handle change Route
    changeRoute = () => {
      this.setState({
        route: '',
      });
    };
  

  render() {
    return (
      
      <BrowserRouter>
      <div>
        <NavBar />
        <Switch>

          {/* Landing Page */}
          <Route path='/' exact >
            <LandingPage 

              setZipCode={(v) => {
                this.setState({
                  postData: {
                    ...this.state.postData,
                    zip_code: v,
                  },
                });
              }}

            />
          </Route>

          {/* Step 2 - Health Insurance Plan */}
          <Route path='/health-plan' exact>
              <HealthPlan
                  setPlan={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        health_insurance_plan: v,
                      },
                    });
                  }}
              />
            </Route>

            <Route path='/coverage-time' exact>
                <CoverageTime
                setCoverTime={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      coverage_time: v,
                    },
                  });
                }}
                />
            </Route>

            <Route path='/income' exact>
              <Income

                setIncome={(v) => {
                  this.setState({
                    postData: {
                      ...this.state.postData,
                      household_income: v,
                    },
                  });
                }}
              />
            </Route>

        </Switch>
      </div>
      
      </BrowserRouter>
    )
  }
}

export default App;