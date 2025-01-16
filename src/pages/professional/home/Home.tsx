import { Container, Typography } from "@mui/material";
import "../../../App.css";
import "./style.css";
import { AnimatedBlob } from "../../../components/animated-blob";

export const Home = () => {
  return (
    <div className="home">
      <AnimatedBlob size="2000px" x="0%" y="0%" gradient={["#A9A9A9","#00bfff"]}/>
      <AnimatedBlob size="1500px" x="95%" y="95%" rotate={160} gradient={["#9c27b0","#ce93d8"]}/>
      <Container style={{ textAlign: "center", paddingTop: "40vh", marginTop: "-64px"}}>
        <Typography variant="h2" gutterBottom style={{ color: "white" }}>
          Demetri Sebastian Lopez
        </Typography>
        <Typography variant="body1" style={{ color: "white", marginBottom: "120px" }}>
          
        </Typography>
      </Container>
  </div>
  );
};