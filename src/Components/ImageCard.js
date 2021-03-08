import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
  }

  componentDidMount() {
    const {height, width} = this.props.image;
    // we're scaling the width to 250px, so the real height needs
    // to mutiply the ratio of scaling width and real width
    const scaledHeight = (height * 250) / width;
    const spans = Math.ceil(scaledHeight / 10);
    this.setState({spans});
  }

  render() {
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
