import { Router } from 'itty-router'
import { css } from './consts'

// Create a new router
const router = Router()

export default {
    async fetch(
        request: Request
    ): Promise<Response> {
        request_headers = request.headers
        ip = request.headers.get('X-Real-IP') || ""
        user_agent = request.headers.get('user-agent') || ""
        language = request.headers.get('accept-language') || ""
        referer = request.headers.get('referer') || ""
        method = request.method || ""
        encoding = request.headers.get('accept-encoding') || ""
        mime_type = request.headers.get('accept') || ""
        connection = request.headers.get('connection') || ""
        country = request.headers.get('cf-ipcountry') || ""
        protocol = JSON.parse(request.headers.get('cf-visitor') || "")['scheme'] || ""
        host = request.headers.get('host') || ""
        return await router.handle(request);
    },
};

let ip: string;
let user_agent: string;
let language: string;
let referer: string;
let method: string;
let encoding: string;
let mime_type: string;
let charset: string;
let remote_host: string;
let connection: string;
let keep_alive: string;
let via: string;
let country: string;
let protocol: string;
let host: string;
let request_headers: Headers;

/*
Our index route, a simple hello world.
*/
router.get("/", () => {
    let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta http-equiv="content-style-type" content="text/css"/>
      <meta http-equiv="content-script-type" content="text/javascript"/>
      <meta http-equiv="content-language" content="en"/>
      <meta http-equiv="pragma" content="no-cache"/>
      <meta http-equiv="cache-control" content="no-cache"/>
      <meta name="description" content="Get my IP Address"/>
      <meta name="keywords" content="ip address ifconfig ${host}"/>
      <meta name="author" content=""/>
      <link rel="shortcut icon" href="favicon.ico"/>
      <link rel="canonical" href="https://${host}/">
      <title>What Is My IP Address? - ${host}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
  </head>

  <style>
  ${css}
  </style>
  <body>
  
  <div id="container" class="clearfix">
      <div id="header">
          <table>
              <tr>
                  <td>
                      <h1><a href="https://${host}">What Is My IP Address? - ${host}</a></h1>
                  </td>
                  <td></td>
              </tr>
          </table>
      </div>
      <div id="info_area">
          <h2>Your Connection</h2>
          <table id="info_table" summary="info">
              <tr>
                  <td class="info_table_label">IP Address</td>
                  <td id="ip_address_cell"><strong id="ip_address">${ip}</strong></td>
              </tr>
              <tr>
                  <td class="info_table_label">User Agent</td>
                  <td>${user_agent}</td>
              </tr>
              <tr>
                  <td class="info_table_label">Language</td>
                  <td>${language}</td>
              </tr>
              <tr>
                  <td class="info_table_label">Country</td>
                    <td>${country}</td>
              </tr>
              <tr>
                  <td class="info_table_label">Referer</td>
                  <td>${referer}</td>
              </tr>
              <tr>
                  <td class="info_table_label">Method</td>
                  <td>${method}</td>
              </tr>
              <tr>
                  <td class="info_table_label">Protocol</td>
                  <td>${protocol}</td>
              </tr>
              <tr>
                  <td class="info_table_label">Encoding</td>
                  <td>${encoding}</td>
              </tr>
              <tr>
                  <td class="info_table_label">MIME Type</td>
                  <td>${mime_type}</td>
              </tr>
          </table>
      </div>
      <!--<div id="middle"></div>-->
      <div id="cli_wrap">
          <h2>Command Line Interface</h2>
          <table id="cli_table" summary="cli">
              <tr>
                  <td class="cli_command">\$ curl ${host}</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>${ip}</td>
              </tr>
              <tr>
                  <td class="cli_command">\$ curl ${host}/ip</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>${ip}</td>
              </tr>
              <tr>
                  <td class="cli_command">\$ curl ${host}/ua</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>${user_agent}</td>
              </tr>
              <tr>
                  <td class="cli_command">\$ curl ${host}/lang</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>${language}</td>
              </tr>
              <tr>
                  <td class="cli_command">\$ curl ${host}/encoding</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>${encoding}</td>
              </tr>
              <tr>
                  <td class="cli_command">$ curl ${host}/mime</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>${mime_type}</td>
              </tr>
              <tr>
                  <td class="cli_command">\$ curl ${host}/all</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>
                      ip_addr: ${ip}
                      <br>
                      
                      remote_host: ${remote_host}
                      <br>
                      
                      user_agent: ${user_agent}
                      <br>
                      
                      language: ${language}
                      <br>
                      
                      referer: ${referer}
                      <br>
                      
                      connection: ${connection}
                      <br>
                      
                      keep_alive: ${keep_alive}
                      <br>
                      
                      method: ${method}
                      <br>
                      
                      encoding: ${encoding}
                      <br>
                      
                      mime: ${mime_type}
                      <br>
                  </td>
              </tr>
              <tr>
                  <td class="cli_command">\$ curl ${host}/all.json</td>
                  <td class="cli_arrow">&rArr;</td>
                  <td>{&quot;ip_addr&quot;:&quot;${ip}&quot;,&quot;user_agent&quot;:&quot;${user_agent}&quot;,&quot;language&quot;:&quot;${language}&quot;,&quot;method&quot;:&quot;${method}&quot;,&quot;encoding&quot;:&quot;${encoding}&quot;,&quot;mime&quot;:&quot;${mime_type}&quot;,&quot;via&quot;:&quot;${via}&quot;}</td>
              </tr>
          </table>
      </div>
      <div id="footer">&copy; ${(new Date).getFullYear()} ${host}</div>
  </div>
  </body>
  
  </html>`

    if (/curl\/.*/.test(user_agent)) {
        return new Response(ip, {
            headers: {
                'content-type': 'text/plain'
            }
        })
    } else {
        return new Response(html, {
            headers: {
                'content-type': 'text/html;charset=UTF-8'
            }
        })
    }
})

router.get("/ip", () => new Response(ip))

router.get("/ua", () => new Response(user_agent))

router.get("/lang", () => new Response(language))

router.get("/encoding", () => new Response(encoding))

router.get("/mime", () => new Response(mime_type))

router.get("/charset", () => new Response(charset))

router.get("/all", () => new Response(
    `ip_addr: ${ip}
  user_agent: ${user_agent}
  language: ${language}
  country: ${country}
  referer: ${referer}
  method: ${method}
  protocol: ${protocol}
  connection: ${connection}
  keep_alive: ${keep_alive}
  encoding: ${encoding}
  mime: ${mime_type}
  charset: ${charset}
  `
))

router.get("/all.json", () => new Response(
    JSON.stringify(Object.fromEntries(request_headers)), {
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    }
}))

/*
This is the last route we define, it will match anything that hasn't hit a route we've defined
above, therefore it's useful as a 404 (and avoids us hitting worker exceptions, so make sure to include it!).

Visit any page that doesn't exist (e.g. /foobar) to see it in action.
*/
router.all("*", () => new Response("404, not found!", { status: 404 }))
