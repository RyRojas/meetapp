const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  redirect_uris: ['https://ryrojas.github.io/meetapp'],
  javascript_origins: ['https://ryrojas.github.io', 'http://localhost:3000']
};

const { client_secret, client_id, redirect_uris, calendar_id } = credentials;

module.exports.getAuthURL = async () => {
  const oAuth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      authUrl: authUrl
    })
  };
};

module.exports.getAccessToken = async (event) => {
  const oAuth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  //Decode authorization code extracted from URL query
  const code = decodeURIComponent(`${ event.pathParameters.code }`);

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token) => (err) ? reject(err) : resolve(token));
    })
    .then((token) => {
      //Respond with OAuth token
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(token)
      };
    })
    .catch((err) => {
      console.error(err);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(err)
      };
    });
};

module.exports.getCalendarEvents = async (event) => {
  const oAuth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  //Decode access token from URL
  const access_token = decodeURIComponent(`${ event.pathParameters.access_token }`);

  return new Promise((resolve, reject) => {
    oAuth2Client.setCredentials({ access_token });

    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
      },
      (err, res) => (err) ? reject(err) : resolve(res));
  })
  .then((results) => {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ events: results.data.items })
    };
  })
  .catch((err) => {
    console.error(err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(err)
    };
  });
}