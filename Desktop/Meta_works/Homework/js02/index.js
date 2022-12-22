$(function(){

    $(".tugma").click(function(){

        let vil = $(".viloyat").val();
        

        if( vil == "tsh" )
        {
            $(".a").html("01");    
        }
        else if( vil == "and" )
        {
            $(".a").html("60");
        }
        else if( vil == "tv" )
        {
            $(".a").html("10");
        }
        else if( vil == "nam" )
        {
            $(".a").html("50");
        }
        else if( vil == "far" )
        {
            $(".a").html("40");
        }
        else if( vil == "jiz" )
        {
            $(".a").html("25");
        }
        else if( vil == "sam" )
        {
            $(".a").html("30");
        }
        else if( vil == "sir" )
        {
            $(".a").html("20");
        }
        else if( vil == "bux" )
        {
            $(".a").html("80");
        }
        else if( vil == "xor" )
        {
            $(".a").html("90");
        }

        // 2-ish

        let harf1 = $(".harf1").val();
        $(".b").html(harf1);

        let harf23 = $(".harf23").val();
        $(".d").html(harf23);

        let raqam = $(".raqam").val();
        $(".c").html(raqam);

        // let z ;

        let shaxs = $(".shaxs").val();
        if( shaxs == "y" )
        {
            $(".b").html(raqam);
            $(".c").html(harf1);
            $(".c").css("transform","translateX(20px)");
        }
        else 
        {
            $(".b").html(harf1);
            $(".c").html(raqam);
            $(".c").css("transform","translateX(0px)");
        }


        // 111,222,333 ... 999 => 385 mln 
        // Z ??? ZZ => 200mln 
        // Z 777 ZZ => 700 mln 
        // X ?? XX => 200 mln 
        // Z 701 ZZ => 100 mln
        // Z 501 ZZ => 85 mln
        // 001, 002, 003 ... 009 => 250 mln     
        // 010,020,030,,,090 => 50 mln 
        // 100,200,300,400,,,900 => 60 mln 
        

       

        if(raqam%111==0 && harf1==harf23[0] && harf1==harf23[1]){
            $(".narx").html("700mln")
        }else if(raqam==null || harf1==null || harf23==null || harf23[1]==null){
            $(".narx").html("ERROR")
        }else if(raqam%111==0 && raqam!=0){
            $(".narx").html("385mln")
        }else if(harf1==harf23[0] && harf1==harf23[1]){
            $(".narx").html("200mln")
        }else if(raqam<10 &&  raqam!=0 ){
            $(".narx").html("250mln");
            $(".c").html("00"+raqam);
        }else if(raqam<100 && raqam[2]==0){
            $(".narx").html("50mln")
        }else if(raqam%100==0 && raqam!=0){
            $(".narx").html("60mln")
        }else{
            $(".narx").html("2mln")
        }



        




    })



})