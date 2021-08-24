import styled from "styled-components"
import { getWeek } from "../redux/actions";
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

const TodayButton = styled.button`
  border: none;
  width: 80px;
  height: 40px;
  background-color: #f6f6f6;
  color:#ff2d2d;
  font-size: 20px;
  margin-left: 20px;

  &:hover {
    font-size: 25px;
`;

const DeleteButton = styled(TodayButton)`
  margin-right: 20px;
  // display: none;
`;

function Footer({getWeek}) {
  return (
    <FooterWrapper>
      <TodayButton onClick = { ()=> {
        getWeek(moment());
      }}>Today</TodayButton>
      <DeleteButton>Delete</DeleteButton>
    </FooterWrapper>
  )
}

const mapDispatchToProps = {
  getWeek
}

export default connect(null, mapDispatchToProps)(Footer);
