// colors
const colorVars = {
  primaryDarkBrown: '#5a3924',
  primaryLightBrown: '#f2dcc4',
  pinkHover: '#fca4b5',
  darkPink: '#D88091',
  mediumBrown: '#D7A484',
};

// fonts
const fontVars = {
  titleFont: `'IBM Plex Serif', serif`,
  mainFont: `'Urbanist', sans-serif`,
};

// Mixins
const mainButtonStyles = {
  margin: `20px`,
  backgroundColor: `${colorVars.primaryDarkBrown}`,
  color: `${colorVars.primaryLightBrown}`,
  fontSize: `20px`,
  borderRadius: `5px`,
  height: `30px`,
  width: `fit-content`,
  transition: `color 0.4s`,
};

// these styles are not working properly when imported as mixin
const mainButtonHoverStyles = {
  color: `${colorVars.pinkHover}`,
  transition: `color 0.4s`,
};

module.exports = { colorVars, fontVars, mainButtonStyles, mainButtonHoverStyles };
