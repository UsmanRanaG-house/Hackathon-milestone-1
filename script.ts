//List 
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();


    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;


    if (profilePictureInput){
    
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile):"";





    const resumeOutput = `
    <h2>Resume</h2>
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ""}`;
   

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } else{
        console.error('the resume output element are missing')
    }
    } else {
console.error('one or more output are missing')
    }
})