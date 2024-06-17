import React from "react";

// @mui
import { Grid } from "@mui/material";

// common components:
import Stack from "../common/Stack";
import Box from "../common/Box";
import Text from "../common/Text";

const Login = () => {
  return (
    <>
      <Stack>
        {/* login header */}
        <Box sx={{ height: "227px", backgroundColor: "#00c298" }}></Box>

        {/* Model ui box */}
        <Box
          sx={{
            maxWidth: "1000px",
            margin: " -190px auto auto auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "25px",
              gap: 2,
            }}
          >
            <img
              src="assets/images/login/whatsappLogo.jpg"
              alt=""
              width="50px"
            />
            <Text
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                color: "#fff",
                verticalAlign: "middle",
              }}
            >
              WHATSAPP WEB
            </Text>
          </Box>

          {/* List and QR Box */}
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "0px 0px 25px 0px #a9a7a7",
              marginBottom: "100px",
            }}
          >
            <Grid
              container
              spacing={0}
              sx={{
                padding: "51px 60px 0px 60px",
                marginBottom: "70px",
              }}
            >
              <Grid item xs={8} md={8}>
                <Text
                  sx={{
                    textAlign: "start",
                    fontSize: "28px",
                    marginBottom: "40px",
                  }}
                >
                  Use WhatsApp on your computer
                </Text>
                <Box>
                  <ol style={{ padding: "0px 0px 0px 16px" }}>
                    <li
                      style={{
                        textAlign: "start",
                        padding: "5px 2px 23px 2px",
                        fontSize: "18px",
                      }}
                    >
                      Open WhatsApp on your phone
                    </li>
                    <li
                      style={{
                        textAlign: "start",
                        padding: "5px 2px 23px 2px",
                        fontSize: "18px",
                      }}
                    >
                      Tab <b> Menu</b> <img src="" alt="" /> on Android, or{" "}
                      <b>Settings</b> on iPhone
                    </li>
                    <li
                      style={{
                        textAlign: "start",
                        padding: "5px 2px 23px 2px",
                        fontSize: "18px",
                      }}
                    >
                      Tap <b>Linked devices</b> and then <b>Link a device</b>
                    </li>
                    <li
                      style={{
                        textAlign: "start",
                        padding: "5px 2px 23px 2px",
                        fontSize: "18px",
                      }}
                    >
                      Point your phone at this screen to capture the QR code
                    </li>
                  </ol>
                </Box>
              </Grid>
              <Grid item xs={4} md={4}>
                <img src="assets/images/login/QR.png" alt="" height="303px" />
              </Grid>
              <Grid item xs={12} md={12} sx={{ marginTop: "20px" }}>
                <Box sx={{ height: "1px", backgroundColor: "#dfe0e1" }} />
              </Grid>
              <Grid item xs={12} md={12} sx={{ marginTop: "20px" }}>
                <Text
                  sx={{
                    textAlign: "start",
                    color: "#008069",
                    marginTop: "20px",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ cursor: "pointer" }}>
                    Link with phone number
                  </span>
                </Text>
              </Grid>
            </Grid>

            {/* Video section  */}
            <Box
              sx={{
                backgroundColor: " rgba(11,20,26,0.03)",
                marginBottom: "30px",
                paddingBottom: "36px",
                paddingTop: "25px",
              }}
            >
              <Text
                sx={{
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "#41525d",
                  marginBottom: "5px",
                }}
              >
                Tutorial
              </Text>
              <Text sx={{ color: "#008069", marginBottom: "35px" }}>
                <span style={{ cursor: "pointer" }}>
                  Need help to get started?
                </span>
              </Text>
              <Box
                sx={{
                  maxHeight: "305px",
                  maxWidth: "555px",
                  backgroundColor: "black",
                  margin: "auto",
                }}
              >
                <img src="assets/images/login/laptopWithPhone.png" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Login;
