$(function(){

	var regUser =/^[a-zA-Z0-9\-_]{4,20}$/;//用户名正则检验规则

	var regPass = /^.{4,20}$/;//密码正则检验规则

	var regPass1 = /[0-9]+/; //防止密码无数字规则

	var regPass2 = /[a-zA-Z]+/;//防止密码无字母规则

	var regphone = /^1[3578][0-9]{9}$/;//手机正则检验规则

	var regname = /^([\u4e00-\u9fa5]{2,10})|([a-zA-Z]{2,20})$/; //检验中文名/英文名

	var regtel = /^(0\d{2,3}-)?\d{7,8}$/;//正则检查固定电话，区号可选

	var regemail = /^[0-9a-zA-Z_\-\.]{3,14}\@[0-9a-zA-Z]{2,7}\.[0-9a-zA-Z]{2,5}$/;//邮箱正则检验规则


	function expUser( value){//用户名正则检验规则
		
		return regUser.test(value);
		
	}

	function expPass( value){//密码正则检验规则
		
		return regPass.test(value) && regPass1.test(value) && regPass2.test(value);
	}

	function samePass( value){//判断两次密码是否一样
		
		return value == $('.input-pass1').val();
		
	}
	console.log(fun);

	function check( input,tips, errM ,fun){//1、获取输入框  2、提示语  3、警告提示语，
											//4、判断正则是否符合规则 
		input.focus(function(){//绑定获取焦点事件

			tips.show();//获取焦点展示提示语	
			errM.hide();//同时隐藏警告语

		});


		input.blur(function(){//绑定失去焦点事件
			console.log(this.value);

			if(fun(this.value)){//判断正则是否符合规则

				tips.hide();//符合提示语都不显示
			}else{
				tips.hide();//不符合提示语隐藏，同事警告语显示
				errM.show();

			}
		});

	}

	check($('.input-user'),$('.tips1'),$('.tips3'), expUser);//调用函数

	check($('.input-pass1'),$('.tips4'),$('.tips5'), expPass);

	check($('.input-pass2'),$('.tips7'),$('.tips8'), samePass);



	$('.input-pass1').keyup(function(){//检查密码是否弱中强

		
		if( expPass(this.value) ){

			if(this.value.length < 8){
				$('.safe').css({'display':'block'});

				$('.safe span').css('background','#fff');
				$('.ruo').css('background','red');

			}else if(this.value.length >= 8 && this.value.length < 12){
				$('.safe span').css('background','#fff');
				$('.zhong').css('background','red');

			}else if( this.value.length >= 12){
				$('.safe span').css('background','#fff');
				$('.qiang').css('background','red');
			}
		}

	});




	$('.input-phone').blur(function(){//检查手机是否合格

		
			if(!regphone.test(this.value)){//不符合跳出警告
				$('.t-phone1').show();
				$('.t-phone2').hide();
			}else{
				$('.t-phone2').show();//符合跳出钩钩
				$('.t-phone1').hide();
			}
		

		
	});
	


	$('.input-name').blur(function(){//检查姓名是否合格失去焦点
		
			if(!regname.test(this.value)){//不符合跳出警告
				$('.t-name').show();
				$('.check-name').hide();
			}else{
				$('.t-name').hide();
				$('.check-name').hide();
			}
		

	});


	$('.input-tel').blur(function(){//检查固定电话
		if(regtel.test(this.value)){
			
			$('.t-tel2').hide();
		}else{
				$('.t-tel2').show();//不符合规则弹出警告
		}		
	});



	$('.input-email').focus(function(){//检查邮箱
		
			
			$('.t-email2').hide();
			$('.t-email').show();
		});


	$('.input-email').blur(function(){//检查邮箱
		
		if(!(regemail.test(this.value))){	
			$('.t-email2').show();
			$('.t-email').hide();
		}


	});










});//外层














































