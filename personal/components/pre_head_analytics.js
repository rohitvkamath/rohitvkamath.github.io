import React from "react";
import Script from "next/script";

export default function PreHeadAnalytics() {
    const env = process.env.NODE_ENV
    if (env == "production") {
        return (
            <React.Fragment>
                <script
                    // id="pre-head"
                    // strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                <!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWZC3MF');
<!-- End Google Tag Manager -->` }} />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <script
                // id="pre-head"
                // strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                <!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=aIJYxGexKRNlgU9wHkpE1A&gtm_preview=env-2&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWZC3MF');
<!-- End Google Tag Manager -->` }} />
        </React.Fragment>
    );
}
