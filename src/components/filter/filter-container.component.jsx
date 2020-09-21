import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios'
import { connect } from 'react-redux';
import {YearFilterComponent} from './year-filter.component'
import {LaunchFilterComponent} from './launch-filter.component'
import {LandingFilterComponent} from './landing-filter.component'
import {ResetFilterComponent} from './reset-filter.component'
import {BASE_URL} from '../../network/url'
import {updateProgramsList, setLoader} from '../../redux/action'
import Style from './styled-component'


class FilterContainer extends React.Component {
    constructor(){
        super();
        this.state = {
        year: null,
        launch: null,
        land: null,
        years : ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]
        }
    }
   
   handleYearChange = (selectedYear) => {
       const {year, launch, land} = this.state
    if(year !== selectedYear){

        this.setState({
            year: selectedYear
        }, ()=>{
            this.filterData(selectedYear, launch, land)
        })
    }
   }

   handleLaunchStatus = (launchStatus) => {
       const {year, launch, land} = this.state
       const launchFilter = launchStatus.toUpperCase() === 'SUCCESS' ? true : false
            this.setState({
                launch: launchFilter
            }, ()=>{
                this.filterData(year, launchFilter, land)
            }) 
   }

   handleLandingStatus = (landingStatus) => {
    const {year, launch, land} = this.state
    const landingFilter = landingStatus.toUpperCase() === 'SUCCESS' ? true : false
         this.setState({
             land: landingFilter
         }, ()=>{
             this.filterData(year, launch, landingFilter)
         })

}

   filterData = (year = null, launch = null, land = null) => {
    const limitFilter = `?limit=150`;
    const yearFilter = (year!==null) ? `&launch_year=${year}` : '';
    const launchFilter = (launch!==null) ? `&launch_success=${launch}` : '';
    const landFilter = (land!==null ) ? `&land_success=${land}` : '';
    const filterUrl = `${limitFilter}${yearFilter}${launchFilter}${landFilter}`;
    this.props.setLoader(true)
    return axios.get(`${BASE_URL}${filterUrl}`).then(res=>{

        const data = res.data;

        this.props.updateProgramsList({ data, loader : false })

        browserHistory.replace(`/${yearFilter}${launchFilter}${landFilter}`)

    }).catch(err => {
        console.log('err',err)
        this.props.updateProgramsList({data:[], loader: false})
    })


   }

   handleFilterReset =(e)=>{
       console.log("reached")
       this.setState({
           year: null,
           launch: null,
           land : null,
       },()=>{
           this.filterData()
       })
   }

    render(){
        return(
            <Style.FilterWrapper>
            <Style.FilterText className="filter-text">Filters</Style.FilterText>
            <YearFilterComponent 
            years={this.state.years}
            handleYearChange={this.handleYearChange}
            />
            <LaunchFilterComponent handleLaunchStatus = {this.handleLaunchStatus}/>
            <LandingFilterComponent handleLandingStatus = {this.handleLandingStatus}/>
            <ResetFilterComponent handleFilterReset = {this.handleFilterReset}/>
            </Style.FilterWrapper>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    updateProgramsList: data => dispatch(updateProgramsList(data)),
    setLoader: value => dispatch(setLoader({loader: value}))
  })
  
  export default connect(null, mapDispatchToProps)(FilterContainer);
