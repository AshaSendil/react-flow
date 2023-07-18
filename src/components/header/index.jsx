import React, { useState } from 'react';
import User from '../../assets/Images/user.png';
import Dots from "../../assets/Images/sidenav/DotsNine.svg";
import Calendar from "../../assets/Images/sidenav/Calendar.svg";
import Setting from "../../assets/Images/sidenav/setting.svg";
import Help from "../../assets/Images/sidenav/help.svg";
import { Drawer } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Tab from './Tab';
import Linking from '../../assets/Images/linking1.png'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Publish from '../../assets/Images/publish.png'
import Notify from '../../assets/Images/notify.png'
import Profile from '../../assets/Images/profile.png'

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [refreshToken, setrefreshToken] = useState('');
    const [open, setOpen] = useState(false);
    const [hideVideo,SetHideVideo] = useState(false)
    const [expanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
      setExpanded(!expanded);
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const  Signout =  (e) =>{
        e.preventDefault();
        sessionStorage.clear();
        navigate("/")
    }
  
      
    return (
    <div className="w-full h-12">
    <nav className="bg-gray-800  dark:bg-black">
        <div className="flex flex-wrap items-center mx-auto w-full justify-between md:justify-between lg:justify-between xl:justify-between">
          <button SetHideVideo={SetHideVideo}>
          <div className='flex px-20 py-2' >
           <img src={Linking} alt="setting" className='w-6' />
            </div>
          </button>
          <div className='text-center flex' onClick={()=>toggleAccordion()}>
            <span className='font-bold text-white'>New project</span>
            <div >
            {expanded ? (
              <KeyboardArrowUpIcon className="font-m text-white" style={{ color: 'white' }}  />
            ) : (
              <KeyboardArrowDownIcon style={{ color: 'white' }} />
            )}            </div>

          </div>
            <div className="right hidden md:flex lg:flex xl:flex h-[48px] justify-between">
                <div className="date flex items-center leading-[48px] hover:pointer">
                    <button className="flex justify-center px-4 py-2  justify-center items-center" title="Settings">
                        <img src={Publish} alt="setting"  className='w-24'/>
                    </button>
                </div>
                <div className="date flex items-center  leading-[48px] hover:pointer">
                    <button className="flex justify-center px-4  justify-center items-center"  title="Help">
                        <img src={Notify} alt="setting"/>
                    </button>
                </div>
                <div className="group relative h-[48px] hover:bg-[#FAFAFA] block md:hidden lg:hidden xl:hidden">
                <button className="text-black rounded leading-[48px]">
                    <i className="ri-more-line ri-lg mr-1.5 leading-[55px]"></i>
                </button>
                {/* <nav tabindex="0" className="absolute right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                    <ul className="py-1 PX-5">
                        <li>
                            <a href="/" className="block px-4 py-2 " title="My Day">
                                <i className="ri-calendar-check-fill ri-lg mr-1.5 align-sub"></i>
                                My Day
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block px-4 py-2" title="Settings">
                                <i className="ri-settings-5-fill  ri-lg mr-1.5 align-sub"></i>
                                Settings
                            </a>
                        </li>

                        <li>
                            <a href="/" className="block px-4 py-2" title="Help">
                                <i className="ri-question-fill ri-lg mr-1.5 align-sub"></i>
                                Help
                            </a>
                        </li>

                    </ul>
                </nav> */}
            </div>

            <div className="group relative h-[48px] hover:pointer">
            <button className="text-black px-4 py-2 rounded leading-[48px]">
                    <img src={Profile} className="w-44" alt="user" />
                </button>              
                  <nav tabindex="0" className="absolute right-0 text-left dropdown-bg w-40 border-solid border-2 invisible transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                    <ul className="py-1 Px-5">
             <li>
                            <a href="/sign-in" className="block px-4 py-2 ">
                                <i className="ri-user-line ri-lg mr-1.5 align-sub"></i>
                                My Account
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2" onClick={Signout}>
                                <i className="ri-logout-circle-r-line  ri-lg mr-1.5 align-sub"></i>
                                Signout
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>

            
        </div>
    </nav>
</div>
  )
}

