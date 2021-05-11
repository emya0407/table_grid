$(function(){
  /*script 영역 table grid 사용 예*/
  let thisNum;

  //방법1 mouseover mouseout을 사용한 방법
  // $('td').mouseover(function(){
  //   // $(this).index()
  //   console.log($(this).index())
  //   thisNum = $(this).index() + 1;
  //   $('td:nth-child('+thisNum+')').addClass('hover');
  // }).mouseout(function(){
  //   $('td:nth-child('+thisNum+')').removeClass('hover');//방법1
  // })


  //방법2 mouseover만 사용해서
  $('td').mouseover(function(){
    // $(this).index()
    console.log($(this).index())
    thisNum = $(this).index() + 1;
    $('td').removeClass('hover');//<--removeClass
    $('td:nth-child('+thisNum+')').addClass('hover');
  })
});//document ready
