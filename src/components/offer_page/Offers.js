import React from 'react';
import { useState, useEffect } from 'react';
import { proxyUrl } from '../../utils/constant';
const Offers = () => {
  const [html, setHTML] = useState({ __html: '' });

  useEffect(() => {
    async function createMarkup() {
      let response;
      response = await fetch(`${proxyUrl}
        https://www.swiggy.com/offers-near-me`);
      const backendHtmlString = await response.text();

      console.log(backendHtmlString);
      return { __html: backendHtmlString };
    }
    createMarkup().then((result) => setHTML(result));
  }, []);

  return <div className="pointer-events-none" dangerouslySetInnerHTML={html} />;
};

export default Offers;
