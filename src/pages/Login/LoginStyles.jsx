import styled from 'styled-components';

const LoginStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--light-gray-bg);

  .login-form {
    width: 730px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--black-bg);
    border-radius: 15px;
  }

  .form-title {
    font-size: 4.5rem;
  }

  .error {
    font-size: 1.4rem;
    font-weight: bold;
    color: red;
  }
`;

export { LoginStyles };
