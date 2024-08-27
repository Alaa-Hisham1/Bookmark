var siteNameInput=document.getElementById("siteName");
var siteUrlInput=document.getElementById("siteURL")
var checkName=false;
var checkUrl=false;
console.log(siteNameInput.value)
var siteCategory=[];
if (localStorage.getItem('sites')!==null){
    siteCategory=JSON.parse(localStorage.getItem('sites'));
    displaySites();
}
console.log(checkName,checkUrl)
function addSite(){
    var sites={
        siteName:siteNameInput.value,
        url:siteUrlInput.value
    }
    
    clearForm();
    
 
   console.log(checkName,checkUrl)
    
    if (checkName==true && checkUrl==true){
        document.getElementById("alert").classList.add('d-none');
        siteCategory.push(sites);
        displaySites();
    localStorage.setItem('sites',JSON.stringify( siteCategory));
        checkName=false;
        checkUrl=false;
    }
   
    else{
        document.getElementById("alert").classList.remove('d-none'); 
        checkName=false;
        checkUrl=false;
    }
    console.log(siteNameInput.value)

}
function clearForm(){
    siteNameInput.value=null;
    siteUrlInput.value=null;
}
function displaySites(){
    var cartona=``;
    for (var i=0 ; i<siteCategory.length ;i++){
        cartona+=`<div class="mark">
            <h5 class="w-25 ">${i+1}</h5>
            <h5 class="w-25">${siteCategory[i].siteName}</h5>
            <div class="w-25 my-btn2">
            <a href="${siteCategory[i].url}" target="_blank">
            <button class="btn btn-danger text-white  "> visit </button>
            </a>
        </div>
        <div class="w-25 my-btn2">
            <button class="btn btn-success text-white  w-25" onclick="deleteSite(${i})"> delete </button>
        </div> 
        </div>`;
    }
    document.getElementById('rowData').innerHTML=cartona;
}
function deleteSite(deletedIndex){
    siteCategory.splice(deletedIndex,1);
    localStorage.setItem('sites',JSON.stringify(siteCategory));
    displaySites();
}


function validationInputs(element){
    
    var regex={
        siteName:/^[a-zA-Z]{3,}$/,
        siteURL:/^https?:\/\/www\.\w+\.com$\/?/
    }

    if(regex[element.id].test(element.value)){
       element.classList.add('is-valid');
       element.classList.remove('is-invalid');
       if (element.id=='siteName'){
        checkName=true;
       }
       else if (element.id=='siteURL'){
        checkUrl=true;
       }
    }
    else{
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        if (element.id=='siteName'){
            checkName=false;
           }
           else if (element.id=='siteURL'){
            checkUrl=false;
           }
        
    }
   
}

function closeAlert(){
    document.getElementById("alert").classList.add('d-none'); 

}