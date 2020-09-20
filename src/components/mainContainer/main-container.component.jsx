import React from 'react'
import {connect} from 'react-redux';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import CardList from './../cardList/card-list.component'
import FilterContainer from './../filter/filter-container.component'
import {setLoader} from './../../redux/action'
import Style from './styled-components'


const override = css`
position: fixed;
top: 0;
bottom: 0;
right: 0;
height: -webkit-fill-available;
width: 100%;
background-color: #F8F8F8AD;
z-index: 1;
padding-top: 20%;
`;

class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            programList: [],
        }
    }

    componentDidMount() {
       this.props.setLoader(false)
    }

    render() {
        return (
            <Style.MainWrapper>
                <Style.Header >
                    SpaceX Launch Programs
                </Style.Header>
                <Style.Content>
                <BeatLoader	
                    css={override}
                    size={50}
                    color={"#7BBA01"}
                    loading={this.props.loader}
                  />
                <FilterContainer/>
                <CardList/>
                </Style.Content>
            </Style.MainWrapper>
        );
    }
}

const mapStateToProps = (state) => ({ loader: state.loader })

const mapDispatchToProps = dispatch => ({
    setLoader: value => dispatch(setLoader({loader: value}))
  })

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);