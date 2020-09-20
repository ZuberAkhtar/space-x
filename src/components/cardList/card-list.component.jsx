import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card} from '../card/card.component'
import Style from './styled-components'


const CardList = (props) => {
    if (!props.data || !props.data.length) {
        return <Style.CardListContainer>No Record Found</Style.CardListContainer>
    }
    return (
     <Style.CardListContainer>
         {
             props.data.map((program) => {
                 return (<Card key = {program.flight_number} data = {program}/>)
             })
         }
     </Style.CardListContainer>
    )
}

CardList.propTypes = {
    
}


const mapStateToProps = state => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps)(CardList);