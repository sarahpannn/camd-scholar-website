import * as THREE from 'three';
import'./chapter_style.css';
import gsap from 'gsap';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const tl = gsap.timeline({defaults: {durations : 1}});
tl.fromTo('nav', {y:"-100%"}, {y:"0%"})
tl.fromTo(".title", {opacity:0}, {opacity:1})
tl.fromTo(".subtitle", {opacity:0}, {opacity:1})


const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


