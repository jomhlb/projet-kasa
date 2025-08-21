import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        {isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </div>
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapse;
