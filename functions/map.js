export async function onRequest(context) {
  const { GM_API_KEY } = context.env;

  const q = "50+S+Buckhout+St+#+304,Irvington,NY+10533,United+States"

  const embedURL = `https://www.google.com/maps/embed/v1/place?key=${GM_API_KEY}&q=${q}`

  // to approximate night mode:
  // filter: invert(90%)

  const html = `
    <iframe
      id="map-widget"
      src="${embedURL}"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`
  
  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
