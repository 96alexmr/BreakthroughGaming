const DISCORD_INVITE_URL = "https://discord.com/invite/DzPTrr76ET";

document.getElementById("year").textContent = new Date().getFullYear();

const discordCta = document.getElementById("discord-cta");

if (DISCORD_INVITE_URL) {
  discordCta.href = DISCORD_INVITE_URL;
} else {
  discordCta.href = "#";
  discordCta.setAttribute("aria-disabled", "true");
  discordCta.querySelector(".cta__label").textContent = "Discord Coming Soon";
  discordCta.addEventListener("click", (e) => e.preventDefault());
}
