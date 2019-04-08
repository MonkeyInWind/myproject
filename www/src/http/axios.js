import axios from 'axios';

const get = (opts) => {
  let url = opts.url;
  let params = "";
  for (let x in opts.data) {
    params = params ? `${params}&${x}=${opts.data[x]}` : `${x}=${opts.data[x]}`;
  }
  if(url.substr(-1, 1) !== "?") {
    url += `?${params}`
  } else {
    url += params;
  }

  return axios({
    method: 'get',
    url
  }).then(response => {
    if (response.status === 200) return response.data;
    return response;
  });
}

const post = (opts) => {
  return axios({
    method: 'post',
    url: opts.url,
    data: opts.data
  }).then(response => {
    console.log(response);
  });
}

export {
  get,
  post
}
