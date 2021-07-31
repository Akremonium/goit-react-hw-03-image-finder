import Loader from "react-loader-spinner";

const LoaderFunk = () => {
  return (
    <Loader
      type="Audio"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default LoaderFunk;
