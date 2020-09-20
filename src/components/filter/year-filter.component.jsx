import React from 'react'
import Style from './styled-component'

export const YearFilterComponent = (props) => {

    return (
        <Style.FilterSubWrapper>
            <Style.FilterTitle>Launch Year</Style.FilterTitle>
            <Style.FilterContainer>
                {
                   props.years && props.years.map((year) => {
                        return (
                            <Style.FilterYearButton 
                            key={year}
                            value={year}
                            onClick={(e)=>props.handleYearChange(year)}
                            >{year}</Style.FilterYearButton>
                        )
                    })
                }
            </Style.FilterContainer>
        </Style.FilterSubWrapper>
    )

}