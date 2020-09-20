import styled from 'styled-components';

const CardListContainer = styled.div`
// width: 85vw;
// margin: 0 auto;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-template-rows: min-content;
grid-gap: 1rem;
justify-content: space-evenly;
padding-right: 2%;
padding-left: 2%;
@media (min-width: 700px) {
    // grid-template-columns: 1fr 1fr;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

@media (min-width: 1024px) {
//     grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
}

`;

export default {
    CardListContainer
}