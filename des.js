//金鑰排列 KP陣列
    var kpTable = [56,48,40,32,24,16, 8, 0,57,49,41,33,25,17,
                    9, 1,58,50,42,34,26,18,10, 2,59,51,43,35,
                   62,54,46,38,30,22,14, 6,61,53,45,37,29,21,
                   13, 5,60,52,44,36,28,20,12, 4,27,19,11, 3];
//縮減排列 CP陣列
    var cpTable = [13,16,10,23, 0, 4, 2,27,14, 5,20, 9,
                   22,18,11, 3,25, 7,15, 6,26,19,12, 1,
                   40,51,30,36,46,54,29,39,50,44,32,47,
                   43,48,38,55,33,52,45,41,49,35,28,31];
//左移位數陣列
    var shiftLTable = [1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28];
//初始排列 IP陣列    
    var ipTable = [57,49,41,33,25,17, 9, 1,59,51,43,35,27,19,11, 3,
                   61,53,45,37,29,21,13, 5,63,55,47,39,31,23,15, 7,
                   56,48,40,32,24,16, 8, 0,58,50,42,34,26,18,10, 2,
		   60,52,44,36,28,20,12, 4,62,54,46,38,30,22,14, 6];
//擴增排列 EP陣列
    var epTable = [31, 0, 1, 2, 3, 4, 3, 4, 5, 6, 7, 8,
                    7, 8, 9,10,11,12,11,12,13,14,15,16,
                   15,16,17,18,19,20,19,20,21,22,23,24,
                   23,24,25,26,27,28,27,28,29,30,31, 0];
// S-BOX三維陣列    
    var sbox=[];
    sbox = [0,1,2,3,4,5,6,7]
    for(var i=0;i<sbox.length;i++){sbox[i] = [];}
    sbox[0][0] = [14, 4,13, 1, 2,15,11, 8, 3,10, 6,12, 5, 9, 0, 7];
    sbox[0][1] = [ 0,15, 7, 4,14, 2,13, 1,10, 6,12,11, 9, 5, 3, 8];
    sbox[0][2] = [ 4, 1,14, 8,13, 6, 2,11,15,12, 9, 7, 3,10, 5, 0];
    sbox[0][3] = [15,12, 8, 2, 4, 9, 1, 7, 5,11, 3,14,10, 0, 6,13];
    
    sbox[1][0] = [15, 1, 8,14, 6,11, 3, 4, 9, 7, 2,13,12, 0, 5,10];
    sbox[1][1] = [ 3,13, 4, 7,15, 2, 8,14,12, 0, 1,10, 6, 9,11, 5];
    sbox[1][2] = [ 0,14, 7,11,10, 4,13, 1, 5, 8,12, 6, 9, 3, 2,15];
    sbox[1][3] = [13, 8,10, 1, 3,15, 4, 2,11, 6, 7,12, 0, 5,14, 9];
    
    sbox[2][0] = [10, 0, 9,14, 6, 3,15, 5, 1,13,12, 7,11, 4, 2, 8];
    sbox[2][1] = [13, 7, 0, 9, 3, 4, 6,10, 2, 8, 5,14,12,11,15, 1];
    sbox[2][2] = [13, 6, 4, 9, 8,15, 3, 0,11, 1, 2,12, 5,10,14, 7];
    sbox[2][3] = [ 1,10,13, 0, 6, 9, 8, 7, 4,15,14, 3,11, 5, 2,12];
    
    sbox[3][0] = [ 7,13,14, 3, 0, 6, 9,10, 1, 2, 8, 5,11,12, 4,15];
    sbox[3][1] = [13, 8,11, 5, 6,15, 0, 3, 4, 7, 2,12, 1,10,14, 9];
    sbox[3][2] = [10, 6, 9, 0,12,11, 7,13,15, 1, 3,14, 5, 2, 8, 4];
    sbox[3][3] = [ 3,15, 0, 6,10, 1,13, 8, 9, 4, 5,11,12, 7, 2,14];
    
    sbox[4][0] = [ 2,12, 4, 1, 8,10,11, 6, 8, 5, 3,15,13, 0,14, 9];
    sbox[4][1] = [14,11, 2,12, 4, 7,13, 1, 5, 0,15,10, 3, 9, 8, 6];
    sbox[4][2] = [ 4, 2, 1,11,10,13, 7, 8,15, 9,12, 5, 6, 3, 0,14];
    sbox[4][3] = [11, 8,12, 7, 1,14, 2,13, 6,15, 0, 9,10, 4, 5, 3];
    
    sbox[5][0] = [12, 1,10,15, 9, 2, 6, 8, 0,13, 3, 4,14, 7, 5,11];
    sbox[5][1] = [10,15, 4, 2, 7,12, 9, 5, 6, 1,13,14, 0,11, 3, 8];
    sbox[5][2] = [ 9,14,15, 5, 2, 8,12, 3, 7, 0, 4,10, 1,13,11, 6];
    sbox[5][3] = [ 4, 3, 2,12, 9, 5,15,10,11,14, 1, 7, 6, 0, 8,13];
    
    sbox[6][0] = [ 4,11, 2,14,15, 0, 8,13, 3,12, 9, 7, 5,10, 6, 1];
    sbox[6][1] = [13, 0,11, 8, 4, 9, 1,10,14, 3, 5,12, 2,15, 8, 6];
    sbox[6][2] = [ 1, 4,11,13,12, 3, 7,14,10,15, 6, 8, 0, 5, 9, 2];
    sbox[6][3] = [ 6,11,13, 8, 1, 4,10, 7, 9, 5, 0,15,14, 2, 3,12];
    
    sbox[7][0] = [13, 2, 8, 4, 6,15,11, 1,10, 9, 3,14, 5, 0,12, 7];
    sbox[7][1] = [ 1,15,13, 8,10, 3, 7, 4,12, 5, 6,11, 0,14, 9, 2];
    sbox[7][2] = [ 7,11, 4, 1, 9,12,14, 2, 0, 6,10,13,15, 3, 5, 8];
    sbox[7][3] = [ 2, 1,14, 7, 4,10, 8,13,15,12, 9, 0, 3, 5, 6,11];
    //console.log(sbox);

