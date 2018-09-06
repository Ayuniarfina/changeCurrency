import React, { Component } from 'react';
import { Card, CardGroup, CardHeader, CardText, CardBlock, Col, Row } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
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
        ]

    return (
      <div>
        <Row className="justify-content-center">
          <Col sm="6" style={{ marginTop: '2rem' }}> 
            <Card>
              <CardHeader>Title</CardHeader>
            </Card>
          
            { symbols.map((symbol, i) => (
              <CardGroup>
                <Col xs="6" sm="11" style={{padding:0}}>
                  <Card style={{height: '6.5vw'}}>
                    <CardBlock style={{padding:'0.6rem'}}>
                      <CardText style={{flex: 1, flexDirection: 'row'}}>
                        <a style={{flex: 1}}>{symbol.curency}</a>
                        <a style={{flex: 1, textAlign: 'right'}}>{this.state.data.symbol}</a>
                      <a className="text-right">{this.state.data.symbol}</a><h6><b><i>{symbol.country}</i></b></h6><i>1 USD = {symbol.curency} {this.state.data[symbol.curency]}</i></CardText>
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
            ))};

          </Col>  
        </Row>
      </div>
    )
  }
}

export default App;
