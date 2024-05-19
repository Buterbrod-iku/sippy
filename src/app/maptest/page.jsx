'use client'
import style from './maptest.module.scss'
import LeftActivity from "@/components/mainApp/leftActivity/leftActivity";
import FilterBlock from "@/components/mainApp/leftActivity/filterBlock/filterBlock";
import Map from "@/components/map/map";
import {useFetching} from "@/components/utils/hooks/useFetching";
import React, { useState } from 'react';
import Points from "@/API/points";
import axios from 'axios';


axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('token');

const Page = () => {
    
    const POINTS = [
        {
            long: 53.356349, 
            lat: 83.701671
        },
        {
            long: 53.355349, 
            lat: 83.706671
        },
        {
            long: 53.346349, 
            lat: 83.711671
        }
    ]

    const CENTER = {
        long: 53.356349, 
        lat: 83.701671
    }

    const [pointFilter, setPointFilter] = useState({
        "longitude": "53.43",
        "latitude": "83.52"
    })
    const [allPoints, setAllPoints] = useState([])
    const [firstRendered, setFirstRendered] = useState(true)
    
    const send = async (e) => {
        await fetchGetNearestPoints(pointFilter)
    }
    
    const [fetchGetNearestPoints, isLoading, error] = useFetching(async (query) => {
        let response = await Points.getNearestPoints(query);
        if (response.status = 200) {
            response.data.forEach(point => {
                allPoints.push(point)
            })
        }
        console.log(allPoints);
    })
    
    if (firstRendered) {
        send()
        setFirstRendered(false);
    }
    
    
    return (
        <div className={style.main}>
            MAP TEST PAGE!

            {
                error ? <p style={{color: "red", marginTop: "20px"}}>{error}</p> : null
            }
            {/* <FilterBlock /> */}
            <Map center={CENTER} points={allPoints} />
            <LeftActivity />
        </div>
    );
};

export default Page;