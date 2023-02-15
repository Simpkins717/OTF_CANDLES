import { Box, Alert, AlertTitle } from "@mui/material";

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfullu made an Order -{" "}
        <strong>Thank you for your purchase!</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
