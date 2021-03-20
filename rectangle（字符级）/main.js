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
    // 字段级校验
    $width.focusout(function(){
        if(!vaildate('#width')) $width.select();
    })
    $height.focusout(function(){
        if(!vaildate('#height')) $height.select();
    })

    //字符级校验
    $width.keypress(function(e){
        filterKey(e)
        
    })
    $height.keypress(function(e){
        filterKey(e);
    })
    function filterKey(e){
        // console.log('key');
        var pos = e.target.selectionStart,
            con = e.target.value;
        
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
            e.preventDefault();
            return;
        }
        if(e.key === '.') {
            if(pos === 0 || con.indexOf('.') !== -1) {
              e.preventDefault();
              return;
            }
      
            if(pos  === 1 && con.substring(0,1) === '-') {
              e.preventDefault();
              return;
            }
          }
      
          if(e.key === 'e') {
            if(pos === 0 || con.indexOf('e') !== -1 || con.indexOf('E') !== -1) {
              e.preventDefault();
              return;
            }
      
            if(pos === 1 && con.substring(0,1) === '-') {
              e.preventDefault();
              return;
            }
          }
      
          if(e.key === 'E') {
            if(pos === 0 || con.indexOf('e') !== -1 || con.indexOf('E') !== -1) {
              e.preventDefault();
              return;
            }
      
            if(pos === 1 && con.substring(0,1) === '-') {
              e.preventDefault();
              return;
            }
          }
    }
    // 表单级校验
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

