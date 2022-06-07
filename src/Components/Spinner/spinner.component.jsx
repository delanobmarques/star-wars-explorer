import './spinner.styles.css';

const Spinner = (props) => {
  return (
    <div className="overlay">
      <div className="spinner">{props.children}</div>
    </div>
  );
}

export default Spinner;