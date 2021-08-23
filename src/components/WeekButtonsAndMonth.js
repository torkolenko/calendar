import styled from "styled-components"
import next from '../icons/next.svg';
import prev from '../icons/prev.svg';
import {connect} from 'react-redux';
import moment from "moment";
import { getWeek } from "../redux/actions";

const StyleChangeWeek = styled.div`
  height: 45px;
  font-size: 17px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
`;

const StylePrevWeekButton = styled.button`
  background-image: url(${next}) ;
  background-repeat : no-repeat;
  background-size: 35%;
  background-color: #f6f6f6;
  background-position: center;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;

  &:hover {
    background-size: 80%;
`;

const StyleNextWeekButton = styled(StylePrevWeekButton)`
  background-image: url(${prev}) ;
`;

const MonthWrapper = styled.div`
  width: 62.5%;
  text-align: center;
`;

const WeekButtonsWrapper = styled.div`
  width: 12.5%;
  text-align: center;
`;

function WeekButtonsAndMonth({ days, getWeek }) {
  
  const daysView = days.map( day => {
    let dayArr = day.split("-");

    return ( moment()
      .set("year" ,dayArr[0])
      .set("month" ,dayArr[1])
      .set("date", dayArr[2])
      .format("YYYY-MMMM")
    )
  });
  
  const months = new Set();
  daysView.forEach(day => months.add(day.split("-")[1]));

  const years = new Set();
  daysView.forEach(day => years.add(day.split("-")[0]));

  const monthsAndYear = Array.from(months.values()).join(",") + " " + Array.from(years.values()).join(",");
  
  function getCurrentWeek() {
    const year = days[0].split("-")[0];
    const month = days[0].split("-")[1];
    const day = days[0].split("-")[2];

    return moment().set("year", year).set("month", month - 1).set("date", day);
  }

  return (
    <StyleChangeWeek>
      <WeekButtonsWrapper>
        <StylePrevWeekButton onClick = { () => {
          const date = getCurrentWeek().subtract('days', 7);
          getWeek(date);
          }}/>
      </WeekButtonsWrapper>
      <MonthWrapper>{monthsAndYear}</MonthWrapper>
      <WeekButtonsWrapper>
        <StyleNextWeekButton onClick = { () => {
          const date = getCurrentWeek().add('days', 7)
          getWeek(date);
        }}/>
      </WeekButtonsWrapper>
    </StyleChangeWeek>
  )
}

const mapStateToProps = state => ({
    days: state.weekDays.days
})

const mapDispatchToProps = {
  getWeek
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekButtonsAndMonth);