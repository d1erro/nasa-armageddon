export const formateAsteroidName = (name: string) => {
    const trimmedText = name.trim();
    if (trimmedText.startsWith("(") && trimmedText.endsWith(")")) {
        return trimmedText.slice(1, -1);
    }
}