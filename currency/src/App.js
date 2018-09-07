import React, { Component } from 'react';
import { Card, CardGroup, CardHeader, CardText, CardBlock, Col, Row, InputGroupAddon, Button, Input, InputGroup } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(Response => Response.json())
      .then((findresponse) => {
          console.log(findresponse.rates)
          this.setState({
            data:findresponse.rates,
          })
          })
      }

  handleChange(event){
    this.setState({inputValue: event.target.value})
  }

  render() {
    const symbols = [
          {"curency" : "CAD", "country" : "Canadian Dollar"}, 
          {"curency" : "IDR", "country" : "Indonesian Rupiah"},
          {"curency" : "GBP", "country" : "Pound sterling"},
          {"curency" : "CHF", "country" : "Swiss Franc"},
          {"curency" : "SGD", "country" : "Singapore Dollar"},
          {"curency" : "INR", "country" : "Indian Rupee"},
          {"curency" : "MYR", "country" : "Malaysian Ringgit"},
          {"curency" : "JPY", "country" : "Japanese Yen"},
          {"curency" : "KRW", "country" : "South Korean won"}
        ];

    return (
      <div>
        <Row className="justify-content-center">
          <Col sm="6" style={{ marginTop: '2rem' }}> 
            <Card>
              <CardHeader>
              <InputGroup style={{paddingBottom: '0.6rem'}}>
              <Input type="number" value={this.state.inputValue} onChange={this.handleChange} placeholder="input your change here"/>
              <InputGroupAddon addonType="prepend"></InputGroupAddon>
              </InputGroup>
              <h6><i>USD - United States Dollars</i></h6>
              <b>USD</b><p style={{float: 'right', clear: 'both'}}><h3>{this.state.inputValue}.000</h3></p>
              </CardHeader>
            </Card>
          
            { symbols.map((symbol, i) => (
              <CardGroup>
                <Col xs="6" sm="11" style={{padding:0}}>
                  <Card style={{height: '6.5vw'}}>
                    <CardBlock style={{padding:'0.6rem'}}>
                      <CardText>
                        <a>{symbol.curency}</a>
                        <p style={{float: 'right', clear: 'both'}}><h3>{((this.state.data[symbol.curency])*(this.state.inputValue)).toFixed(4)}</h3></p>
                        <a>{this.state.data.symbol}</a>
                        <a className="text-right">{this.state.data.symbol}</a>
                        <h6><b><i>{symbol.country}</i></b></h6>
                        <i>1 USD = {symbol.curency} {this.state.data[symbol.curency]}</i>
                      </CardText>
                    </CardBlock>
                  </Card>
                </Col>
                <Col xs="6" sm="1" style={{borderLeft:0, marginLeft:0, padding:0}}>
                  <div onClick = {()=> this.handleShow(i)}>
                  <Card style={{height: '6.5vw'}}>
                    <CardBlock>
                      <CardText className="text-center">(-)</CardText>
                    </CardBlock>
                  </Card>
                  </div>
                </Col>
              </CardGroup>
            ))}

          </Col>  
        </Row>
      </div>
    )
  }
}

export default App;
