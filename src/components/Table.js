import moment from "moment";
import styled from "styled-components";
import {connect} from 'react-redux';
import { choiseEvent } from "../redux/actions";

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
  grid-template-columns: repeat(7, 14.18%);
  grid-template-rows: repeat(24, 44px);
  grid-auto-flow: column;
  grid-gap: 1px;
  background-color: #ececec;
`;

const StyledCell = styled.div`
  background-color: white;
`;

const StyledCellWithEvent = styled.div`
  outline: 2px solid white;
  padding: 2px;
  outline-offset: -2px;
  background-color: ${
    props => props.isActive ? "#b4b8ff" :
    "#ecedff"
  };
`;

function Table({ days, events, choisenEvent, choiseEvent }) {
  function renderTimeColumn() {
    let content = [];
    
    for(let i = 0; i < 24; i++) {
      const time = moment(i, "H").format("HH:mm");
      content.push( <StyledTime key = {i}>{time}</StyledTime> )
    }

    return content;
  }

  function renderCells(events, days) {
    let content = [];

      for(let day of days) {
        let hoursOfDayEvents = null;
        const dayArr = day.split("-");
        const dayEvents = events
        ?.[dayArr[0]]
        ?.[dayArr[1]]
        ?.[dayArr[2]];

        if(dayEvents) {
          hoursOfDayEvents = dayEvents.map(event => event.split(":")[0]);
        }
        
        for(let i = 0; i < 24; i++) {
          if(hoursOfDayEvents) {
            const cellHours = ( i.toString().length === 1 ) ? "0" + i : i.toString();

            if(hoursOfDayEvents.includes(cellHours)) {
              const cellDay = moment(day, "YYYY-MM-DD-ddd").format("YYYY-MM-DD");
              const cellTime = dayEvents[hoursOfDayEvents.findIndex(i => i === cellHours)] 

              content.push(<StyledCellWithEvent 
                tabIndex = {dayArr[2] + i} 
                key = {dayArr[2] + i}
                isActive = { choisenEvent === cellDay + " " + cellTime }
                onFocus = { () => choiseEvent(cellDay + " " + cellTime) }
                onBlur = { () => choiseEvent("") }
              />);
            } else {
              content.push(<StyledCell key = {dayArr[2] + i}/>);
            } 
          } else {
            content.push(<StyledCell key = {dayArr[2] + i}/>);
          }
        }
      }
    return content;
  }

  return (
    <TableWrapper>
      <TimeWrapper>
        { renderTimeColumn() }
      </TimeWrapper>
      <GridWrapper>
        { renderCells(events, days) }
      </GridWrapper>
    </TableWrapper>
  )
}

const mapStateToProps = state => ({
    days: state.days.days,
    events: state.events.events,
    choisenEvent: state.events.choisenEvent
})

const mapDispatchToProps = {
  choiseEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

//2021-08-25 09:00:00