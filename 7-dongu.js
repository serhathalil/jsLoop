<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<title></title>
</head>
<body>
<script type="text/javascript">
var x=1;
function birinci(parametre1){document.write("ilk fonksiyonumu "+parametre1+" .defa çalıştırıyorum  ");
                     ikinci(parametre1);  }
function ikinci(parametre2){document.write("ikinci fonksiyonumu"+parametre2+".defa çalıştırıyorum");
					parametre2=parametre2+1;
					birinci(parametre2);  }
birinci(x);
//function nihai(){birinci(),ikinci();}
//nihai();
</script>
</body>
</html>