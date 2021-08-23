import styled from "styled-components"

function DayItem({dayOfWeek, dayOfMonth}) {

const DayItemWrapper = styled.div`
  width: 12.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyleDayOfWeek = styled.div`
  font-size: 11px;
  font-weight: 800;  
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleDayOfMonth = styled.div`
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 33px;
  height: 33px;

  &:selected {
    background-color: #ff2d2d;
    color: white;
  }
`;



  return (
    <DayItemWrapper>
      <StyleDayOfWeek>{dayOfWeek.toUpperCase()}</StyleDayOfWeek>
      <StyleDayOfMonth>{dayOfMonth}</StyleDayOfMonth>
    </DayItemWrapper>
  )
}

export default DayItem;