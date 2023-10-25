import './App.css';
import Header from './Components/Header'
import Explorer from './Components/Explorer'
import styled from 'styled-components';

const ContentWrapper = styled.div`
    height: 100vh
    width: 100vw;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <ContentWrapper>
        <Explorer />
      </ContentWrapper>
    </div>
  );
}

export default App;
