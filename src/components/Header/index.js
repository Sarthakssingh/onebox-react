import {FaAngleDown} from 'react-icons/fa'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="header-container">
      <h1 className="header-title">Onebox</h1>
      <div className="nav-menu">
        <p className="workspace">Tims Workspace </p>
        <FaAngleDown className="icons" />
      </div>
    </div>
  </nav>
)

export default Header
