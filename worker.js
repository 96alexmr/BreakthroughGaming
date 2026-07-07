const DISCORD_INVITE_URL = "https://discord.com/invite/DzPTrr76ET";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/discord") {
      return Response.redirect(DISCORD_INVITE_URL, 302);
    }

    return env.ASSETS.fetch(request);
  },
};
