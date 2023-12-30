const copyText=((txt)=>{
    navigator.clipboard.writeText(txt);
    alert("Copied to clipboard ");
})

const maskPass=((pass)=>{
    let str="";
    for(let i=0;i<pass.length;i++){
        str+="*";
    }
    return str;
})

const deletePassword=((website)=>{
    let data=localStorage.getItem("passwords");
    let arr=JSON.parse(data);
    arrUppdt=arr.filter((e)=>{
        return e.website !=website;
    })
    localStorage.setItem("passwords",JSON.stringify(arrUppdt));
    alert(`Successfully deleted ${website}'s password`);
    showpassword();
})

const showpassword = ()=>{

let tb=document.querySelector("table");
let data=localStorage.getItem("passwords");
if(data==null || JSON.parse(data).length==0){
    tb.innerHTML=" No saved passwords";
}
else{
    tb.innerHTML=`<tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>`

    let arr=JSON.parse(data);
    let str="";
    for(let index=0;index<arr.length;index++){
        const element=arr[index];
 str+=` <tr>
<td>${element.website} <img src="./copy.svg" alt="copy Button " onclick="copyText('${element.website}')" width="20" height="20" </td>
<td>${element.username} <img src="copy.svg" alt="copy Button " onclick="copyText('${element.username}')" width="20" height="20" </td>
<td>${maskPass(element.password)} <img src="copy.svg" alt="copy Button " onclick="copyText('${element.password}')" width="20" height="20" </td>
<td><button class="btnsm"  onclick="deletePassword('${element.website}')">Delete</button></td>
</tr>`
}
tb.innerHTML=tb.innerHTML+str;
}
website.value="";
username.value="";
password.value="";
}


console.log("working");
showpassword();
document.querySelector(".btn").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked...");
    console.log(username.value,password.value);
let passwords=localStorage.getItem("passwords");
console.log(passwords);
if(passwords==null){
    let json=[];
    json.push({username:username.value ,password:password.value,website:website.value});
    alert("Password saved");
    localStorage.setItem("passwords",JSON.stringify(json));
}
else{
    let json=JSON.parse(localStorage.getItem("passwords"));
    json.push({username:username.value ,password:password.value,website:website.value});
    alert("Password saved");
    localStorage.setItem("passwords",JSON.stringify(json));
}
showpassword();
});