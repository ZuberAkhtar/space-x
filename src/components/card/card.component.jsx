import React from 'react';
import PropTypes from 'prop-types';
import Style from './styled-components'

export const Card = (props) => {

    const getMissionIds = missionIds => {
        return missionIds?.map((id, index) => {
            return <Style.CardMissionIdList key={id ? id : index}>{id}</Style.CardMissionIdList>
        })
    }

    return (
        <Style.CardContainer>
            <Style.CardImage
                src={props.data?.links.mission_patch_small || "https://www.spacex.com/static/images/share.jpg"}
                loading="lazy"
                alt={props.data?.rocket?.rocket_name} />
            <Style.CardTitle>{props.data?.mission_name} #{props.data?.flight_number}</Style.CardTitle>
            <Style.CardInfoDescription>
                <Style.CardInfoTitle>Mission Ids</Style.CardInfoTitle>
                {getMissionIds(props.data?.mission_id)}<br/>
            </Style.CardInfoDescription>

            <Style.CardInfoDescription>
                <Style.CardInfoTitle>Launch Year:</Style.CardInfoTitle> {props.data?.launch_year}</Style.CardInfoDescription>
            <Style.CardInfoDescription>
                <Style.CardInfoTitle>Successful Launch:</Style.CardInfoTitle> {props.data?.launch_success ? "true" : "false"} </Style.CardInfoDescription>
            <Style.CardInfoDescription>
                <Style.CardInfoTitle>Successful Landing:</Style.CardInfoTitle> {props.data?.rocket.first_stage.cores[0].land_success ? "true" : "false"} </Style.CardInfoDescription>
        </Style.CardContainer>
    )
}

