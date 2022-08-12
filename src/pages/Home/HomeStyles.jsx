import styled from 'styled-components';

const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .content-info {
    width: 100%;
    display: flex;
    height: 300px;
    margin-top: 50px;
  }

  .content-info__container {
    width: 90%;
    padding-left: 25px;
  }

  .content-info__title {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  .content-info__description {
    width: 50%;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .content-sorteable {
    width: 100%;
    height: 100px;
    border: red 1px solid;
  }
  .content-TODOs {
    width: 100%;
    height: 100%;
    border: red 1px solid;
  }
`;

export { HomeStyles };
