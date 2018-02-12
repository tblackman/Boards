import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router'
import BoardsRouter from './BoardsRouter';
import { BrowserRouter } from 'react-router-dom'
import { boards, graphColor } from "./availableBoards";
import BoardDisplayer from './BoardDisplayer';
import {
  divStyle,
  imgStyle,
  titleStyle,
  logoStyle,
  formPlacement,
  formPadding,
  formStyle
} from "./indexStyle";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/boards' component={BoardsRouter} />
        </Switch>
      </main>
    );
  }
}



class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.name;
    const bimages = product.image;
    const bimagesLogo = product.imageLogo;
    const boardsId= product.id;

    return (
      <div>
        <table>
          <tr>
            <Link to={`/boards/${boardsId}`}>
              <img src= {bimages} style={imgStyle} />
            </Link>
          </tr>
          <tr>
            <Link to={`/boards/${boardsId}`}>
              <img src={bimagesLogo} style={logoStyle} />
            </Link>
          </tr>
          <Link to={`/boards/${boardsId}`}>
          <tr style={titleStyle}> {name}</tr>
          </Link>
        </table>
      </div>
    );
  }
}
export default ProductRow;

// Filter based on https://reactjs.org/docs/thinking-in-react.html

class ProductTable extends React.Component {
  render() {
    const wsbKnee = this.props.wsbKnee;
    const wsbHead = this.props.wsbHead;
    const wsbDouble = this.props.wsbDouble;
    const waveBreakPoint = this.props.waveBreakPoint;
    const waveBreakReef = this.props.waveBreakReef;
    const waveBreakBeach = this.props.waveBreakBeach;
    const rows = [];
    this.props.products.forEach(product => {
      if (wsbKnee && product.wsbKnee !== graphColor ) {
        return;
      }

      if (wsbHead && product.wsbHead !== graphColor) {
        return;
      }

      if (wsbDouble && product.wsbDouble !== graphColor) {
        return;
      }
      if (waveBreakPoint && product.waveBreakPoint !== graphColor ) {
        return;
      }

      if (waveBreakReef && product.waveBreakReef !== graphColor) {
        return;
      }

      if (waveBreakBeach && product.waveBreakBeach !== graphColor) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.name} />);
    });

    return <section style={divStyle}> {rows} </section>;
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnKneeChange = this.handleOnKneeChange.bind(this);
    this.handleOnHeadChange = this.handleOnHeadChange.bind(this);
    this.handleOnDoubleChange = this.handleOnDoubleChange.bind(this);
    this.handleOnPointChange = this.handleOnPointChange.bind(this);
    this.handleOnReefChange = this.handleOnReefChange.bind(this);
    this.handleOnBeachChange = this.handleOnBeachChange.bind(this);
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleOnKneeChange(e) {
    this.props.onKneeChange(e.target.checked);
  }

  handleOnHeadChange(e) {
    this.props.onHeadChange(e.target.checked);
  }

  handleOnDoubleChange(e) {
    this.props.onDoubleChange(e.target.checked);
  }
  handleOnPointChange(e) {
    this.props.onPointChange(e.target.checked);
  }

  handleOnReefChange(e) {
    this.props.onReefChange(e.target.checked);
  }

  handleOnBeachChange(e) {
    this.props.onBeachChange(e.target.checked);
  }

  render() {
    const Child = () => (
      <div>
        <table style={formStyle}>
          <tr>
            <td> Wave Size</td>
          </tr>
        </table>
        <table style={formStyle}>
          <form>
            <tr>
              <td>
              <input
                type="checkbox" id="box-1"
                checked={this.props.wsbKnee}
                onChange={this.handleOnKneeChange}
              />
              <label for="box-1">Knee High</label>
              </td>
              <td style= {formPadding}>
              <input
                type="checkbox" id="box-2"
                checked={this.props.wsbHead}
                onChange={this.handleOnHeadChange}
              />
              <label for="box-2">Head High</label>
              </td>
              <td style= {formPadding}>
              <input
                type="checkbox" id="box-3"
                checked={this.props.wsbDouble}
                onChange={this.handleOnDoubleChange}
              />
              <label for="box-3">Double Head High</label>
              </td>
            </tr>
          </form>
        </table>
        <table style={formStyle}>
          <tr>
            <td> Break Type</td>
          </tr>
        </table>
        <table style={formStyle}>
          <form>
            <tr>
              <td>
                <input
                  type="checkbox" id="box-4"
                  checked={this.props.waveBreakPoint}
                  onChange={this.handleOnPointChange}
                />
                <label for="box-4">PointBreak</label>
              </td>
              <td style= {formPadding}>
                <input
                  type="checkbox" id="box-5"
                  checked={this.props.waveBreakReef}
                  onChange={this.handleOnReefChange}
                />
                <label for="box-5">Reef</label>
              </td>
              <td style= {formPadding}>
                <input
                  type="checkbox" id="box-6"
                  checked={this.props.waveBreakBeach}
                  onChange={this.handleOnBeachChange}
                />
                <label for="box-6">Beach</label>
              </td>
            </tr>
          </form>
        </table>
      </div>
)

    return (
      <div style={formPlacement}>
        <span className="btn btn-three" onClick={this.toggleHidden.bind(this)}>BOARD SELECTOR</span>
       {!this.state.isHidden && <Child />}
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleOnKneeChange = this.handleOnKneeChange.bind(this);
    this.handleOnHeadChange = this.handleOnHeadChange.bind(this);
    this.handleOnDoubleChange = this.handleOnDoubleChange.bind(this);
    this.handleOnPointChange = this.handleOnPointChange.bind(this);
    this.handleOnReefChange = this.handleOnReefChange.bind(this);
    this.handleOnBeachChange = this.handleOnBeachChange.bind(this);
  }

  handleOnKneeChange(wsbKnee) {
    this.setState({
      wsbKnee: wsbKnee
    });
  }

  handleOnHeadChange(wsbHead) {
    this.setState({
      wsbHead: wsbHead
    });
  }

  handleOnDoubleChange(wsbDouble) {
    this.setState({
      wsbDouble: wsbDouble
    });
  }
  handleOnPointChange(waveBreakPoint) {
    this.setState({
      waveBreakPoint: waveBreakPoint
    });
  }

  handleOnReefChange(waveBreakReef) {
    this.setState({
      waveBreakReef: waveBreakReef
    });
  }

  handleOnBeachChange(waveBreakBeach) {
    this.setState({
      waveBreakBeach: waveBreakBeach
    });
  }

  render() {
    return (
      <div>
        <Main/>
        <SearchBar
          wsbKnee={this.state.wsbKnee}
          wsbHead={this.state.wsbHead}
          wsbDouble={this.state.wsbDouble}
          onKneeChange={this.handleOnKneeChange}
          onHeadChange={this.handleOnHeadChange}
          onDoubleChange={this.handleOnDoubleChange}
          waveBreakPoint={this.state.waveBreakPoint}
          waveBreakReef={this.state.waveBreakReef}
          waveBreakBeach={this.state.waveBreakBeach}
          onPointChange={this.handleOnPointChange}
          onReefChange={this.handleOnReefChange}
          onBeachChange={this.handleOnBeachChange}
        />
        <ProductTable
          products={this.props.products}
          wsbKnee={this.state.wsbKnee}
          wsbHead={this.state.wsbHead}
          wsbDouble={this.state.wsbDouble}
          waveBreakPoint={this.state.waveBreakPoint}
          waveBreakReef={this.state.waveBreakReef}
          waveBreakBeach={this.state.waveBreakBeach}
        />
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <FilterableProductTable products={boards} />
  </BrowserRouter>),
  document.getElementById("root")
);
