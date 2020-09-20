import React from 'react'
import Style from './styled-component'

export const LandingFilterComponent = (props) => {

    return (
        <Style.FilterSubWrapper>
            <Style.FilterTitle>Successful Landing</Style.FilterTitle>
            <Style.FilterContainer>
                            <Style.FilterLaunchButton 
                            key="success" 
                            value={true}
                            onClick={(e)=>props.handleLandingStatus('SUCCESS')}
                            >True</Style.FilterLaunchButton>
                            <Style.FilterLaunchButton 
                            key="fail" 
                            value={false}
                            onClick={(e)=>props.handleLandingStatus('FAIL')}
                            >False</Style.FilterLaunchButton>
            </Style.FilterContainer>
        </Style.FilterSubWrapper>
    )

}