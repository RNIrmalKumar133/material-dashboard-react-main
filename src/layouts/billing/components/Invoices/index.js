/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Badge from "@mui/material/Badge";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CloudUploadRounded from "@mui/icons-material/CloudUploadRounded";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

import { useEffect, useState, useRef, useCallback } from "react";

import PDFWebViewer from "components/UI/pdfWebViewer";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    bottom: 3,
    border: "none",
  },
}));

const Image = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function Invoices() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Invoices
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="March, 01, 2020" id="#MS-415646" price="$180" />
          <Invoice date="February, 10, 2021" id="#RV-126749" price="$250" />
          <Invoice date="April, 05, 2020" id="#QW-103578" price="$120" />
          <Invoice date="June, 25, 2019" id="#MS-415646" price="$180" />
          <Invoice date="March, 01, 2019" id="#AR-803481" price="$300" noGutter />
        </MDBox>
      </MDBox>
      <MDBox sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
        <Grid container spacing={1} mt={2}>
          <Grid item xs={12}>
            {true && (
              <Button variant="text" onClick={handleOpen}>
                Click to open agreement file
              </Button>
            )}
          </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth={true}>
          <Box display="flex" alignItems="center">
            <Box textAlign="center" flexGrow={1}>
              AgreementFile
            </Box>
            <Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <DialogContent>
            <PDFWebViewer document={"public/files/demo.pdf"} />
          </DialogContent>
        </Dialog>
      </MDBox>
    </Card>
  );
}

export default Invoices;
