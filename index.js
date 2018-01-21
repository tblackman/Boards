import React from 'react';
import ReactDOM from 'react-dom';
import { boards } from "./availableBoards";
import {
  divStyle,
  imgStyle,
  titleStyle,
  logoStyle,
  formStyle
} from "./indexStyle";

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.name;
    const bimages = product.image;
    const bimagesLogo = product.imageLogo;

    return (
      <div>
        <table>
          <tr>
            <img src={bimages} style={imgStyle} />
          </tr>
          <tr>
            <img src={bimagesLogo} style={logoStyle} />
          </tr>
          <tr style={titleStyle}> {name}</tr>
        </table>
      </div>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const waveSizeKnee = this.props.waveSizeKnee;
    const waveSizeHead = this.props.waveSizeHead;
    const waveSizeDouble = this.props.waveSizeDouble;
    const rows = [];
    this.props.products.forEach(product => {
      if (waveSizeKnee && product.waveSize !== "Knee") {
        return;
      }

      if (waveSizeHead && product.waveSize !== "Head") {
        return;
      }

      if (waveSizeDouble && product.waveSize !== "Double") {
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

  render() {
    return (
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
                  type="checkbox"
                  checked={this.props.waveSizeKnee}
                  onChange={this.handleOnKneeChange}
                />
                Knee High
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={this.props.waveSizeHead}
                  onChange={this.handleOnHeadChange}
                />
                Head High
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={this.props.waveSizeDouble}
                  onChange={this.handleOnDoubleChange}
                />
                Double Head High
              </td>
            </tr>
          </form>
        </table>
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
  }

  handleOnKneeChange(waveSizeKnee) {
    this.setState({
      waveSizeKnee: waveSizeKnee
    });
  }

  handleOnHeadChange(waveSizeHead) {
    this.setState({
      waveSizeHead: waveSizeHead
    });
  }

  handleOnDoubleChange(waveSizeDouble) {
    this.setState({
      waveSizeDouble: waveSizeDouble
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          waveSizeKnee={this.state.waveSizeKnee}
          waveSizeHead={this.state.waveSizeHead}
          waveSizeDouble={this.state.waveSizeDouble}
          onKneeChange={this.handleOnKneeChange}
          onHeadChange={this.handleOnHeadChange}
          onDoubleChange={this.handleOnDoubleChange}
        />
        <ProductTable
          products={this.props.products}
          waveSizeKnee={this.state.waveSizeKnee}
          waveSizeHead={this.state.waveSizeHead}
          waveSizeDouble={this.state.waveSizeDouble}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable products={boards} />,
  document.getElementById("root")
);
