
function createSendMessage(message)
{
    return `<div class="message flex">
                <div class="message__detail sender">
                    <div class="msg_right">
                        <div class="max-width-msg">
                            <p class="wrap_msg me right single">
                                <span class="msg">${message}</span>
                            </p>
                        </div>
                        <div class="send_seen__status">
                            <!-- <img src="./assets/img/avatar.jpg" alt=""> -->
                            <i class="far fa-check-circle"></i>
                        </div>
                    </div>
                </div>
            </div>`;
}