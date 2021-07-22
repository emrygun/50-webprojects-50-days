const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1500);

function getData() {
    header.innerHTML = `<img src="https://source.unsplash.com/random/640x480" alt="" />`;
    title.innerHTML = `Lorem ipsum dolor sit amet`;
    excerpt.innerHTML = `Dolor id perferendis accusantium itaque reiciendis! Blanditiis ex ducimus sint voluptatum voluptate laborum Officia inventore quaerat expedita itaque`;

    profile.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
    name.innerHTML = `John Doe`;
    date.innerHTML = `Oct 08`;
    
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

    header.classList.add('animated-bg');
}
