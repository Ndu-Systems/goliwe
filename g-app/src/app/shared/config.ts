export const   API_URL='http://localhost:8080/git.goliwe/api';
//export const   API_URL='https://www.funderslife.com/api1';
export const EMAIL= "http://ndu-systems.net/guliwe/api/email.php";


export function GetImagePath(imageUrl){
return `${API_URL}/Article/${imageUrl}`;
}
