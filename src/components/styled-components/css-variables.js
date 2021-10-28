// colors
const colorVars = {
  primaryDarkBrown: '#5a3924',
  primaryLightBrown: '#f2dcc4',
  pinkHover: '#fca4b5',
  darkPink: '#D88091',
  mediumPink: '#F6C2CC',
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
// const mainButtonHoverStyles = {
//   color: `${colorVars.pinkHover}`,
//   transition: `color 0.4s`,
// };

const inputFieldStyles = {
  width: `180px`,
  fontSize: `18px`,
  marginLeft: `13px`,
  marginBottom: `20px`,
  border: `none`,
  borderRadius: `4px`,
};

// does not work
// const inputFieldPlaceholderStyles = {
//   color: `${colorVars.primaryDarkBrown}`,
//   opacity: `0.6`,
//   paddingLeft: `5px`,
// };

module.exports = {
  colorVars,
  fontVars,
  mainButtonStyles,
  inputFieldStyles,
};
