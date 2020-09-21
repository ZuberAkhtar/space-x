import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import {Card} from '../card/card.component'
import {BASE_URL} from '../../network/url'
import {updateProgramsList, setLoader} from '../../redux/action'
import Style from './styled-components'


const CardList = (props) => {
    const [currentLimit, setCurrentLimit] = useState(8);


    useEffect(() => {
        if(currentLimit>8){
        props.setLoader(true)
       axios.get(`${BASE_URL}?limit=${currentLimit}`)
       .then(response => {
        const data = response.data
        console.log(response.data)
        props.updateProgramsList({ data, loader : false })
       }) 
       .catch(err => {
        console.log('err',err)
        props.updateProgramsList({data:[], loader: false})
    })
}
    }, [currentLimit])


    if (!props.data || !props.data.length) {
        return <Style.CardListContainer>No Record Found</Style.CardListContainer>
    }
    return (
     <Style.CardListContainer>
         {
             props.data && props.data.map((program) => {
                 return (<Card key = {program.flight_number} data = {program}/>)
             })
         }{
             (currentLimit === props.data.length) && <Style.LoadButton 
             onClick={(e)=>setCurrentLimit(currentLimit+8)}>Load More</Style.LoadButton>
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

const mapDispatchToProps = dispatch => ({
    updateProgramsList: data => dispatch(updateProgramsList(data)),
    setLoader: value => dispatch(setLoader({loader: value}))
  })

export default connect(mapStateToProps, mapDispatchToProps)(CardList);