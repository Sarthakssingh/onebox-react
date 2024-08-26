import {TbHomeFilled} from 'react-icons/tb'
import {MdPersonSearch} from 'react-icons/md'
import {IoMdMail, IoIosStats} from 'react-icons/io'
import {FaTelegramPlane, FaInbox} from 'react-icons/fa'
import {IoMenu} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'

import './index.css'

const Sidebar = () => (
  <nav className="nav-sidebar">
    <div className="sidebar-container">
      <img
        src="https://res.cloudinary.com/dljgducmq/image/upload/v1724661700/1680d9613629542a2474f79f92f7c022_ac73ut-media_lib_thumb_pkbie8.png"
        alt="logo"
        className="sidebar-logo"
      />
      <div className="nav-sidebar-menu">
        <TbHomeFilled className="icons" />
        <MdPersonSearch className="icons" />
        <IoMdMail className="icons" />
        <FaTelegramPlane className="icons" />
        <IoMenu className="icons" />
        <FaInbox className="icons" />
        <IoIosStats className="icons" />
      </div>
      <div className="profile-pic-container">
        <CgProfile className="profile-icon" />
      </div>
    </div>
  </nav>
)

export default Sidebar
