import React from "react";
import BackgroundImage from "../assets/process-background-04.jpg";
import "./HomeView.scss";
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card'

export const HomeView = () => (
    <Box pad="medium" direction="row" size="xxlarge">
        <Card label="#transparency" thumbnail={BackgroundImage}
              heading="The Key Steps to Reducing Software Spend" description="Insyn can
              help you optimize your software investments through transparency over
              complex business processes" />
    </Box>
);

export default HomeView
