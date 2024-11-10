console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-background-color'))
// we get the value stored in that css variable.
// this can be applied to all css variables 

document.getElementById('dark-theme-btn').addEventListener
('click', () => {
  document.documentElement.style.setProperty('--background-color', '#333')
})

document.getElementById('light-theme-btn').addEventListener
('click', () => {
  document.documentElement.style.setProperty('--background-color', 'white')
})