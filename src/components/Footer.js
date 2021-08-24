import styled from "styled-components"
import { getWeek, deleteEvent } from "../redux/actions";
import moment from "moment";
import { connect } from "react-redux";

const FooterWrapper = styled.div`
  padding: 0;
  margin: 0;
  position: sticky;
  bottom: 0;
  height: 60px;
  text-align: center;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTodayButton = styled.button`
  border: none;
  width: 80px;
  height: 40px;
  background-color: #f6f6f6;
  color: #ff2d2d;
  font-size: 20px;
  margin-left: 20px;

  &:hover {
    font-size: 25px;
  };
`;

const StyledDeleteButton = styled(StyledTodayButton)`
  margin-right: 20px;
  display: ${
    props => props.isActive ? "block" :
    "none"
  };
`;

function Footer({getWeek, choisenEvent, deleteEvent}) {
  return (
    <FooterWrapper>
      <StyledTodayButton 
        onClick = { () => getWeek(moment().startOf("isoWeek")) }
      >Today</StyledTodayButton>
      <StyledDeleteButton 
        isActive = { choisenEvent }
        onMouseDown = { () => deleteEvent(choisenEvent) }
      >Delete</StyledDeleteButton>
    </FooterWrapper>
  )
}

const mapStateToProps = state => ({
    choisenEvent: state.events.choisenEvent
})

const mapDispatchToProps = {
  getWeek,
  deleteEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
