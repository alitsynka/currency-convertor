import React, { ChangeEvent, FC } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { getSymbolFromCode } from "currency-code-symbol-map";
import { Container, CurrencyValue, InputAdornmentWrapper, InputWrapper, IProps, SelectMenuWrapper } from ".";

export const CurrencyInput: FC<IProps> = ({
  label,
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  // @ts-ignore
  const currencySymbol = getSymbolFromCode(currency);

  return (
    <Container>
      <SelectMenuWrapper>
        <FormControl fullWidth>
          <InputLabel variant="filled">{label}</InputLabel>
          <Select
            variant="standard"
            value={currency}
            defaultValue={currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            {currencies.map((currency) => (
              <MenuItem key={currency} value={currency}>
                <CurrencyValue>{currency}</CurrencyValue>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectMenuWrapper>

      <InputWrapper
        fullWidth
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornmentWrapper position="start">{currencySymbol}</InputAdornmentWrapper>
          ),
          disableUnderline: true
        }}
        type="text"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        value={amount}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onAmountChange(+e.currentTarget.value)
        }
      />
    </Container>
  );
};
