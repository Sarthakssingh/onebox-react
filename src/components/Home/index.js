import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Sidebar />
        <div>
          <Header />
        </div>
      </div>
    )
  }
}

export default Home
