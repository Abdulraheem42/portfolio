import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// import { Modal } from "antd";

const StyledCard = styled.div`
  height: 300px;
  position: relative;
  overflow: hidden;
  border: 1px solid #e8dfdf;
  border-radius: 4px;
  transition: 0.4s;
  .preview-btn {
    display: none;
    color: #fff;
    border: 1px solid #fff;
    text-decoration: none;
    padding: 8px 0;
    width: 100px;
    border-radius: 6px;
    transition: all 0.4s;
    position: sticky;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    font-weight: 600;
    &:hover {
      background-color: #0025ff;
      border: 1px solid #0025ff;
    }
  }
  .preview-image {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    .preview-btn {
      display: inline-block;
    }
  }
  @media only screen and (max-width: 1200px) {
    height: 215px;
  }
  @media only screen and (max-width: 768px) {
    height: 180px;
  }
  @media only screen and (max-width: 576px) {
    .preview-btn {
      font-size: 14px;
      width: 84px;
    }
  }
`;

const DesignPreviewCards = ({ image, link }) => {
  const divRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

  let intervalId;
  const startScrolling = () => setIsScrolling(true);

  const stopScrolling = () => {
    clearInterval(intervalId);
    setIsScrolling(false);
    divRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const image = divRef.current;
    if (isScrolling === true) {
      intervalId = setInterval(() => {
        image?.scrollBy(0, 1);
        if (image.scrollHeight - (image.scrollTop + image.offsetHeight) < 0) {
          clearInterval(intervalId);
        }
      }, 5);
    }
    /**
     * Cleanup Function
     */
    return () => clearInterval(intervalId);
  }, [isScrolling]);

//   const handleModalClose = () => {
//     setModalVisible(false);
//   };

//   const handleModalOpen = () => {
//     setModalVisible(true);
//   };

  return (
    <>
      {/* <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        width="80%"
        // bodyStyle={{ height: "100vh", overflowY: "scroll", overflowX: "hidden" }}
        footer={null}
      >
        <img src={image} width="100%" />
      </Modal> */}
      <StyledCard
        ref={divRef}
        className="container-fluid"
        onMouseLeave={stopScrolling}
        onMouseEnter={startScrolling}
      >
        <a className="preview-btn" >
          Preview
        </a>
        <div className="fixed-container">
          <img src={image} className="preview-image img-fluid" />
        </div>
      </StyledCard>
    </>
  );
};

export default DesignPreviewCards;