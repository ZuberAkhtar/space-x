import React from 'react'
import Style from './styled-component'

export const LaunchFilterComponent = (props) => {

    return (
        <Style.FilterSubWrapper>
            <Style.FilterTitle>Successful Launch</Style.FilterTitle>
            <Style.FilterContainer>
                            <Style.FilterLaunchButton 
                            key="success" 
                            value={true}
                            onClick={(e)=>props.handleLaunchStatus('SUCCESS')}
                            >True</Style.FilterLaunchButton>
                            <Style.FilterLaunchButton 
                            key="fail" 
                            value={false}
                            onClick={(e)=>props.handleLaunchStatus('FAIL')}
                            >False</Style.FilterLaunchButton>
            </Style.FilterContainer>
        </Style.FilterSubWrapper>
    )

}