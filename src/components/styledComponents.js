import styled from 'styled-components';

import color from '../config/color';

export const BtnLink = styled.button`
  background-color: ${color.buttonBackground};
  color: ${color.colorWhite};
  text-decoration: none;
  margin-top: 0.4rem;
  padding: 1rem 3rem;
  outline: none;
  border: none;
  font-weight: bold;

  &:hover {
    color: #fff;
    outline: none;
  }
`;

// FORMS

export const TextInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 14px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const EQUALGRID = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6px;
  margin-bottom: 1rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
    input {
      margin-bottom: 1rem;
    }
  }
`;

export const HALFGRID = styled.article`
  display: grid;
  grid-template-columns: 0.5fr;
  column-gap: 6px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 1rem;
  }
`;

export const GRID = styled.article`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 1fr;
`;
