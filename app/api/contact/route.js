import nodemailer from "nodemailer";

export const runtime = "nodejs";

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO",
];

function clean(value) {
  return String(value || "").trim();
}

function cleanHeader(value) {
  return clean(value).replace(/[\r\n]+/g, " ");
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function missingConfig() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

export async function POST(request) {
  const missing = missingConfig();

  if (missing.length > 0) {
    console.error(`Contact form SMTP config missing: ${missing.join(", ")}`);
    return Response.json(
      { message: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const firstName = cleanHeader(payload.firstName);
  const lastName = cleanHeader(payload.lastName);
  const email = cleanHeader(payload.email);
  const businessName = clean(payload.businessName);
  const service = cleanHeader(payload.service);
  const message = clean(payload.message);
  const website = clean(payload.website);

  if (website) {
    return Response.json({ message: "Message sent." });
  }

  if (!firstName || !lastName || !email || !service || !message) {
    return Response.json(
      { message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (message.length > 4000) {
    return Response.json(
      { message: "Please keep your message under 4,000 characters." },
      { status: 400 }
    );
  }

  const port = Number(process.env.SMTP_PORT);
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true" || port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const name = `${firstName} ${lastName}`;
  const submittedAt = new Date().toISOString();
  const submittedAtDisplay = new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Lagos",
  }).format(new Date(submittedAt));
  const subject = `New website enquiry from ${name}`;
  const replyHref = `mailto:${email}?subject=${encodeURIComponent(`Re: ${subject}`)}`;
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    businessName: escapeHtml(businessName || "Not provided"),
    service: escapeHtml(service),
    message: escapeHtml(message),
    submittedAt: escapeHtml(`${submittedAtDisplay} WAT`),
    replyHref: escapeHtml(replyHref),
  };

  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${businessName || "Not provided"}`,
    `Service: ${service}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="margin:0; padding:0; background:#F5F9F8; font-family:Arial, sans-serif; color:#111827;">
      <div style="max-width:680px; margin:0 auto; padding:28px 16px;">
        <div style="background:#091F2C; border-radius:18px 18px 0 0; padding:26px 28px; border-bottom:3px solid #17A8A0;">
          <p style="margin:0 0 8px; color:#4DBDB5; font-size:11px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;">ADEM Financial Consulting</p>
          <h1 style="margin:0; color:#ffffff; font-size:26px; line-height:1.25;">New Website Enquiry</h1>
        </div>

        <div style="background:#ffffff; border:1px solid #E5E7EB; border-top:0; border-radius:0 0 18px 18px; overflow:hidden;">
          <div style="padding:28px;">
            <p style="margin:0 0 6px; color:#6B7280; font-size:13px;">A visitor submitted the contact form on the ADEM website.</p>
            <h2 style="margin:0 0 22px; color:#0C2D3E; font-size:22px; line-height:1.3;">${safe.name}</h2>

            <div style="border:1px solid #E5E7EB; border-radius:14px; overflow:hidden; margin-bottom:22px;">
              <div style="display:block; padding:14px 18px; border-bottom:1px solid #E5E7EB;">
                <p style="margin:0 0 4px; color:#6B7280; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Email</p>
                <a href="mailto:${safe.email}" style="color:#0C7A74; font-size:15px; font-weight:700; text-decoration:none;">${safe.email}</a>
              </div>
              <div style="display:block; padding:14px 18px; border-bottom:1px solid #E5E7EB;">
                <p style="margin:0 0 4px; color:#6B7280; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Business</p>
                <p style="margin:0; color:#111827; font-size:15px; font-weight:700;">${safe.businessName}</p>
              </div>
              <div style="display:block; padding:14px 18px; border-bottom:1px solid #E5E7EB;">
                <p style="margin:0 0 4px; color:#6B7280; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Service Needed</p>
                <p style="display:inline-block; margin:0; padding:7px 12px; border-radius:999px; background:#EAF5F4; color:#0C7A74; font-size:14px; font-weight:700;">${safe.service}</p>
              </div>
              <div style="display:block; padding:14px 18px;">
                <p style="margin:0 0 4px; color:#6B7280; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Submitted</p>
                <p style="margin:0; color:#111827; font-size:15px;">${safe.submittedAt}</p>
              </div>
            </div>

            <div style="margin-bottom:24px;">
              <p style="margin:0 0 8px; color:#6B7280; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;">Message</p>
              <div style="white-space:pre-wrap; background:#F5F9F8; border-left:4px solid #17A8A0; padding:18px; border-radius:12px; color:#111827; font-size:15px; line-height:1.65;">${safe.message}</div>
            </div>

            <a href="${safe.replyHref}" style="display:inline-block; background:#17A8A0; color:#ffffff; text-decoration:none; font-size:14px; font-weight:700; padding:13px 20px; border-radius:999px;">Reply to ${safe.name}</a>
          </div>

          <div style="background:#F9FAFB; border-top:1px solid #E5E7EB; padding:16px 28px;">
            <p style="margin:0; color:#6B7280; font-size:12px;">This notification was sent automatically from the ADEM website contact form.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"ADEM Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
    });

    return Response.json({ message: "Message sent." });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { message: "We could not send your message. Please try WhatsApp instead." },
      { status: 502 }
    );
  }
}
