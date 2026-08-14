import type { Language } from "@/content/siteContent";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export const contactRecipient = "info@curaetedchina.com";

export const buildMailtoHref = (language: Language, form: ContactFormData) => {
  const subject = language === "en"
    ? `China outbound conversation — ${form.company || form.name}`
    : `出海增长交流 — ${form.company || form.name}`;
  const body = language === "en"
    ? `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    : `姓名：${form.name}\n公司：${form.company}\n邮箱：${form.email}\n\n${form.message}`;

  return `mailto:${contactRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
