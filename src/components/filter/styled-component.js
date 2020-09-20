import styled from 'styled-components';

const FilterWrapper = styled.div`
background : #ffffff;
padding-top: 5px!important;
padding-bottom: 20px!important;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 20px;
height: fit-content;

`;

const FilterSubWrapper = styled.div`
margin-bottom: inherit;
`;

const FilterContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;
padding: 4% 3% 2% 3%;
`;

const FilterResetContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
padding: 4% 3% 2% 3%;
`;

const FilterYearButton = styled.button`
background-color: #C6E09B;
  border: none;
  color: black;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: .25rem;

  :active {
    background-color: #7BBA01 !important;
    box-shadow: none!important
  }

  :focus {
    background-color: #7BBA01 !important;
    box-shadow: none!important
  }
`;


const FilterLaunchButton = styled.button`
background-color: #C6E09B;
  border: none;
  color: black;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: .25rem;

  :active {
    background-color: #7BBA01 !important;
    box-shadow: none!important
  }

  :focus {
    background-color: #7BBA01 !important;
    box-shadow: none!important
  }

`;
const FilterTitle = styled.p`
margin: auto;
    width: 50%;
    border-bottom: 1px solid gray;
    font-size: 1rem;
    left: 0;
    right: 0;
`

const FilterText = styled.span`
font-size: 16px;
    display: block;
    font-weight: bold;
    text-align: start;
    margin-left: inherit;
`;

export default {
    FilterWrapper,FilterSubWrapper,FilterContainer,FilterYearButton,FilterTitle,FilterText,FilterResetContainer, FilterLaunchButton
}