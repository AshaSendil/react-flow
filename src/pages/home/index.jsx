import React from 'react';
import Dashboard from './dashboard';
import Layout from '../../components/layout';
import Header from '../../components/header';
import { Sidebar } from 'semantic-ui-react';
import SideBar from '../../components/sidebar';
import { useState } from 'react';
export default function Home() {
    return (
        <div className='w-full h-screen  bg-gray-50 overflow-hidden'>
            <Dashboard /> 
        </div>

    )
}