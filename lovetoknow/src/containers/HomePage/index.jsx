import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import InputSearch from '../../components/InputSearch'
import API from '../../utils/api'

const HomePageContainer = styled.div`
  display:flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  padding: 55px;
`
const Title = styled.h1`
  background: -webkit-linear-gradient(135deg, #FF9F65, #DED37E, #26BDA6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 48px;
`
const FormSearch = styled.form`
  display:flex;
  width: 600px;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
`
const ButtonSearch = styled.button`
  background: #26BDA6;
  margin: 0;
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
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: null,
      toResults: false
    }
    this.inputSearchData = "";
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(event) {
    event.preventDefault();
    API.searchByTitle(event.target[0].value,
      (data) => {
        this.setState({
          results: data.data,
          toResults: true
        })
      }
    );
  }
  render() {
    if(this.state.toResults === true) {
      return <Redirect to={{pathname: '/results', results: this.state.results}}/>
    }
    return (
      <HomePageContainer>
        <Title>MovieFinder </Title>
        <FormSearch onSubmit={this.onSearch}>
          <InputSearch placeholder="Find a movie by the name"/>
          <ButtonSearch type="submit">Submit</ButtonSearch>
        </FormSearch>
      </HomePageContainer>
    )
  }
}
export default withRouter(HomePage)