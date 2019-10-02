import React, { Component } from 'react';
const axios = require('axios');




class FedeComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            comidafavorita:''
         };

        

       }


       componentDidMount(){

        let data ;
        

         // Make a request for a user with a given ID
         axios.get('http://localhost:3000/fede')
         .then(function (response) {
     
             data = response;
             
         })
         .catch(function (error) {
             // handle error
             console.log(error);
         })
         .finally(function () {
             // always executed
         });


         this.setState({ comidafavorita:data });


       }


        


  render() {
    return <h1>{this.state.comidafavorita}</h1>;
  }


}


export default FedeComponent;