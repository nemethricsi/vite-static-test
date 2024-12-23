import { MAILER_LITE_GROUPS } from "./constants";
import { createUpsertSubscriber } from "./mailer-lite";

const emailDialog = document.querySelector(
  "#email-dialog"
) as HTMLDialogElement;
const form = document.querySelector("#email-dialog-form") as HTMLFormElement;

// Buttons
const cta = document.querySelector("#email-dialog-cta") as HTMLButtonElement;
const submitButton = document.querySelector(
  'form button[type="submit"]'
) as HTMLButtonElement;
const cancelButton = document.querySelector(
  "#cancelButton"
) as HTMLButtonElement;

cta?.addEventListener("click", () => {
  emailDialog?.showModal();
});

cancelButton?.addEventListener("click", () => {
  emailDialog?.close();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submitButton.innerText = "Küldés...";
  submitButton.disabled = true;

  const formData = new FormData(form);
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return;
  }

  try {
    await createUpsertSubscriber(email, [
      MAILER_LITE_GROUPS.MEDITACIONES_VIDEO_1,
    ]);

    emailDialog.close();
    form.reset();

    window.open("/koszonom", "_self");
  } catch (error) {
    console.error(error);
  }
});
