const Data = require('./model');
const axios = require('axios');

axios.get('https://api.genderize.io?name=')
  .then(response => {
    const data = new Data(response.data);
    data.save()
      .then(() => console.log('Data saved to MongoDB'))
      .catch(err => console.error('Error saving data to MongoDB', err));
  })
  .catch(err => console.error('Error fetching data from API', err));
