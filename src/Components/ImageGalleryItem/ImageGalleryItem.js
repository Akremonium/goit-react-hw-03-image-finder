import { Component } from "react";
import Modal from "../Modal";

class ImageGalleryItem extends Component {
  state = {
    largeImg: "",
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onImgClick = (largeImg) => {
    this.setState({ largeImg: largeImg });
    this.toggleModal();
  };

  render() {
    const { smallImage, largeImage, id, tags } = this.props;

    return (
      <>
        <li
          className="ImageGalleryItem"
          key={id}
          id={id}
          onClick={() => this.onImgClick(largeImage)}
        >
          <img src={smallImage} alt={tags} className="ImageGalleryItem-image" />
        </li>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
