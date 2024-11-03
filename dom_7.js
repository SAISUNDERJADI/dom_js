console.log(document.body)
///----- bg color using the js styles-----------///
console.log(document.body.style.backgroundColor=" green")
console.log(document.body.style.paddingLeft="40%")
console.log(document.body.style.border="5px groove")
console.log(document.body.style.margin="0px 100px")

let h1=document.getElementById("h1")
// console.log(h1)
h1.style.color="white";
h1.style.justifyContent="center"
h1.style.marginRight="100px"

let skill=document.getElementsByTagName("h4")
// console.log(skill)
// console.log(skill[0].innerText)

// console.log(skill[0].innerHTML)
skill[0].innerHTML="<span>Technical Skills</span>"
// console.log(skill[0].innerHTML)


let ul=document.getElementsByClassName("ul1")
// console.log(ul[0])

let l1=document.getElementsByClassName("li1")
l1[0].innerHTML="PYTHON"
console.log(l1[1].innerHTML="HTML")

let hob=document.getElementById("hob")
console.log(hob.innerHTML="Wathing Movies")
// console.log(document.getElementById("hob").style.listStyleType="none")
let qry=document.querySelector("li.li1")
console.log(qry.innerHTML)

var query=document.querySelectorAll("ul.ul2")
// console.log(query[0].innerHTML)
// console.log(query[0].innerText)
var ul2=document.getElementsByClassName("ul2")
console.log(ul2)


let hobb=document.querySelector("ul.ul3")
// console.log(hobb.innerHTML)

let hobbies=document.querySelectorAll("ul.ul3")
console.log(hobbies)

console.log(hobbies[1].innerHTML)

// it is used to gives the all the elements in ul with loops
for(i=0;i<hobbies.length;i++){
    console.log(hobbies[i].innerHTML)
}

let form=document.getElementsByTagName("form")
console.log(form)

let frm=document.getElementById("frm")
console.log(frm.innerHTML)

console.log(frm.innerText)

frm[0].innerText="button"
console.log(frm[0].innerText)

let br=document.getElementsByTagName("br")
console.log(br)



//---------Style for tags using the js .style-----------------///////
let col=document.getElementById("but").style.color="white"
console.log(col)
console.log(document.getElementById("but").style.cursor="pointer")
console.log(document.getElementById("but").style.backgroundColor="blue")
console.log(document.getElementById("but").style.fontSize="20px")
console.log(document.getElementById("but").style.marginBottom="30px")