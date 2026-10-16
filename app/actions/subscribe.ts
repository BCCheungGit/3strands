"use server";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;

const SUCCESS: SubscribeState = {
  status: "success",
  message: "Thanks! You're on the list.",
};

const FAILURE: SubscribeState = {
  status: "error",
  message: "Something went wrong. Please try again later.",
};

function isValidEmail(email: string) {
  return email.length <= MAX_EMAIL_LENGTH && EMAIL_PATTERN.test(email);
}

export async function subscribe(
  _previousState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  if (formData.get("company")) {
    return SUCCESS;
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.SHEETS_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return {
      status: "error",
      message: "Sign-ups aren't open yet. Please check back soon.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, secret: webhookSecret }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const body = await response.text();
    if (!response.ok || body !== "ok") {
      console.error(`Email list webhook failed with status ${response.status}`);
      return FAILURE;
    }
  } catch {
    console.error("Email list webhook request failed");
    return FAILURE;
  }

  return SUCCESS;
}
