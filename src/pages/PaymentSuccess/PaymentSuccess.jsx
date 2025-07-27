import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessCard = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px 20px;
  text-align: center;
  max-width: 400px;
  margin: 135px auto 20px;
`;

const IconCircle = styled.div`
  background-color: #4caf50;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
`;

const Icon = styled.div`
  color: white;
  font-size: 40px;
`;

const Name = styled.h2`
  font-size: 24px;
  margin: 20px 0;
  font-weight: 500;
`;

const Amount = styled.h1`
  font-size: 22px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 20px;
  margin: 10px 0;
  font-weight: 600;
`;

const SubMessage = styled.p`
  font-size: 16px;
  color: #666;
  font-weight: 400;
  margin: 5px 0;
`;

const PaymentId = styled.p`
  font-size: 14px;
  color: #000;
  margin: 20px 0;
  font-weight: 400;
`;

const DoneButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Highlight = styled.span`
  font-weight: 500;
  color: #4caf50;
`;

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentData = location.state?.paymentData;

  if (!paymentData) {
    return <div>No Payment Record Found. Please try again!</div>;
  }

  const handleDone = () => {
    navigate("/");
  };

  return (
    <SuccessCard>
      <IconCircle>
        <Icon>✓</Icon>
      </IconCircle>
      <Name>
        <Highlight>Hi, {paymentData.name}</Highlight>
      </Name>
      <Message>Your Payment Successful!</Message>
      <Amount>
        Amount Paid : &nbsp;<Highlight> ₹ {paymentData.amount} </Highlight>
      </Amount>

      <SubMessage>
        The payment for <Highlight>{paymentData.planName}</Highlight> -
        <Highlight>
          {" "}
          {paymentData.yearDescription1} {paymentData.withBook}
        </Highlight>{" "}
        has been received successfully!
      </SubMessage>
      <SubMessage>
        For more details please check your registered email!{" "}
        <Highlight>{paymentData.email}</Highlight>
      </SubMessage>
      <PaymentId>
        Payment ID : <Highlight>{paymentData.paymentId}</Highlight>
      </PaymentId>
      <DoneButton onClick={handleDone}>DONE</DoneButton>
    </SuccessCard>
  );
};

export default PaymentSuccess;
