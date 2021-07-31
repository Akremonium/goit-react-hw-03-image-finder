const Error = ({ query }) => {
  return (
    <div className="error" role="alert">
      <h2>No matches found on "{query}"</h2>
    </div>
  );
};

export default Error;
