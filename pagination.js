page = 0;

//a list of any amount of elements


//here we add any element inside the syndeseis thing and separate them with a coma




var syndeseis = [
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 1<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 2<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 3<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 4<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 5<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 6<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 7<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 8<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 9<br><br>',
  '<a href="#">www.meteorabooking.gr</a> | ELEMENT 10<br><br>'
];


limit = 4; //change heer the posts per page !!!





//the number 6 is the number of elements per page , elements ca be whatever you like there will be 6 of them in ever page

function checkListLength(pages,syndeseis,limit){
  if(syndeseis.length<limit){
                      //NUMBER_1;
  }
  else{
    return updateContentWhole(pages,syndeseis,limit);
  }
}


function updateContentWhole(pages,syndeseis,limit){
  if(pages!=0){
    console.log(pages);
    triangle1(0);
  }
  else{
    triangle1(1);
  }
  if((pages+1)*limit < syndeseis.length){
    triangle2(0);
  }
  else{
    triangle2(1);
  }
}

function triangle1(truth){
  if(truth == 0){
    jQuery('#triangle1').css({
      'display':'block',
    });
  }
  else{
    jQuery('#triangle1').css({
      'display':'none'
    });
  }
}

function triangle2(truth){
  if(truth == 0){
    jQuery('#triangle2').css({
      'display':'block',
    });
  }
  else{
    jQuery('#triangle2').css({
      'display':'none'
    });
  }
}

function updateContent(pages,syndeseis,limit){
  if(syndeseis.length-(pages)*limit>limit){
    syndeseisCom = '<div class="row"><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 syndeseis"><p>';
    for(var i=(pages)*limit;i<(pages)*limit+limit;i++){
      if(i==(pages)*limit+parseInt(limit/2)-1){
        syndeseisCom+=syndeseis[i]+'</p></div><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 syndeseis "><p>';
      }
      else{
        syndeseisCom+=syndeseis[i];
      }
    }
    syndeseisCom+='</p></div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center"><p id="triangle1" class="text">last</p></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center"><p id="triangle2" class="text">next</p></div></div>';
  }
  else{
    if(syndeseis.length-(pages)*limit>parseInt(limit/2)){
      syndeseisCom = '<div class="row"><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 syndeseis"><p>';
      for(var i=(pages)*limit;i<syndeseis.length;i++){
        if(i==(pages)*limit+parseInt(limit/2)-1){
          syndeseisCom+=syndeseis[i]+'</p></div><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 syndeseis"><p>';
        }
        else{
          syndeseisCom+=syndeseis[i];
        }
      }
      syndeseisCom+='</p></div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6"><p id="triangle1" class="text">last</p></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center"><p id="triangle2" class="text">next</p></div></div>';
    }
    else{
      syndeseisCom = '<div class="row"><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5 syndeseis"><p>';
      for(var i=(pages)*limit;i<syndeseis.length;i++){
         syndeseisCom+=syndeseis[i];
      }
      syndeseisCom+='</p></div></div><div class="row"><div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 "><p id="triangle1" class="text">last</p></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center"></div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center"><p id="triangle2" class="text">next</p></div></div>';
    }
  }
  document.getElementsByClassName('tab-content')[0].innerHTML=syndeseisCom;
  checkListLength(pages,syndeseis);
}
//gives  the triangle its css whether it should be shown or not
updateContent(page,syndeseis,limit);
checkListLength(page,syndeseis,limit);
$(document).on("click","#triangle1",function(){
  console.log(page);
  page--;
  updateContent(page,syndeseis,limit);
  checkListLength(page,syndeseis,limit);
});
$(document).on("click","#triangle2",function(){
  page++;
  console.log(page);
  updateContent(page,syndeseis,limit);
  checkListLength(page,syndeseis,limit);
});