// P-BOX陣列
    var pboxTable = [15, 6,19,20,28,11,27,16, 0,14,22,25, 4,17,30, 9,
                      1, 7,23,13,31,26, 2, 8,18,12,29, 5,21,10, 3,24];
//最後排列 FP陣列
    var fpTable = [39, 7,47,15,55,23,63,31,38, 6,46,14,54,22,62,30,
                   37, 5,45,13,53,21,61,29,36, 4,44,12,52,20,60,28,
                   35, 3,43,11,51,19,59,27,34, 2,42,10,50,18,58,26,
                   33, 1,41, 9,49,17,57,25,32, 0,40,8,48,16,56,24];
    
    //監測Button按下時
	$("form").submit(function(event){
        var patt = /^[a-zA-Z0-9]{7}$/;	//設定Key的正規表達式
        var patt2 = /^[a-zA-Z0-9]{8}$/;	//設定Plaintext的正規表達式
        var inputKey = $("input#key").val();	//取得input裡的值
        var plaintext = $("input#plaintext").val();
        
        var in1 = patt.test(inputKey);	//檢查
        var in2 = patt2.test(plaintext);
        if(in1 && in2){
	//當兩個input值都符合正規表達式
            $("section#output").show(1000); //用一秒慢動作顯示 Table
            
            $("#createKey thead td:last").html(inputKey); //將input的key顯示在id為createKey裡的thead裡的最後一個td裡
            var keyHex = []; 	//宣告空陣列
            var c = [];		//宣告空陣列
            var keyBit = "";	//宣告空字串
            for(i=0;i<7;i++){	//將字串一個一個字轉為ascii，兩個ascii再依序存入keyHex陣列
                for(j=0;j<2;j++){
                    keyHex.push(char2ascii(inputKey[i]).substr(j,1));
                }
            }
            for(i=0;i< keyHex.length ; i++){	//將Hex轉為Bit，並補0，最後累加在keyBit字串
                keyBit += padLeft(hex2bit(keyHex[i]),4);
                c.push(padLeft(hex2bit(keyHex[i]),4));	//將Hex轉為Bit並補0最後存入C陣列，用做顯示使用
            }
            for(i=0;i<c.length;i++){	//把C陣列裡的資料顯示在 id為originalKey裡的最後一個td
                $("#originalKey td:last").append("<div>"+byte2hex(c[i]) + "<br>" +c[i]+"</div>");
            }
            
            /*
            *   odd 奇同位元碼
            */
            var oddParity = 0; 	//設定初始值為0	
            var keyBit64 = "";	//宣告空字串
            for(i=0;i<keyBit.length;i++){	//將原始keyBit(56bit)存到keyBit64
                keyBit64 += keyBit[i];
                oddParity += parseInt(keyBit[i]); //將Bit轉為數值累加至oddParity
                if((i+1)%7 == 0){	//當i取得以7個為單位時
                    if( oddParity%2 == 0){	//若是oddParity累加共有偶數個1
                        keyBit64 += "1";	//將keyBit累加字串"1"
                    }else{
                        keyBit64 += "0";	//否則將KeyBit累加字串"0"
                    }
		    oddParity = 0;		//將oddParity歸0
                }
	    }
            for(i=0;i<64;i+=4){ //將奇同位元碼印在網頁上
                var temp = keyBit64.toString().substr(i,4);	//將keyBit64以4bit存至temp準備印出
                $("#odd td:last").append("<div>"+byte2hex(temp) + "<br>" +temp+"</div>"); //印出temp的byte和hex
            }
            
            /*
            *   KP 金鑰排列
            */
            var keyKp = "";	//宣告空字串
            for(i=0;i<56;i++){	//將剛剛的奇同位元碼依照排列陣列依序累加至keyKp
                keyKp += keyBit64[kpTable[i]];
            }
            for(i=0;i<56;i+=4){	//將金鑰排列後的結果印在網頁上
                var temp = keyKp.toString().substr(i,4);	//將keyKp以4bit存至temp準備印出
                $("#KP td:last").append("<div>"+byte2hex(temp) + "<br>" +temp+"</div>")	//印出temp的byte和hex
            }
            
            /*
            *   Key Round 1 產生第一回合金鑰
            */
            var keyLeft0 = "";
            var keyRight0 = "";
            for(i=0;i<28;i++){	//將keyKp分割成左右兩半存至兩個空字串
                keyLeft0 += keyKp[i];
                keyRight0 += keyKp[28+i]; 
            }
            var keyLeft1 = shiftLeft(keyLeft0,1);	//左半向左循環左移1bit
            var keyRight1 = shiftLeft(keyRight0,1);	//右半向左循環左移1bit
            var keyLR = "";
            for(i=0;i<28;i++){	//將新的左半累加進 合併左右的字串
                keyLR += keyLeft1[i];
            }
            for(i=0;i<28;i++){	//將新的右半累加進 合併左右的字串
                keyLR += keyRight1[i];
            }
            var keyRound1=cp(keyLR);	//將keyLR進行 縮減排列 ，即為第一回合金鑰
            var kR1Byte = bit2byteArray(keyRound1); //將第一回合金鑰由64bit轉為4bit為一組（byte）的陣列
            var kR1Hex = byteArr2hexArr(kR1Byte);  //將上面的byte陣列轉為hex陣列
            
            for(i=0;i<keyLeft1.length;i+=4){	//在id為KL1裡的最後一個td裡印出循環左移後的keyLeft
                var temp = keyLeft1.toString().substr(i,4);
                $("#KL1 td:last").append("<div>"+byte2hex(temp) + "<br>" +temp+"</div>")
            }
            for(i=0;i<keyRight1.length;i+=4){	//在id為KR1裡的最後一個td裡印出循環左移後的keyRight
                var temp = keyRight1.toString().substr(i,4);
                $("#KR1 td:last").append("<div>"+byte2hex(temp) + "<br>" +temp+"</div>")
            }
            for(i=0;i<kR1Byte.length;i+=1){
                //$("#keyR1 td:last").append("<div>"+kR1Hex[i] + "<br>" +kR1Byte[i]+"</div>")
            }
            
            /*
	    * 	Key Round 產生第N回合金鑰
	    */
            var keyRound = [];	//宣告空陣列
            for(var round=1;round<=16;round++){	//for迴圈跑餘下的15個回合
                keyRound.push(getRoundKey(round,keyKp)); //將回合和金鑰排列後的字串輸進function中，將回傳的第N回合金鑰字串存入陣列
                var kRByte = bit2byteArray(keyRound[keyRound.length-1]); //將回傳的keyRound轉換為byte陣列	
                for(j=0;j<kRByte.length;j+=1){	//印出keyRound的hex和byte
                    $("#keyR"+round+" td:last").append("<div>"+byte2hex(kRByte[j]) + "<br>" +kRByte[j]+"</div>")
                }
            }
            
            
            /*
            var htmlTable = ''<table><thead><tr><td>明文：</td><td></td></tr></thead><tbody>
            <tr>
                <td></td><td></td>
            </tr>
            <tr>
                <td></td><td></td>
            </tr>
            <tr>
                <td></td><td></td>
            </tr>
            <tr>
                <td></td><td></td>
            </tr>
        </tbody>
    </table>';
    */
            //$("section#output").append('')
            
            
            $("#encrypt thead td:last").html(plaintext);	//將input取得的plaintext印在id為encrypt裡的thead裡的最後一個td裡
            var textHex = [];
            var textByte = [];
            var textBit = "";
            for(i=0;i<plaintext.length;i++){	//將字串轉為ascii陣列
                for(j=0;j<2;j++){
                    textHex.push(char2ascii(plaintext[i]).substr(j,1));
                }
            }
            for(i=0;i< textHex.length ; i++){
                textBit += padLeft(hex2bit(textHex[i]),4); //將hex陣列轉為bit累加至textBit
                textByte.push(padLeft(hex2bit(textHex[i]),4)); //將hex陣列轉為byte存入textByte陣列
            }
            for(i=0;i<textByte.length;i++){	//將plaintext的byte與hex印出
                $("#ptext td:last").append("<div>"+byte2hex(textByte[i])+"<br>"+textByte[i]+"</div>");
            }
            
            /*
            *   IP 初始排列
            */
            var textIP = "";
            for(i=0;i<textBit.length;i++){
                textIP += textBit[ipTable[i]]; //利用IP陣列將textBit做排列累加至textIP
            }
            for(i=0;i<textIP.length;i+=4){
                var temp = textIP.toString().substr(i,4); //將textIP以4bit為一組給temp
                $("#IP td:last").append("<div>"+byte2hex(temp) + "<br>" +temp+"</div>") //印出textIP的byte和hex
            }
            
            
            /*
            *   round ciphertext 回合密文
            */
            var ciphertext = [];
            ciphertext.push(encryption(textIP,keyRound[0])); //產生第一回合的密文存入ciphertext陣列
            
            var htmltext = "";	
            htmltext += '<tr class="eText1"><td>第1回合密文</td><td>';	//累加將要印出HTML字串
            var tempArray = bit2byteArray(ciphertext[0]);	//將第一回合的密文轉為byte陣列存入tempArray
            for(var j=0;j<tempArray.length;j++){	//累加第一回合密文的hex和byte
                htmltext += "<div>"+byte2hex(tempArray[j])+"<br>"+tempArray[j]+"</div>";
            }
            htmltext+="</td></tr>";
            $("#FP").before(htmltext);	//將htmltext印在id為FP的前面
            
            // 第2回合之後的密文產生
            for(var round=1;round<16;round++){
                ciphertext.push(encryption(ciphertext[ciphertext.length-1],keyRound[round])); //產生第N回合的密文存入ciphertext陣列
                
                var htmltext = "";
                htmltext += '<tr class="eText'+(round+1)+'"><td>第'+(round+1)+'回合密文</td><td>'; //累加將要印出HTML字串
                var tempArray = bit2byteArray(ciphertext[round]); //將第N回合的密文轉為byte陣列存入tempArray
                for(var j=0;j<tempArray.length;j++){	//累加第N回合密文的hex和byte
                    htmltext += "<div>"+byte2hex(tempArray[j])+"<br>"+tempArray[j]+"</div>";
                }
                htmltext+="</td></tr>";
		$("#FP").before(htmltext); //將htmltext印在id為FP的前面
            }
            
            /*
            *   FP 最後排列
            */
            var fptext = "";
            for(var i=0;i<ciphertext[15].length;i++){
                fptext += ciphertext[15][fpTable[i]]; //利用fp陣列做排列累加進fptext
            }
            for(i=0;i<fptext.length;i+=4){
                var temp = fptext.toString().substr(i,4); //將fptext以4bit為一組分割印出
                $("#FP td:last").append("<div>"+byte2hex(temp) + "<br>" +temp+"</div>"); //在id為FP裡的最後一個td裡印出hex和byte
            }
            
            
            
	}else{	//當輸入的兩個input的值不符合正規表達式的時候
            var errorMsg="";
            if(!in1){	//輸入的key錯誤
                errorMsg += "Input Key error !! \n";
            }
            if(!in2){	//輸入的Plaintext錯誤
                errorMsg += "Input Plaintext error !! \n";
            }
            alert(errorMsg); //跳出警告視窗
            return true;    //刷新頁面
        }
        return false;	//不刷新頁面
    })
    
    
    function char2ascii(char1){	//將字元轉為ascii(hex)
        return char1.charCodeAt(0).toString(16);
    }
    function hex2bit(hex1){	//將hex轉為bit
        return parseInt(hex1,16).toString(2);
    }
    function byte2hex(byte1){	//將byte轉為hex
        return parseInt(byte1,2).toString(16);
    }
    function bit2byteArray(bit1){	//將bit字串轉為4bit(byte)為一組陣列
        var arrByte = [];
        for(i=0;i < bit1.length;i+=4){
            arrByte.push(bit1.toString().substr(i,4));
        }
        return arrByte;
    }
    function byteArr2hexArr(byte1){	//將byte陣列轉為hex陣列
        var arrHex = [];
        for(i=0;i < byte1.length;i+=1){
            arrHex.push(byte2hex(byte1[i]));
        }
        return arrHex;
    }
    
    function padLeft(str,len){		//在左側補0 (將hex轉為bit會用到)
        str = ''+str;
        if(str.length < len){
            return padLeft("0" + str ,len);
        }else{
            return str;
        }
    }
    function shiftLeft(keyPart,time){	//循環左移，keyPart要左移的字串，time為左移次數
        if(time > 0 && time < 28){
            var tempX = keyPart[0];
            var temp = "";
            for(i=0;i<27;i++){
                temp += keyPart[i+1].toString();
            }
            temp += tempX;
            time -= 1;
            return shiftLeft(temp,time);
        }else{
            return keyPart;
        }
    }
    function cp(tkeyLR){	//縮減排列
        var temp = "";
        for(i=0;i<48;i++){
            temp += tkeyLR[cpTable[i]];
        }
        return temp;
    }
    function getRoundKey(time,KP){	//time為回合數，KP為金鑰排列後的值，回傳回合金鑰
        var keyL = "";
        var keyR = "";
        for(i=0;i<28;i++){	//將KP分成左右兩半
            keyL += KP[i];
            keyR += KP[28+i]; 
        }
        var keyLeft = shiftLeft(keyL,parseInt(shiftLTable[time-1])); //循環左移左半
        var keyRight = shiftLeft(keyR,parseInt(shiftLTable[time-1])); //循環左移右半
        var keyLR = "";
        for(i=0;i<28;i++){ //將左半累加進keyLR
            keyLR += keyLeft[i];
        }
        for(i=0;i<28;i++){ //將右半累加進keyLR
            keyLR += keyRight[i];
        }
        return cp(keyLR); //回傳keyLR做縮減排列後的值(即為回合金鑰)
    }
    function ep(textRight){ //擴增排列（32bit -> 48bit）
        var temp = "";
        for(i=0;i<48;i++){
            temp += textRight[epTable[i]];
        }
        return temp;
    }
    function str2index(str){	//產生S-BOX所需的index
        var temp = [];
        var s1 = str[0] + str[5];
        var s2 = str.toString().substr(1,4)
        temp.push(parseInt(s1,2).toString(10));
        temp.push(parseInt(s2,2).toString(10));
        return temp;
    }
    function pbox(sbox){ //P-BOX 排列
        var temp = "";
        for(var i=0;i<sbox.length;i++){
            temp += sbox[pboxTable[i]];
        }
        return temp;
    }
    function encryption(inputText,key){ //產生第N回合密文
        var textLeft = "";
        var textRight = "";
        for(var i=0;i<inputText.length/2;i++){  //將上一回合密文分半
            textLeft += inputText[i];
            textRight += inputText[i+inputText.length/2];
        }
        var textLeft_n = textRight;	//上一回合右半密文即為此次左半密文
        var textR_EP = ep(textRight);	//將右半做擴增排列
        var textR_EP_K = "";
        $("#FP").before('<tr class="tleft"><td>R<spen class="subtext">i-1</spen></td><td><div>'+textRight+"</div></td></tr>"); //印出上一回的右半(bit)
        $("#FP").before('<tr class="tleft"><td>EP</td><td><div>'+textR_EP+"</div></td></tr>");	//印出做擴增排列後的
        
        for(var i=0;i<textR_EP.length;i++){	//將textR-EP與第N回合金鑰做每1bit的XOR
            textR_EP_K += textR_EP[i] ^ key[i];
        }
        $("#FP").before('<tr class="tleft"><td>Key</td><td><div>'+key+"</div></td></tr>"); //印出第N回合金鑰(bit)
        $("#FP").before('<tr class="tleft"><td>EP xor Key</td><td><div>'+textR_EP_K+"</div></td></tr>"); //印出XOR後的結果
        var text_sbox = "";
        for(var i=0;i<8;i++){	//做八回合的S-BOX
            var sboxIndex = str2index(textR_EP_K.toString().substr(i*6,6));
            text_sbox += padLeft(parseInt(sbox[i][sboxIndex[0]][sboxIndex[1]],10).toString(2),4);
        }
        $("#FP").before('<tr class="tleft"><td>S-Box</td><td><div>'+text_sbox+"</div></td></tr>"); //印出S-BOX後的結果
        var text_pbox = pbox(text_sbox);	//用function pbox處理
        $("#FP").before('<tr class="tleft"><td>P-Box</td><td><div>'+text_pbox+"</div></td></tr>"); //印出P-BOX後的結果
        var textRight_n = "";
        for(var i=0;i<text_pbox.length;i++){ //將上回左半與pbox後的做XOR
            textRight_n += text_pbox[i] ^ textLeft[i];
        }
        $("#FP").before('<tr class="tleft"><td>L<spen class="subtext">i-1</spen></td><td><div>'+textLeft+"</div></td></tr>"); //印出上回左半(bit)
        $("#FP").before('<tr class="tleft"><td>L<spen class="subtext">i-1</spen> xor P-Box</td><td><div>'+textRight_n+"</div></td></tr>"); //印出此次右半
        var roundCiphertext = textLeft_n + textRight_n; //結合左半與右半為此次完整密文
        return roundCiphertext;
    }