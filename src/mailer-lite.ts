import { MAILER_LITE_GROUPS } from "./constants";

export const createUpsertSubscriber = async (
  email: string,
  groups?: string[]
) => {
  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MAILERLITE_API_TOKEN}`,
      },
      body: JSON.stringify({
        email,
        groups: [MAILER_LITE_GROUPS.ALL, ...(groups || [])],
      }),
    }
  );
  const json = await response.json();
  const responseBody = {
    status: response.status,
    body: json,
  };

  return responseBody;
};
