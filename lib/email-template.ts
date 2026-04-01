/** Inline HTML email shell — brand-aligned, works in common clients. */
const BRAND_BLUE = "#0a4da8"
const BRAND_ORANGE = "#ff6600"
const MUTED = "#5c6370"
const BORDER = "#e8eaef"

function escapeHtml(text: string | undefined | null): string {
  if (text == null) return ""
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export function buildEmailDocument(options: {
  title: string
  preheader?: string
  bodyHtml: string
}): string {
  const { title, preheader = "", bodyHtml } = options
  const safeTitle = escapeHtml(title)
  const safePreheader = escapeHtml(preheader)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <span style="display:none!important;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden;">${safePreheader}</span>
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f6f9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(10,77,168,0.08);border:1px solid ${BORDER};">
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND_BLUE} 0%,#063d8a 100%);padding:20px 28px;text-align:center;">
              <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.85);">Elegance Inspired Limited</p>
              <h1 style="margin:8px 0 0;font-size:20px;font-weight:700;color:#ffffff;line-height:1.3;">${safeTitle}</h1>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,${BRAND_ORANGE},${BRAND_BLUE});"></td>
          </tr>
          <tr>
            <td style="padding:28px 28px 32px;color:#1a1d24;font-size:15px;line-height:1.6;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px;background-color:#fafbfc;border-top:1px solid ${BORDER};text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:${MUTED};">Elegance Inspired Limited</p>
              <p style="margin:0;font-size:13px;">
                <a href="https://eleganceinspired.org" style="color:${BRAND_BLUE};text-decoration:none;">eleganceinspired.org</a>
                <span style="color:${BORDER};margin:0 8px;">|</span>
                <a href="mailto:hello@eleganceinspired.org" style="color:${BRAND_BLUE};text-decoration:none;">hello@eleganceinspired.org</a>
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-size:11px;color:#9aa3af;text-align:center;">This message was sent from your website contact system.</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function fieldRow(label: string, value: string): string {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:14px;">
    <tr>
      <td style="padding:12px 14px;background-color:#f8f9fb;border-radius:8px;border-left:3px solid ${BRAND_BLUE};">
        <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${BRAND_BLUE};">${escapeHtml(label)}</p>
        <p style="margin:0;font-size:15px;color:#1a1d24;word-break:break-word;">${escapeHtml(value)}</p>
      </td>
    </tr>
  </table>`
}

export function buildContactEmailHtml(params: {
  subject: string
  name: string
  email: string
  phone: string
  message: string
}): string {
  const body = `
    ${fieldRow("Service requested", params.subject)}
    ${fieldRow("Name", params.name)}
    ${fieldRow("Email", params.email)}
    ${fieldRow("Phone", params.phone)}
    <p style="margin:20px 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${BRAND_BLUE};">Message</p>
    <div style="padding:16px 18px;background-color:#f8f9fb;border-radius:8px;border:1px solid ${BORDER};color:#1a1d24;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(params.message)}</div>
  `
  return buildEmailDocument({
    title: "New service request",
    preheader: `From ${params.name} — ${params.subject}`,
    bodyHtml: body,
  })
}

export function buildCallbackEmailHtml(params: {
  name: string
  phone: string
  email?: string
  organization?: string
  location?: string
  message?: string
}): string {
  const rows = [
    fieldRow("Name", params.name),
    fieldRow("Phone", params.phone),
  ]
  if (params.email) rows.push(fieldRow("Email", params.email))
  if (params.organization) rows.push(fieldRow("Organization", params.organization))
  if (params.location) rows.push(fieldRow("Location", params.location))

  let extra = ""
  if (params.message) {
    extra = `
    <p style="margin:20px 0 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${BRAND_BLUE};">Message</p>
    <div style="padding:16px 18px;background-color:#f8f9fb;border-radius:8px;border:1px solid ${BORDER};color:#1a1d24;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(params.message)}</div>`
  }

  const body = rows.join("") + extra
  return buildEmailDocument({
    title: "Call back requested",
    preheader: `${params.name} — ${params.phone}`,
    bodyHtml: body,
  })
}
