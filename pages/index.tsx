import type { NextPage } from "next";
import Container from "@mui/material/Container";
import UiHeroSlider from "../src/components/sliders/heroSlider";
import Box from "@mui/material/Box";
import { UiServices } from "../src/components/services";
import UiTypographyVersionOne from "../src/components/typography/typographyVersionOne";
import UiCardV3 from "../src/components/cards/cardVersionV3";
import UiCardV4 from "../src/components/cards/cardVersionV4";

const Home: NextPage = () => {
  return (
    <>
      <Container disableGutters maxWidth="lg">
        <UiHeroSlider />
        <UiServices />
        <Box mt={9}>
          <UiTypographyVersionOne
            title="Best Picks 2021"
            titleAlign="center"
            contentAlign="center"
            content="A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials."
          />
        </Box>
        <Box mt={9}>
          <UiCardV3
            onClick={() => {
              return;
            }}
            imageUrl="/images/men_with_suit.webp"
            btnName="Learn More"
            title="Great fabrics, latest designs"
            content="The perfect outfit demands the best fabrics. Discover a range of fabrics that satisfy even the most sophisticated tastes. High thread count fabrics, pure wools and cashmeres are just a few fabrics among our large collection."
          />
        </Box>
        <Box>
          <UiCardV4 />
        </Box>
        <Box>
          <UiCardV3
            onClick={() => {
              return;
            }}
            imageUrl="/images/men_with_suit.webp"
            btnName="Explore More"
            title="Elite service"
            content="Confused about what to wear? Our experienced stylists will guide you at every step from suggesting looks and to fabric recommendations to expert styling for special events."
          />
        </Box>
      </Container>
    </>
  );
};

export default Home;
