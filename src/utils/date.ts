export function fDate(date?: string) {
  const newDate = date ? new Date(date) : new Date();

  return newDate
    .toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replaceAll("/", "-");
}
