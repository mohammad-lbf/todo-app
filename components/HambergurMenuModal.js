import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 300px;
  transition: all 0.4s;
  z-index: 110;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const HambergurMenuModal = ({ open, setOpen }) => {
  const [modalContainer, setModalContainer] = useState(null);

  useEffect(() => {
    // ایجاد یا پیدا کردن المان DOM برای پورتال
    let container = document.getElementById('child-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'child-root';
      document.body.appendChild(container);
    }
    setModalContainer(container); // المنت را در حالت ذخیره کنید
  }, []);

  if (!modalContainer) return null; // اگر DOM آماده نیست، چیزی رندر نکنید

  return ReactDOM.createPortal(
    <Div open={open} onClick={() => setOpen(!open)} />,
    modalContainer
  );
};

export default HambergurMenuModal;
