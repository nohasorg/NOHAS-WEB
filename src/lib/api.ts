export type ApiResponse = {
  ok: boolean
  message?: string
}

export async function submitApiForm(
  endpoint: string,
  payload: Record<string, string>,
): Promise<ApiResponse> {
  const response = await fetch(`/api/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const result = (await response.json()) as ApiResponse
  if (!response.ok || !result.ok) {
    throw new Error(result.message ?? "Something went wrong. Please try again.")
  }
  return result
}
