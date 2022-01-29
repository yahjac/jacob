

// CODE FOR STICKY FOOTER

$(document).ready(function(){
  setInterval(function(){
      var docHeight= $(window).height();
      var footerHeight= $(".footer").height();
      var footerTop= $(".footer").position().top + footerHeight;
      var marginTop=(docHeight-footerTop+10);

      if (footerTop< docHeight) $(".footer").css("margin-top",marginTop + "px")
      else $("footer").css("maargin-top", "0px");
  },250)

                                     })






                document.querySelector("#social2")                    

                
                const man = document.querySelector("#social2")


                console.log(man)
                