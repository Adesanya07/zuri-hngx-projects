const express = require('express');
const axios = require('axios'); 
const moment = require('moment');

const app = express();

app.get('/api', async (req, res) => {

  const slackName = req.query.slack_name;
  const track = req.query.track;

  const currentDay = moment().format('dddd');  

  const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  // Validate UTC Time
  const now = new Date();
  if(Math.abs(now - new Date(utcTime)) > 120000) {
    return res.status(500).json({error: 'Invalid UTC time'});
  }

  // Get GitHub URLs
  const username = 'Adesanya07'; 
  const repo = 'zuri-hngx-projects';

  const githubFileUrl = `https://github.com/${username}/${repo}/blob/main/index.js`;

  const githubRepoUrl = `https://github.com/${username}/${repo}`;

  const response = {
    slack_name: "Gabriel Adesanya",
    track,
    currentDay,
    utcTime,
    githubFileUrl,
    githubRepoUrl,
    status_code: 200
  };

  res.json(response);

});

//app.listen(3000, () => console.log('Server listening on port 3000'));


  

