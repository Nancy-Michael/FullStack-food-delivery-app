import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

function AppDownload() {
    return (
        <div className='app-download' id='mobile-app'>
            <p>For Better Experince Download Tomato App</p>
            <div className="app-download-paltforms">
                <img src={assets.app_store} alt="" />
                <img src={assets.play_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
