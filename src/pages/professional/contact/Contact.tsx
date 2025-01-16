import { Alert, Button, Container, Divider, TextField, Typography } from "@mui/material";
import { FormEvent, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { AnimatedBlob } from "../../../components/animated-blob";
import "./style.css";

export const Contact = () => {
  const [status, setStatus] = useState<'success' | 'error' | undefined>(undefined)
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2cgt0a5', 'template_2598nye', form.current as HTMLFormElement, {
        publicKey: 'hgZhJY5qnEgsLw86V',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('success');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        },
      );
  };


  return (
    <div className="contact">
    <AnimatedBlob size="1000px" x="100%" y="50%" gradient={["#ff5722","#ffab91"]}/>
    <Container style={{ textAlign: "center" }}>
      <Typography variant="h2" gutterBottom style={{ color: "white", marginTop: "20px" }}>
        Let's Talk
      </Typography>
      <Typography variant="body1" style={{ color: "white", marginBottom: "30px" }}>
        Ask me anything
      </Typography>
      <Divider variant="middle" style={{marginBottom: "20px"}}/>

      {status === 'success' && 
        <Alert severity="success">
          The form was successfully sent. I will be in touch!
        </Alert>}

      {status === 'error' && 
        <Alert severity="error">
          Whoops must've been an error.
        </Alert>}
      <form
        id="contact-form"
        ref={form}
        onSubmit={sendEmail}
        style={{ padding: "20px", paddingTop: "0", borderRadius: "4px" }}>
        <TextField
          fullWidth
          variant="outlined"
          required
          margin="normal"
          label="Name"
          name="user_name"
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          required
          label="Email"
          name="user_email"
          type="email"
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          required
          label="Organization"
          name="user_organization"
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          required
          label="Message"
          name="user_message"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" style={{ marginTop: "20px" }} sx={{backgroundColor: '#ff5722'}}>
          Send Message
        </Button>
      </form>

    </Container>
    </div>
  );
};