/**
 * Created by ikay on 30.06.16.
 */
import React from 'react';
import {Textfield, Card, CardTitle, CardText, Grid, Cell} from 'react-mdl';
import gradeCalc from './lib/gradeCalc';


class GradeCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max:0,
      reached:0,
      result:0,
      grade:null
    };
    this.gradeMasterCalc= new gradeCalc().setMaxPoints(21)
  }

  setMaxPoints(element) {
    this.gradeMasterCalc= new gradeCalc().setMaxPoints(element.currentTarget.value);
    this.setState({max:element.currentTarget.value});
  }

  setReachedPoints(element) {
    var grade = this.gradeMasterCalc.setReachedPoints(element.currentTarget.value.replace(',','.')).calcResult();
    this.setState({reached:element.currentTarget.value, grade:grade});
  }

  render() {
    var changeReached=this.setReachedPoints.bind(this);
    var changeMax =this.setMaxPoints.bind(this);
    var max=this.state.max;
    var reached=this.state.reached;
    var grade = this.state.grade;
    return (<Grid style={{padding:'20px', height:'100%'}}>
      <Cell col={12}>
      <Card shadow={0} style={{height:'100%', width:'100%'}}>
        <CardText>
          <Grid>
            <Cell col={12}>
              <h3>Note: {grade}</h3>
            </Cell>
            <Cell col={6} phone={2}>
              <b>Maximal: </b>
              <Textfield
                onChange={changeMax}
                value={max}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Eingabe ist keine Nummer!"
                label="Maximale Punkte"
              />
            </Cell>
            <Cell col={6} phone={2}>
            <b>Erreicht: </b>
            <Textfield
              onChange={changeReached} value={reached}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Eingabe ist keine Nummer!"
              label="Erreichte Punkte"
            />
            </Cell>
          </Grid>
        </CardText>
      </Card>
      </Cell>
    </Grid>);
  }
}
export default GradeCalc;
/**

**/
