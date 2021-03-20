$(()=>{
    
    // get dom elem
    let $width =$('#width'),
        $height =$('#height'),
        $btnCal = $('#calc'),
        $perimeter = $('#perimeter'),
        $area = $('#area');
    /*calc button click*/
    $btnCal.click(()=>{
        if(!vaildate('#width') || !vaildate('#height')) 
            return;
        // get value
        let w = Number($width.val()),
            h = Number($height.val());
        

        // calc
        let p=(w+h)*2;
        let a = w*h;

        // output
        $perimeter.val(p);
        $area.val(a);


    })
    
     function vaildate(field){
         //get DOM error message
         var $data = $(field),
            $msg = $(field+'-vaildation-message');
            
        //vaildate null
        if($data.val() ==''){
            $msg.html('不能为空');
            $data.select();
            return false;
        }

        //vaildate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值！');
            $data.select();
            return false;
        }
        
        //vaildata >0
        if(Number($data.val())<0){
            $msg.html('必须大于零！');
            $data.select();
            return false;
        }

        $msg.html('');
        return true;
     }

    

    
})
