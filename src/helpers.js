export const randomColor = () => {
  const colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a','#90be6d','#43aa8b','#4d908e','#577590','#277da1','#001427','#708d81','#f4d58d','#bf0603','#8d0801','#d88c9a','#f2d0a9','#f1e3d3','#99c1b9','#8e7dbe']; // prettier-ignore
  const randomIdx = Math.floor(Math.random() * colors.length);
  return colors[randomIdx];
};
