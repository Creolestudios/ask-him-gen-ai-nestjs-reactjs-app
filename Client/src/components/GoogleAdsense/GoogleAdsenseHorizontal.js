import React, { useEffect, useRef } from "react";

const GoogleAdsenseHorizontal = (props) => {
  const { dataAdSlot, clientId } = props;

  const adRef = useRef(null);

  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({
        google_ad_client: clientId,
        // enable_page_level_ads: true,
      });
    }
  }, [clientId]);

  useEffect(() => {
    if (adRef.current) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle-horizontal"
        ref={adRef}
        //  style={{ display: "block" }}
        style={{ display: "inline-block", width: "800px", height: "90px" }}
        // data-ad-client="ca-pub-9197041776436673"
        data-ad-client={clientId}
        data-ad-slot={dataAdSlot}
        // data-ad-slot="3805168661"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      {/* <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script> */}
    </div>
  );
};

export default GoogleAdsenseHorizontal;
