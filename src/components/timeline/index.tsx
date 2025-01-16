import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, timelineOppositeContentClasses, TimelineDotProps } from '@mui/lab';
import { Typography } from '@mui/material';
import { ReactNode } from 'react';

export type StatusType = "conceptual" | "discovery" | "planning" |"in-progress" | "completed"
export const statusMap: Record<StatusType, TimelineDotProps['color']> = {
    conceptual: "grey",
    discovery: "info",
    planning: "info",
    "in-progress": "secondary",
    completed: "success"
}
export type ProjectTimelineItemType = {
    task: string;
    description: string[]
    completed?: boolean | undefined;
    date?: ReactNode;
}

export type ProjectTimelineProps = {
    title?: string;
    description?: string;
    status: StatusType;
    timeline: ProjectTimelineItemType[];
}

export const ProjectTimeline = ({timeline, status}: ProjectTimelineProps) => {
    console.log('hello')
    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            {timeline.map((item) => (
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        {item.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={statusMap[status]} variant={item.completed ? "filled" : "outlined"}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, paddingTop: "3px" }}>
                        <Typography variant="h6" component="span">
                            {item.task}
                        </Typography>
                        {(item.description).map((descriptor) => (
                            <Typography>
                                {descriptor}
                            </Typography>
                        ))}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}