import React, { useEffect } from 'react';

import {axiosWithAuth} from '../../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom';
 
const baseUrl = 'https://food-truck-trackr-api.herokuapp.com'

const DashBoard = () => {
    const history = useHistory();
    const signout = () => {
        localStorage.removeItem("token")
        history.push('/')
    }
    const fetchTruckData = () => {
        axiosWithAuth().get(`${baseUrl}/api/trucks`)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchTruckData()
    }, [])
    return (
        <div>
        <div>DashBoard</div>
        <button onClick={signout}>Signout</button>
        </div>
    )
}

export default DashBoard 