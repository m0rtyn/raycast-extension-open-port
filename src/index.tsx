import { ActionPanel, Detail, Action } from "@raycast/api";

export default function Command() {
  const port = process.argv.slice(2)?.[0] ?? 3000
  const url = `https://localhost:${port}`
  return (
    <Detail
      markdown="# Join the gang!"
      actions={
        <ActionPanel>
          <Action.OpenInBrowser url={url} />
        </ActionPanel>
      }
    />
  );
}