// controls the grid laylout of all boards
export const divStyle = {
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridAutoRows: 'auto',
};

// contols title style on grid page
export const titleStyle = {
  color: '#A4A2A2',
  fontFamily: 'Oswald',
  textDecoration: 'none',
  fontSize: '1.3em'

}

// controls  board image size on grid page
export const imgStyle = {
  width: '80%',
  height: '80%',
  objectFit: 'cover',
  margin: '20px'
};

// controls logo size on grid page
export const logoStyle = {
  height: 20,
  objectFit:'scale-down'

}

export const formStyle = {
  color: '#000000',
  fontFamily: 'Oswald',
  textDecoration: 'none',
  fontSize: '1.3em',
  marginLeft:'auto',
  marginRight:'auto'
}

export const formPlacement = {
   textAlign: 'center',
   fontFamily: 'Oswald'

}

export const formPadding = {
  paddingLeft: '10px'
}

export const displayerLogoStyle = {
  height: 50,
  objectFit:'scale-down'

}

export const displayerTitleStyle = {
  color: '#000000',
  fontFamily: 'Oswald',
  textDecoration: 'none',
  fontSize: '2.3em'

}

export const displayerDescription = {
  fontFamily: 'Oswald',
  fontSize: '1.1em'
}

// bar graph styling
export const displayerBarContainer = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderColor: 'black',
  fontFamily: 'Oswald',
  textDecoration: 'none',
  fontSize: '1.1em',
  textAlign: 'center',
  borderRadius: '10px'

}

export const displayerBarTitle = {
  color: '#000000',
  fontFamily: 'Oswald',
  textDecoration: 'none',
  fontSize: '2em',
  textAlign: 'center'
}

// size of board image on display page
export const displayerImgStyle = {
  width: '70%',
  objectFit: 'cover',
  margin: '20px',
  textAlign: 'center'

}
