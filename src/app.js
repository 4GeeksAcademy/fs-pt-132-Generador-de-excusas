window.onload = function() {
    const data = {
        who: ['The dog', 'My grandma', 'The mailman', 'My bird'],
        action: ['ate', 'peed', 'crushed', 'broke'],
        what: ['my homework', 'my phone', 'the car'],
        when: ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']
    };

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const generateExcuse = () => {
        const { who, action, what, when } = data;
        return `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
    };

    const btn = document.querySelector('#excuse-btn');
    const list = document.querySelector('#excuse-list');

    if (btn) {
        btn.addEventListener('click', () => {
            const excuseText = generateExcuse();
            
            const li = document.createElement('li');
            li.className = "list-group-item list-group-item-action animate__animated animate__fadeIn";
            li.innerHTML = `<strong>✨</strong> ${excuseText}`;
            
            list.prepend(li);
        });
    }

    console.log("¡Generador de excusas listo!");
};