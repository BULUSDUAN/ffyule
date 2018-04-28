﻿//选号区
function CreateNumber() {
    $("#spchoose").html("");
    var input = false;
    var ssc = false;
    var ts = false;
    var he = false;
    var zuhe = false;
    var quwei = false;
    var lhh = false;
    var strQw1 = new Array();
    var strQw2 = new Array();
    var strQw3 = new Array();
    var strQw4 = new Array();
    var strQw5 = new Array();

    var input11 = false;
    var scc11 = false;
    var dd11 = false;
    var cz11 = false;
    var heNum = 27;

    var strwz = "";
    var strBalls = new Array("万位", "千位", "百位", "十位", "个位");
    var ballNum = 5;

    var pk10 = false;
    var pk10Input = false;
    var pk10DX = false;
    var pk10DS = false;
    var pk10Num = 5;

    //快三
    var hezhi = false;
    var hezhiNum = 16;
    var chooseAll = false; //通选
    var k3 = false; //快三

    //11选5拖胆
    var td11x5 = false;

    switch (PlayCode) {
        case "P_DS_W": //时时彩，猜单双
        case "P_DS_Q":
        case "P_DS_B":
        case "P_DS_S":
        case "P_DS_G":
            var wz1 = "", wz2 = "";
            if (PlayCode == "P_DS_W") {
                wz1 = "万位";
                wz2 = "第一球";
            }
            else if (PlayCode == "P_DS_Q") {
                wz1 = "千位";
                wz2 = "第二球";
            }
            else if (PlayCode == "P_DS_B") {
                wz1 = "百位";
                wz2 = "第三球";
            }
            else if (PlayCode == "P_DS_S") {
                wz1 = "十位";
                wz2 = "第四球";
            }
            else if (PlayCode == "P_DS_G") {
                wz1 = "个位";
                wz2 = "第五球";
            }

            remark = '投注的号码与开出的号码' + wz1 + '(' + wz2 + ')一致即中奖。';
            PlayExample = '单：1 3 5 7 9均中奖, 双: 0 2 4 6 8均中奖。';
            PlayHelp = '投注的号码与开出的号码' + wz1 + '(' + wz2 + '一致即中奖。';

            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>" + wz1 + "</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='单'>单</span>";
            str += "<span class='ball' number='双'>双</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_DX_W": //时时彩，猜大小
        case "P_DX_Q":
        case "P_DX_B":
        case "P_DX_S":
        case "P_DX_G":
            var wz1 = "", wz2 = "";
            if (PlayCode == "P_DX_W") {
                wz1 = "万位";
                wz2 = "第一球";
            }
            else if (PlayCode == "P_DX_Q") {
                wz1 = "千位";
                wz2 = "第二球";
            }
            else if (PlayCode == "P_DX_B") {
                wz1 = "百位";
                wz2 = "第三球";
            }
            else if (PlayCode == "P_DX_S") {
                wz1 = "十位";
                wz2 = "第四球";
            }
            else if (PlayCode == "P_DX_G") {
                wz1 = "个位";
                wz2 = "第五球";
            }

            remark = '投注的号码与开出的号码' + wz1 + '(' + wz2 + ')一致即中奖。';
            PlayExample = '大: 5 6 7 8 9均中奖, 小: 0 1 2 3 4均中奖。';
            PlayHelp = '投注的号码与开出的号码' + wz1 + '(' + wz2 + ')一致即中奖。';

            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>" + wz1 + "</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='大'>大</span>";
            str += "<span class='ball' number='小'>小</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            str += "</ul>";

            $("#spchoose").html(str);
            break;
        case "P11_RXTD2": //11选5，二拖胆
            td11x5 = true;
            ballNum = 2;            
            remark = '从01-11中，选取2个及以上的号码进行投注，每注需至少包括1个胆码及1个拖码。';
            PlayExample = '如：选择胆码 08，选择拖码 06，开奖号码为 06 08 11 09 02，即为中奖。';
            PlayHelp = '分别从胆码和拖码的01-11中，至少选择1个胆码和1个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和1个拖码，所选胆码必须全中，即为中奖。';
            break;
        case "P11_RXTD3": //11选5，三拖胆
            td11x5 = true;
            ballNum = 3;
            remark = '从01-11中，选取3个及以上的号码进行投注，每注需至少包括1个胆码及2个拖码。';
            PlayExample = '如：选择胆码 08，选择拖码 06 11，开奖号码为 06 08 11 09 02，即为中奖。';
            PlayHelp = '分别从胆码和拖码的01-11中，至少选择1个胆码和2个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和2个拖码，所选胆码必须全中，即为中奖。';
            break;
        case "P11_RXTD4": //11选5，四拖胆
            td11x5 = true;
            ballNum = 4;
            remark = '从01-11中，选取4个及以上的号码进行投注，每注需至少包括1个胆码及3个拖码。';
            PlayExample = '如：选择胆码 08，选择拖码 06 09 11，开奖号码为 06 08 11 09 02，即为中奖。';
            PlayHelp = '分别从胆码和拖码的01-11中，至少选择1个胆码和3个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和3个拖码，所选胆码必须全中，即为中奖。';
            break;
        case "P11_RXTD5": //11选5，五拖胆
            td11x5 = true;
            ballNum = 5;
            remark = '从01-11中，选取5个及以上的号码进行投注，每注需至少包括1个胆码及4个拖码。';
            PlayExample = '如：选择胆码 08，选择拖码 02 06 09 11，开奖号码为  06 08 11 09 02，即为中奖。';
            PlayHelp = '分别从胆码和拖码的01-11中，至少选择1个胆码和4个拖码组成一注，只要当期顺序摇出的5个开奖号码中同时包含所选的1个胆码和4个拖码，所选胆码必须全中，即为中奖。';
            break;
        case "P11_RXTD6": //11选5，六拖胆
            td11x5 = true;
            ballNum = 6;
            remark = '从01-11中，选取6个及以上的号码进行投注，每注需至少包括1个胆码及5个拖码。';
            PlayExample = '如：选择胆码 08，选择拖码 01 02 05 06 09 11，开奖号码为 06 08 11 09 02，即为中奖。';
            PlayHelp = '分别从胆码和拖码的01-11中，至少选择1个胆码和5个拖码组成一注，只要当期顺序摇出的5个开奖号码同时存在于胆码和拖码的任意组合中，即为中奖。';
            break;
        case "P11_RXTD7": //11选5，七拖胆
            td11x5 = true;
            ballNum = 7;
            remark = '从01-11中，选取7个及以上的号码进行投注，每注需至少包括1个胆码及6个拖码。';
            PlayExample = '如：选择胆码 08，选择拖码 01 02 05 06 07 09 11，开奖号码为 06 08 11 09 02，即为中奖。';
            PlayHelp = '分别从胆码和拖码的01-11中，至少选择1个胆码和6个拖码组成一注，只要当期顺序摇出的5个开奖号码同时存在于胆码和拖码的任意组合中，即为中奖。';
            break;
        case "P11_RXTD8": //11选5，八拖胆
            td11x5 = true;
            ballNum = 8;
            remark = '从01-11中，选取8个及以上的号码进行投注，每注需至少包括1个胆码及7个拖码。';
            PlayExample = '如：选择胆码 08，选择拖码 01 02 03 05 06 07 09 11，开奖号码为 06 08 11 09 02，即为中奖。';
            PlayHelp = '分别从胆码和拖码的01-11中，至少选择1个胆码和7个拖码组成一注，只要当期顺序摇出的5个开奖号码同时存在于胆码和拖码的任意组合中，即为中奖。';
            break;
        case "K_3HZ": //快3，和值
            k3 = true;
            hezhi = true;
            ballNum = 16;
            hezhiNum = 16;
            remark = "对三个号码的和值进行投注，包括“和值3”至“和值18”投注。";
            PlayExample = "投注号码与当期开奖号码的三个号码的和值相符，即中奖。";
            PlayHelp = "和值：投注号码与当期开奖号码的三个号码的和值相符，即中奖，包括“和值3”至“和值18”。";
            break;
        case "K_32BT": //快3，二不同直选
            k3 = true;
            ballNum = 6;
            remark = "对三个号码中两个指定的不同号码和一个任意号码进行投注。";
            PlayExample = "当期开奖号码中有两个号码不相同，且投注号码中的两个不同号码与当期开奖号码中的两个不同号码相符，即中奖。";
            PlayHelp = "二不同号投注：当期开奖号码中有两个号码不相同，且投注号码中的两个不同号码与当期开奖号码中的两个不同号码相符，即中奖";
            break;
        case "K_33BT": //快3，三不同直选
            k3 = true;
            ballNum = 6;
            remark = "对三个各不相同的号码进行投注。";
            PlayExample = "当期开奖号码的三个号码各不相同，且投注号码与当期开奖号码全部相符，即中奖。";
            PlayHelp = "三不同号投注：当期开奖号码的三个号码各不相同，且投注号码与当期开奖号码全部相符，即中奖。";
            break;
        case "K_33LTX": //快3，三连号通选
            k3 = true;
            ballNum = 6;
            remark = "对所有三个相连的号码（仅限：123、234、345、456）进行投注。";
            PlayExample = "当期开奖号码为三个相连的号码（仅限：123、234、345、456），即中奖。";
            PlayHelp = "三连号通选：当期开奖号码为三个相连的号码（仅限：123、234、345、456），即中奖。";
            break;
        case "K_3STDX": //快3，三同号单选
            k3 = true;
            ballNum = 6;
            remark = "从所有相同的三个号码（111、222、…、666）中任意选择一组号码进行投注。";
            PlayExample = "当期开奖号码的三个号码相同，且投注号码与当期开奖号码相符，即中奖。";
            PlayHelp = "三同号单选：当期开奖号码的三个号码相同，且投注号码与当期开奖号码相符，即中奖。";
            break;
        case "K_3STTX": //快3，三同号通选
            k3 = true;
            chooseAll = true;
            ballNum = 6;
            remark = "对所有相同的三个号码（111、222、…、666）进行投注。";
            PlayExample = "当期开奖号码的三个号码相同，且投注号码与当期开奖号码相符，即中奖。";
            PlayHelp = "三同号通选：当期开奖号码的三个号码相同，即中奖。";
            break;
        case "K_32TDX": //快3，二同号单选
            k3 = true;
            ballNum = 6;
            remark = "对三个号码中两个指定的相同号码和一个指定的不同号码进行投注。";
            PlayExample = "当期开奖号码中有两个号码相同，且投注号码与当期开奖号码中两个相同号码和一个不同号码分别相符，即中奖。";
            PlayHelp = "二同号单选：当期开奖号码中有两个号码相同，且投注号码与当期开奖号码中两个相同号码和一个不同号码分别相符，即中奖。";
            break;
        case "K_32TTX": //快3，二同号通选
            k3 = true;
            chooseAll = true;
            ballNum = 6;
            remark = "对三个号码中两个指定的相同号码和一个任意号码进行投注。";
            PlayExample = "当期开奖号码中有两个号码相同，且投注号码中的两个相同号码与当期开奖号码中两个相同号码相符，即中奖。";
            PlayHelp = "二同号复选：当期开奖号码中有两个号码相同，且投注号码中的两个相同号码与当期开奖号码中两个相同号码相符，即中奖。";
            break;
        case "P_5FS":
            ssc = true;
            ballNum = 5;
            //remark = "从万、千、百、十、个中各选一个号码组成一注。";
            //PlayExample = "投注方案：23456；开奖号码：23456，即中五星直选。";
            //PlayHelp = "从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。";
            break;
        case "P_5DS":
            input = true;
            //remark = "手动输入号码，至少输入1个五位数号码组成一注。";
            //PlayExample = "投注方案：23456；开奖号码：23456，即中五星直选。";
            //PlayHelp = "从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。";
            break;
        case "P_5ZH":
            ssc = true;
            ballNum = 5;
            //remark = "从万、千、百、十、个中各选一个号码组成一注。";
            //PlayExample = "五星组合示例，如购买：4+5+6+7+8，该票共10元，由以下5注：45678(五星)、5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：45678，即可中五星、四星、三星、二星、一星的一等奖各1注。";
            //PlayHelp = "从万位、千位、百位、十位、个位中至少各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。";
            break;
        case "P_5ZX120":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("组120");
            //remark = "从0-9中选择5个号码组成一注。";
            //PlayExample = "投注方案：02568，开奖号码的五个数字只要包含0、2、5、6、8，即可中五星组选120一等奖。";
            //PlayHelp = "从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。";
            break;
        case "P_5ZX60":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("二重号", "单号");
            //remark = "从“二重号”选择一个号码，“单号”中选择三个号码组成一注。";
            //PlayExample = "投注方案：二重号：8，单号：0、2、5，只要开奖的5个数字包括 0、2、5、8、8，即可中五星组选60一等奖。";
            //PlayHelp = "选择1个二重号码和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。";
            break;
        case "P_5ZX30":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("二重号", "单号");
            //remark = "从“二重号”选择两个号码，“单号”中选择一个号码组成一注。";
            //PlayExample = "投注方案：二重号：2、8，单号：0，只要开奖的5个数字包括 0、2、2、8、8，即可中五星组选30一等奖。";
            //PlayHelp = "选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖。";
            break;
        case "P_5ZX20":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("三重号", "单号");
            //remark = "从“三重号”选择一个号码，“单号”中选择两个号码组成一注。";
            //PlayExample = "投注方案：三重号：8，单号：0、2，只要开奖的5个数字包括 0、2、8、8、8，即可中五星组选20一等奖。";
            //PlayHelp = "选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。";
            break;
        case "P_5ZX10":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("三重号", "二重号");
            //remark = "从“三重号”选择一个号码，“二重号”中选择一个号码组成一注。";
            //PlayExample = "投注方案：三重号：8，二重号：2，只要开奖的5个数字包括 2、2、8、8、8，即可中五星组选10一等奖。";
            //PlayHelp = "选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。";
            break;
        case "P_5ZX5":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("四重号", "单号");
            //remark = "从“四重号”选择一个号码，“单号”中选择一个号码组成一注。";
            //PlayExample = "投注方案：四重号：8，单号：2，只要开奖的5个数字包括 2、8、8、8、8，即可中五星组选5一等奖。";
            //PlayHelp = "选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。";
            break;
        case "P_5TS1":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("特殊");
            //remark = "从0-9中任意选择1个以上号码。";
            //PlayExample = "投注方案：8；开奖号码：至少出现1个8，即中一帆风顺。";
            //PlayHelp = "从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。";
            break;
        case "P_5TS2":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("特殊");
            //remark = "从0-9中任意选择1个以上的二重号码。";
            //PlayExample = "投注方案：8；开奖号码：至少出现2个8，即中好事成双。";
            //PlayHelp = "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。";
            break;
        case "P_5TS3":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("特殊");
            //remark = "从0-9中任意选择1个以上的三重号码。";
            //PlayExample = "投注方案：8；开奖号码：至少出现3个8，即中三星报喜。";
            //PlayHelp = "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。";
            break;
        case "P_5TS4":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("特殊");
            //remark = "从0-9中任意选择1个以上的四重号码。";
            //PlayExample = "投注方案：8；开奖号码：至少出现4个8，即中四季发财。";
            //PlayHelp = "从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。";
            break;
        case "P_4FS_L":
            ssc = true;
            ballNum = 4;
            //remark = "从万位、千位、百位、十位中选择一个4位数号码组成一注。";
            //PlayExample = "投注方案：3456；开奖号码：3456，即中四星直选。";
            //PlayHelp = "从万位、千位、百位、十位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。";
            strBalls = new Array("万位", "千位", "百位", "十位");
            break;
        case "P_4FS_R":
            ssc = true;
            ballNum = 4;
            //remark = "从千位、百位、十位、个位中选择一个4位数号码组成一注。";
            //PlayExample = "投注方案：3456；开奖号码：3456，即中四星直选。";
            //PlayHelp = "从千位、百位、十位、个位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。";
            strBalls = new Array("千位", "百位", "十位", "个位");
            break;
        case "P_4DS_L":
            input = true;
            //remark = "手动输入号码，至少输入1个四位数号码组成一注。";
            //PlayExample = "投注方案：3456； 开奖号码：3456，即中四星直选一等奖";
            //PlayHelp = "手动输入一个4位数号码组成一注，所选号码的万位、千位、百位、十位与开奖号码相同，且顺序一致，即为中奖。";
            break;
        case "P_4DS_R":
            input = true;
            //remark = "手动输入号码，至少输入1个四位数号码组成一注。";
            //PlayExample = "投注方案：3456； 开奖号码：3456，即中四星直选一等奖";
            //PlayHelp = "手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。";
            break;
        case "P_4ZX24":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("组24");
            //remark = "从0-9中选择4个号码组成一注。";
            //PlayExample = "投注方案：0568，开奖号码的后四个数字只要包含0、5、6、8，即可中四星组选24一等奖。";
            //PlayHelp = "从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖。";
            break;
        case "P_4ZX12":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("二重号", "单号");
            //remark = "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。";
            //PlayExample = "投注方案：二重号：8，单号：0、6，只要开奖的后四个数字包括 0、6、8、8，即可中四星组选12一等奖。";
            //PlayHelp = "选择1个单号和1个二重号码，所选单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。";
            break;
        case "P_4ZX6":
            ballNum = 1;
            ssc = true;
            strBalls = new Array("二重号");
            //remark = "从“二重号”选择两个号码组成一注。";
            //PlayExample = "投注方案：二重号：6、8，只要开奖的后四个数字从小到大排列为 6、6、8、8，即可中四星组选6。";
            //PlayHelp = "选择2个二重号码组成一注，所选的2个二重号码在开奖号码中分别出现了2次，即为中奖。";
            break;
        case "P_4ZX4":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("三重号", "单号");
            //remark = "从“三重号”选择一个号码，“单号”中选择两个号码组成一注。";
            //PlayExample = "投注方案：三重号：8，单号：2，只要开奖的后四个数字从小到大排列为 2、8、8、8，即可中四星组选4。";
            //PlayHelp = "选择1个三重号码和1个单号号码组成一注，所选单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。";
            break;
        case "P_3FS_L":
            ssc = true;
            ballNum = 3;
            //remark = "从万位、千位、百位各选一个号码组成一注。";
            //PlayExample = "如：万位选择1，千位选择2，个位选择3，开奖号码为是123**，即为中奖。";
            //PlayHelp = "从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码前3位相同，且顺序一致，即为中奖。";
            strBalls = new Array("万位", "千位", "百位");
            break;
        case "P_3FS_C":
            ssc = true;
            ballNum = 3;
            //remark = "从千位、百位、十位各选一个号码组成一注。";
            //PlayExample = "如：千位选择1，百位选择2，十位选择3，开奖号码为是*123*，即为中奖。";
            //PlayHelp = "从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码中3位相同，且顺序一致，即为中奖。";
            strBalls = new Array("千位", "百位", "十位");
            break;
        case "P_3FS_R":
            ssc = true;
            ballNum = 3;
            //remark = "从个、十、百位各选一个号码组成一注。";
            //PlayExample = "如：百位选择1，十位选择2，个位选择3，开奖号码为是**123，即为中奖。";
            //PlayHelp = "从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。";
            strBalls = new Array("百位", "十位", "个位");
            break;
        case "P_3DS_L":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码组成一注。";
            //PlayExample = "如：手动输入123，开奖号码为是123**，即为中奖。";
            //PlayHelp = "手动输入一个3位数号码组成一注，所选号码的万位、千位、百位与开奖号码相同，且顺序一致，即为中奖。";
            break;
        case "P_3DS_C":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码组成一注。";
            //PlayExample = "如：手动输入123，开奖号码为是*123*，即为中奖。";
            //PlayHelp = "手动输入一个3位数号码组成一注，所选号码的千位、百位、十位与开奖号码相同，且顺序一致，即为中奖。";
            break;
        case "P_3DS_R":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码组成一注。";
            //PlayExample = "如：手动输入123，开奖号码为是**123，即为中奖。";
            //PlayHelp = "手动输入一个3位数号码组成一注，所选号码的百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。";
            break;
        case "P_3HX_L":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码。";
            //PlayExample = "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码前三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。";
            //PlayHelp = "键盘手动输入购买号码，3个数字为一注，开奖号码的万位、千位、百位符合前三组三或组六均为中奖。";
            break;
        case "P_3HX_C":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码。";
            //PlayExample = "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码中三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。";
            //PlayHelp = "键盘手动输入购买号码，3个数字为一注，开奖号码的千位、百位、十位符合中三组三或组六均为中奖。";
            break;
        case "P_3HX_R":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码。";
            //PlayExample = "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码后三位包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。";
            //PlayHelp = "键盘手动输入购买号码，3个数字为一注，开奖号码的百位、十位、个位符合后三组三或组六均为中奖。";
            break;
        case "P_3Z3_L":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "投注方案：5,8,8；开奖号码前三位：1个5，2个8 (顺序不限)，即中前三组选三一等奖。";
            //PlayHelp = "从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。";
            strBalls = new Array("组三");
        case "P_3Z3_C":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "投注方案：5,8,8；开奖号码中三位：1个5，2个8 (顺序不限)，即中中三组选三一等奖。";
            //PlayHelp = "从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。";
            strBalls = new Array("组三");
        case "P_3Z3_R":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "投注方案：5,8,8；开奖号码后三位：1个5，2个8 (顺序不限)，即中后三组选三一等奖。";
            //PlayHelp = "从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。";
            strBalls = new Array("组三");
            break;
        case "P_3Z6_L":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择3个或3个以上号码。";
            //PlayExample = "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。";
            //PlayHelp = "投注方案：2,5,8；开奖号码前三位：1个2、1个5、1个8 (顺序不限)，即中前三组选六一等奖。";
            strBalls = new Array("组六");
            break;
        case "P_3Z6_C":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择3个或3个以上号码。";
            //PlayExample = "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。";
            //PlayHelp = "投注方案：2,5,8；开奖号码中三位：1个2、1个5、1个8 (顺序不限)，即中中三组选六一等奖。";
            strBalls = new Array("组六");
            break;
        case "P_3Z6_R":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择3个或3个以上号码。";
            //PlayExample = "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。";
            //PlayHelp = "投注方案：2,5,8；开奖号码后三位：1个2、1个5、1个8 (顺序不限)，即中后三组选六一等奖。";
            strBalls = new Array("组六");
            break;
        case "P_2FS_L":
            ssc = true;
            ballNum = 2;
            //remark = "从万位、千位各选一个号码组成一注。";
            //PlayExample = "投注方案：58；开奖号码后二位：58，即中后二直选一等奖。";
            //PlayHelp = "从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的万位、千位相同，且顺序一致，即为中奖。";
            strBalls = new Array("万位", "千位");
            break;
        case "P_2FS_R":
            ssc = true;
            ballNum = 2;
            //remark = "从十、个位各选一个号码组成一注。";
            //PlayExample = "投注方案：58；开奖号码后二位：58，即中后二直选一等奖。";
            //PlayHelp = "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的十位、个位相同，且顺序一致，即为中奖。";
            strBalls = new Array("十位", "个位");
            break;
        case "P_2DS_L":
            input = true;
            //remark = "手动输入号码，至少输入1个两位数号码。";
            //PlayExample = "投注方案：58；开奖号码后二位：58，即中后二直选一等奖。";
            //PlayHelp = "手动输入一个2位数号码组成一注，所选号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。";
            break;
        case "P_2DS_R":
            input = true;
            //remark = "手动输入号码，至少输入1个两位数号码。";
            //PlayExample = "投注方案：58；开奖号码后二位：58，即中后二直选一等奖。";
            //PlayHelp = "手动输入一个2位数号码组成一注，所选号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。";
            break;
        case "P_2Z2_L":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "投注方案：5,8；开奖号码前二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。";
            //PlayHelp = "从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。";
            strBalls = new Array("组二");
            break;
        case "P_2Z2_R":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "投注方案：5,8；开奖号码后二位：1个5，1个8 (顺序不限)，即中后二组选一等奖。";
            //PlayHelp = "从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同，顺序不限，即中奖。";
            strBalls = new Array("组二");
            break;
        case "P_DD":
            ssc = true;
            ballNum = 5;
            //remark = "在万位，千位，百位，十位，个位任意位置上任意选择1个或1个以上号码。";
            //PlayExample = "投注方案：1；开奖号码万位：1，即中定位胆万位一等奖。";
            //PlayHelp = "从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。";
            break;
        case "P_BDD_L":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择1个以上号码。";
            //PlayExample = "投注方案：1；开奖号码后三位：至少出现1个1，即中后三一码不定位一等奖。";
            //PlayHelp = "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。";
            strBalls = new Array("不定胆");
            break;
        case "P_BDD_C":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择1个以上号码。";
            //PlayExample = "投注方案：1；开奖号码后三位：至少出现1个1，即中后三一码不定位一等奖。";
            //PlayHelp = "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位中包含所选号码，即为中奖。";
            strBalls = new Array("不定胆");
            break;
        case "P_BDD_R":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择1个以上号码。";
            //PlayExample = "投注方案：1；开奖号码后三位：至少出现1个1，即中后三一码不定位一等奖。";
            //PlayHelp = "从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。";
            strBalls = new Array("不定胆");
            break;
        case "R_4FS":
            ssc = true;
            ballNum = 4;
            //remark = "从一位、二位、三位、四位中选择一个4位数号码选择位置组成一注。";
            //PlayExample = "投注方案：3456；开奖号码：3456，即中任四直选。";
            //PlayHelp = "从一位、二位、三位、四位中选择一个4位数号码选择位置组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。";
            strBalls = new Array("一位", "二位", "三位", "四位");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' checked='checked' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_4DS":
            input = true;
            //remark = "手动输入号码，至少输入1个四位数号码，选择位置组成一注。";
            //PlayExample = "投注方案：3456； 开奖号码：3456，即中任四直选一等奖";
            //PlayHelp = "手动输入一个4位数号码选择位置组成一注，所选号码的所选位与开奖号码相同，且顺序一致，即为中奖。";
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' checked='checked' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_3FS":
            ssc = true;
            ballNum = 3;
            //remark = "从一位、二位、三位各选一个号码选择位置组成一注。";
            //PlayExample = "如：一位选择1，二位选择2，三位选择3，开奖号码与选择位置对应，即为中奖。";
            //PlayHelp = "从万位、千位、百位中选择一个3位数号码选择位置组成一注，所选号码与开奖号码选择位置相同，且顺序一致，即为中奖。";
            strBalls = new Array("一位", "二位", "三位");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_3DS":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码组成一注。";
            //PlayExample = "如：手动输入123，开奖号码与选择位置对应，即为中奖。";
            //PlayHelp = "手动输入一个3位数号码组成一注，所选号码与开奖号码与选择位置相同，且顺序一致，即为中奖。";
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_3Z3":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "投注方案：5,8,8；开奖号码所选位置：1个5，2个8 (顺序不限)，即中任三组选三一等奖。";
            //PlayHelp = "从0-9中选择2个数字组成两注，所选号码与开奖号码的所选位置相同，且顺序不限，即为中奖。";
            strBalls = new Array("组三");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_3Z6":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择3个或3个以上号码。";
            //PlayExample = "从0-9中任意选择3个号码组成一注，所选号码与开奖号码的所选位置相同，顺序不限，即为中奖。";
            //PlayHelp = "投注方案：2,5,8；开奖号码所选位置：1个2、1个5、1个8 (顺序不限)，即中任三组选六一等奖。";
            strBalls = new Array("组六");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_3HX":
            input = true;
            //remark = "手动输入号码，至少输入1个三位数号码。";
            //PlayExample = "投注方案：分別投注(0,0,1),以及(1,2,3)，开奖号码所选位置包括：(1)0,0,1，顺序不限，即中得组三一等奖；或者(2)1,2,3，顺序不限，即中得组六一等奖。";
            //PlayHelp = "键盘手动输入购买号码，3个数字为一注，开奖号码的所选位置符合任三组三或组六均为中奖。";
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_2FS":
            ssc = true;
            ballNum = 2;
            //remark = "从一,二位各选一个号码组成一注。";
            //PlayExample = "投注方案：58；开奖号码所选位：58，即中任二直选一等奖。";
            //PlayHelp = "从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的所选位相同，且顺序一致，即为中奖。";
            strBalls = new Array("一位", "二位");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_2DS":
            input = true;
            //remark = "手动输入号码，至少输入1个两位数号码。";
            //PlayExample = "投注方案：58；开奖号码所选位：58，即中任二直选一等奖。";
            //PlayHelp = "手动输入一个2位数号码组成一注，所选号码的所选位与开奖号码相同，且顺序一致，即为中奖。";
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_2Z2":
            ssc = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "投注方案：5,8；开奖号码所选位：1个5，1个8 (顺序不限)，即中任二组选一等奖。";
            //PlayHelp = "从0-9中选2个号码组成一注，所选号码与开奖号码的所选位相同，顺序不限，即中奖。";
            strBalls = new Array("组二");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "P_2DXDS_L":
            ts = true;
            strBalls = new Array("万位", "千位");
            //remark = "从万位、千位中的“大、小、单、双”中至少各选一个组成一注。";
            //PlayExample = "投注方案：大单；开奖号码十位与个位：大单，即中后二大小单双一等奖。";
            //PlayHelp = "对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。";
            break;
        case "P_2DXDS_R":
            ts = true;
            strBalls = new Array("十位", "个位");
            //remark = "从十位、个位中的“大、小、单、双”中至少各选一个组成一注。";
            //PlayExample = "投注方案：小双；开奖号码万位与千位：小双，即中前二大小单双一等奖。";
            //PlayHelp = "对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。";
            break;
        case "P_3HE_L":
            he = true;
            heNum = 27;
            //remark = "从0-27中任意选择1个或1个以上号码。";
            //PlayExample = "投注方案：和值1；开奖号码中间三位：01001,00100,01000,即中前三直选一等奖";
            //PlayHelp = "所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。";
            break;
        case "P_3HE_C":
            he = true;
            heNum = 27;
            //remark = "从0-27中任意选择1个或1个以上号码。";
            //PlayExample = "投注方案：和值1；开奖号码中间三位：01001,00010,00100,即中中三直选一等奖";
            //PlayHelp = "所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。";
            break;
        case "P_3HE_R":
            he = true;
            heNum = 27;
            //remark = "从0-27中任意选择1个或1个以上号码。";
            //PlayExample = "投注方案：和值1；开奖号码中间三位：01001,00010,00100,即中后三直选一等奖";
            //PlayHelp = "所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。";
            break;
        case "R_3HE":
            he = true;
            heNum = 27;
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "P_2HE_L":
            he = true;
            heNum = 18;
            //remark = "从0-17中任意选择1个或1个以上号码。";
            //PlayExample = "投注方案：和值1；开奖号码前2位：10001,10000,即中前二直选一等奖";
            //PlayHelp = "所选数值等于开奖号码的万位、千位两个数字相加之和，即为中奖。";
            break;
        case "P_2HE_R":
            he = true;
            heNum = 18;
            //remark = "从0-17中任意选择1个或1个以上号码。";
            //PlayExample = "投注方案：和值1；开奖号码后2位：01001,10010,即中后二直选一等奖";
            //PlayHelp = "所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖。";
            break;
        case "P_4ZH_L":
            ssc = true;
            ballNum = 4;
            strBalls = new Array("万位", "千位", "百位", "十位");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_4ZH_R":
            ssc = true;
            ballNum = 4;
            strBalls = new Array("千位", "百位", "十位", "个位");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_4ZX24":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("组24");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' checked='checked' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_4ZX12":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("二重号", "单号");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' checked='checked' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_4ZX6":
            ballNum = 1;
            ssc = true; strBalls = new Array("组12");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' checked='checked' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_4ZX4":
            ssc = true;
            ballNum = 2;
            strBalls = new Array("三重号", "单号"); strwz = "<div class='lottery-input'>";
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' checked='checked' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_3Z3DS":
        case "R_3Z6DS":
            input = true;
            //remark = "";
            //PlayExample = "";
            //PlayHelp = "";
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "R_2ZDS":
            input = true;
            //remark = "";
            //PlayExample = "";
            //PlayHelp = "";
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            break;
        case "P_3Z3DS_L":
        case "P_3Z6DS_L":
        case "P_3Z3DS_C":
        case "P_3Z6DS_C":
        case "P_3Z3DS_R":
        case "P_3Z6DS_R":
        case "P_2ZDS_L":
        case "P_2ZDS_R":
            input = true;
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3KD_L":
        case "P_3KD_C":
        case "P_3KD_R":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("跨度");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_3KD":
            ssc = true;
            ballNum = 1;
            //remark = "";
            //PlayExample = "";
            //PlayHelp = "";
            strBalls = new Array("跨度");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3ZH_L":
            ssc = true;
            ballNum = 3;
            strBalls = new Array("万位", "千位", "百位");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3ZH_C":
            ssc = true;
            ballNum = 3;
            strBalls = new Array("千位", "百位", "十位");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3ZH_R":
            ssc = true;
            ballNum = 3;
            strBalls = new Array("百位", "十位", "个位");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3ZHE_L":
        case "P_3ZHE_C":
        case "P_3ZHE_R":
            zuhe = true;
            heNum = 26;
            strBalls = new Array("和值");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_3ZHE":
            zuhe = true;
            heNum = 26;
            strBalls = new Array("和值");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3ZBD_L":
        case "P_3ZBD_C":
        case "P_3ZBD_R":
            strBalls = new Array("包胆");
            $("#spchoose").html("");
            //选号器
            var str = "<ul class='lottery-choose'>";
            for (var i = 0; i < 1; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {

                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else{                        
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }

                }
                str += "</div>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_3ZBD":
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            strBalls = new Array("包胆");
            $("#spchoose").html("");
            //选号器
            var str = "<ul class='lottery-choose'>";
            str += strwz;
            for (var i = 0; i < 1; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3QTWS_L":
        case "P_3QTWS_C":
        case "P_3QTWS_R":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("尾数");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_3QTWS":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("尾数");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3QTTS_L":
        case "P_3QTTS_C":
        case "P_3QTTS_R":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>特殊</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='豹子'>豹子</span>";
            str += "<span class='ball' number='对子'>对子</span>";
            str += "<span class='ball' number='顺子'>顺子</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            str += "</ul>";
            $("#spchoose").html(str);
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_3QTTS":
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            var str = "<ul class='lottery-choose'>";
            str += strwz;
            str += "<li class='numbers'>";
            str += "<span class='pos'>特殊</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='豹子'>豹子</span>";
            str += "<span class='ball' number='对子'>对子</span>";
            str += "<span class='ball' number='顺子'>顺子</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            str += "</ul>";
            $("#spchoose").html(str);
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_3QTWS":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("特殊");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' checked='checked' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_2KD_L":
        case "P_2KD_R":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("跨度");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_2KD":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("跨度");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_2ZHE_L":
        case "P_2ZHE_R":
            zuhe = true;
            heNum = 17;
            strBalls = new Array("和值");
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_2ZHE":
            zuhe = true;
            heNum = 17;
            strBalls = new Array("和值");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_2HE":
            he = true;
            heNum = 18;
            strBalls = new Array("和值");
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_2ZBD_L":
        case "P_2ZBD_R":
            strBalls = new Array("包胆");
            $("#spchoose").html("");
            //选号器
            var str = "<ul class='lottery-choose'>";
            for (var i = 0; i < 1; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "R_2ZBD":
            strBalls = new Array("包胆");
            $("#spchoose").html("");
            //选号器
            strwz = "<div class='lottery-position'>";
            strwz += "<label><input name='wz' id='Checkbox1' type='checkbox' value='1' />万位</label>";
            strwz += "<label><input name='wz' id='Checkbox2' type='checkbox' value='1' />千位</label>";
            strwz += "<label><input name='wz' id='Checkbox3' type='checkbox' value='1' />百位</label>";
            strwz += "<label><input name='wz' id='Checkbox4' type='checkbox' checked='checked' value='1' />十位</label>";
            strwz += "<label><input name='wz' id='Checkbox5' type='checkbox' checked='checked' value='1' />个位</label>";
            strwz += "<label><span id='tishi'>共有1种方案</span></label>";
            strwz += "</div>";
            var str = "<ul class='lottery-choose'>";
            str += strwz;
            for (var i = 0; i < 1; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            //remark = "待填加";
            //PlayExample = "待填加";
            //PlayHelp = "待填加";
            break;
        case "P_3BDD1_R":
        case "P_3BDD2_R":
        case "P_3BDD1_L":
        case "P_3BDD2_L":
        case "P_4BDD1":
        case "P_4BDD2":
        case "P_5BDD2":
        case "P_5BDD3":
            ssc = true;
            ballNum = 1;
            strBalls = new Array("不定位");
            break;
        case "P_5QJ3":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>万位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='一区'>1区</span>";
            str += "<span class='ball' number='二区'>2区</span>";
            str += "<span class='ball' number='三区'>3区</span>";
            str += "<span class='ball' number='四区'>4区</span>";
            str += "<span class='ball' number='五区'>5区</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>千位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='一区'>1区</span>";
            str += "<span class='ball' number='二区'>2区</span>";
            str += "<span class='ball' number='三区'>3区</span>";
            str += "<span class='ball' number='四区'>4区</span>";
            str += "<span class='ball' number='五区'>5区</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("百位", "十位", "个位");
            for (var i = 0; i < 3; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_4QJ3":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>千位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='一区'>1区</span>";
            str += "<span class='ball' number='二区'>2区</span>";
            str += "<span class='ball' number='三区'>3区</span>";
            str += "<span class='ball' number='四区'>4区</span>";
            str += "<span class='ball' number='五区'>5区</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("百位", "十位", "个位");
            for (var i = 0; i < 3; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_3QJ2_L":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>万位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='一区'>1区</span>";
            str += "<span class='ball' number='二区'>2区</span>";
            str += "<span class='ball' number='三区'>3区</span>";
            str += "<span class='ball' number='四区'>4区</span>";
            str += "<span class='ball' number='五区'>5区</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("千位", "百位");
            for (var i = 0; i < 2; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_3QJ2_R":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>百位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='一区'>1区</span>";
            str += "<span class='ball' number='二区'>2区</span>";
            str += "<span class='ball' number='三区'>3区</span>";
            str += "<span class='ball' number='四区'>4区</span>";
            str += "<span class='ball' number='五区'>5区</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("十位", "个位");
            for (var i = 0; i < 2; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_5QW3":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>万位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='小'>小</span>";
            str += "<span class='ball' number='大'>大</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>千位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='小'>小</span>";
            str += "<span class='ball' number='大'>大</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("百位", "十位", "个位");
            for (var i = 0; i < 3; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_4QW3":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>千位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='小'>小</span>";
            str += "<span class='ball' number='大'>大</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("百位", "十位", "个位");
            for (var i = 0; i < 3; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_3QW2_L":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>万位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='小'>小</span>";
            str += "<span class='ball' number='大'>大</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("千位", "百位");
            for (var i = 0; i < 2; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_3QW2_R":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>百位</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='小'>小</span>";
            str += "<span class='ball' number='大'>大</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            strBalls = new Array("十位", "个位");
            for (var i = 0; i < 2; i++) {
                str += "<li class='numbers'>";
                str += "<span class='pos'>" + strBalls[i] + "</span>";
                str += "<div class='lottery-balls'>";
                for (var j = 0; j <= 9; j++) {
                    if (j >= 7 || j == 0) {
                        if (LotteryId != "3007") {
                            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                        }
                    }
                    else {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                str += "</div>";
                str += "<div class='oper'>";
                str += "<a href='javascript:;' class='all'>全</a>";
                str += "<a href='javascript:;' class='big'>大</a>";
                str += "<a href='javascript:;' class='small'>小</a>";
                str += "<a href='javascript:;' class='odd'>奇</a>";
                str += "<a href='javascript:;' class='even'>偶</a>";
                str += "<a href='javascript:;' class='clear'>清</a>";
                str += "</div></li>";
            }
            str += "</ul>";
            $("#spchoose").html(str);
            break;
        case "P_LHH_WQ":
        case "P_LHH_WB":
        case "P_LHH_WS":
        case "P_LHH_WG":
        case "P_LHH_QB":
        case "P_LHH_QS":
        case "P_LHH_QG":
        case "P_LHH_BS":
        case "P_LHH_BG":
        case "P_LHH_SG":
            var str = "<ul class='lottery-choose'>";
            str += "<li class='numbers'>";
            str += "<span class='pos'>龙虎和</span>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='龙'>龙</span>";
            str += "<span class='ball' number='虎'>虎</span>";
            str += "<span class='ball' number='和'>和</span>";
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
            str += "</ul>";
            $("#spchoose").html(str);
            break;

        //11选5                       
        case "P11_3FS_L":
            scc11 = true;
            ballNum = 3;
            //remark = "从第一位、第二位、第三位中至少各选择1个号码。";
            //PlayExample = "如：第一位选择01，第二位选择02，第三位选择03，开奖号码顺序为01，02，03 * *，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。";
            strBalls = new Array("第一位", "第二位", "第三位");
            break;
        case "P11_3DS_L":
            input11 = true;
            //remark = "手动输入号码，至少输入1个三位数号码组成一注。";
            //PlayExample = "如：手动输入01 02 03，开奖号码为是01 02 03 * *，即为中奖。";
            //PlayHelp = "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。";
            break;
        case "P11_3ZFS_L":
            scc11 = true;
            ballNum = 1;
            //remark = "从0-9中任意选择3个或3个以上号码。";
            //PlayExample = "如：选择01 02 03（展开为01 02 03 * *，01 03 02 * *，02 01 03 * *，02 03 01 * *，03 01 02 * *，03 02 01 * *），开奖号码为03 01 02，即为中奖。";
            //PlayHelp = "从01-11中共11个号码中选择3个号码，所选号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。";
            strBalls = new Array("组选");
            break;
        case "P11_3ZDS_L":
            input11 = true;
            //remark = "手动输入号码，至少输入1个三位数号码组成一注。";
            //PlayExample = "手动输入3个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前3个号码相同，顺序不限，即为中奖。";
            //PlayHelp = "如：手动输入01 02 03（展开为01 02 03 * *，01 03 02 * * , 02 01 03 * *，02 03 01 * *，03 01 02 * *，03 02 01 * *），开奖号码为01 03 02 * *，即为中奖。";
            break;
        case "P11_2FS_L":
            scc11 = true;
            ballNum = 2;
            //remark = "从第一位、第二位中至少各选择1个号码。";
            //PlayExample = "如：第一位选择01，第二位选择02，开奖号码 01 02 * * *，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择2个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即中奖。";
            strBalls = new Array("第一位", "第二位");
            break;
        case "P11_2DS_L":
            input11 = true;
            //remark = "手动输入号码，至少输入1个两位数号码组成一注。";
            //PlayExample = "如：手动输入 01 02，开奖号码为01 02 * * *，即为中奖。";
            //PlayHelp = "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，且顺序一致，即为中奖。";
            break;
        case "P11_2ZFS_L":
            scc11 = true;
            ballNum = 1;
            //remark = "从0-9中任意选择2个或2个以上号码。";
            //PlayExample = "如：选择01 02（展开为01 02 * * *，02 01 * * *），开奖号码为02 01 * * * 或 01 02 * * *，即为中奖。";
            //PlayHelp = "从01-11中共11个号码中选择2个号码，所选号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。";
            strBalls = new Array("组选");
            break;
        case "P11_2ZDS_L":
            input11 = true;
            //remark = "手动输入号码，至少输入1个两位数号码组成一注。";
            //PlayExample = "如：手动输入01 02（展开为01 02 * * *，02 01 * * *），开奖号码为02 01 *** 或 01 02 ***，即为中奖。";
            //PlayHelp = "手动输入2个号码组成一注，所输入的号码与当期顺序摇出的5个号码中的前2个号码相同，顺序不限，即为中奖。";
            break;
        case "P11_DD":
            scc11 = true;
            ballNum = 3;
            //remark = "从第一位，第二位，第三位任意位置上任意选择1个或1个以上号码。";
            //PlayExample = "如：第一位选择01，开奖号码为01 * * * *，即为中奖。第二位选择05，开奖号码为 * 05* * *，即为中奖。第三位选择07，开奖号码为 * * 07 * *，即为中奖。";
            //PlayHelp = "从第一位，第二位，第三位任意1个位置或多个位置上选择1个号码，所选号码与相同位置上的开奖号码一致，即为中奖。";
            strBalls = new Array("第一位", "第二位", "第三位");
            break;
        case "P11_BDD_L":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择1个或1个以上号码。";
            //PlayExample = "如：选择01，开奖号码为01 * * * *，* 01 * * *，* * 01 * *，即为中奖。";
            //PlayHelp = "从01-11中共11个号码中选择1个号码，每注由1个号码组成，只要当期顺序摇出的第一位、第二位、第三位开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("不定胆");
            break;
        case "P11_RXDS_1":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入1个号码组成一注。";
            //PlayExample = "如：选择05，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;
        case "P11_RXDS_2":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入2个号码组成一注。";
            //PlayExample = "如：选择05 04，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;
        case "P11_RXDS_3":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入3个号码组成一注。";
            //PlayExample = "如：选择05 04 11，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;
        case "P11_RXDS_4":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入4个号码组成一注。";
            //PlayExample = "如：选择05 04 08 03，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;
        case "P11_RXDS_5":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入5个号码组成一注。";
            //PlayExample = "如：选择05 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;
        case "P11_RXDS_6":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入6个号码组成一注。";
            //PlayExample = "如：选择05 10 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;
        case "P11_RXDS_7":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入7个号码组成一注。";
            //PlayExample = "如：选择05 04 10 11 03 08 09，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;
        case "P11_RXDS_8":
            input11 = true;
            //remark = "手动输入号码，从01-11中任意输入8个号码组成一注。";
            //PlayExample = "如：选择05 04 11 03 08 10 09 01，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11中手动输入8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所输入号码，即为中奖。";
            break;

        case "P11_RXFS_1":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择1个或1个以上号码。";
            //PlayExample = "如：选择05，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择1个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选一中");
            break;
        case "P11_RXFS_2":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择2个或2个以上号码。";
            //PlayExample = "如：选择05 04，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择2个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选二中");
            break;
        case "P11_RXFS_3":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择3个或3个以上号码。";
            //PlayExample = "如：选择05 04 11，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择3个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选三中");
            break;
        case "P11_RXFS_4":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择4个或4个以上号码。";
            //PlayExample = "如：选择05 04 08 03，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择4个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选四中");
            break;
        case "P11_RXFS_5":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择5个或5个以上号码。";
            //PlayExample = "如：选择05 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择5个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选五中");
            break;
        case "P11_RXFS_6":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择6个或6个以上号码。";
            //PlayExample = "如：选择05 10 04 11 03 08，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择6个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选六中");
            break;
        case "P11_RXFS_7":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择7个或7个以上号码。";
            //PlayExample = "如：选择05 04 10 11 03 08 09，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择7个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选七中");
            break;
        case "P11_RXFS_8":
            scc11 = true;
            ballNum = 1;
            //remark = "从01-11中任意选择8个或8个以上号码。";
            //PlayExample = "如：选择05 04 11 03 08 10 09 01，开奖号码为08 04 11 05 03，即为中奖。";
            //PlayHelp = "从01-11共11个号码中选择8个号码进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。";
            strBalls = new Array("选八中");
            break;
        case "P11_CDS":
            dd11 = true;
            ballNum = 1;
            //remark = "从不同的单双组合中任意选择1个或1个以上的组合。";
            //PlayExample = "如：选择5单0双，开奖号码01，03，05，07，09五个单数，即为中奖。";
            //PlayHelp = "从5种单双个数组合中选择1种组合，当期开奖号码的单双个数与所选单双组合一致，即为中奖。";
            break;
        case "P11_CZW":
            cz11 = true;
            ballNum = 1;
            //remark = "从3-9中任意选择1个或1个以上数字。";
            //PlayExample = "如：选择8，开奖号码为11，04，09，05，08，按开奖号码的数字大小排列为04，05，08，09，11，中间数08，即为中奖。";
            //PlayHelp = "从3-9中选择1个号码进行购买，所选号码与5个开奖号码按照大小顺序排列后的第3个号码相同，即为中奖。";
            break;
        case "P_DD_3":
            ssc = true;
            ballNum = 3;
            //remark = "在百位，十位，个位任意位置上任意选择1个或1个以上号码。";
            //PlayExample = "投注方案：1；开奖号码万位：1，即中定位胆万位一等奖。";
            //PlayHelp = "从百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。";
            break;

        //北京PK10           
        case "PK10_One":
            pk10 = true;
            pk10Num = 1;
            strBalls = new Array("冠军");
            //remark = "从01-10中任意选择1个以上号码。";
            //PlayExample = "投注方案：01；开奖冠军车号是01，即为中奖。";
            //PlayHelp = "从01-10中选择一个号码，只要开奖的冠军车号与所选号码一致即中奖。如：选择05，开奖冠军车号为05，即为中奖";
            break;
        case "PK10_TwoFS":
            pk10 = true;
            pk10Num = 2;
            strBalls = new Array("冠军", "亚军");
            //remark = "从01-10选择2个号码组成一注。";
            //PlayExample = "投注方案：05 08；开奖冠军车号是05，亚军车号是08，即为中奖。";
            //PlayHelp = "从01-10选择2个号码组成一注，只要开奖的冠军车号、亚军车号与所选号码相同且顺序一致，即为中奖。";
            break;
        case "PK10_TwoDS":
            pk10Input = true;
            //remark = "手动输入号码，至少输入2个两位数号码。";
            //PlayExample = "投注方案：01 02,03 04,05 06； 开奖冠亚军的车号是01 02或者03 04或者05 06，即为中奖。";
            //PlayHelp = "手动输入2个两位数号码组成一注，所选号码与开奖冠军、亚军相同，且顺序一致，即为中奖。";
            break;
        case "PK10_ThreeFS":
            pk10 = true;
            pk10Num = 3;
            strBalls = new Array("冠军", "亚军", "季军");
            //remark = "从01-10选择3个号码组成一注。";
            //PlayExample = "投注方案：03 04 05；开奖号码：03 04 05，即为中奖";
            //PlayHelp = "从01-10中选择三个号码，只要开奖冠军、亚军、季军的车号与所选号码相同且顺序一致即中奖。如：冠军选择01，亚军选择02，季军选择03，开奖的冠军车号01、亚军02、季军03，即为中奖。";
            break;
        case "PK10_ThreeDS":
            pk10Input = true;
            //remark = "手动输入号码，至少输入3个两位数号码组成一注。";
            //PlayExample = "投注方案：01 02 03,04 05 06,07 08 09； 开奖冠亚季军的车号是01 02 03或者04 05 06或者07 08 09，即为中奖";
            //PlayHelp = "手动输入3个两位数号码组成一注，所选号码与开奖冠亚季军的车号相同，且顺序一致，即为中奖。";
            break;
        case "PK10_DD1_5":
            pk10 = true;
            pk10Num = 5;
            strBalls = new Array("第1名", "第2名", "第3名", "第4名", "第5名");
            //remark = "在第一、二、三、四、五名任意位置上任意选择1个或1个以上号码。";
            //PlayExample = "投注方案第一名：01；开奖第一名车号：01，即为中奖。";
            //PlayHelp = "从第一、二、三、四、五名任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖车号一致，即为中奖。";
            break;
        case "PK10_DD6_10":
            pk10 = true;
            pk10Num = 5;
            strBalls = new Array("第6名", "第7名", "第8名", "第9名", "第10名");
            //remark = "在第六、七、八、九、十名任意位置上任意选择1个或1个以上号码。";
            //PlayExample = "投注方案第六名：01；开奖第六名车号：01，即为中奖。";
            //PlayHelp = "从第六、七、八、九、十名任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。";
            break;
        case "PK10_DXOne":
            pk10DX = true;
            strBalls = new Array("第1名");
            //remark = "选择大或小为一注。";
            //PlayExample = "例如：第一名选择：大，开奖号码为07，即为中奖。";
            //PlayHelp = "选择大或小进行投注，只要开奖的名次对应车号的大小(注：01,02,03,04,05为小；06,07,08,09,10为大)与所选项一致即中奖。";
            break;
        case "PK10_DXTwo":
            pk10DX = true;
            strBalls = new Array("第2名");
            //remark = "选择大或小为一注。";
            //PlayExample = "例如：第二名选择：大，开奖号码为07，即为中奖。";
            //PlayHelp = "选择大或小进行投注，只要开奖的名次对应车号的大小(注：01,02,03,04,05为小；06,07,08,09,10为大)与所选项一致即中奖。";
            break;
        case "PK10_DXThree":
            pk10DX = true;
            strBalls = new Array("第3名");
            //remark = "选择大或小为一注。";
            //PlayExample = "例如：第三名选择：大，开奖号码为07，即为中奖。";
            //PlayHelp = "选择大或小进行投注，只要开奖的名次对应车号的大小(注：01,02,03,04,05为小；06,07,08,09,10为大)与所选项一致即中奖。";
            break;
        case "PK10_DXFour":
            pk10DX = true;
            strBalls = new Array("第4名");
        case "PK10_DXFive":
            pk10DX = true;
            strBalls = new Array("第5名");
        case "PK10_DXSix":
            pk10DX = true;
            strBalls = new Array("第6名");
        case "PK10_DXSeven":
            pk10DX = true;
            strBalls = new Array("第7名");
        case "PK10_DXEight":
            pk10DX = true;
            strBalls = new Array("第8名");
        case "PK10_DXNine":
            pk10DX = true;
            strBalls = new Array("第9名");
        case "PK10_DXTen":
            pk10DX = true;
            strBalls = new Array("第10名");
        case "PK10_DSOne":
            pk10DS = true;
            strBalls = new Array("第1名");
            //remark = "选择单或双为一注。";
            //PlayExample = "例如：第一名选择 双，开奖号码为08，即为中奖。";
            //PlayHelp = "选择单或双进行投注，只要开奖对应车号的单双(注：01,03,05,07,09为单；02,04,06,08,10为双)与所选项一致即中奖。";
            break;
        case "PK10_DSTwo":
            pk10DS = true;
            strBalls = new Array("第2名");
            //remark = "选择单或双为一注。";
            //PlayExample = "例如：第二名选择 双，开奖号码为08，即为中奖。";
            //PlayHelp = "选择单或双进行投注，只要开奖对应车号的单双(注：01,03,05,07,09为单；02,04,06,08,10为双)与所选项一致即中奖。";
            break;
        case "PK10_DSThree":
            pk10DS = true;
            strBalls = new Array("第3名");
            //remark = "选择单或双为一注。";
            //PlayExample = "例如：第三名选择 双，开奖号码为08，即为中奖。";
            //PlayHelp = "选择单或双进行投注，只要开奖对应车号的单双(注：01,03,05,07,09为单；02,04,06,08,10为双)与所选项一致即中奖。";
            break;
        case "PK10_DSFour":
            pk10DS = true;
            strBalls = new Array("第4名");
        case "PK10_DSFive":
            pk10DS = true;
            strBalls = new Array("第5名");
        case "PK10_DSSix":
            pk10DS = true;
            strBalls = new Array("第6名");
        case "PK10_DSSeven":
            pk10DS = true;
            strBalls = new Array("第7名");
        case "PK10_DSEight":
            pk10DS = true;
            strBalls = new Array("第8名");
        case "PK10_DSNine":
            pk10DS = true;
            strBalls = new Array("第9名");
        case "PK10_DSTen":
            pk10DS = true;
            strBalls = new Array("第10名");
    }


    if (td11x5) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<span class='pos'>胆码</span>";
        str += "<div class='lottery-balls'>";
        for (var j = 0; j < 11; j++) {
            var numVal = j + 1
            if (numVal < 10)
                str += "<span class='ball' number='0" + numVal + "'>0" + numVal + "</span>";
            else
                str += "<span class='ball' number='" + numVal + "'>" + numVal + "</span>";
        }
        str += "</div></li>";

        str += "<li class='numbers'>";
        str += "<span class='pos'>拖码</span>";
        str += "<div class='lottery-balls'>";
        for (var j = 0; j < 11; j++) {
            var numVal = j + 1
            if (numVal < 10)
                str += "<span class='ball' number='0" + numVal + "'>0" + numVal + "</span>";
            else
                str += "<span class='ball' number='" + numVal + "'>" + numVal + "</span>";
        }
        str += "</div>";
        str += "<div class='oper'>";
        str += "<a href='javascript:;' class='all'>全</a>";
        str += "<a href='javascript:;' class='big'>大</a>";
        str += "<a href='javascript:;' class='small'>小</a>";
        str += "<a href='javascript:;' class='odd'>奇</a>";
        str += "<a href='javascript:;' class='even'>偶</a>";
        str += "<a href='javascript:;' class='clear'>清</a>";
        str += "</div></li>";

        str += "</ul>";
        $("#spchoose").html(str);
    }
    else if (hezhi) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<span class='pos'>和值</span>";
        str += "<div class='lottery-balls'>";
        for (var j = 0; j < hezhiNum; j++) {
            var numVal = j + 3
            if ((numVal + "").length == 1)
                str += "<span class='ball' number='" + numVal + "'>" + numVal + "</span>";
            else
                str += "<span class='ball' number='" + numVal + "'>" + numVal + "</span>";
        }
        str += "</div>";
        str += "<div class='oper'>";
        str += "<a href='javascript:;' class='all'>全</a>";
        str += "<a href='javascript:;' class='big'>大</a>";
        str += "<a href='javascript:;' class='small'>小</a>";
        str += "<a href='javascript:;' class='odd'>奇</a>";
        str += "<a href='javascript:;' class='even'>偶</a>";
        str += "<a href='javascript:;' class='clear'>清</a>";
        str += "</div></li>";

        str += "</ul>";
        $("#spchoose").html(str);
    }
    else if (k3) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<span class='pos'>" + PlayName + "</span>";
        str += "<div class='lottery-balls'>";
        for (var j = 0; j < ballNum; j++) {
            var numVal = j + 1
            if ((numVal + "").length == 1)
                str += "<span class='ball' number='" + numVal + "'>" + numVal + "</span>";
            else
                str += "<span class='ball' number='" + numVal + "'>" + numVal + "</span>";
        }
        str += "</div>";
        str += "<div class='oper'>";
        str += "<a href='javascript:;' class='all'>全</a>";

        if (chooseAll == false) {
            str += "<a href='javascript:;' class='big'>大</a>";
            str += "<a href='javascript:;' class='small'>小</a>";
            str += "<a href='javascript:;' class='odd'>奇</a>";
            str += "<a href='javascript:;' class='even'>偶</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
        }

        str += "</ul>";
        $("#spchoose").html(str);
    }

    if (pk10) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        for (var i = 0; i < pk10Num; i++) {
            str += "<li class='numbers'>";
            str += "<span class='pos'>" + strBalls[i] + "</span>";
            str += "<div class='lottery-balls'>";
            for (var j = 1; j <= 10; j++) {
                if ((j + "").length == 1)
                    str += "<span class='ball' number='0" + j + "'>0" + j + "</span>";
                else
                    str += "<span class='ball' number='" + j + "'>" + j + "</span>";
            }
            str += "</div>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='big'>大</a>";
            str += "<a href='javascript:;' class='small'>小</a>";
            str += "<a href='javascript:;' class='odd'>奇</a>";
            str += "<a href='javascript:;' class='even'>偶</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div></li>";
        }
        str += "</ul>";
        $("#spchoose").html(str);
    }

    if (pk10Input) {
        $("#spchoose").html("");
        //输入区
        var inputstr = "<div class='lottery-input'>";
        inputstr += "<p>每注之间用逗号[,]或回车隔开,号码之间用空格[ ]隔开，不足2位要在前面加0。比如01 02 03,02 03 04 。<span id='message' style='color:Red;'></span></p>";
        inputstr += "<textarea id='inputtext' rows='6' onblur='AutoCalcBet()' onkeyup='AutoCalcBet()'></textarea>";
        inputstr += "</div>";
        $("#spchoose").html(inputstr);
    }

    if (pk10DX) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<span class='pos'>" + strBalls[0] + "</span>";
        str += "<div class='lottery-balls'>";

        str += "<span class='ball' number='大'>大</span>";
        str += "<span class='ball' number='小'>小</span>";

        str += "</div></li>";
        str += "</ul>";
        $("#spchoose").html(str);
    }

    if (pk10DS) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<span class='pos'>" + strBalls[0] + "</span>";
        str += "<div class='lottery-balls'>";

        str += "<span class='ball' number='单'>单</span>";
        str += "<span class='ball' number='双'>双</span>";

        str += "</div></li>";
        str += "</ul>";
        $("#spchoose").html(str);
    }

    if (scc11) {
        $("#spchoose").html("");
        var str = "<ul class='lottery-choose'>";
        str += strwz;
        for (var i = 0; i < ballNum; i++) {
            str += "<li class='numbers'>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='big'>大</a>";
            str += "<a href='javascript:;' class='small'>小</a>";
            str += "<a href='javascript:;' class='odd'>奇</a>";
            str += "<a href='javascript:;' class='even'>偶</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div>";
            str += "<span class='pos'>" + strBalls[i] + "</span>";
            str += "<div class='lottery-balls'>";
            for (var j = 1; j <= 11; j++) {
                if ((j + "").length == 1)
                    str += "<span class='ball' number='0" + j + "'>0" + j + "</span>";
                else
                    str += "<span class='ball' number='" + j + "'>" + j + "</span>";
            }
            str += "</div>";
            str += "</li>";
        }
        str += "</ul>";

        $("#spchoose").html(str);
    }
    if (input11) {
        $("#spchoose").html("");
        //输入区
        var inputstr = "<div class='lottery-input'>";
        inputstr += "<p>每注之间用逗号[,]或回车隔开,号码之间用空格[ ]隔开，不足2位要在前面加0。比如01 02 03,02 03 04 。<span id='message' style='color:Red;'></span></p>";
        inputstr += "<textarea id='inputtext' rows='6' onblur='AutoCalcBet()' onkeyup='AutoCalcBet()'></textarea>";
        inputstr += "</div>";
        $("#spchoose").html(inputstr);
    }
    if (cz11) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<span class='pos'>猜中位</span>";
        str += "<div class='lottery-balls'>";
        for (var j = 3; j <= 9; j++) {
            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
        }
        str += "</div></li>";
        str += "</ul>";
        $("#spchoose").html(str);
    }
    if (dd11) {
        $("#spchoose").html("");
        //选号器
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<span class='pos'>定单双</span>";
        str += "<div class='lottery-balls'>";
        str += "<span class='big-ball' number='5单0双'>5单0双</span>";
        str += "<span class='big-ball' number='4单1双'>4单1双</span>";
        str += "<span class='big-ball' number='3单2双'>3单2双</span>";
        str += "<span class='big-ball' number='2单3双'>2单3双</span>";
        str += "<span class='big-ball' number='1单4双'>1单4双</span>";
        str += "<span class='big-ball' number='0单5双'>0单5双</span>";

        str += "</div></li>";
        str += "</ul>";
        $("#spchoose").html(str);
    }

    if (ssc) {
        $("#spchoose").html("");
        var str = "<ul class='lottery-choose'>";
        for (var i = 0; i < ballNum; i++) {
            str += "<li class='numbers'>";
            str += "<div class='oper'>";
            str += "<a href='javascript:;' class='all'>全</a>";
            str += "<a href='javascript:;' class='big'>大</a>";
            str += "<a href='javascript:;' class='small'>小</a>";
            str += "<a href='javascript:;' class='odd'>奇</a>";
            str += "<a href='javascript:;' class='even'>偶</a>";
            str += "<a href='javascript:;' class='clear'>清</a>";
            str += "</div>";
            str += "<i class='pos'>" + strBalls[i] + "</i>";
            str += "<div class='lottery-balls'>";
            for (var j = 0; j <= 9; j++) {
                if (j >= 7 || j == 0) {
                    if (LotteryId != "3007") {
                        str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                    }
                }
                else {
                    str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                }
            }
            str += "</div>";
            str += "</li>";
        }
        str += strwz;
        str += "</ul>";
        $("#spchoose").html(str);
    }

    if (input) {
        $("#spchoose").html("");
        var inputstr = "<div class='lottery-input lottery-input-sm'>";
        inputstr += "<p>每注号码之间用逗号[,]或空格[ ]隔开。<span id='message' style='color:Red;'></span></p>";
        inputstr += "<textarea id='inputtext' onblur='AutoCalcBet()' onkeyup='AutoCalcBet()'></textarea>";
        inputstr += strwz;
        inputstr += "</div>";
        $("#spchoose").html(inputstr);
    }
    if (ts) {
        $("#spchoose").html("");
        var str = "<ul class='lottery-choose'>";
        for (var i = 0; i < 2; i++) {
            str += "<li class='numbers'>";
            str += "<i class='pos'>" + strBalls[i] + "</i>";
            str += "<div class='lottery-balls'>";
            str += "<span class='ball' number='大'>大</span>";
            str += "<span class='ball' number='小'>小</span>";
            str += "<span class='ball' number='单'>单</span>";
            str += "<span class='ball' number='双'>双</span>";
            str += "</div></li>";
        }
        str += strwz;
        str += "</ul>";
        $("#spchoose").html(str);
    }
    if (he) {
        $("#spchoose").html("");
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<i class='pos'>和值</i>";
        str += "<div class='lottery-balls'>";
        for (var j = 0; j <= heNum; j++) {
            if (j >= 7 || j == 0) {
                if (LotteryId != "3007") {
                    str += "<span class='ball' number='" + j + "'>" + j + "</span>";
                }
            }
            else {
                str += "<span class='ball' number='" + j + "'>" + j + "</span>";
            }
        }
        str += "</div></li>";
        str += strwz;
        str += "</ul>";
        $("#spchoose").html(str);
    }

    if (zuhe) {
        $("#spchoose").html("");
        var str = "<ul class='lottery-choose'>";
        str += "<li class='numbers'>";
        str += "<i class='pos'>和值</i>";
        str += "<div class='lottery-balls'>";
        for (var j = 1; j <= heNum; j++) {
            str += "<span class='ball' number='" + j + "'>" + j + "</span>";
        }
        str += "</div></li>";
        str += strwz;
        str += "</ul>";
        $("#spchoose").html(str);
    }

    $("#remark").html(PlayRemark);
    $("#example").html(PlayExample + '<br/>' + PlayHelp);

    var userPoint = eval($('#txtUserPoint').val()) * 0.1;
    PlayPosBonus = (eval(PlayMaxBonus) - eval(PlayMinBonus)) / 260;
    playPoints = 0;
    playBouns = (eval(PlayMinBonus) + eval(userPoint) * 20 * eval(PlayPosBonus)).toFixed(3);
    playBounsOne = playBouns * PriceModel;
    if (PlayCode == "R_3HX" || PlayCode == "R_3ZHE") {
        PlayPosBonus = 0.333346; //(eval(PlayMinBonus) - eval(PlayMinBonus2)) / 260;
        playBouns = (eval(PlayMinBonus) + eval(userPoint) * 20 * eval(PlayPosBonus)).toFixed(3);
        playBounsOne = (playBouns * 0.5).toFixed(2);
        $('#bonus').html(playBounsOne + "/" + (playBounsOne / 2).toFixed(3));
        $('#bonus2').html(playBounsOne + "/" + (playBounsOne / 2).toFixed(3));
        $('#lotBonus2').val("1");
        $('#bonusInfo').html(playPoints + "%");
    }
    else if (PlayCode == "P_LHH_WQ" || PlayCode == "P_LHH_WB" || PlayCode == "P_LHH_WS" || PlayCode == "P_LHH_WG" || PlayCode == "P_LHH_QB"
        || PlayCode == "P_LHH_QS" || PlayCode == "P_LHH_QG" || PlayCode == "P_LHH_BS" || PlayCode == "P_LHH_BG" || PlayCode == "P_LHH_SG") {
        var lhBonus = (playBounsOne / 4.5).toFixed(4);
        $('#bonus').html(lhBonus + "/" + playBounsOne);
        $('#bonus2').html(lhBonus + "/" + playBounsOne);
        $('#lotBonus2').val("2");
        $('#bonusInfo').html(playPoints + "%");
    }
    else {
        $('#bonus').html(playBounsOne);
        $('#bonus2').html(playBounsOne);
        $('#lotBonus2').val("0");
        $('#bonusInfo').html(playPoints + "%");
    }
    $('#lotBonus').val(playBouns);

    if (td11x5) {
        var $row1 = $('.lottery-balls:eq(0)');
        var $row2 = $('.lottery-balls:eq(1)');

        $row1.on('click', 'span', function () {
            var $this = $(this);
            var dm = $this.attr("number");

            $row1.find("span[number!='" + dm + "']").removeClass("selected");
            $this.toggleClass('selected');           
            $row2.find("span[number='" + dm + "']").removeClass("selected");

            AutoCalcBet();
        });

        $row2.on('click', 'span', function () {
            var $this = $(this);
            var dm = $row1.find("span.selected").attr("number");
            var tm = $this.attr("number");

            if (dm != tm) {
                $this.toggleClass('selected');
                AutoCalcBet();
            }
        });
    }
    else {
        $('.lottery-balls').on('click', 'span', function () {
            var $this = $(this);

            if (chooseAll) {
                $(".lottery-balls").find("span").toggleClass('selected');
            }
            else {
                $this.toggleClass('selected');
            }

            AutoCalcBet();
        });
    }

    //号码批量操作
    $(".oper").delegate('a', 'click', function (event) {
        $(this).parents(".numbers").find(".lottery-balls").find("span[number]").removeClass().addClass("ball");
        switch ($(this).text()) {
            case "全":
                if (td11x5) {
                    var dm = $('.lottery-balls:eq(0)').find("span.selected").attr("number");
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number!='" + dm + "']").addClass("selected");
                }
                else {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number]").addClass("selected");
                }

                AutoCalcBet();
                break;
            case "大":

                if (td11x5) {
                    var dm = $('.lottery-balls:eq(0)').find("span.selected").attr("number");
                    $(this).parents(".numbers").find(".lottery-balls").find("span:gt(4)[number!='" + dm + "']").addClass("selected");
                }
                else if (Nmbtype == 5) {
                    if (PlayCode == "K_3HZ") {
                        $(this).parents(".numbers").find(".lottery-balls").find("span:gt(7)").addClass("selected");
                    }
                    else {
                        $(this).parents(".numbers").find(".lottery-balls").find("span:gt(2)").addClass("selected");
                    }
                }
                else if (Nmbtype != 2 && Nmbtype != 4) {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=5],span[number=6],span[number=7],span[number=8],span[number=9]").addClass("selected");
                }
                else {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=06],span[number=07],span[number=08],span[number=09],span[number=10],span[number=11]").addClass("selected");
                }
                AutoCalcBet();
                break;
            case "小":
                if (td11x5) {
                    var dm = $('.lottery-balls:eq(0)').find("span.selected").attr("number");
                    $(this).parents(".numbers").find(".lottery-balls").find("span:lt(5)[number!='" + dm + "']").addClass("selected");
                }
                else if (Nmbtype == 5) {
                    if (PlayCode == "K_3HZ") {
                        $(this).parents(".numbers").find(".lottery-balls").find("span:lt(8)").addClass("selected");
                    }
                    else {
                        $(this).parents(".numbers").find(".lottery-balls").find("span:lt(3)").addClass("selected");
                    }
                }
                else if (Nmbtype != 2 && Nmbtype != 4) {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=0],span[number=1],span[number=2],span[number=3],span[number=4]").addClass("selected");
                }
                else {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=01],span[number=02],span[number=03],span[number=04],span[number=05]").addClass("selected");
                }
                AutoCalcBet();
                break;
            case "奇":
                if (td11x5) {
                    var dm = $('.lottery-balls:eq(0)').find("span.selected").attr("number");
                    $(this).parents(".numbers").find(".lottery-balls").find("span:even[number!='" + dm + "']").addClass("selected");
                }
                else if (Nmbtype == 5) {
                    $(this).parents(".numbers").find(".lottery-balls").find("span:even").addClass("selected");
                }
                else if (Nmbtype != 2 && Nmbtype != 4) {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=1],span[number=3],span[number=5],span[number=7],span[number=9]").addClass("selected");
                }
                else {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=01],span[number=03],span[number=05],span[number=07],span[number=09],span[number=11]").addClass("selected");
                }
                AutoCalcBet();
                break;
            case "偶":
                if (td11x5) {
                    var dm = $('.lottery-balls:eq(0)').find("span.selected").attr("number");
                    $(this).parents(".numbers").find(".lottery-balls").find("span:odd[number!='" + dm + "']").addClass("selected");
                }
                else if (Nmbtype == 5) {
                    $(this).parents(".numbers").find(".lottery-balls").find("span:odd").addClass("selected");
                }
                else if (Nmbtype != 2 && Nmbtype != 4) {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=0],span[number=2],span[number=4],span[number=6],span[number=8],span[number=10]").addClass("selected");
                }
                else {
                    $(this).parents(".numbers").find(".lottery-balls").find("span[number=02],span[number=04],span[number=06],span[number=08],span[number=10]").addClass("selected");
                }
                AutoCalcBet();
                break;
            case "清":
                $(this).parents(".numbers").find(".lottery-balls").find("span[number]").removeClass().addClass("ball");
                AutoCalcBet();
                break;
        }
    });

    //位置切换
    $(".lottery-position").delegate('input', 'click', function (event) {
        var temp = "";
        var obj = document.getElementsByName("wz");
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].checked)
                temp += obj[i].value + ',';
            else {
                temp += '0,';
            }
        }

        var n = (temp.split('1')).length - 1;
        if (n < PlayWzNum) {
            $(this).attr("checked", "true");
            emAlert('位置必须选择' + PlayWzNum + '个');
            AutoCalcBet();
            return;
        }
        else {
            PlayPos = temp.substring(0, temp.length - 1);
            var n = (PlayPos.split('1')).length - 1;
            $("#tishi").html('共有' + Combine(n, PlayWzNum) + '种方案');
            AutoCalcBet();
        }
    });
}
