export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const message = error instanceof Error ? error.message : String(error);
  window.__lovableReportRuntimeError?.({
    message,
    ...(error instanceof Error && error.stack ? { stack: error.stack } : {}),
    filename: window.location.pathname,
  });
  void context;
}
