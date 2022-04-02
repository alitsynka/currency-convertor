import React, { FC } from "react";
import { ButtonWrapper, IProps } from ".";


export const CurrencySwitcher: FC<IProps> = ({ disabled, onSwitch }) => (
  <ButtonWrapper
    variant="contained"
    type="button"
    disabled={!!disabled}
    onClick={onSwitch}
  >
    Swap
  </ButtonWrapper>
);
