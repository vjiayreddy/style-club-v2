import React from "react";
import Grid from "@mui/material/Grid";
import { styled,useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import UiButton from "../button/button";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledContentBox = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

const UiCardV4 = () => {
  return (
    <Grid container flexDirection= alignItems="center">
      <Grid item md={6} lg={6}>
        <StyledContentBox>
          <Box mb={3}>
            <Typography variant="h3">Bespoke experience</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="body1">
              Feel the joy of a personalized menswear shopping experience. Every
              garment you wear is designed to match your look, the occasion,
              your preferences and skin tone, and is handcrafted to give you the
              perfect fit
            </Typography>
          </Box>
          <UiButton rounded={false} id="learn-more" color="secondary">
            Learn More
          </UiButton>
        </StyledContentBox>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        item
        md={6}
        lg={6}
      >
        <Grid item>
          <Image
            alt="suits"
            placeholder="blur"
            blurDataURL="/images/men_with_suit.webp"
            loading="lazy"
            width={600}
            height={600}
            src="/images/men_with_suit.webp"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UiCardV4;
