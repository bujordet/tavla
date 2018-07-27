import React from 'react'
import { groupBy } from '../../utils'
import './departureTiles.css'
import DepartureTile from './departureTile'

const DepartureTiles = ({ lineData, visible }) => {
    const { hiddenStops, hiddenRoutes } = visible
    return (
        lineData
            .filter(({ departures }) => departures.length > 0)
            .filter(({ id }) => !hiddenStops.includes(id))
            .map((stop) => {
                const quaysInStop = stop.quays
                const groupedByQuay = groupBy(stop.departures, 'quay')
                const quayIDs = Object.keys(groupedByQuay)

                return quayIDs.map((quayID) => {
                    const quayData = groupedByQuay[quayID]
                    const groupedByRoute = groupBy(quayData, 'route')
                    const routes = Object.keys(groupedByRoute)
                    const quay = quaysInStop.find(q => q.id === quayID)
                    let subHeader = quay.publicCode !== undefined ? 'Plattform ' +quay.publicCode : ''
                    subHeader += quay.description !== undefined ? ' (' + quay.description + ')': ''

                    return (
                        <DepartureTile
                            key={quay.id}
                            quayID={quay.id}
                            header={stop.name}
                            subHeader={subHeader}
                            routes={routes}
                            hiddenRoutes={hiddenRoutes}
                            groupedByRoute={groupedByRoute}
                        />
                    )
                })
            })
    )
}

export default DepartureTiles
