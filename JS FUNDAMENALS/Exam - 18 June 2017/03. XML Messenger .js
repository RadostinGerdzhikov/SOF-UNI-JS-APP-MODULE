function xmlParser(message) {
 let pattern = /^<message(\s+([a-z]+)=\"([A-Za-z0-9\s.]*)\")+>([\s\S]+)<\/message>$/gm;

 let matches = pattern.exec(message);
    // console.log(matches);
 if(matches){
   let sender =/\bfrom="([A-Za-z0-9\s.]+)"/g;
   let recipient =/\bto="([A-Za-z0-9\s.]+)"/g;
   let messages = matches[4].split("\n");
   //console.log(messages);
   let senderName = sender.exec(matches);
   let recipientName = recipient.exec(matches);
     // console.log(senderName[1]);
     // console.log(recipientName[1]);
     if(!senderName || !recipientName){
         console.log("Missing attributes");
     } else{
         let html = `<article>`;
         html += `\n  <div>From: <span class="sender">${senderName[1]}</span></div>`;
         html += `\n  <div>To: <span class="recipient">${recipientName[1]}</span></div>`;
         html += `\n  <div>`;
         for (let msg of messages) {
           html += `\n    <p>${msg}</p>`;
         }
         html +=` \n  </div>`
         html += `\n</article>`;

         console.log(html);

     }

 }else{
     console.log("Invalid message format");
 }




}
