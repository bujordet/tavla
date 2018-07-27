import React from 'react'
import {
    getIcon, isVisible,
} from '../../utils'


const DepartureTile = ({
    quayID, routes, hiddenRoutes, groupedByRoute, header, subHeader,
}) => {
    if (!isVisible(groupedByRoute, hiddenRoutes)) {
        return null
    }
    return (
        <div className="tile-container" key={quayID}>
            <div className="stop-header">
                <h2>{header}</h2>
                <h4>{subHeader}</h4>
            </div>
            <div>
                {
                    routes
                        .filter((route) => !hiddenRoutes.includes(route))
                        .map((route) => {
                            const routeData = groupedByRoute[route]
                            const routeType = routeData[0].type
                            return (
                                <div key={route}>
                                    <div className="route-name">
                                        <div className="route-icon">{getIcon(routeType, { height: 25, width: 25 })}</div>
                                        <p className="route-name-text">{route}</p>
                                    </div>
                                    <div className="route-departures">
                                        { routeData.map((data, index) => {
                                            return (
                                                <div className="route-departure-time" key={index}>
                                                    {data.time}
                                                </div>)
                                        })}
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default DepartureTile
