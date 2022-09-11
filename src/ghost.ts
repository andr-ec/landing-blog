
import GhostContentAPI from '@tryghost/content-api'
const ghost = new GhostContentAPI({
  url: import.meta.env.GHOST_URL,
  key: import.meta.env.GHOST_KEY,
  version: "v5.0"
});

export default ghost