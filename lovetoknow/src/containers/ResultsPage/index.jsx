import React, { Component } from 'react'
import {withRouter } from 'react-router-dom'
import styled from 'styled-components';
import Card from '../../components/Card';

const ButtonBack = styled.button`
  background: #26BDA6;
  margin: 0;
  height: 45px;
  width: 100px;
  color: #fff;
  box-shadow: 0px 3px 5px rgba(0,0,0,0.1);
  border-radius: 4px;
  border: 1px solid #8FECDE;
  padding: 10px 15px;

  &:hover {
    background: #23CEB4;
  }
`
const CardsWrapper = styled.div`
    display:flex;
    padding: 55px;
`;
class ResultsPage extends Component {
   constructor(props) {
    super(props);
    const interval = null;  // eslint-disable-line no-alert, quotes, semi
   }
   componentDidMount(){
    if(this.dataIsValidAndHasResults()){
    this.interval = setInterval( () =>  {
        this.props.history.push("/")
      },5000)
    }
   }
   dataIsValidAndHasResults(){
    return !this.props.location.results || this.props.location.results === ""
   }
   componentWillUnmount(){ 
     clearInterval(this.interval);
   }
  render() {
    const {results} = this.props.location;
    return (
      <>
        <CardsWrapper>
           {results ? 
            <Card
              poster={results['Poster']} 
              director={results['Director']}
              year={results['Year']}
              title={results['Title']} 
            />
            : <ErrorMessage/>}
            <ButtonBack onClick={() => this.props.history.push("/")}>Go back</ButtonBack>
        </CardsWrapper>
      </>
    )
  }
}

const ErrorMessage = () => {
  return (
    <div>
      "Error, please try again. Redirecting to the Main Page"
    </div>
  )
}
export default withRouter(ResultsPage);