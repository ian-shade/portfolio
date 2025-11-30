"use server";

import { getErrorMessage } from "@/lib/utils";

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const token = process.env.CLOUDFLARE_IMAGES_TOKEN;

export const uploadToCloudflare = async (formData: FormData) => {
  if (!accountId || !token) {
    return {
      error: "Cloudflare credentials are not configured.",
    };
  }

  const asset = formData.get("asset");

  if (!asset || typeof asset === "string") {
    return {
      error: "Please attach a file to upload.",
    };
  }

  if (!(asset instanceof File)) {
    return {
      error: "Unsupported file type received.",
    };
  }

  if (asset.size === 0) {
    return {
      error: "The selected file is empty.",
    };
  }

  const payload = new FormData();
  payload.append("file", asset, asset.name);
  payload.append("requireSignedURLs", "false");

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: payload,
      }
    );

    const result = await response.json();

    if (!response.ok || !result?.success) {
      const message =
        result?.errors?.[0]?.message || "Unable to upload file to Cloudflare.";

      return {
        error: message,
      };
    }

    return {
      data: {
        id: result?.result?.id as string,
        url: (result?.result?.variants?.[0] || result?.result?.id) as string,
      },
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
