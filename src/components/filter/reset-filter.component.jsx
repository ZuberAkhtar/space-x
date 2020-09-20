import React from 'react'
import Style from './styled-component'

export const ResetFilterComponent = (props) => {

    return (
        <Style.FilterSubWrapper>
            <Style.FilterTitle>Reset</Style.FilterTitle>
            <Style.FilterResetContainer>
                            <Style.FilterLaunchButton 
                            key="reset" 
                            value={"reset"}
                            onClick={(e)=>{
                                props.handleFilterReset(e)
                            }
                            }
                            >Reset</Style.FilterLaunchButton>
            </Style.FilterResetContainer>
        </Style.FilterSubWrapper>
    )

}