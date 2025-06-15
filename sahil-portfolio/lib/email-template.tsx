import type * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate(props: Readonly<EmailTemplateProps>) {
  const { name, email, subject, message } = props;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ color: "#333", marginBottom: "20px" }}>New Contact Form Submission</h2>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "6px", marginBottom: "20px" }}>
          <h3 style={{ color: "#6366f1", marginBottom: "15px" }}>Contact Details</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Subject:</strong> {subject}
          </p>
        </div>

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "6px" }}>
          <h3 style={{ color: "#6366f1", marginBottom: "15px" }}>Message</h3>
          <p style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
        </div>

        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#e0e7ff", borderRadius: "6px" }}>
          <p style={{ margin: "0", fontSize: "14px", color: "#4338ca" }}>
            This email was sent from your portfolio contact form.
          </p>
        </div>
      </div>
    </div>
  );
}
