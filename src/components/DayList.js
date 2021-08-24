import styled from "styled-components";
import DayItem from "./DayItem";
import { connect } from 'react-redux';
import moment from "moment";

const DayListWrapper = styled.div`
  padding-top: 2px;
  display: flex;
  justify-content: flex-end;
  height: 60px;
`;

function Daylist({ days }) {
  function renderDays(days) {
    const daysAndWeekDays = days.map( day => {
      const dayAndWeekDay = moment(day, "YYYY-MM-DD-ddd").format("D-ddd");
      
      return <DayItem 
        active = {dayAndWeekDay === moment().format("D-ddd")}
        dayOfWeek = { dayAndWeekDay.split("-")[1][0] } 
        dayOfMonth = { dayAndWeekDay.split("-")[0] }
        key = { dayAndWeekDay.split("-")[0] }
      />
  });
    
    return daysAndWeekDays;
  }

  return (
    <DayListWrapper>
    { renderDays(days) }
    </DayListWrapper>
  )
}

export const mapStateToProps = state => ({
    days: state.days.days
})

export default connect(mapStateToProps)(Daylist);