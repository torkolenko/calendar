import styled from "styled-components"

function DayItem({dayOfWeek, dayOfMonth, active}) {

const DayItemWrapper = styled.div`
  width: 12.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledDayOfWeek = styled.div`
  font-size: 11px;
  font-weight: 800;  
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDayOfMonth = styled.div`
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 33px;
  height: 33px;
`;

const StyledActiveDayOfMonth = styled(StyledDayOfMonth)`
  background-color: #ff2d2d;
  color: white;
`;

const StyledDay = active ? StyledActiveDayOfMonth : StyledDayOfMonth

  return (
    <DayItemWrapper>
      <StyledDayOfWeek>{dayOfWeek.toUpperCase()}</StyledDayOfWeek>
      <StyledDay>{dayOfMonth}</StyledDay>
    </DayItemWrapper>
  )
}

export default DayItem;