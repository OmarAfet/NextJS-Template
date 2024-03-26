"use server";

export async function sendDiscordEmbed(message: string, emoji: string) {
  try {
    const response = await fetch("https://discord.com/api/webhooks/1220884911875952651/CMhjvhxE7Vvu09WIV0-z93Pa6Wp7BNFScw8uVaf5x0SBXDOXbLF4X2bexNPbvV4Vkk5b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: emoji,
            description: message,
            color: getEmbedColor(emoji),
          },
        ],
        username: "Feedback",
        avatar_url: "https://github.com/vercel.png",
      }),
    });

    if (response.ok) {
      console.log("Embed sent successfully");
    } else {
      console.error("Failed to send embed:", await response.text());
    }
  } catch (error) {
    console.error("Error sending embed:", error);
  }
}

function getEmbedColor(emoji: string): number {
  switch (emoji) {
    case "smile":
      return 0x22c55e;
    case "meh":
      return 0xeab308;
    case "frown":
      return 0xef4444;
    default:
      return 0;
  }
}
