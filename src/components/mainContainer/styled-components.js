import styled from 'styled-components';

const MainWrapper = styled.div`
  display:grid;     
`;

const Header = styled.header`
    margin: auto;
    padding-top: 2%;
    padding-bottom: 2%;
    color: #000000;
    font-size: 18px;
    font-weight: bold;
`

const Content = styled.div`
    display: grid;
    @media (min-width: 700px) {
        grid-template-columns: 1fr 3fr;
      }
      @media (min-width: 1024px) {
        grid-template-columns: 1fr 3fr;
      }
`;

export default {
    MainWrapper, Header, Content
}