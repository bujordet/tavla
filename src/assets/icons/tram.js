import React from 'react'
import Proptypes from 'prop-types'

function Tram({
    height, width, color, className,
}) {
    return (
        <svg
            viewBox="0 0 32 32"
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill={color}
                // eslint-disable-next-line max-len
                d="M25.274 10.717a.53.53 0 0 0-.515-.405h-7.88l1.202-1.208a.586.586 0 0 0 .155-.397.533.533 0 0 0-.152-.37l-2.068-2.115a.531.531 0 0 0-.76.743l1.713 1.75-1.588 1.597H7.485a.53.53 0 0 0-.515.405S5.5 17.331 5.5 17.75c0 .419.946 1.773.946 1.773a.53.53 0 0 0 .5.352h3.04l.512.814a.529.529 0 0 0 .449.248H7.093a.531.531 0 0 0 0 1.063h18.058a.531.531 0 0 0 0-1.063h-3.854a.529.529 0 0 0 .45-.248l.511-.814h3.04a.53.53 0 0 0 .5-.352s.946-1.354.946-1.773c0-.419-1.47-7.033-1.47-7.033zM9.75 15.094c0 .293.293.531 0 .531H7.624a.531.531 0 0 1-.518-.646l.468-2.125a.53.53 0 0 1 .519-.417h1.656c.293 0 0 .239 0 .532v2.125zm5.31 0a.531.531 0 0 1-.53.531h-3.187a.531.531 0 0 1-.53-.531v-2.125c0-.293.237-.531.53-.531h3.187c.293 0 .53.237.53.53v2.126zm-2.26 5.844a.529.529 0 0 0 .45-.25l.512-.813h4.723l.511.814a.529.529 0 0 0 .45.248H12.8zm7.572-5.844a.531.531 0 0 1-.531.531h-3.187a.531.531 0 0 1-.53-.531v-2.125c0-.293.237-.531.53-.531h3.187c.293 0 .53.237.53.53v2.126zm4.663.332a.533.533 0 0 1-.414.199h-2.125c-.293 0-1.062-.238-1.062-.531v-2.125c0-.293.77-.531 1.062-.531h1.656a.53.53 0 0 1 .519.416l.468 2.125a.53.53 0 0 1-.104.447z"
                fillRule="nonzero"
            />
        </svg>

    )
}
Tram.propTypes = {
    color: Proptypes.string,
    height: Proptypes.number,
    width: Proptypes.number,
}

Tram.defaultProps = {
    height: 20,
    width: 20,
    color: '#0F7CDB',
}

export default Tram
