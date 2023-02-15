const emojiSelectorIcon = document.getElementById('emojiSelectorIcon');
const emojiSelector = document.getElementById('emojiSelector');
const emojiList = document.getElementById('emojiList');

emojiSelectorIcon.addEventListener('click', ()=> {
    emojiSelector.classList.toggle('active');
});

fetch('https://emoji-api.com/emojis?access_key=d27f1ee05fa1a8c90dd1d0c58e6d858126d15c8e')
    .then(res =>res.json())
    .then(data => loadEmoji(data))
    //.then(data => console.log(data)) this displays all emojis in an array

function loadEmoji(data){
    data.forEach(emoji => {
        let li = document.createElement('li');
        li.setAttribute('emoji-name', emoji.slug);
        li.textContent = emoji.character;
        emojiList.appendChild(li);
    });
}

emojiSearch.addEventListener('keyup', e =>{
    let value = e.target.value;
    let emojis = document.querySelectorAll('#emojiList li');
    emojis.forEach(emoji => {
        if(emoji.getAttribute('emoji-name').toLowerCase().includes(value)){
            emoji.getElementsByClassName.display = 'flex';
        } else {emoji.getElementsByClassName.display = 'none';}
    })
})