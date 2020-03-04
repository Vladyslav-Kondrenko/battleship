const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');
const enemy = document.getElementById('enemy');
const again = document.getElementById('again');

const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,
    set updateData(data) {
      this[data] += 1;
      this.render();
    },
    render() {
      record.textContent = this. record;
      shot.textContent = this.shot;
      hit.textContent = this.hit;
      dead.textContent = this.dead;
    }
};

const show = {
    hit() {

    },
    miss(elem) {
      this.changeClass(elem, 'miss'); 
      
      
    },
    dead() {

    },
    changeClass(elem, value){
      elem.className = value;
      
    }
};

const fire = (event) => {
  const target = event.target;
  // Проверка таргета на нужный тег
  if(event.target.tagName == 'TD'){
    // Проверка на повторный выстрел в одну и туже точку
    if(target.classList.contains('miss')){
      console.log('Настоящие капитаны не стреляют дважды в одну точку!')
    } else{
      show.miss(target);
      play.updateData = 'shot';
    }
  }

};

const init = () => {
    enemy.addEventListener('click', fire);
};
init();