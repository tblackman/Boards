import React from 'react';
import { Link } from 'react-router-dom';
import { boards } from "./availableBoards";
import {
  divStyle,
  imgStyle,
  titleStyle,
  logoStyle,
  formStyle,
  displayerContainer,
  displayerLogoStyle,
  displayerDescription,
  displayerBarContainer,
  displayerTitleStyle,
  displayerBarTitle,
  displayerImgStyle
} from "./indexStyle";

class BoardDisplayer extends React.Component {

  render() {
    const boardIdString = this.props.match.params.boardParamId;
    const boardId = parseInt(boardIdString, 10);
    const viewingBoard = boards.find(board => board.id === boardId);

    const waveSizeBarKnee =  {
      backgroundColor: `${viewingBoard.wsbKnee}`,
      borderRadius: '10px 0px 0px 10px'
    };
   const waveSizeBarHead =  {
     backgroundColor: `${viewingBoard.wsbHead}`
    };
    const waveSizeBarDouble =  {
      backgroundColor: `${viewingBoard.wsbDouble}`,
      borderRadius: '0px 10px 10px 0px'
     };

    if (!viewingBoard) {
      return <div>Sorry, but the board was not found</div>
    }
    return (
      <div style={displayerContainer}>
          <div>
            <tr>
              <img src={viewingBoard.imageLogo} style ={displayerLogoStyle} />
            </tr>
            <tr style={displayerTitleStyle}>
              {viewingBoard.name}
            </tr>
            <tr style = {displayerDescription}>
            {viewingBoard.boardDesc}
            </tr>
          </div>
          <div><img src={viewingBoard.image} style={displayerImgStyle} /></div>
          <div>
            <h1 style= {displayerBarTitle}> Wave Size </h1>
              <div style ={displayerBarContainer}>
                <div style = {waveSizeBarKnee}>Knee</div>
                <div style = {waveSizeBarHead}>Head</div>
                <div style = {waveSizeBarDouble}>Double</div>
              </div>
          </div>
      </div>
    );
  }
}

export default BoardDisplayer;
