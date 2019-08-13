import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer WSHAuazbmsyebSumapQNBRh7hVebLb27zgzyQ4m1-sEM0ydXmacQz-EtyjvAlDDLj4_Y7UeN8cfOxfHbz3pJPEGK2jEozQ83QW5GoxtQdPTXPsOYCTHgDUvSff1RXXYx'
  }
});
