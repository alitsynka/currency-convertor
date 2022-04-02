import React, { FC, useState } from "react";
import { CurrencyInput } from "../currency-input/CurrencyInput";
import { CurrencySwitcher } from "../currency-switcher/CurrencySwitcher";
import { CurrencySelectorsBlock, IProps, SecondaryBlock, CurrencyRate, CurrencyRateValue } from ".";

export const CurrencyForm: FC<IProps> = ({ base, rates }) => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");

  const format = (num: number) => num.toFixed(4);

  const onAmount1Change = (amount1: number) => {
    setAmount2(Number(format((amount1 * rates[currency2]) / rates[currency1])));
    setAmount1(amount1);
  };

  const onCurrency1Change = (currency1: string) => {
    setAmount2(Number(format((amount1 * rates[currency2]) / rates[currency1])));
    setCurrency1(currency1);
  };

  const onAmount2Change = (amount2: number) => {
    setAmount1(Number(format((amount2 * rates[currency1]) / rates[currency2])));
    setAmount2(amount2);
  };

  const onCurrency2Change = (currency2: string) => {
    setAmount1(Number(format((amount2 * rates[currency1]) / rates[currency2])));
    setCurrency2(currency2);
  };

  const handleSwitch = () => {
    setCurrency1(currency2);
    setCurrency2(currency1);
    setAmount1(0);
    setAmount2(0);
  };

  return (
    <>
      <CurrencySelectorsBlock>
        <CurrencyInput
          onAmountChange={onAmount1Change}
          label="From"
          onCurrencyChange={onCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
        <CurrencyInput
          onAmountChange={onAmount2Change}
          label="To"
          onCurrencyChange={onCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </CurrencySelectorsBlock>
      <SecondaryBlock>
        <CurrencySwitcher
          disabled={!currency1 || !currency2}
          onSwitch={handleSwitch}
        />
        <CurrencyRate>
          <div>Currency Rate</div>
          <CurrencyRateValue>{rates[base] || 0}</CurrencyRateValue>
        </CurrencyRate>
      </SecondaryBlock>
    </>
  );
};
