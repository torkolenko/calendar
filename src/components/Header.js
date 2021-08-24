import styled from "styled-components"
import add from '../icons/add.svg';
import { connect } from "react-redux";
import { createEvent } from "../redux/actions";

const HeaderWrapper = styled.div`
  background-color: white;
  height: 85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px 0 30px;
`;

const StyledTitle = styled.h1`
  font-weight: 300;
  font-size: 1.1rem;
  position: relative;
  margin-right: auto;
`;

const AddButton = styled.button`
  background-image: url(${add}) ;
  background-repeat: no-repeat;
  background-size: 60%;
  background-color: white;
  background-position: center;
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;

  &:hover {
    background-size: 90%;
  };
`;

function Header({ createEvent }) {
  return (
    <HeaderWrapper>
      <StyledTitle>Interview Calendar</StyledTitle>
          <AddButton onClick = {  () => {
            const event = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss", "");
            if(event) {
              createEvent(event);
            };
          }}></AddButton>
    </HeaderWrapper>
  )
}

const mapDispatchToProps = {
  createEvent
}

export default connect(null, mapDispatchToProps)(Header);