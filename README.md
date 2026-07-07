# Breakthrough Gaming

Landing page for [breakthrough.network](https://breakthrough.network), a Christian gaming community.

Static site, no build step, deployed to Cloudflare Workers (static assets).

## Local development

```
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

```
npm install -g wrangler
wrangler login
wrangler deploy
```

Or connect the repo to a Cloudflare Workers project in the dashboard for git-based deploys.

## Structure

```
index.html            landing page
404.html               not found page
styles.css             styles
script.js              Discord CTA logic
assets/                logo, icons, social share image
robots.txt              search engine crawl rules
sitemap.xml             search engine sitemap
site.webmanifest        PWA / home screen metadata
worker.js               serves static assets, redirects /discord
wrangler.toml           Cloudflare deploy config
```

## Setting the Discord invite link

In `script.js`, set:

```js
const DISCORD_INVITE_URL = "https://discord.gg/yourcode";
```

The button activates automatically once this is set.

## Credits

- Discord icon — Discord Inc. brand mark, used under [Discord's brand guidelines](https://discord.com/branding)
- Font — [Sora](https://fonts.google.com/specimen/Sora), via Google Fonts, SIL Open Font License
- Breakthrough Gaming logo — original artwork, all rights reserved

## License

Source code is licensed under MIT — see [LICENSE](LICENSE). The Breakthrough Gaming logo and the Discord logo mark are excluded and remain the property of their respective owners.
