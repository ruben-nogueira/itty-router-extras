// withCookies - embeds cookies object into the request
const withCookies = request => {
  request.cookies = {}
  try {
    request.cookies = (request.headers.get('Cookie') || '')
      .split(/;\s*/)
      .map(pair => pair.split('='))
      .reduce((acc, [key, value]) => (acc[key] = value) && acc, {})
  } catch (err) {}
}

module.exports = { withCookies }
