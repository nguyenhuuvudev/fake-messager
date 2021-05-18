let searchPersonButton = document.getElementById('search__person');
let logoMain = document.querySelector('.logo');
let ser

// handle envent for input search

searchPersonButton.addEventListener('focus', function handlle(e) {
    showInputSearch(this);
});

searchPersonButton.addEventListener('blur', function handlle(e) {
    resetInputSearch(this)
});

const showInputSearch = (_this) => {
    let nodeWrap = _this.parentNode.parentNode;

    // hide logo
    let nodeLogo = nodeWrap.querySelector('.logo');
    if (nodeLogo)
        nodeLogo.classList.add('none');

    // hide search icon
    nodeWrap.querySelector(".search__button").classList.add('none')

    // show back icon
    nodeWrap.querySelector('.back_icon').classList.remove('none');
    
    // style input
    _this.style.paddingLeft = '15px'
}

const resetInputSearch = (_this) => {
    logoMain.classList.remove("none");
}

// edit name
window.addEventListener('resize', editFullname)

function editFullname(){
    let fullname = document.getElementById('chat_with');
    if (window.innerWidth <= 400 && fullname.innerText.length >= 10)
    {
        let words = fullname.innerText.split(" ");
        fullname.innerText = words[words.length - 1];
    }
}

editFullname();


// envent click show/hide chat infomation
let formMessage = document.querySelector(".messages");
let backMessage = document.querySelector(".back_icon_message");

document.querySelector(".chat_information").addEventListener("click", showHideOptionChat)
document.querySelector(".back_icon_message").addEventListener("click", showHideOptionChat)

function showHideOptionChat() {
    let chatOption = document.querySelector('.chat__option');
    if (!chatOption.style.display || chatOption.style.display == 'none')
    {
        chatOption.style.display = 'block';
        if (window.innerWidth < 740)
            formMessage.style.display = 'none';
    }
    else
    {
        chatOption.style.display = 'none';
        if (window.innerWidth <= 740)
            formMessage.style.display = 'block'
    }

}



// scroll bar chat history to bottom
function scrolTopToBottom()
{
    let chatHistory = document.querySelector(".chat__history");
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

