import React from 'react';
import { Link } from 'react-router-dom';
import { boards, graphColor } from "./availableBoards";
import {
  divStyle,
  imgStyle,
  titleStyle,
  logoStyle,
  formStyle,
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

// Wave Size Graph
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
//Break Graph
   const waveBreakBarPoint =  {
     backgroundColor: `${viewingBoard.waveBreakPoint}`,
     borderRadius: '10px 0px 0px 10px'
    };
   const waveBreakBarReef =  {
     backgroundColor: `${viewingBoard.waveBreakReef}`
   };
   const waveBreakBarBeach =  {
     backgroundColor: `${viewingBoard.waveBreakBeach}`,
     borderRadius: '0px 10px 10px 0px'
   };
// Power Graph
  const wavePowerBarWeak =  {
    backgroundColor: `${viewingBoard.wavePowerWeak}`,
    borderRadius: '10px 0px 0px 10px'
   };
  const wavePowerBarMedium =  {
    backgroundColor: `${viewingBoard.wavePowerMedium}`
  };
  const wavePowerBarStrong =  {
    backgroundColor: `${viewingBoard.wavePowerStrong}`,
    borderRadius: '0px 10px 10px 0px'
  };
// Skill Graph
  const waveSkillBarNovice =  {
    backgroundColor: `${viewingBoard.waveSkillNovice}`,
    borderRadius: '10px 0px 0px 10px'
   };
  const waveSkillBarIntermediate =  {
    backgroundColor: `${viewingBoard.waveSkillIntermediate}`
  };
  const waveSKillBarExpert =  {
    backgroundColor: `${viewingBoard.waveSkillExpert}`,
    borderRadius: '0px 10px 10px 0px'
  };


    if (!viewingBoard) {
      return <div>Sorry, but the board was not found</div>
    }
    return (
      <div className="boardDisplayer">
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
            <h1 style= {displayerBarTitle}> Break </h1>
                <div style ={displayerBarContainer}>
                  <div style = {waveBreakBarPoint}>PointBreak</div>
                  <div style = {waveBreakBarReef}>Reef</div>
                  <div style = {waveBreakBarBeach}>Beach</div>
                </div>
            <h1 style= {displayerBarTitle}> Power </h1>
                  <div style ={displayerBarContainer}>
                    <div style = {wavePowerBarWeak}>Peak/Mushy</div>
                    <div style = {wavePowerBarMedium}>Medium/Steep</div>
                    <div style = {wavePowerBarStrong}>Strong/Barrels</div>
                  </div>
            <h1 style= {displayerBarTitle}> Skill Level </h1>
                    <div style ={displayerBarContainer}>
                      <div style = {waveSkillBarNovice}>Novice</div>
                      <div style = {waveSkillBarIntermediate}>Intermediate</div>
                      <div style = {waveSKillBarExpert}>Expert</div>
                    </div>
          </div>
      </div>
    );
  }
}

export default BoardDisplayer;
