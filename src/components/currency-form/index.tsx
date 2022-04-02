import styled from "@emotion/styled";

export interface IProps {
  base: string;
  rates: { [key: string]: number };
}

export const CurrencySelectorsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  @media (max-width:  992px){
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 425px){
    margin: 0 10px;
  }
`;

export const SecondaryBlock = styled.div`
  margin: 0 auto;
  text-align: start;
  max-width: 705px;
  display: flex;
  @media (max-width:  992px){
    max-width: 350px;
  }
  @media (max-width: 425px){
    margin: 0 10px;
  }
`

export const CurrencyRate = styled.span`
   margin-left: 50px;
`

export const CurrencyRateValue = styled.div`
  text-align: center;
`
