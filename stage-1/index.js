const express = require('express');
const axios = require('axios'); 
const moment = require('moment');

const app = express();

app.get('/api', async (req, res) => {

  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const current_day = moment().format('dddd');  

  const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  // Validate UTC Time
  const now = new Date();
  if(Math.abs(now - new Date(utcTime)) > 120000) {
    return res.status(500).json({error: 'Invalid UTC time'});
  }

  const utc_time = new Date().toISOString().slice(0, -5) + 'Z';

  // Get GitHub URLs
  

  const github_file_url = 'https://github.com/Adesanya07/zuri-hngx-projects/blob/main/stage-1/index.js';

  const github_repo_url = 'https://github.com/Adesanya07/zuri-hngx-projects/tree/main/stage-1';

  const response = {
    slack_name,
    track,
    current_day,
    utc_time,
    github_file_url,
    github_repo_url,
    status_code: 200
  };

  res.json(response);

});

app.listen(3000, () => console.log('Server listening on port 3000'));


  

