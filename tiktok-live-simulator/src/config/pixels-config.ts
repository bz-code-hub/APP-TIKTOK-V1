/**
 * 📊 TRACKING PIXELS CONFIGURATION
 * Edit this file to add your tracking pixels from Facebook, TikTok, and Google Analytics
 */

/**
 * 💡 HOW TO ADD YOUR PIXELS:
 *
 * 1. Go to your platform (Facebook, TikTok, Google Analytics)
 * 2. Get the pixel/tracking code (copy the ENTIRE code block)
 * 3. Paste it in the corresponding field below using backticks (`)
 * 4. Leave empty "" if you don't use that platform
 *
 * EXAMPLE for Facebook - paste your entire code like this:
 * facebookPixel: `<!-- Meta Pixel Code -->
 * <script>
 * !function(f,b,e,v,n,t,s)
 * {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 * n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 * if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 * n.queue=[];t=b.createElement(e);t.async=!0;
 * t.src=v;s=b.getElementsByTagName(e)[0];
 * s.parentNode.insertBefore(t,s)}(window, document,'script',
 * 'https://connect.facebook.net/en_US/fbevents.js');
 * fbq('init', 'YOUR_PIXEL_ID');
 * fbq('track', 'PageView');
 * </script>
 * <noscript><img height="1" width="1" style="display:none"
 * src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
 * /></noscript>
 * <!-- End Meta Pixel Code -->`
 */

export const pixelsConfig = {
  // 🔵 FACEBOOK PIXEL
  // Copy your complete Facebook pixel code and paste here between backticks
  facebookPixel: ``,

  // 🎵 TIKTOK PIXEL
  // Copy your complete TikTok pixel code and paste here between backticks
  tiktokPixel: ``,

  // 🔴 GOOGLE ANALYTICS
  // Copy your complete Google Analytics code and paste here between backticks
  googleAnalyticsPixel: ``,
};
