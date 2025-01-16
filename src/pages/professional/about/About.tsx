import { Button, Card, CardContent, Chip, Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { AnimatedBlob } from "../../../components/animated-blob";
import "./style.css";

export const About = () => {
  return (
    <div className="about">
      <AnimatedBlob size="3000px" x="0%" y="100%" gradient={["#e91e63", "#f48fb1"]} />
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h2" gutterBottom style={{ color: "white", marginTop: "20px" }}>
          All Me
        </Typography>
        <Typography variant="body1" style={{ color: "white", marginBottom: "30px" }}>
          Selfishly here to brag.
          <Button
            variant="outlined"
            style={{ marginLeft: "10px", color: "#f48fb1", borderColor: "#f48fb1" }}
            href="/demetri-lopez-resume.pdf"
            size="small"
            download
          >
            Download Resume
          </Button>
        </Typography>
        <Divider variant="middle" style={{ marginBottom: "20px" }} />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card style={{ padding: "20px", marginBottom: "20px", width: "100%", borderRadius: "16px" }}>
              <CardContent style={{ paddingTop: "8px" }}>
                <div className="about-card-header">
                  <Typography variant="h5" style={{ color: "white", textAlign: "left" }} gutterBottom>
                    This area is under construction
                  </Typography>
                  <Typography variant="body2" style={{ color: "#00bfff", textAlign: "right" }} gutterBottom>
                    <Chip label="dates" size="small" />
                  </Typography>
                </div>
                <Typography variant="body2" style={{ color: "white", textAlign: "left" }} gutterBottom>
                  Download my resume in the meantime
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card style={{ padding: "20px", marginBottom: "20px", width: "100%", borderRadius: "16px" }}>
              <CardContent style={{ paddingTop: "8px" }}>
                <div className="about-card-header">
                  <Typography variant="h5" style={{ color: "white", textAlign: "left" }} gutterBottom>
                    Sorry
                  </Typography>
                </div>
                <Typography variant="body2" style={{ color: "white", textAlign: "left" }} gutterBottom>
                  For the inconveinence 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};