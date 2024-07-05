import React from "react";
import { Box, Typography, styled } from "@mui/material";

const BalanceContainer = styled(Box)({
  padding: "10px",
  borderRadius: "8px",
  backgroundColor: "rgb(153, 255, 127)",
  boxShadow: "0 4px 12px rgb(40 87 28)",
  textAlign: "center",
});

const BalanceText = styled(Typography)({
  fontSize: "18px",
  fontWeight: "bold",
  color: "#085108",
});

const BalanceAmount = styled(Typography)({
  fontSize: "28px",
  fontWeight: "bold",
  color: "#085108",
  marginTop: "8px",
});

const Balance = ({ transactions }) => {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <BalanceContainer>
      <BalanceText>Current Balance</BalanceText>
      <BalanceAmount>₹{total}</BalanceAmount>
    </BalanceContainer>
  );
};

export default Balance;
