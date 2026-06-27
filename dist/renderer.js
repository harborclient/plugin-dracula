// src/renderer.tsx
function activate(hc) {
  hc.subscriptions.push(
    hc.themes.register({
      id: "dracula",
      title: "Dracula",
      type: "dark",
      colors: {
        surface: "#282a36",
        sidebar: "#21222c",
        "sidebar-section": "#343746",
        control: "#44475a",
        field: "rgba(255, 255, 255, 0.06)",
        separator: "rgba(255, 255, 255, 0.1)",
        text: "#f8f8f2",
        "text-secondary": "#e2e2de",
        muted: "#6272a4",
        accent: "#bd93f9",
        selection: "rgba(189, 147, 249, 0.25)",
        danger: "#ff5555",
        warning: "#ffb86c",
        success: "#50fa7b"
      }
    })
  );
}
export {
  activate
};
