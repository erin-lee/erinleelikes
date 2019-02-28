import PropTypes from 'prop-types'
import React from 'react'

const LogoSVG = (props) => {
  const { width, stroke, height, strokeWidth, className, viewBox } = props;

  return (
    <svg 
      viewBox={viewBox} 
      width={width} 
      height={height}
      className={className}
    >
      <defs>
        <path className="logoHover" d="M341.72 380.84c-4.54 7.82-10.84 12.27-31.01 14.62-20.16 2.35-27.14-71.17 0-62.6 27.15 8.57-14.28 41.43-45.71 52.85-31.43 11.43-54.29-25.71-62.86-71.42-8.57-45.72 29.08-59.67 44.54-30.09 15.46 29.58-51.68 87.23-78.82 84.37-27.15-2.86-54.29-44.28-58.57-67.14-4.29-22.86 14.11-82.86 54.11-42.86s-54.64 127.32-102.44 130" id="a"/>
      </defs>
      <use 
        href="#a" 
        fill-opacity="0" 
        stroke={stroke} 
        stroke-width={strokeWidth} 
      />
    </svg>
  )
};

LogoSVG.propTypes = {
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string
};

LogoSVG.defaultProps = {
  stroke: '#ffffff',
  strokeWidth: '4',
  className: '',
  width: '280',
  height: '150',
  viewBox: '58.964 243.157 285.753 155.36'
};

export default LogoSVG
