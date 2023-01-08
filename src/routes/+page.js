export async function load() {
  let res = await fetch('https://api.fake-rest.refine.dev/posts')
  let posts = await res.json()
  return {
    posts
  };
}