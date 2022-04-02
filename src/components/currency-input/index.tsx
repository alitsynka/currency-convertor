import { styled } from "@mui/system";
import { InputAdornment, TextField } from "@mui/material";

export const Container = styled('div')`
  margin-top: 20px;
  max-width: 350px;
`;

export const SelectMenuWrapper = styled('div')`
  max-width: 300px;
`;

export const CurrencyValue = styled('div')`
  text-align: start;
  margin: 6px 0 0 10px;
`;

export const InputWrapper = styled(TextField)`
  input {
    height: 70px;
    font-size: 50px;
  }
`;

export const InputAdornmentWrapper = styled(InputAdornment)`
  p {
    font-size: 50px;
    color: #000;
  }
`;

export interface IProps {
  amount: number | null;
  label: string;
  currency: string;
  currencies: string[];
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
}
