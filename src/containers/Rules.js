import React, { Component } from 'react';
import { FormGroup, Input, Col, Row} from 'reactstrap';
import '../style/form.scss';


export default class Rules extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rules:[ ['add-sub', 'is', [""]] ],
        };
      }
    
      handleEditOne=(e)=>{
        const {rules} = this.state
        rules[e.target.id][0] = e.target.value
        this.setState({rules})
      }

      handleEditTwo=(e)=>{
        const {rules} = this.state
        rules[e.target.id][1] = e.target.value
        this.setState({ rules})
      }


      handlefiled=(e)=>{
        const {rules} = this.state
        rules[e.target.id][2][e.target.slot]= e.target.value
        this.setState({rules})
      }

      addFilds=(e)=>{
        const {rules} = this.state
        rules[e.target.id][2].push("")
        this.setState({ rules })
      }

      removeFilds=(e)=>{
        const {rules} = this.state
        rules[e.target.id][2].splice([e.target.slot], 1)
        this.setState({ rules })
      }

      addRule=()=>{
        const {rules} = this.state
        rules.push(['add-sub', 'is', [""]])
        this.setState({ rules })
      }

      removeRule=(e)=>{
        const {rules} = this.state
        this.state.rules.splice(e.target.id, 1)
        this.setState({ rules })
      }


  render(){
    return (
      <>
      {this.state.rules.map((rule, i)=>{
          return(
              <div key={i} className="role">
                  <h5 >Rule{i+1}</h5>
                  <Row >           
                      <Col md={2}>
                          <FormGroup>
                              <Input  value={rule[0]} onChange={this.handleEditOne} id={i} type="select" name="selectOne" bsSize="sm">
                                  <option>add-sub</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </Input>
                          </FormGroup>
                      </Col>

                      <Col md={2}>
                          <FormGroup >
                              <Input value={rule[1]} onChange={this.handleEditTwo} id={i} type="select" name="selectTwo" bsSize="sm">
                                  <option>is</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                              </Input>
                          </FormGroup>
                      </Col>

                      <Col md={6}>
                          {rule[2].map((filed,index)=>{
                              return(
                                  <div key={index} className="container">
                                    <div className="embed-submit-field">
                                        <FormGroup >
                                            <Input value={this.state.rules[i][2][index]}  id={i} slot={index} onChange={this.handlefiled} placeholder=" insert parameter " bsSize="sm"/>
                                        </FormGroup>
                                        {(index !== rule[2].length-1)?
                                            <p className="m-0 remove" id={i} slot={index} onClick={this.removeFilds}>
                                                remove rule 
                                            </p>
                                           :<p className="m-0 add"  id={i} onClick={this.addFilds}>
                                                add rule 
                                            </p>
                                        }
                                    </div>
                                  </div>
                              )
                          })}
                      </Col>

                      {(i === this.state.rules.length-1)?
                          <div >
                              <h4 className="addRule" onClick={this.addRule}>
                                  +
                              </h4> 
                          </div>
                         :<div >
                            <h4 className="removeRule" id={i} onClick={this.removeRule}>
                                -
                            </h4>  
                          </div> 
                      }
              
                  </Row>
              </div>   
          )
      })}
      </>
    );
  }
}












