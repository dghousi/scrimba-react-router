import React from "react"
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetail(props) {
    const {serviceId} = useParams()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const thisService = servicesData.find(service => service._id === serviceId)
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
        </div>
    )
}

export default ServiceDetail