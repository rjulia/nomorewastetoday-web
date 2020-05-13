import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AddPicture from '../../assets/images/trafficjam.jpg';
import { Title, Paragraph } from '../../components';

const Wrapper = styled('div')`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  div {
    position: relative;
    width: calc(100% - 80px);
    height: calc(100vh - 168px);
    margin: 128px 40px 40px;
    border-radius: 40px;
    overflow: hidden;
  }
  div img {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: -100;
  }
  h2 {
    position: absolute;
    color: #fff;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    text-shadow: 1px 1px 10px #000000;
    text-align: center;
  }
  p {
    margin: 0;
    font-size: 15px;
    font-weight: 300;
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #fff;
    text-shadow: 1px 1px 10px #000000;
  }
  button {
    display: flex;
    position: absolute;
    left: 50%;
    top: 60%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    margin: 20px 0;
    background-color: rgba(255, 255, 255, 0.35);
    text-shadow: 1px 1px 10px #000000;
    color: white;
  }
  span {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    font-weight: 300;
    color: #fff;
    a {
      color: #fff;
      font-weight: 600;
    }
  }
  @media (min-width: 1024px) {
    width: calc(100vw - 100px);
    margin-left: 100px;
    div {
      width: calc(100% - 80px);
      height: calc(100vh - 80px);
      margin: 40px;
    }
    p {
      font-size: 30px;
    }
    span {
    }
  }
`;
const NoMatch = () => {
  return (
    <Wrapper>
      <Title tag={'h2'} size={65} text={'PAGE NO FOUND'} />
      <Paragraph
        text={'This page is not exit,<br/> please use the buttton below to stay with us.'}
      />
      <div>
        <img src={AddPicture} alt="add section" />
      </div>
      <NavLink to="/">
        <button>HOME</button>
      </NavLink>
      <span>
        Image by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pixabay.com/users/ShenXin-3010244/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1886027"
        >
          昕 沈
        </a>
        {'  '}from{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2047483"
        >
          Pixabay
        </a>
      </span>
    </Wrapper>
  );
};

export default NoMatch;
