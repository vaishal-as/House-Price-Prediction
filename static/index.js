function valid(){
    const inputField1 = document.getElementById("inputField1");
    const inputField2 = document.getElementById("inputField2");
    const inputField3 = document.getElementById("inputField3");
    const inputField4 = document.getElementById("inputField4");
    const inputField5 = document.getElementById("inputField5");
    const inputField6 = document.getElementById("inputField6");
    const inputField7 = document.getElementById("inputField7");
    const inputField8 = document.getElementById("inputField8");
    const inputField9 = document.getElementById("inputField9");
    const inputField10 = document.getElementById("inputField10");
    const inputField11 = document.getElementById("inputField11");
    const inputField12 = document.getElementById("inputField12");
    const inputField13 = document.getElementById("inputField13");
    const messageSpan1 = document.getElementById("message1");
    const messageSpan2 = document.getElementById("message2");
    const messageSpan3 = document.getElementById("message3");
    const messageSpan4 = document.getElementById("message4");
    const messageSpan5 = document.getElementById("message5");
    const messageSpan6 = document.getElementById("message6");
    const messageSpan7 = document.getElementById("message7");
    const messageSpan8 = document.getElementById("message8");
    const messageSpan9 = document.getElementById("message9");
    const messageSpan10 = document.getElementById("message10");
    const messageSpan11 = document.getElementById("message11");
    const messageSpan12 = document.getElementById("message12");
    const messageSpan13 = document.getElementById("message13");
    inputField1.addEventListener("input", function valid1() {
        if (inputField1.value !== "") {
          messageSpan1.style.display = "none";
        } else {
          messageSpan1.style.display = "inline";
        }
      });
      inputField2.addEventListener("input", function valid2() {
        if (inputField2.value !== "") {
          messageSpan2.style.display = "none";
        } else {
          messageSpan2.style.display = "inline";
        }
      });
      inputField3.addEventListener("input", function valid3() {
        if (inputField3.value !== "") {
          messageSpan3.style.display = "none";
        } else {
          messageSpan3.style.display = "inline";
        }
      });
      inputField4.addEventListener("input", function valid4() {
        if (inputField4.value !== "") {
          messageSpan4.style.display = "none";
        } else {
          messageSpan4.style.display = "inline";
        }
      });
      inputField5.addEventListener("input", function valid5() {
        if (inputField5.value !== "") {
          messageSpan5.style.display = "none";
        } else {
          messageSpan5.style.display = "inline";
        }
      });
      inputField6.addEventListener("input", function valid6() {
        if (inputField6.value !== "") {
          messageSpan6.style.display = "none";
        } else {
          messageSpan6.style.display = "inline";
        }
      });
      inputField7.addEventListener("input", function valid7() {
        if (inputField7.value !== "") {
          messageSpan7.style.display = "none";
        } else {
          messageSpan7.style.display = "inline";
        }
      });
      inputField8.addEventListener("input", function valid8() {
        if (inputField8.value !== "") {
          messageSpan8.style.display = "none";
        } else {
          messageSpan8.style.display = "inline";
        }
      });
      inputField9.addEventListener("input", function valid9() {
        if (inputField9.value !== "") {
          messageSpan9.style.display = "none";
        } else {
          messageSpan9.style.display = "inline";
        }
      });
      inputField10.addEventListener("input", function valid10() {
        if (inputField10.value !== "") {
          messageSpan10.style.display = "none";
        } else {
          messageSpan10.style.display = "inline";
        }
      });
      inputField11.addEventListener("input", function valid11() {
        if (inputField11.value !== "") {
          messageSpan11.style.display = "none";
        } else {
          messageSpan11.style.display = "inline";
        }
      });
      inputField12.addEventListener("input", function valid12() {
        if (inputField12.value !== "") {
          messageSpan12.style.display = "none";
        } else {
          messageSpan12.style.display = "inline";
        }
      });
      inputField13.addEventListener("input", function valid13() {
        if (inputField13.value !== "") {
          messageSpan13.style.display = "none";
        } else {
          messageSpan13.style.display = "inline";
        }
      });
    }
    
window.onload = function() {
    
    inputField1.value='';
    inputField2.value='';
    inputField3.value='';
    inputField4.value='';
    inputField5.value='';
    inputField6.value='';
    inputField7.value='';
    inputField8.value='';
    inputField9.value='';
    inputField10.value='';
    inputField11.value='';
    
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }