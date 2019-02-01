import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css'
import Header from '../components/Header'

class MainPage extends React.Component {
  componentDidMount = () => {
    this.props.onRequestRobots()
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })
  }
  
  render() {
    const { onSearchChange, robots, isPending } = this.props

    const filteredRobots = this.filterRobots()

    return isPending ?
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default MainPage
