import styled from 'styled-components';

export const List = styled.ul`
  width: 450px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;

  font-size: 20px;
`;

export const Button = styled.button`
  width: 80px;
  min-height: 30px;

  margin: 0;

  font-weight: 500;
  font-size: 18px;

  border-radius: 8px;

  background-color: black;
  color: white;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus,
  :hover {
    color: #2196f3;
  }
`;
