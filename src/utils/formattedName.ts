

export function formatProjectName(name: string) {
  // Replace "-" or "_" with " "
  let formattedName = name.replace(/[-_]/g, " ");

  // Capitalize the first letter of each word
  formattedName = formattedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
}