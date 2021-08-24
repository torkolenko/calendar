import styled from "styled-components"
import next from '../icons/next.svg';
import prev from '../icons/prev.svg';
import {connect} from 'react-redux';
import moment from "moment";
import { getWeek } from "../redux/actions";

const StyledChangeWeek = styled.div`
  height: 45px;
  font-size: 17px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
`;

const StyledPrevWeekButton = styled.button`
  background-image: url(${next});
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
  };
`;

const StyledNextWeekButton = styled(StyledPrevWeekButton)`
  background-image: url(${prev});
`;

const MonthWrapper = styled.div`
  width: 62.5%;
  text-align: center;
`;

const WeekButtonsWrapper = styled.div`
  width: 12.5%;
  text-align: center;
`;

function Nav({ days, getWeek }) {
  const monthAndYear = moment(days[0], "YYYY-MM-DD-ddd").format("MMMM YYYY");
  function getCurrentWeek() {
    const mondayCurrentWeek = days[0].split("-");
    mondayCurrentWeek.pop();
    mondayCurrentWeek[1]--;

    return moment([...mondayCurrentWeek])
  }

  return (
    <StyledChangeWeek>
      <WeekButtonsWrapper>
        <StyledPrevWeekButton onClick = { () => {
          getWeek(getCurrentWeek().subtract(7, 'days'));
          }}/>
      </WeekButtonsWrapper>
      <MonthWrapper>{monthAndYear}</MonthWrapper>
      <WeekButtonsWrapper>
        <StyledNextWeekButton onClick = { () => {
          getWeek(getCurrentWeek().add(7, 'days'));
        }}/>
      </WeekButtonsWrapper>
    </StyledChangeWeek>
  )
}

const mapStateToProps = state => ({
  days: state.days.days
})

const mapDispatchToProps = {
  getWeek
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);