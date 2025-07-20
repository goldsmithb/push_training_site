export async function onRequest(context) {
  const { GM_API_KEY } = context.env;

//   const params = new URL(context.request.url).searchParams;
//   const place = params.get("q");

//   if (!place) {
//     return new Response("Missing 'q' query param", { status: 400 });
//   }

  const q = "50+S+Buckhout+St+#+304,Irvington,NY+10533,United+States"

  // const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(place)}`;

  const embedURL = `https://www.google.com/maps/embed/v1/place?key=${GM_API_KEY}&q=${q}`

  return embedURL

  // return new Response(null, {
  //   status: 302,
  //   headers: {
  //     Location: embedUrl
  //   }
  // });
}
