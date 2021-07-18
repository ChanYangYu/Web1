function setValue(mode){
    var btn_lst = document.querySelectorAll('.day_night');
      for(var i = 0; i < btn_lst.length; i++)
        btn_lst[i].value = mode;
  }

  function setLinkColor(color){
    var a_lst = document.querySelectorAll('a');
      for(var i = 0; i < a_lst.length; i++)
        a_lst[i].style.color = color;
  }

  function setBodyColor(backgroundColor, color){
    var target = document.querySelector('body');
    target.style.backgroundColor = backgroundColor;
    target.style.color = color;
  }

  function dayNightHandler(self){
    if(self.value === 'day'){
      setBodyColor('white', 'black');
      setValue('night');
      setLinkColor('blue');
    }
    else{
      setBodyColor('black','white');
      setValue('day');
      setLinkColor('yellow');
    }
  }