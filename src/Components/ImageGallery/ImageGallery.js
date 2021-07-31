import { Component } from "react";

import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Error from "../Error";
import Loader from "../Loader";
import api from "../../Api/api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    status: Status.IDLE,
    error: "",
  };

  componentDidMount() {
    this.setState({ page: 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;

    if (prevProps.query !== query) {
      this.setState({ page: 1, images: [] });
    }

    if (prevProps.query !== query || prevState.page !== page) {
      this.setState({ status: Status.PENDING });

      api
        .apiServise(query, page)
        .then((response) => {
          if (response.hits.length !== 0) {
            this.setState((prev) => ({
              images: [...prev.images, ...response.hits],
              status: Status.RESOLVED,
            }));
          } else {
            this.setState({ status: Status.REJECTED });
          }
        })
        .catch((error) => this.setState({ error: error.message }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  onLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images, status } = this.state;
    const { query } = this.props;

    if (status === "idle") {
      return <div className="start">☝</div>;
    }

    if (status === "resolved" && images.length !== 0) {
      return (
        <>
          <ul className="ImageGallery">
            {images.map((image) => (
              <ImageGalleryItem
                key={image.webformatURL}
                smallImage={image.webformatURL}
                largeImage={image.largeImageURL}
                id={image.id}
                tags={image.tags}
              />
            ))}
          </ul>
          {images.length > 0 && <Button onClick={this.onLoadMore} />}
        </>
      );
    }

    if (status === "pending") {
      return (
        <div className="wrapperLoader">
          <Loader />
        </div>
      );
    }
    if (status === "rejected") {
      return <Error query={query} />;
    }
  }
}

export default ImageGallery;
