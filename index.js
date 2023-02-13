const client = require("@mailchimp/mailchimp_marketing")
client.setConfig({
    apiKey: "38e104b33fdc16a5f9ba82682863cf4d-us21",
    server: "us21",
})
const day1 = "beb5ed1e0c";
const updatedPic = "https://lh6.googleusercontent.com/dPWr9OEjKRQuKH9Ci2ppMHAMwQpygWB20hHD_73NDuwwBAMwFw1lP-5MwbGy29oHqTM=w2400";
const list = async () => {
    const response = await client.campaigns.list();
    console.log(response);
}
const run = async () => {
    const response = await client.campaigns.getContent(day1);
    // const newDay = await client.campaigns.setContent('098997185e', response)
    // const send = await client.campaigns.sendTestEmail('098997185e', {
    //     test_emails: ["hunterB@xinxiangweb.io", "xinrui.liu.1030@gmail.com"],
    //     send_type: "html",
    // })
    console.log(response.html);
    const parser = new DOMParser();
    const document = parser.parseFromString(response.html, "text/html");
    console.log(document.getElementsByTagName('img'));
    //console.log(response.html.getElementsByTagName('img')[2].src = updatedPic);
  };
//list();
run();