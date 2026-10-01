"use server";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;

function isValidEmail(email: string) {
  return email.length <= MAX_EMAIL_LENGTH && EMAIL_PATTERN.test(email);
}

export async function subscribe(
  _previousState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! You're on the list." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: send `email` to the email list provider once one is chosen.
  return {
    status: "error",
    message: "Sign-ups aren't open yet. Please check back soon.",
  };
}
