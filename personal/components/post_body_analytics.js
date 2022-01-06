import React from "react"

export default function PostBodyAnalytics() {
    const env = process.env.NODE_ENV
    if (env == "production") {
        return (
            <React.Fragment>
                <noscript dangerouslySetInnerHTML={{
                    __html: `
                    <!-- Google Tag Manager (noscript) -->
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWZC3MF&gtm_auth=QdYvsEBZWymz_SW9p8gQzg&gtm_preview=env-1&gtm_cookies_win=x"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
<!-- End Google Tag Manager (noscript) -->
                `}} />
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <noscript dangerouslySetInnerHTML={{
                __html: `
            <!-- Google Tag Manager (noscript) -->
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWZC3MF&gtm_auth=aIJYxGexKRNlgU9wHkpE1A&gtm_preview=env-2&gtm_cookies_win=x"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
            <!-- End Google Tag Manager (noscript) -->
            ` }} />
        </React.Fragment>
    )
}
