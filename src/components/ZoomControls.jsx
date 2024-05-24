import '../Styles/ZoomControls.css'
import { FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

const ZoomControls = () => {
  const zoomIn = () => {
    document.body.style.zoom = `${parseFloat(document.body.style.zoom || 1) + 0.1}`;
  };

  const zoomOut = () => {
    document.body.style.zoom = `${parseFloat(document.body.style.zoom || 1) - 0.1}`;
  };

  return (
    <div className="zoom-controls">
      <button onClick={zoomIn} className='zoom-btn'><FaSearchPlus /></button>
      <hr />
      <button onClick={zoomOut} className='zoom-btn'><FaSearchMinus /></button>
    </div>
  );
};

export default ZoomControls;
