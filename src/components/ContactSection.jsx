import { useState } from "react";
import { useSite } from "../context/SiteContext";

const CONTACT_EMAIL = "ygoncalves5@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbgjvbpr";

function FormField({ type, name, label, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const isTextarea = type === "textarea";
  const Component = isTextarea ? "textarea" : "input";

  return (
    <div className={`container_input${isTextarea ? " textarea" : ""}${focused || value ? " focus" : ""}`}>
      <Component
        type={isTextarea ? undefined : type}
        name={name}
        className="input"
        required
        aria-labelledby={`id_${name}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <label htmlFor={`id_${name}`}>{label}</label>
      <span>{label}</span>
    </div>
  );
}

export default function ContactSection() {
  const { t } = useSite();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL).catch(() => {});
    const icon = document.getElementById("copy_icon");
    if (icon) {
      icon.classList.remove("ri-checkbox-multiple-blank-line");
      icon.classList.add("ri-checkbox-multiple-line", "copy_click");
      setTimeout(() => {
        icon.classList.remove("ri-checkbox-multiple-line", "copy_click");
        icon.classList.add("ri-checkbox-multiple-blank-line");
      }, 5000);
    }
  };

  return (
    <div id="container_contactme">
      <div className="form">
        <div className="contact_info">
          <h3 className="title">{t("Let's get in touch")}</h3>

          <p className="info_text">
            {t(
              "Thank you for taking the time to review my portfolio. If you are interested in collaborating or would like more information about my experience and skills, please feel free to get in touch. I would be delighted to discuss how I can add value to your team or project."
            )}
          </p>

          <div className="info_container">
            <div className="information_item">
              <i className="ri-map-pin-line info_icon"></i>
              <p>{t("Lisbon, Portugal")}</p>
            </div>
            <div className="information_item">
              <i className="ri-mail-line info_icon"></i>
              <p id="email">{CONTACT_EMAIL}</p>
              <i
                className="ri-checkbox-multiple-blank-line copy_icon"
                id="copy_icon"
                onClick={copyEmail}
                aria-label="Copy email address"
                role="button"
              ></i>
            </div>
            <div className="information_item">
              <i className="ri-phone-line info_icon"></i>
              <p>+351 915 791 307</p>
            </div>
          </div>
        </div>

        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <h3 className="contact_title">{t("Contact me")}</h3>

            <FormField
              type="text"
              name="name"
              label={t("Name")}
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
            />
            <FormField
              type="email"
              name="email"
              label={t("Email")}
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
            />
            <FormField
              type="textarea"
              name="message"
              label={t("Message")}
              value={form.message}
              onChange={(v) => setForm((f) => ({ ...f, message: v }))}
            />

            <input
              type="submit"
              value={status === "sending" ? t("Sending...") : t("Send")}
              className="btn"
              disabled={status === "sending"}
            />

            {status === "success" && (
              <p className="form_status form_status_success">{t("Message sent! I'll get back to you soon.")}</p>
            )}
            {status === "error" && (
              <p className="form_status form_status_error">
                {t("Something went wrong. Please try again or email me directly.")}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
