import posthog from "posthog-js";

type LogAttributes = Record<string, string>;

const isPostHogConfigured = () =>
  Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST,
  );

export const posthogLog = {
  info(message: string, attributes: LogAttributes) {
    if (isPostHogConfigured()) {
      posthog.logger.info(message, attributes);
    }
  },
};
