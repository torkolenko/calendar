import styled from "styled-components";
import Header from "./components/Header"
import DayList from "./components/DayList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Table from "./components/Table";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer"
import { Provider } from "react-redux";

const AppWrapper = styled.div`
  max-width: 740px;
  margin: 0 auto;
`;

const DayListAndNavWrapper = styled.div`
  background-color: #f6f6f6;
  height: 105px;
`;

const StyledHeaderHr = styled.hr`  
  margin: 0; 
  padding: 0;
  border: none; 
  border-top: 2px solid #ececec;
`;

const StyledFooterHr = styled(StyledHeaderHr)`
  border-top: none;
  border-bottom: 2px solid #ececec;
`

const PositionStickyHeader = styled.div`
  position: sticky;
  top: 0;
`;

const PositionStickyFooter = styled.div`
  position: sticky;
  bottom: 0;
`;

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store = {store}>
      <AppWrapper>
        <PositionStickyHeader>
          <Header />
          <StyledHeaderHr />
          <DayListAndNavWrapper>
            <DayList />
            <Nav />
          </DayListAndNavWrapper>
          <StyledHeaderHr />
        </PositionStickyHeader>
        <Table />
        <PositionStickyFooter>
          <StyledFooterHr/>
          <Footer />
        </PositionStickyFooter>
      </AppWrapper>
    </Provider>
  )
}

export default App;
