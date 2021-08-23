import styled from "styled-components";
import DayItem from "./DayItem";
import {connect} from 'react-redux';
import moment from "moment";

const DayListWrapper = styled.div`
  padding-top: 2px;
  display: flex;
  justify-content: flex-end;
  height: 60px;
`;

function Daylist({ days }) {

  function renderDays(days) {
    const daysView = days.map( day => {
      let dayArr = day.split("-");

      let dayView = moment()
        .set("year" ,dayArr[0])
        .set("month" ,dayArr[1])
        .set("date", dayArr[2])
        .format("D-ddd");

      return <DayItem 
        dayOfWeek = { dayView.split("-")[1][0] } 
        dayOfMonth = { dayView.split("-")[0] }
        key = { dayView.split("-")[0] }
      />
  });
    return daysView;
  }

  return (
    <DayListWrapper>
    { renderDays(days) }
    </DayListWrapper>
  )
}

export const mapStateToProps = state => {
  return {
    days: state.weekDays.days
  };
}

export default connect(mapStateToProps)(Daylist);