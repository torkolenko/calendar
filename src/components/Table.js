import moment from "moment";
import styled from "styled-components";
import {connect} from 'react-redux';

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TimeWrapper = styled.div`
  width: 12.5%;
`;

const StyledTime = styled.div`
  height: 45px;
  font-size: 15px;
  color: #adacac;
  width: 92%;
  text-align: right;
`;

const GridWrapper = styled.div`
  height: 1079px;
  margin-top: 10px;
  border-top: 1px solid #ececec;
  width: 87.5%;
  display: grid;
  grid-template-columns: repeat(7, 14.2857143%);
  grid-template-rows: repeat(24, 44px);
  grid-auto-flow: column;
  grid-gap: 1px;
  background-color: #ececec;
`;

const StyledCell = styled.div`
  background-color: white;
`;

function Table({days, events}) {

  function renderTime() {
    let content = [];
    
    for(let i = 0; i < 24; i++) {
      let time = moment().set("H", i).set("m", 0).format("HH:mm");
      content.push(<StyledTime key = {i}>{time}</StyledTime>)
    }
    return content;
  }

  function renderCells(days, events) {

    let content = [];

      for(let day of days) {
        let hours = null;
        
        let dayArr = day.split("-");
        let dayEvents = events
        ?.[dayArr[0]]
        ?.[dayArr[1]]
        ?.[dayArr[2]];

        if(dayEvents) {
          hours = dayEvents.map(event => event.split(":")[0]);
        }
        for(let i = 0; i < 24; i++) {
          if(hours) {
            let tableHours = ( i.toString().length === 1 ) ? "0" + i : i.toString();

            if(hours.includes(tableHours)) {
              content.push(<StyledCell key = {day + i}>true</StyledCell>);
            } else {
              content.push(<StyledCell key = {day + i}></StyledCell>);
            }
            
          } else {
            content.push(<StyledCell key = {day + i}></StyledCell>);
          }
      }
    }
    return content;
  }

  return (
    <TableWrapper>
      <TimeWrapper>
        { renderTime() }
      </TimeWrapper>
      <GridWrapper>
        { renderCells(days, events) }
      </GridWrapper>
    </TableWrapper>
  )
}

const mapStateToProps = state => {
  return {
    days: state.weekDays.days,
    events: state.events
  };
}

export default connect(mapStateToProps)(Table);