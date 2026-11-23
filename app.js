(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  function zamknij(){m.classList.remove('otw');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Otwórz menu');}
  b.addEventListener('click',function(){var o=m.classList.toggle('otw');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');});
  m.addEventListener('click',function(e){if(e.target.closest('a'))zamknij();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){zamknij();lbZ();}});
  // aktywna pozycja menu wg sekcji
  var linki=[].slice.call(m.querySelectorAll('a')),mapa={};
  linki.forEach(function(a){mapa[a.getAttribute('href').slice(1)]=a;});
  var sekcje=['o-nas','uslugi','cennik','pakiety','blog','kontakt'].map(function(i){return document.getElementById(i);});
  function akt(){var y=window.scrollY+window.innerHeight*0.35,id='top';
    sekcje.forEach(function(s){if(s&&s.offsetTop<=y)id=s.id;});
    if(id==='o-nas')id='top'; if(id==='pakiety')id='cennik';
    linki.forEach(function(a){a.classList.toggle('akt',a===mapa[id]);});}
  window.addEventListener('scroll',akt,{passive:true});akt();
  // powiekszanie zdjec
  var lb=document.getElementById('lb'),li=lb.querySelector('img');
  function lbZ(){lb.classList.remove('widac');}
  [].forEach.call(document.querySelectorAll('[data-lb]'),function(f){
    f.addEventListener('click',function(){var im=f.querySelector('img');li.src=im.currentSrc||im.src;li.alt=im.alt;lb.classList.add('widac');
      setTimeout(function(){li.src=f.getAttribute('data-lb');},180);});});
  lb.addEventListener('click',function(e){if(e.target!==li)lbZ();});
  // formularz pokazowy
  var f=document.getElementById('form');
  f.addEventListener('submit',function(e){e.preventDefault();document.getElementById('form-ok').classList.add('widac');});
})();
