import url from 'url';

const getSiteHostname = siteUrl => {
  let hostname = '';

  if (siteUrl) {
    if (!siteUrl.includes('//')) {
      siteUrl = `https://${siteUrl}`;
    }

    hostname = url.parse(siteUrl).hostname;
  }

  if (hostname.includes('www.')) {
    hostname = hostname.split('www.')[1];
  }

  return hostname;
};

export default getSiteHostname;
