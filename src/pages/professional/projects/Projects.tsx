import { Card, CardContent, Chip, ChipOwnProps, Container, Divider, Typography } from "@mui/material";
import "./style.css";
import { AnimatedBlob } from "../../../components/animated-blob";
import { ProjectTimeline, statusMap } from "../../../components/timeline";
import { labelMap, PROJECTS } from "./project-data";

export const Projects = () => {
    return (
        <div className="projects">
            <AnimatedBlob size="2000px" x="50%" y="100%" gradient={["#673ab7", "#b39ddb"]} />
            <Container style={{ textAlign: "center", marginTop: "20px" }}>
                <Typography variant="h2" gutterBottom style={{ color: "white" }}>
                    I'm Busy
                </Typography>
                <Typography variant="body1" style={{ color: "white", marginBottom: "30px" }}>
                    What I am working on.
                    <Chip label="Github" component="a" href="https://github.com/Demetri65" variant="outlined" clickable style={{ marginLeft: "10px", color: "#b39ddb", borderColor: "#b39ddb" }} />
                </Typography>


                <Divider variant="middle" style={{ marginBottom: "20px" }} />
                <div className="wrapper">
                    {PROJECTS.map((PROJECT) => (
                        <Card style={{ padding: "20px", marginBottom: "20px", width: "500px", borderRadius: "16px" }}>
                            <CardContent style={{ paddingTop: "8px" }}>
                                <div className="card-header">
                                    <Typography variant="h5" style={{ color: "white", textAlign: "left" }} gutterBottom>
                                        {PROJECT.title}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: "#00bfff", textAlign: "right" }} gutterBottom>
                                        <Chip label={labelMap[PROJECT.status]} size="small" color={statusMap[PROJECT.status] as ChipOwnProps['color']} />
                                    </Typography>
                                </div>
                                <Typography variant="body2" style={{ color: "white", textAlign: "left" }} gutterBottom>
                                    {PROJECT.description}
                                </Typography>
                                <ProjectTimeline status={PROJECT.status} timeline={PROJECT.timeline} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    );
};
