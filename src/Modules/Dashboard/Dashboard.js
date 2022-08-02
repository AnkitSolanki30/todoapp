import React from 'react'
import { useNavigate } from 'react-router-dom';
import { clearCookie, getCookie } from '../../utils/cookieUtils';

const ACCESS_TOKEN = "TodoAccessToken";

const Dashboard = () => {
    const navigation = useNavigate()

    console.log(getCookie(ACCESS_TOKEN));

    // const handlceLogout = (e) => {
    //     console.log("Logged Out From Front End");
    //     clearCookie(ACCESS_TOKEN);
    //     navigation("/")
    // }

    return (
        <>
            <div>Dashboard</div>
            {/* <button type='button' onClick={handlceLogout}>LogOut</button> */}
        </>
    )
}

export default Dashboard