import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding-left: 20px;
  }

  button {
    width: 175px;
    background: #04D361;
    color: #FFF;
    border-radius: 5px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 60px;
  max-width: 700px;

  a {
    display: flex;
    background-color: #FFF;
    padding: 24px;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 15px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    div {
      margin-left: 20px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
