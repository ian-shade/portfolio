// Extend the CloudflareEnv interface with custom environment variables
declare global {
  interface CloudflareEnv {
    // Custom environment variables
    RESEND_API_KEY?: string;
  }
}

export {};
