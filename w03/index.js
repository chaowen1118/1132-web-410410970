function openiframe(index) {
  const c = document.getElementsByClassName('show-classdemo')[0];
  console.log(c);
  switch (index) {
    case 1:
      c.innerHTML = '<iframe src="w03/card.html" frameborder="1"></iframe>';
      break;
    case 2:
      c.innerHTML = '<iframe src="w03/mycard.html" frameborder="1"></iframe>';
      break;
    case 3:
      c.innerHTML = '<iframe src="w03/L6.html" frameborder="1"></iframe>';
      break;
    case 4:
      c.innerHTML = '<iframe src="w03/week1.html" frameborder="1"></iframe>';
      break;
  }
  console.log(index);
}
