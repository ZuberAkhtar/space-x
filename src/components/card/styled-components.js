import styled from 'styled-components'

const CardContainer = styled.div`
text-align: left;
display: flex;
flex-direction: column;
background-color: #fff;
border-radius: 1em;
padding: 0;
cursor: pointer;
-moz-osx-font-smoothing: grayscale;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
transform: translateZ(0);
transition: transform .25s ease-out;
box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);

:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const CardImage = styled.img`
margin: 3%;
background: #f2f2f2f2;
padding: 3%;
max-height: 227px;
min-height: 227px;
border-radius: inherit;
`;

const CardTitle = styled.span`
padding:3%;
text-align: left;
font-size: 16px!important;
color: #485092;
font-weight: bold!important;
`;

const CardInfoTitle = styled.span`
font-weight: bold;
color: #000000;
`;

const CardInfoDescription = styled.p`
margin: 1rem;
text-align: left;
color : #485092;
font-size: 14px;
margin-bottom: 5px!important;
`;
    
const CardMissionIdList = styled.li`
margin-left: 10px;
`;
    

export default {
    CardContainer, CardImage, CardTitle, CardInfoTitle, CardInfoDescription, CardMissionIdList
}
