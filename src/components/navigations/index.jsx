import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Home from "../../assets/Images/sidenav/logo1.png";
import File from '../../assets/Images/file.png'
import Sharing from '../../assets/Images/sharing.png'

export default function Navigations() {

  const navigate = useNavigate();
  const params = useLocation()
  const current_path = params.pathname

  return (
    <div className="bg-gray-700  rounded-l-lg  h-screen">
      <div className="navigation">
        <div className={`menu text-center px-3 py-3 leading-4 ${current_path === '/' ? 'text-primary bg-[#FAFAFA]' : ''}`}>
        <button onClick={() => navigate('/home')} type='button' className={`leading-4 ${current_path === '/' ? 'text-primary ' : ''}`}>
            <div className="icon flex justify-center  hover:bg-blue-600 py-2 px-2 rounded-md opacity-75">
              <img src={Home} alt="home" className=''/>
            </div>
          </button>
        </div>
      </div>
      <div className={`menu text-center px-3 py-3 leading-4 ${current_path === '/create' ? 'text-primary bg-[#FAFAFA]' : ''}`}>
        <button onClick={() => navigate('/home')} type='button' className={`leading-4 ${current_path === '/create' ? 'text-primary' : ''}`}>
        <div className="icon flex justify-center  hover:bg-blue-600 py-2 px-2 rounded-md opacity-75">
              <img src={File} alt="create" />
            </div>
          </button>
        </div>
        <div className={`menu text-center px-3 py-3 leading-4 ${current_path === '/create' ? 'text-primary bg-[#FAFAFA]' : ''}`}>
        <button onClick={() => navigate('/create')} type='button' className={`leading-4 ${current_path === '/create' ? 'text-primary' : ''}`}>
        <div className="icon flex justify-center  hover:bg-blue-600 py-2 px-2 rounded-md opacity-75">
              <img src={Sharing} alt="create" />
            </div>
          </button>
        </div>
        <div className={`menu text-center px-3 py-3 leading-4 ${current_path === '/create' ? 'text-primary bg-[#FAFAFA]' : ''}`}>
        <button onClick={() => navigate('/create')} type='button' className={`leading-4 ${current_path === '/create' ? 'text-primary' : ''}`}>
        <div className="icon flex justify-center  hover:bg-blue-600 py-2 px-2 rounded-md opacity-75">
              <img src={Home} alt="create" />
            </div>
          </button>
        </div> <div className={`menu text-center px-3 py-3 leading-4 ${current_path === '/create' ? 'text-primary bg-[#FAFAFA]' : ''}`}>
        <button onClick={() => navigate('/create')} type='button' className={`leading-4 ${current_path === '/create' ? 'text-primary' : ''}`}>
        <div className="icon flex justify-center  hover:bg-blue-600 py-2 px-2 rounded-md opacity-75">
              <img src={Home} alt="create" />
            </div>
          </button>
        </div> <div className={`menu text-center px-3 py-3 leading-4 ${current_path === '/create' ? 'text-primary bg-[#FAFAFA]' : ''}`}>
        <button onClick={() => navigate('/create')} type='button' className={`leading-4 ${current_path === '/create' ? 'text-primary' : ''}`}>
        <div className="icon flex justify-center  hover:bg-blue-600 py-2 px-2 rounded-md opacity-75">
              <img src={Home} alt="create" />
            </div>
          </button>
        </div> 
    </div>
  )
}