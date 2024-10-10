document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-1', {particles: {
            number: { value: 50 },
            color: { value: '#ff0000' },
            shape: { type: 'circle' },
            opacity: { value: 1, random: false },
            size: { value: 4, random: true },
            move: { enable: true, speed: 1, direction: 'none' }}});

    particlesJS('particles-2', {particles: {
            number: { value: 30 },
            color: { value: '#0000ff' },
            shape: { type: 'triangle' },
            opacity: { value: 1, random: false },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: 'none' }}});

    particlesJS('particles-3', {particles: {
            number: { value: 15 },
            color: { value: '#00ff00' },
            shape: { type: 'circle' },
            opacity: { value: 0.7, random: false },
            size: { value: 4, random: true },
            move: { enable: true, speed: 1, direction: 'none' }}});

    particlesJS('particles-4', {particles: {
            number: { value: 100 },
            color: { value: ['#ff0000', '#0000ff', '#00ff00'] },
            shape: { type: 'star' },
            opacity: { value: 1, random: false },
            size: { value: 1, random: false },
            move: { enable: true, speed: 1, direction: 'none' }}});});