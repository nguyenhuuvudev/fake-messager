const sendElement = document.getElementById('txtMessage');
const seen = `<img src="./assets/img/avatar.jpg" alt="">`;
const sent = `<i class="far fa-check-circle"></i>`;

const scollLastestMsg = () => {
    let scoll = document.querySelector(".chat__history");
    scoll.scrollTop = scoll.scrollHeight;
}
scollLastestMsg();

sendElement.addEventListener("keypress", (e) => {
    // nếu ấn enter thì gửi tin nhắn
    if (e.key === "Enter" && !e.shiftKey)
    {
        e.preventDefault();
        let temp = sendElement.innerText;
        sendElement.innerHTML = '';
        temp = temp.substring(0, temp.length - 2)
        sendMessage('send', temp);
        scollLastestMsg();
        return    
    } 
    // scollbarSendInput();
})

const scollbarSendInput = () => {
    if (sendElement.offsetHeight >= 90)
        sendElement.classList.remove('hide--scollbar')
    else
        sendElement.classList.add('hide--scollbar')
}

const sendMessage = (type, content) => {
    let html;
    if (type == 'send')
    {
        html = templateMsgSender('single', content, sent);
        document.querySelector('#chat__history').innerHTML += html;
        scollLastestMsg();
    }
    else
    {
        
    }
}

const templateMsgSender = (msgPosition, content, status) => {
    let template = `<div class="message flex">
                        <div class="message__detail sender">
                            <div class="msg_right">
                                <p class="wrap_msg me ${msgPosition}">
                                    <span class="msg">${content}</span>
                                </p>
                                <div class="send_seen__status">
                                    ${status}
                                </div>
                            </div>
                        </div>
                    </div>`;
    return template;
}

const templateMsgReceive = (msgPosition, content) => {
    let template = `<div class="message flex">
                        <div class="messager__avatar messager__avatar--resize messager__avatar--position">
                            <img src="./assets/img/avatar.jpg" alt="">
                        </div>
                        <div class="message__detail">
                            <p class="wrap_msg you ${msgPosition}">
                                <span class="msg">${content}</span>
                            </p>
                        </div>
                    </div>`;
    return template;
}