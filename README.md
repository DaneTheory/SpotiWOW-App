# SpotiWow
A React/Redux app to play with Spotify's web api. Uses a middleware api server to proxy requests. A code challenge for Dia&Co

## Instructions:
<ul>
<li>Clone or Download this repo.</li>
<li><code>cd</code> into the downloaded directory.</li>
<li>Run <code>npm i</code>. Wait until it finishes.</li>
<li><code>cd</code> into the <code>client</code> folder.</li>
<li>Run <code>npm i</code>. Wait until it finishes (Will take a minute or two).</li>
<li><code>cd ..</code> to get back into to root folder.</li>
<li>Run <code>npm start</code>. Your browser will launch automatically to the correct URL.</li>
</ul>
</br>
To ensure everything is running as it should, navigate to <code>http://localhost:8080/</code> in your web browser.
This is the URL for the client-side of the SpotiDux application. Next, navigate to <code>http://localhost:8080/api</code>.
This is the URL for the API server of the SpotiDux application. Navigating to this URL should show a JSON object with the
message <code>"message": "Cheers from the API Server!"</code>.
</br>
If both URL's look good, then you're all set!

#### API Server Endpoints:
<ul>
<li><code>http://localhost:8080/api</code>: API Server default Endpoint.</li>
<li><code>http://localhost:8080/api/search/[QUERY]</code>: Search Spotify artists endpoint. Replace [QUERY] with any artist and the API will return a list of artists that match your input. (ex: <code>http://localhost:8080/api/search/beatles</code>)</li>
<li><code>http://localhost:8080/api/artist/[Artist_ID]</code>: Search Spotify albums belonging to a particular artist endpoint. Replace [Artist_ID] with a valid artist ID and the API will return a list of albums relative to that particular artist. (ex: <code>http://localhost:8080/api/artist/3WrFJ7ztbogyGnTHbHJFl2</code>)</li>
<li><code>http://localhost:8080/api/albums/[Album_ID]</code>: Search Spotify's tracks belonging to a particular album endpoint. Replace [Album_ID] with a valid album ID and the API will return a list of tracks relative to that particular album. (ex: <code>http://localhost:8080/api/albums/0jTGHV5xqHPvEcwL8f6YU5</code>)</li>
</ul>

## Challenge
Let’s build a spotify album search app! Your goal is to create a static application with HTML5,
CSS3 and Javascript that allows the user to search for an artist and return a list of associated
albums. When the user clicks on an album, they should be prompted with a track list and an
ability to click a track and open into spotify.

## NOTES:
Spotify recently updated it's Web API requiring all requests, whether for public or private catalog information, to provide authentication in order to access.
According to the challenge instructions, auth wasn't something I needed to worry about. Well, that's not exactly possible anymore thanks to Spotify's new auth requirements.
Orginally I wrote out the app without the API Server, replacing Access Tokens when needed from Spotify's Web API Console. This was more of a pain in the ass than it was worth.
Plus, I knew the end result would require Dia&Co's people to provide a new Access Token to even run the application and that's lame. To make things easier for everyone I wrote an API Server
that acts as a middleware between the application and the Spotify's Web API. Spotify's Web API supports auth from another server, not from within the browser. This fact solidified my decision.
The end result works nicely. The application runs off of a BrowserSync dev Server with Webpack running as middleware. The API Server is proxied through the dev server. This avoids CORS issues.
The API Server uses a clientID and ClientSecret generated from Spotify's Web API. From these credentials, an access token is generated. Access Tokens have an hour TTL, but is automagically refreshed for you.
All asynchronous requests made by the application go through the API server. The application itself is very simple. The user is provided an input to search things. By default, the search results return
results containing lists of artists matching the search query provided. The user can then select an artist from the list. Upon doing so, a list of albums relative to that artist is shown. The user can then select an album from the list.
The returned results of the album selection will be a list of tracks relative to that particular album. The user can then choose a track by pressing the Play Icon.
This will open a new window that plays the selected track in Spotify's web application.
