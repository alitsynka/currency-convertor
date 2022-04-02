import styled from "@emotion/styled";
import { Button } from "@mui/material";

export interface IProps {
  disabled: boolean;
  onSwitch: () => void;
}

export const ButtonWrapper = styled(Button)`
  min-width: 300px;
  border-radius: 30px;
  background: #e7007e;
  &:hover {
    background: #e7007e;
  }
  @media (max-width: 992px) {
    min-width: 150px;
  }
`;
