// Show hide Function 

function hideShow() {
    // Show - hide function:    
    'use strict';
    
    var elem = document.getElementById('Grid');
        // elemBtn = document.getElementById('btn0');
                                            
    // alert("Welcome to {Show-Hide} Function... ");
                
    elem.classList.toggle("hidden");

    // if (elem.classList.contains('hidden')) {
    //     elemBtn.textContent = 'Show Paragraph';        
    // } else {        
    //     elemBtn.textContent = 'Hide Paragraph';
    // }                                                                                        
}
// ====================================================================================

function hideShowForm1() {
    // Show - hide function:    
    'use strict';
    
    // var elem = document.getElementById('orientationDatalist'),
    //     optValue = document.getElementById('orientationDatalist').attr('data-value');
       
    // if (optValue == '1') {
    //     var elem = document.getElementById('formStudyingLocally');
    //     elem.classList.toggle("hidden");
    // }

    var form = document.getElementById('form1'),
        // list = document.getElementById('mainList')[0].value;
        list = document.querySelector('[list="orientationList"]')[0].nodeValue;
        
    alert(list);

}                        
// ====================================================================================


function Nav1 () {
    document.getElementById('Content1').classList.toggle('show');
    
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav2 () {
    document.getElementById('Content2').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav3 () {
    document.getElementById('Content3').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav4 () {
    document.getElementById('Content4').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav5 () {
    document.getElementById('Content5').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav6 () {
    document.getElementById('Content6').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav7 () {
    document.getElementById('Content7').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav8 () {
    document.getElementById('Content8').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content9').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

function Nav9 () {
    document.getElementById('Content9').classList.toggle('show');
    
    document.getElementById('Content1').className = 'hide';
    document.getElementById('Content2').className = 'hide';
    document.getElementById('Content3').className = 'hide';
    document.getElementById('Content4').className = 'hide';
    document.getElementById('Content5').className = 'hide';
    document.getElementById('Content6').className = 'hide';
    document.getElementById('Content7').className = 'hide';
    document.getElementById('Content8').className = 'hide';
    // var x = 6; 
    // for (i=0; i<x; i++) {
    //     setAttribute('class', 'hide');        
    // }
}

// -------------------------------------------------------------
function Choice () {
    
    // always checking if the element is clicked, if so, do alert('hello')
    
    var Nav1 = document.getElementById('Nav1'),        
        Nav2 = document.getElementById('Nav2'),        
        Nav3 = document.getElementById('Nav3'),        
        Nav4 = document.getElementById('Nav4'),        
        Nav5 = document.getElementById('Nav5'),        
        Nav6 = document.getElementById('Nav6'),                     
        Cont1 = document.getElementById('Content1'),        
        Cont2 = document.getElementById('Content2'),        
        Cont3 = document.getElementById('Content3'),        
        Cont4 = document.getElementById('Content4'),        
        Cont5 = document.getElementById('Content5'),        
        Cont6 = document.getElementById('Content6');                      
    
    
    Nav1.addEventListener("click", () => {
        
        if (Nav1.classList.contains('hide')) {            
            alert('hello this is hidding');
            Cont1.className = 'show';
            
        } else if (Nav1.classList.contains('show')) {
            Cont1.className = 'hide';
            alert('hello this is Showing');
            // Cont1.classList.replace('hide', 'show');
        }
    });



        // list = document.querySelector('#mainList').value,
        // datalist = document.querySelector('#orientationList');
        // label = document.querySelector('#orientationTopic');
        

    // alert(list.nodeValue);
    // alert(label.text);
    // alert(list);

    // if (Nav1.clicked == true) {
        
    //     Cont1.classList.replace('hide', "show");
    //     alert('item1 clicked');                         

    //     // box.style.backgroundColor = "red";
        
    // } else if (Nav2.clicked == true) {
        
    //     Cont2.classList.replace('show', "hide");                                 
        
    // } else if (Nav3.clicked == true) {
        
    //     Cont3.classList.replace('show', "hide");                             

    // } else if (Nav4.clicked == true) {
        
    //     Cont4.classList.replace('show', "hide");                                 
        
    // } else if (Nav5.clicked == true) {
        
    //     Cont5.classList.replace('show', "hide");                                 
        
    // } else if (Nav6.clicked == true) {
        
    //     Cont6.classList.replace('show', "hide");                                 
            
    // }
    
        // var box = document.getElementById("box");
        // var yes = document.getElementById("yes");
        // var no = document.getElementById("no");

}
    

// ====================================================//

// if (Nav1.onclick) {
//     Nav1.classList.replace('show', "hide");                         
    
// } else {
    
//     if (list == datalist.children[0].value ) {
        
//         form1.classList.replace("hidden",'php-email-form');                
//             form2.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                
            
//         } else if (list == datalist.children[1].value) {                
            
//             form2.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                
            
            
//         } else if (list == datalist.children[2].value) {                
            
//             form3.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form2.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                
            
            
//         } else if (list == datalist.children[3].value) {                
            
//             form4.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form2.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                
            
            
//         } else if (list == datalist.children[4].value) {                
            
//             form5.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form2.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                
            
            
//         } else if (list == datalist.children[5].value) {                
            
//             form6.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form2.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                
            
//         } else if (list == datalist.children[6].value) {                
            
//             form7.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form2.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                            
            
            
//         } else if (list == datalist.children[7].value) {                                      
            
//             form8.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form2.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form9.classList.replace('php-email-form', "hidden");                
            
            
//         } else if (list == datalist.children[8].value) {                
            
//             form9.classList.replace("hidden",'php-email-form');                
//             form1.classList.replace('php-email-form', "hidden");                
//             form2.classList.replace('php-email-form', "hidden");                
//             form3.classList.replace('php-email-form', "hidden");                
//             form4.classList.replace('php-email-form', "hidden");                
//             form5.classList.replace('php-email-form', "hidden");                
//             form6.classList.replace('php-email-form', "hidden");                
//             form7.classList.replace('php-email-form', "hidden");                
//             form8.classList.replace('php-email-form', "hidden");                
            
//         }
        
// }
    
// ====================================================
    
    function getListValue() {             
        
        var listP = document.querySelector('#stateListId'),        
        listC = document.querySelector('#areaListId'),
        stateList = document.querySelector('#stateList'),
        stateListCount = document.querySelector('#stateList').options.length;
        
        
        
        if (listP.value == '') {
        
        listC.setAttribute('list', '');                    
        listC.value = '';                    
        
    } else {
        
        for (i=0; i<stateListCount; i++) {
            
            if (listP.value == stateList.children[i].value) {                
                
                listC.setAttribute('list', document.getElementById(stateList.children[i].value).id);                                                        
            }
        }
    }        
}
                
// =======================================================================================


function getListValueUni() {             
    
    var listP = document.querySelector('#UniMainSec'),        
        listC = document.querySelector('#UniInternalSec'),
        mainList = document.querySelector('#univList'),
        privateList = document.querySelector('#PrivateList');
        // stateListCount = document.querySelector('#stateList').options.length;
            
    if (listP.value == '') {
        
        listC.classList.replace('orientation', "hidden");                
        listC.setAttribute('list', '');                    
        listC.value = '';                    
    
    } else {
        
        if (listP.value == mainList.children[0].value) {                
            listC.classList.replace('hidden', "orientation");                
            listC.setAttribute('list', privateList.id);                                                        
        }
                            
    }        
}
// =-=-====================================================================================================

function getUniList(){
    var listP = document.querySelector('#UniMainSec'),        
        listC = document.querySelector('#UniInternalSec'),
        mainList = document.querySelector('#univList'),
        stateList = document.querySelector('#PrivateList');
    
    
    if (listP.value == '') {
        
        listC.classList.replace('orientation', "hidden");                
        listC.value = '';                    
        listC.setAttribute('list', '');         
        
        
    } else {
        
        if (listP.value == mainList.children[0].value) {                                                
            
            listC.classList.replace('hidden', "orientation");                
            listC.setAttribute('list', stateList.id);                                                                        
            
            // listC.setAttribute('list', 'PrivateList');                                                        
            // listC.setAttribute('list', document.getElementById(stateList.children[0].value).id);                                                        
        }                            
    }        
    
}

// =-=-====================================================================================================
  










    // alert(elem.tagName);

    // if (form.classList.contains('hidden')) {
    //     alert('Your list input is not Null!');
    //     form.classList.toggle("hidden");
    //     elem.classList.toggle("show");
    // }
    
    
    
    // elemBtn = document.getElementById('btn0');
    
    // alert("Welcome to {Show-Hide} Function... ");
    
    
    // if (elem.classList.contains('hidden')) {
        //     elemBtn.textContent = 'Show Paragraph';        
        // } else {        
            //     elemBtn.textContent = 'Hide Paragraph';
            // }                                                                                        
        
// ====================================================



// stateListCount = document.querySelector('#stateList').options.length;
    
    // for (i=0; i<stateListCount; i++) {
        // }
        // elem.classList.toggle("hidden");
        
        // alert(stateListCount);
        
        // listC = document.getElementById('areaListId'); 
        
        
    
    
    
    
    
    
    
    
    
    
    
    // alert(stateListCount);
    
    // listC = document.getElementById('areaListId'); 
    // var stateList = document.querySelector('#stateListId').getAttribute('list');
    // var stateList = document.querySelector('#stateListId');
    
    // alert(stateList.getAttribute('list').nodeValue);
    
    
    
    // var carioList = document.getElementById('carioList'),        
    //     form2 = document.getElementById('form2'),        
    //     form3 = document.getElementById('form3'),        
    //     form4 = document.getElementById('form4'),        
    //     form5 = document.getElementById('form5'),        
    //     form6 = document.getElementById('form6'),        
    //     form7 = document.getElementById('form7'),        
    //     list = document.querySelector('#stateListId').value,
    // label = document.querySelector('#orientationTopic');
    
    
    // alert(list.nodeValue);
    // alert(label.tex  t);
    // alert(list);
    
    // document.querySelector('#stateListId').getAttribute('list').att;
    // listC = document.querySelector('#areaListId').getAttribute('list');
    
    // document.getElementById('areaListId').setAttribute('list', document.getElementById('carioList').id);
    
    // ===============================================================================================
    
    //     // Alex:
    //     if (listP.value == stateList.children[0].value) {                
                    
    //         listC.setAttribute('list', document.getElementById('Alexandria').id);                                                        
        
    //     // Cairo:    
    //     } else if (listP.value == stateList.children[1].value ) {        
                         
    //         listC.setAttribute('list', document.getElementById('Cairo').id);                    
    //         // listC.setAttribute('list', document.getElementById('alexList').id);                                            
        
    //     // } else if (listP == listP.children[0].value) {                
        
    // //     // Giza
    // //     } else if (listP == listP.children[2].value) {                
        
    // //         listC.setAttribute('list', document.getElementById('gizaList').id);                                                                            
        
    // //     //  
    // //     } else if (list == datalist.children[3].value) {                
        
    // //         list.setAttribute('list', document.getElementById('assuitList').id);                                                                            
        
    // //     } else if (list == datalist.children[4].value) {                
      
                    
    //     }           
    // ==============================================================================================================
    
    
    // if (list == )){
        //     alert('input field has a valid value');
        // }
                
                


        // alert(list.tagName);
        // alert(list.nodeName);
        // alert(list.firstChild.value);
        
        // datalist = document.querySelector('#orientationList').find("option").length;
        // inputs = document.getElementsByTagName('input');
    
        // alert(datalist.textcontent);

    // alert(list.nodeValue);





    // alert(datalist.innerHTML);
    // alert(datalist.children[0].value);
    // alert(datalist.children.length);




    // for (i=0; i<datalist.children.length; i++) {


    //     console.log(datalist.children[i].value);
    //     console.log('='.repeat(20));
    // }



    // for (index = 0; index < list.length; ++index) {
        
    //     if (list[index].nodeValue == 'Studying Locally') {        
    //         alert(list[index].nodeValue);
    //         form.classList.toggle('hidden');
        
    //     } else {
    //         alert('Input list value is null!');
    //     }
        
    // }
    
    // deal with inputs[index] element.


