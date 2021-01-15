import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';

import logo from '../../../assets/img/coat-of-arms.png';
import color from '../../../config/color';

function Toolbar({ landing, changePage }) {
  const [scrolled, setScrolled] = useState(false);

  const checkScroll = () => {
    if (!scrolled && window.pageYOffset > 300) {
      setScrolled(true);
    } else if (setScrolled && window.pageYOffset <= 300) {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
  }, [scrolled]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    changePage(!landing);
  };

  return (
    <Wrapper>
      <article className="nav">
        <div
          className={scrolled ? 'show' : 'hide'}
          onClick={() => {
            handleClick();
          }}
        >
          {landing ? (
            <FiUploadCloud className="icon" />
          ) : (
            <FaHome className="icon" />
          )}
          <p>{landing ? 'Upload' : 'Home'}</p>
        </div>
        <div className="social">
          <a
            href="https://twitter.com/FMICNigeria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.facebook.com/NIGPORTAL/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon" />
          </a>
        </div>
      </article>
      <article className="hero">
        <div className="row">
          <div className="img-container">
            <img src={logo} alt="coat of arm" />
          </div>
          <h1>
            Ministries and Federal <br /> Parastatals
          </h1>
        </div>
        <article
          className="upload"
          onClick={() => {
            handleClick();
          }}
        >
          <div className="box">
            <p>{landing ? 'Upload' : 'Home'}</p>
            {landing ? (
              <FiUploadCloud className="icon" />
            ) : (
              <FaHome className="icon" />
            )}
          </div>
        </article>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${color.colorWhite};
  .icon {
    font-size: 1.4em;
    cursor: pointer;
  }
  .nav {
    display: flex;
    background-color: ${color.colorGreen};
    justify-content: space-between;
    padding: 1.5rem 5rem;
    width: 100%;
    position: fixed;
    top: 0;

    .show {
      opacity: 1;
      display: flex;
      align-items: center;
      cursor: pointer;
      p {
        margin-left: 1.5rem;
        font-weight: bold;
        font-family: 'poppins', sans-serif;
        margin-top: 0.3rem;
      }
    }
    .hide {
      opacity: 0;
      display: flex;
    }
    .social {
      a {
        color: ${color.colorWhite};
        text-decoration: none;
      }
      a:not(:last-child) {
        margin-right: 3rem;
      }
    }
  }
  .hero {
    padding: 3rem;
    background-color: ${color.colorGreenLight};
    margin-top: 30px;
    .row {
      display: flex;
      align-items: center;
      .img-container {
        width: 150px;
        img {
          width: 100%;
        }
      }
      h1 {
        font-size: 1.8em;
        margin-left: 2rem;
      }
    }
    .upload {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      p {
        margin-right: 1.2rem;
      }
      .box {
        display: flex;
        align-items: center;
      }
    }
  }
  @media (min-width: 767px) {
    .hero {
      padding: 3rem 6rem;
      margin-top: 40px;
      .row {
        h1 {
          font-size: 2.5em;
        }
      }
    }
  }
  @media (min-width: 1300px) {
    .hero {
      margin-top: 50px;
    }
  }
`;

export default Toolbar;
